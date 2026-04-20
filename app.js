'use strict';

// ===== Constants =====
const DELOAD_WEEKS = [6, 12];
const DAY_ABBRS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const BLOCK_COLORS = {
  'STRENGTH (HEAVY)': '#FF6B35',
  'STRENGTH (LIGHT)': '#FF9A6C',
  'STRENGTH (SHOULDER)': '#FF6B35',
  'STRENGTH (IWT)': '#FF9A6C',
  'SUPERSET A': '#4ECDC4',
  'SUPERSET B': '#45B7AA',
  'ACCESSORY': '#888',
  'FINISHER': '#F7B731',
};

function blockColor(blockName) {
  const upper = blockName.toUpperCase();
  for (const [key, color] of Object.entries(BLOCK_COLORS)) {
    if (upper.includes(key)) return color;
  }
  if (upper.includes('BONUS')) return '#F7B731';
  return '#555';
}

// ===== Storage =====
function loadState() {
  try {
    return JSON.parse(localStorage.getItem('wk_state') || '{}');
  } catch { return {}; }
}

function saveState(state) {
  localStorage.setItem('wk_state', JSON.stringify(state));
}

function loadLogs() {
  try {
    return JSON.parse(localStorage.getItem('wk_logs') || '{}');
  } catch { return {}; }
}

function saveLogs(logs) {
  localStorage.setItem('wk_logs', JSON.stringify(logs));
}

function loadTracker() {
  try {
    return JSON.parse(localStorage.getItem('wk_tracker') || '{}');
  } catch { return {}; }
}

function saveTracker(t) {
  localStorage.setItem('wk_tracker', JSON.stringify(t));
}

function loadSubs() {
  try { return JSON.parse(localStorage.getItem('wk_subs') || '{}'); }
  catch { return {}; }
}

function saveSubs(s) {
  localStorage.setItem('wk_subs', JSON.stringify(s));
}

// ===== App State =====
let state = loadState();
let logs = loadLogs();
let tracker = loadTracker();
let subs = loadSubs();

// Defaults
if (!state.restDuration) state.restDuration = 90;
if (!state.barWeight) state.barWeight = 45;
if (!state.accent) state.accent = '#FF6B35';

// Plates available per side (in lbs, descending)
const PLATE_INVENTORY = [45, 35, 25, 10, 5, 2.5];

function calcPlates(totalWeight) {
  const bar = state.barWeight || 45;
  const perSide = (totalWeight - bar) / 2;
  if (perSide <= 0) return null;
  let remaining = perSide;
  const plates = [];
  for (const p of PLATE_INVENTORY) {
    while (remaining + 0.001 >= p) {
      plates.push(p);
      remaining -= p;
    }
  }
  return { plates, perSide, remaining };
}

// Active context for log modal
let logContext = null;
let restTimer = { interval: null, remaining: 0, total: 0 };
// When browsing a specific workout from schedule, store it here
let pinnedWorkout = null; // { weekNum, dayIdx }

// ===== Inline SVG icons =====
const ICONS = {
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  rest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/><path d="M3 18h18"/></svg>',
  bicep: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 20a3.5 3.5 0 1 0 0-7H14a4 4 0 0 1-4-4V6a3 3 0 0 0-3-3H4"/><path d="M14 14a3 3 0 1 0-6 0v6"/></svg>',
};

// ===== Helpers =====
function parseRestToSeconds(restStr) {
  if (!restStr) return null;
  const s = String(restStr).toLowerCase().trim();
  const minMatch = s.match(/(\d+(?:\.\d+)?)\s*min/);
  if (minMatch) return Math.round(parseFloat(minMatch[1]) * 60);
  const secMatch = s.match(/(\d+)\s*s/);
  if (secMatch) return parseInt(secMatch[1], 10);
  const bareNum = s.match(/^(\d+)$/);
  if (bareNum) return parseInt(bareNum[1], 10);
  return null;
}

function logKey(weekNum, dayIdx) {
  return `W${weekNum}-${DAY_ABBRS[dayIdx]}`;
}

function getLog(weekNum, dayIdx) {
  return logs[logKey(weekNum, dayIdx)] || {};
}

function setLog(weekNum, dayIdx, setKey, weight, reps) {
  const k = logKey(weekNum, dayIdx);
  if (!logs[k]) logs[k] = {};
  logs[k][setKey] = { w: weight, r: reps };
  saveLogs(logs);
  invalidatePRCache();
}

function clearLog(weekNum, dayIdx, setKey) {
  const k = logKey(weekNum, dayIdx);
  if (logs[k]) delete logs[k][setKey];
  saveLogs(logs);
  invalidatePRCache();
}

function countSets(day) {
  return day.exercises.filter(e => !e.isFinisher).reduce((acc, e) => {
    const n = parseInt(e.sets) || 0;
    return acc + n;
  }, 0);
}

function countLoggedSets(weekNum, dayIdx, day) {
  const dayLog = getLog(weekNum, dayIdx);
  let count = 0;
  day.exercises.forEach((ex, exIdx) => {
    if (ex.isFinisher) return;
    const n = parseInt(ex.sets) || 0;
    for (let s = 0; s < n; s++) {
      if (dayLog[`${exIdx}-${s}`]) count++;
    }
  });
  return count;
}

function isDayComplete(weekNum, dayIdx, day) {
  return countLoggedSets(weekNum, dayIdx, day) >= countSets(day);
}

// Find most recent logged set for a given exercise name, before the given (week,day,exIdx,setIdx) cursor.
// Used to pre-fill the log modal with last-session numbers.
function findLastLog(exName, curWeek, curDay, curExIdx, curSetIdx) {
  if (!exName) return null;

  // 1) Earlier set of the same exercise slot in the current session
  const curLog = getLog(curWeek, curDay);
  for (let s = curSetIdx - 1; s >= 0; s--) {
    const hit = curLog[`${curExIdx}-${s}`];
    if (hit && hit.r) return { w: hit.w, r: hit.r, ctx: `Set ${s + 1} this session` };
  }

  // 2) Walk backwards through prior sessions (this week earlier days, then prior weeks)
  for (let wk = curWeek; wk >= 1; wk--) {
    const week = PROGRAM.weeks.find(w => w.week === wk);
    if (!week) continue;
    const startDay = wk === curWeek ? curDay - 1 : 4;
    for (let d = startDay; d >= 0; d--) {
      const day = week.days[d];
      if (!day) continue;
      const dayLog = getLog(wk, d);
      for (let exIdx = 0; exIdx < day.exercises.length; exIdx++) {
        const ex = day.exercises[exIdx];
        const effectiveName = getSubName(wk, d, exIdx, ex.exercise);
        if (effectiveName !== exName) continue;
        const n = parseInt(ex.sets) || 0;
        // Use the heaviest logged set of this exercise from that session
        let best = null;
        for (let s = 0; s < n; s++) {
          const hit = dayLog[`${exIdx}-${s}`];
          if (!hit || !hit.r) continue;
          const w = parseFloat(hit.w) || 0;
          if (!best || w > parseFloat(best.w || 0)) best = hit;
        }
        if (best) return { w: best.w, r: best.r, ctx: `W${wk} ${DAY_ABBRS[d]}` };
      }
    }
  }
  return null;
}

// Haptic feedback wrapper - silent fallback if unsupported
function vibrate(pattern) {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch (e) {}
}

// ===== PR Detection =====
// e1RM via Brzycki, capped at r=36
function epley1RM(w, r) {
  if (!w || !r) return 0;
  const reps = Math.min(parseInt(r), 36);
  return parseFloat(w) * (36 / (37 - reps));
}

// Cache of exercise-name → ordered set list with PR flags
let prCache = {};
function getExercisePRs(exName) {
  if (prCache[exName]) return prCache[exName];
  const sets = [];
  PROGRAM.weeks.forEach(week => {
    week.days.forEach((day, d) => {
      if (!day) return;
      const dayLog = getLog(week.week, d);
      day.exercises.forEach((ex, exIdx) => {
        const effectiveName = getSubName(week.week, d, exIdx, ex.exercise);
        if (effectiveName !== exName) return;
        const n = parseInt(ex.sets) || 0;
        for (let s = 0; s < n; s++) {
          const hit = dayLog[`${exIdx}-${s}`];
          if (!hit || !hit.r) continue;
          const w = parseFloat(hit.w) || 0;
          const r = parseInt(hit.r) || 0;
          if (!r) continue;
          sets.push({ wk: week.week, d, exIdx, setIdx: s, w, r, e1rm: epley1RM(w, r) });
        }
      });
    });
  });
  // Walk chronologically (already in order: weeks 1..12, days 0..4, sets 0..n)
  let bestE1RM = 0, bestWeight = 0;
  const repsAtWeight = {};
  sets.forEach(set => {
    if (set.e1rm > bestE1RM + 0.01) { set.prE1RM = true; bestE1RM = set.e1rm; }
    if (set.w > bestWeight + 0.01) { set.prWeight = true; bestWeight = set.w; }
    if (set.w > 0) {
      const key = String(set.w);
      if (!repsAtWeight[key] || set.r > repsAtWeight[key]) {
        if (repsAtWeight[key] !== undefined) set.prReps = true;
        repsAtWeight[key] = set.r;
      }
    }
  });
  prCache[exName] = sets;
  return sets;
}

function getSetPRLabel(exName, wk, d, exIdx, setIdx) {
  const sets = getExercisePRs(exName);
  const hit = sets.find(s => s.wk === wk && s.d === d && s.exIdx === exIdx && s.setIdx === setIdx);
  if (!hit) return null;
  if (hit.prE1RM) return 'PR';
  if (hit.prWeight) return 'Heavy PR';
  if (hit.prReps) return 'Rep PR';
  return null;
}

function invalidatePRCache() { prCache = {}; }

// ===== Exercise substitution =====
function subKey(weekNum, dayIdx, exIdx) { return `${weekNum}-${dayIdx}-${exIdx}`; }

function getSubName(weekNum, dayIdx, exIdx, originalName) {
  const k = subKey(weekNum, dayIdx, exIdx);
  return subs[k] || originalName;
}

function setSubName(weekNum, dayIdx, exIdx, newName, originalName) {
  const k = subKey(weekNum, dayIdx, exIdx);
  if (!newName || newName === originalName) {
    delete subs[k];
  } else {
    subs[k] = newName;
  }
  saveSubs(subs);
  invalidatePRCache();
}

window.promptSubstitute = function(weekNum, dayIdx, exIdx, originalName) {
  const cur = getSubName(weekNum, dayIdx, exIdx, originalName);
  const next = prompt(`Substitute exercise (leave empty to reset):\n\nOriginal: ${originalName}`, cur === originalName ? '' : cur);
  if (next === null) return;
  setSubName(weekNum, dayIdx, exIdx, next.trim(), originalName);
  openScheduleDay(weekNum, dayIdx);
};

// Calculate current week/day from start date
function getCurrentWeekDay() {
  if (!state.startDate) return null;
  const start = new Date(state.startDate);
  start.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today - start) / 86400000);
  if (diffDays < 0) return null;
  const weekIdx = Math.floor(diffDays / 7);
  const dayOfWeek = today.getDay(); // 0=Sun,1=Mon...5=Fri,6=Sat
  if (weekIdx >= 12) return { week: 12, dayIdx: 4 }; // program finished
  // Map dayOfWeek to program day index (Mon=0,...Fri=4)
  const dayIdx = dayOfWeek >= 1 && dayOfWeek <= 5 ? dayOfWeek - 1 : null;
  return { week: weekIdx + 1, dayIdx };
}

// ===== Navigation =====
let activeView = 'today';

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    navigateTo(view);
  });
});

function navigateTo(viewName) {
  activeView = viewName;
  document.body.classList.remove('chrome-hidden');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewName);
  });
  document.querySelectorAll('.view').forEach(v => {
    v.classList.toggle('active', v.id === `view-${viewName}`);
    if (v.id === `view-${viewName}`) v.scrollTop = 0;
  });
  renderView(viewName);
}

function renderView(name) {
  if (name === 'today') renderToday();
  else if (name === 'schedule') renderSchedule();
  else if (name === 'progress') renderProgress();
  else if (name === 'settings') renderSettings();
  updateStreakDisplay();
}

// ===== Streak =====
// Count consecutive workout-days (Mon-Fri only) with logged sets, walking back from current/most recent program day
function computeStreak() {
  const cur = getCurrentWeekDay();
  if (!cur) return 0;

  // Build a flat sequence of all program days (week*5 + dayIdx)
  let pointer;
  if (cur.dayIdx === null) {
    // Today is a weekend - start from Friday of current week
    pointer = (cur.week - 1) * 5 + 4;
  } else {
    pointer = (cur.week - 1) * 5 + cur.dayIdx;
    // If today's not started yet (no sets logged), start counting from yesterday
    const todayWeek = Math.floor(pointer / 5) + 1;
    const todayDay = pointer % 5;
    const todayDayObj = PROGRAM.weeks.find(w => w.week === todayWeek)?.days[todayDay];
    if (todayDayObj && countLoggedSets(todayWeek, todayDay, todayDayObj) === 0) pointer--;
  }

  let streak = 0;
  while (pointer >= 0) {
    const wk = Math.floor(pointer / 5) + 1;
    const d = pointer % 5;
    const dayObj = PROGRAM.weeks.find(w => w.week === wk)?.days[d];
    if (!dayObj) break;
    if (countLoggedSets(wk, d, dayObj) > 0) {
      streak++;
      pointer--;
    } else {
      break;
    }
  }
  return streak;
}

function updateStreakDisplay() {
  const el = document.getElementById('header-streak');
  if (!el) return;
  const s = computeStreak();
  if (s > 0) {
    el.innerHTML = `${ICONS.flame}<span>${s}</span>`;
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

// ===== Today View =====
function renderToday() {
  const cur = pinnedWorkout || getCurrentWeekDay();
  const container = document.getElementById('today-workout');
  const noWorkout = document.getElementById('today-no-workout');

  if (!state.startDate) {
    noWorkout.classList.remove('hidden');
    noWorkout.innerHTML = `
      <div class="empty-icon">${ICONS.bicep}</div>
      <div class="empty-title">Set Your Start Date</div>
      <div class="empty-sub">Tell us when you started Week 1 to see today's workout.</div>
      <button class="setup-cta" onclick="navigateTo('settings')">Go to Settings</button>
    `;
    container.innerHTML = '';
    document.getElementById('header-sub').textContent = '';
    return;
  }

  if (!cur || cur.dayIdx === null) {
    noWorkout.classList.remove('hidden');
    noWorkout.innerHTML = `
      <div class="empty-icon">${ICONS.rest}</div>
      <div class="empty-title">Rest Day</div>
      <div class="empty-sub">No workout scheduled today. Try mobility, a walk, or a light cardio session.</div>
    `;
    container.innerHTML = '';
    document.getElementById('header-sub').textContent = `Week ${cur ? cur.week : '—'} · Rest`;
    return;
  }

  noWorkout.classList.add('hidden');

  const week = PROGRAM.weeks.find(w => w.week === cur.week);
  if (!week) { container.innerHTML = '<p style="color:var(--text-secondary);padding:20px">No data for this week.</p>'; return; }

  const day = week.days[cur.dayIdx];
  if (!day) { container.innerHTML = '<p style="color:var(--text-secondary);padding:20px">No workout today.</p>'; return; }

  document.getElementById('header-sub').textContent = `Week ${cur.week} · ${day.day}`;

  renderWorkoutDay(container, cur.week, cur.dayIdx, day);
}

function computeWorkoutStats(weekNum, dayIdx, day) {
  const dayLog = getLog(weekNum, dayIdx);
  let sets = 0, reps = 0, tonnage = 0, prs = 0;
  day.exercises.forEach((ex, exIdx) => {
    if (ex.isFinisher) return;
    const n = parseInt(ex.sets) || 0;
    for (let s = 0; s < n; s++) {
      const hit = dayLog[`${exIdx}-${s}`];
      if (!hit || !hit.r) continue;
      const w = parseFloat(hit.w) || 0;
      const r = parseInt(hit.r) || 0;
      sets++;
      reps += r;
      tonnage += w * r;
      const label = getSetPRLabel(ex.exercise, weekNum, dayIdx, exIdx, s);
      if (label === 'PR') prs++;
    }
  });
  return { sets, reps, tonnage, prs };
}

function renderWorkoutDay(container, weekNum, dayIdx, day) {
  const isDeload = DELOAD_WEEKS.includes(weekNum);
  const total = countSets(day);
  const done = countLoggedSets(weekNum, dayIdx, day);
  const complete = done >= total && total > 0;

  let html = `
    <div class="workout-header">
      <div class="workout-header-week">WEEK ${weekNum}${isDeload ? ' · DELOAD' : ''}</div>
      <div class="workout-header-title">${day.label}</div>
      <div class="workout-header-meta">
        <span class="workout-header-day">${day.day}</span>
        <span class="workout-progress-pill">${done}/${total} sets</span>
        ${isDeload ? '<span class="deload-badge">Deload</span>' : ''}
      </div>
    </div>
  `;

  // Group exercises by block
  const blocks = [];
  let curBlock = null;
  day.exercises.forEach((ex, exIdx) => {
    if (ex.isFinisher) {
      blocks.push({ type: 'finisher', ex, exIdx });
      return;
    }
    const blockKey = ex.block.toUpperCase();
    if (!curBlock || curBlock.key !== blockKey) {
      curBlock = { key: blockKey, name: ex.block, exercises: [], isBonus: ex.isBonus };
      blocks.push({ type: 'block', block: curBlock });
    }
    curBlock.exercises.push({ ex, exIdx });
  });

  blocks.forEach(item => {
    if (item.type === 'finisher') {
      html += renderFinisher(item.ex);
    } else {
      html += renderBlock(weekNum, dayIdx, item.block, day);
    }
  });

  // Workout summary - only when at least 1 set is logged
  if (done > 0) {
    const stats = computeWorkoutStats(weekNum, dayIdx, day);
    const tonnageDisplay = stats.tonnage >= 1000
      ? (stats.tonnage / 1000).toFixed(1) + 'k'
      : Math.round(stats.tonnage);
    html += `
      <div class="workout-summary">
        <div class="workout-summary-title">${complete ? 'Session Complete' : 'Session Progress'}</div>
        <div class="summary-grid">
          <div class="summary-stat">
            <div class="summary-stat-value">${stats.sets}</div>
            <div class="summary-stat-label">Sets</div>
          </div>
          <div class="summary-stat">
            <div class="summary-stat-value">${stats.reps}</div>
            <div class="summary-stat-label">Reps</div>
          </div>
          <div class="summary-stat">
            <div class="summary-stat-value">${tonnageDisplay}</div>
            <div class="summary-stat-label">Lbs Lifted</div>
          </div>
          <div class="summary-stat">
            <div class="summary-stat-value" style="color:${stats.prs > 0 ? 'var(--deload)' : 'var(--text)'}">${stats.prs}</div>
            <div class="summary-stat-label">PRs</div>
          </div>
        </div>
      </div>
    `;
  }

  html += `
    <button class="complete-workout-btn ${complete ? 'done' : ''}" onclick="markWorkoutDone(${weekNum}, ${dayIdx})">
      ${complete ? '✓ Workout Complete' : 'Mark Workout Complete'}
    </button>
  `;

  container.innerHTML = html;
  attachSetListeners(container, weekNum, dayIdx, day);
}

function renderBlock(weekNum, dayIdx, block, day) {
  const dayLog = getLog(weekNum, dayIdx);
  const color = blockColor(block.name);

  // Count logged sets for this block
  let blockDone = 0, blockTotal = 0;
  block.exercises.forEach(({ ex, exIdx }) => {
    const n = parseInt(ex.sets) || 0;
    blockTotal += n;
    for (let s = 0; s < n; s++) {
      if (dayLog[`${exIdx}-${s}`]) blockDone++;
    }
  });

  const isSupersetBlock = block.key.includes('SUPERSET');
  const blockComplete = blockTotal > 0 && blockDone >= blockTotal;
  const collapsed = (block.isBonus || blockComplete) ? 'collapsed' : '';

  let html = `
    <div class="block-card ${collapsed}" data-block="${block.key}">
      <div class="block-header" onclick="toggleBlock(this)">
        <div class="block-header-left">
          <div class="block-dot" style="background:${color}"></div>
          <span class="block-name">${block.name}</span>
          ${blockDone > 0 ? `<span class="block-done-count">${blockDone}/${blockTotal}</span>` : ''}
        </div>
        <span class="block-chevron">›</span>
      </div>
      <div class="block-body">
  `;

  if (isSupersetBlock) {
    // Group pairs by superset letter
    const pairs = {};
    block.exercises.forEach(({ ex, exIdx }) => {
      const letter = block.key.slice(-1);
      if (!pairs[letter]) pairs[letter] = [];
      pairs[letter][exIdx] = { ex, exIdx };
    });
  }

  block.exercises.forEach(({ ex, exIdx }) => {
    html += renderExercise(weekNum, dayIdx, ex, exIdx, dayLog);
  });

  html += `</div></div>`;
  return html;
}

function renderExercise(weekNum, dayIdx, ex, exIdx, dayLog) {
  const n = parseInt(ex.sets) || 0;
  const notesHtml = ex.notes ? `<div class="exercise-notes">${escHtml(ex.notes)}</div>` : '';
  const bonusBadge = ex.isBonus ? '<span class="bonus-badge">Optional Bonus</span>' : '';

  const displayName = getSubName(weekNum, dayIdx, exIdx, ex.exercise);
  const isSubbed = displayName !== ex.exercise;

  let metaHtml = '';
  if (ex.reps) metaHtml += `<span class="meta-chip accent">${escHtml(ex.reps)} reps</span>`;
  if (ex.tempo) metaHtml += `<span class="meta-chip">${escHtml(ex.tempo)}</span>`;
  if (ex.rest) metaHtml += `<span class="meta-chip">Rest: ${escHtml(ex.rest)}</span>`;

  let setsHtml = '';
  for (let s = 0; s < n; s++) {
    const key = `${exIdx}-${s}`;
    const logged = dayLog[key];
    const isLogged = !!logged;
    const prLabel = isLogged ? getSetPRLabel(displayName, weekNum, dayIdx, exIdx, s) : null;
    setsHtml += `
      <div class="set-row ${isLogged ? 'logged' : ''}"
           data-ex="${exIdx}" data-set="${s}"
           data-ex-name="${escAttr(displayName)}"
           data-target-reps="${escAttr(ex.reps || '')}"
           data-rest="${escAttr(ex.rest || '')}"
           data-week="${weekNum}" data-day="${dayIdx}">
        <div class="set-circle">${isLogged ? '✓' : s + 1}</div>
        <div class="set-info">
          <div class="set-label">Set ${s + 1}</div>
          ${isLogged
            ? `<div class="set-logged-value">${logged.w ? logged.w + ' lbs' : 'BW'} × ${logged.r} reps</div>`
            : `<div class="set-target">${escHtml(ex.reps || '—')} reps${ex.tempo ? ' · ' + escHtml(ex.tempo) : ''}</div>`
          }
        </div>
        ${prLabel ? `<span class="set-pr-badge">${prLabel}</span>` : (isLogged ? `<span class="set-edit-btn">Edit</span>` : '')}
      </div>
    `;
  }

  const subBadge = isSubbed
    ? `<span class="sub-badge" title="Original: ${escAttr(ex.exercise)}">SUB</span>`
    : '';
  const subBtn = `<button class="sub-btn" onclick="promptSubstitute(${weekNum}, ${dayIdx}, ${exIdx}, ${JSON.stringify(ex.exercise).replace(/"/g, '&quot;')})" title="Substitute exercise" aria-label="Substitute">⇄</button>`;

  return `
    <div class="exercise-item">
      ${bonusBadge}
      <div class="exercise-name-row">
        <div class="exercise-name" data-ex-name="${escAttr(displayName)}">${escHtml(displayName)} ${subBadge}</div>
        ${subBtn}
      </div>
      ${isSubbed ? `<div class="sub-original">was: ${escHtml(ex.exercise)}</div>` : ''}
      ${metaHtml ? `<div class="exercise-meta">${metaHtml}</div>` : ''}
      ${notesHtml}
      ${n > 0 ? `<div class="set-rows">${setsHtml}</div>` : ''}
    </div>
  `;
}

function renderFinisher(ex) {
  return `
    <div class="finisher-card">
      <div class="finisher-header">
        <span class="finisher-icon">${ICONS.flame}</span>
        <span class="finisher-title">Finisher</span>
      </div>
      <div class="finisher-body">${escHtml(ex.exercise)}</div>
    </div>
  `;
}

function attachSetListeners(container, weekNum, dayIdx, day) {
  container.querySelectorAll('.set-row').forEach(row => {
    row.addEventListener('click', () => {
      const exIdx = parseInt(row.dataset.ex);
      const setIdx = parseInt(row.dataset.set);
      const exName = row.dataset.exName;
      const targetReps = row.dataset.targetReps;
      const restStr = row.dataset.rest || '';
      const existing = getLog(weekNum, dayIdx)[`${exIdx}-${setIdx}`];
      openLogModal(weekNum, dayIdx, exIdx, setIdx, exName, targetReps, existing, restStr);
    });
  });
  container.querySelectorAll('.exercise-name[data-ex-name]').forEach(el => {
    el.addEventListener('click', () => openExerciseHistory(el.dataset.exName));
  });
}

function toggleBlock(headerEl) {
  headerEl.closest('.block-card').classList.toggle('collapsed');
}
window.toggleBlock = toggleBlock;

// ===== Exercise History Modal =====
function openExerciseHistory(exName) {
  if (!exName) return;
  const modal = document.getElementById('hist-modal');
  document.getElementById('hist-modal-title').textContent = exName;

  const sets = getExercisePRs(exName);

  // Stats
  let bestE1RM = 0, bestWeight = 0, totalSets = sets.length;
  sets.forEach(s => {
    if (s.e1rm > bestE1RM) bestE1RM = s.e1rm;
    if (s.w > bestWeight) bestWeight = s.w;
  });
  document.getElementById('hist-modal-stats').innerHTML = `
    <div class="hist-stat">
      <div class="hist-stat-value">${bestE1RM ? Math.round(bestE1RM) : '—'}</div>
      <div class="hist-stat-label">Est 1RM</div>
    </div>
    <div class="hist-stat">
      <div class="hist-stat-value">${bestWeight ? bestWeight + (bestWeight ? '' : '') : '—'}</div>
      <div class="hist-stat-label">Top Wt</div>
    </div>
    <div class="hist-stat">
      <div class="hist-stat-value">${totalSets}</div>
      <div class="hist-stat-label">Sets Done</div>
    </div>
  `;

  // List - newest first, group by session
  let listHtml = '';
  if (sets.length === 0) {
    listHtml = '<div class="hist-empty">No history yet — log your first set to see progress.</div>';
  } else {
    const reversed = [...sets].reverse();
    reversed.forEach(s => {
      const dateLbl = `W${s.wk} ${DAY_ABBRS[s.d]}`;
      const setLbl = `${s.w ? s.w + ' lbs' : 'BW'} × ${s.r}`;
      const prFlag = s.prE1RM ? ' has-pr' : '';
      const prTxt = s.prE1RM ? ' · PR' : (s.prWeight ? ' · Heavy' : (s.prReps ? ' · Reps' : ''));
      listHtml += `
        <div class="hist-row${prFlag}">
          <span class="hist-row-date">${dateLbl}</span>
          <span class="hist-row-set">${escHtml(setLbl)}</span>
          <span class="hist-row-e1rm">e1RM ${Math.round(s.e1rm) || '—'}${prTxt}</span>
        </div>
      `;
    });
  }
  document.getElementById('hist-modal-list').innerHTML = listHtml;

  modal.classList.remove('hidden');
  // Defer chart draw until layout
  requestAnimationFrame(() => drawHistChart(sets));
}

function drawHistChart(sets) {
  const canvas = document.getElementById('hist-modal-chart');
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = 120 * dpr;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
  const W = rect.width, H = 120;
  ctx.clearRect(0, 0, W, H);

  // 1 e1RM data point per session (best set of session)
  const sessionsMap = {};
  sets.forEach(s => {
    const key = `${s.wk}-${s.d}`;
    if (!sessionsMap[key] || s.e1rm > sessionsMap[key].e1rm) sessionsMap[key] = s;
  });
  const sessions = Object.values(sessionsMap).sort((a,b) => (a.wk - b.wk) || (a.d - b.d));

  if (sessions.length < 2) {
    ctx.fillStyle = '#666';
    ctx.font = '12px -apple-system';
    ctx.textAlign = 'center';
    ctx.fillText('Need at least 2 sessions to chart', W / 2, H / 2);
    return;
  }

  const vals = sessions.map(s => s.e1rm);
  const min = Math.min(...vals) * 0.95;
  const max = Math.max(...vals) * 1.05 || min + 1;
  const xStep = sessions.length === 1 ? W / 2 : W / (sessions.length - 1);
  const padY = 14;
  const toY = v => H - padY - ((v - min) / (max - min)) * (H - padY * 2);

  // Gradient under line
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(255,107,53,0.35)');
  grad.addColorStop(1, 'rgba(255,107,53,0)');

  ctx.beginPath();
  sessions.forEach((s, i) => {
    const x = i * xStep, y = toY(s.e1rm);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.lineTo((sessions.length - 1) * xStep, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.beginPath();
  sessions.forEach((s, i) => {
    const x = i * xStep, y = toY(s.e1rm);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#FF6B35';
  ctx.lineWidth = 2.2;
  ctx.stroke();

  sessions.forEach((s, i) => {
    const x = i * xStep, y = toY(s.e1rm);
    ctx.beginPath();
    ctx.arc(x, y, s.prE1RM ? 4.5 : 3, 0, Math.PI * 2);
    ctx.fillStyle = s.prE1RM ? '#FFD93D' : '#FF6B35';
    ctx.fill();
  });
}

function closeHistModal() {
  document.getElementById('hist-modal').classList.add('hidden');
}
document.getElementById('hist-modal-backdrop').addEventListener('click', closeHistModal);
document.getElementById('btn-hist-close').addEventListener('click', closeHistModal);

// ===== Log Modal =====
function openLogModal(weekNum, dayIdx, exIdx, setIdx, exName, targetReps, existing, restStr) {
  logContext = { weekNum, dayIdx, exIdx, setIdx, restStr: restStr || '', exName };
  document.body.classList.remove('chrome-hidden');
  document.getElementById('log-modal-title').textContent = exName;
  document.getElementById('log-modal-set-label').textContent =
    `Set ${setIdx + 1}${targetReps ? ' · ' + targetReps + ' reps target' : ''}`;

  const wInput = document.getElementById('log-weight');
  const rInput = document.getElementById('log-reps');
  const hint = document.getElementById('log-modal-hint');

  let last = null;
  if (existing) {
    wInput.value = existing.w || '';
    rInput.value = existing.r || '';
    hint.classList.add('hidden');
  } else {
    last = findLastLog(exName, weekNum, dayIdx, exIdx, setIdx);
    if (last) {
      wInput.value = last.w || '';
      rInput.value = last.r || '';
      const wTxt = last.w ? `${last.w} lbs × ${last.r}` : `BW × ${last.r}`;
      hint.innerHTML = `<span class="hint-label">Last</span><span class="hint-value">${escHtml(wTxt)}</span> <span style="color:var(--text-muted);font-weight:500">· ${escHtml(last.ctx)}</span>`;
      hint.classList.remove('hidden');
    } else {
      wInput.value = '';
      rInput.value = '';
      hint.classList.add('hidden');
    }
  }

  // Reset modal transform (in case of prior swipe)
  document.getElementById('log-modal-card').style.transform = '';

  document.getElementById('log-modal').classList.remove('hidden');
  // Don't auto-focus when we already have prefilled values — keeps keyboard hidden so user can use steppers
  setTimeout(() => {
    if (!wInput.value && !rInput.value) wInput.focus();
  }, 100);
}

// ===== Plate Calculator =====
function renderPlatePopover() {
  const popover = document.getElementById('plate-popover');
  const wInput = document.getElementById('log-weight');
  const total = parseFloat(wInput.value) || 0;
  if (!total) {
    popover.innerHTML = '<div class="plate-popover-title">Enter a weight</div>';
    return;
  }
  const result = calcPlates(total);
  if (!result || result.perSide <= 0) {
    popover.innerHTML = `<div class="plate-popover-title">Bar Only</div><div class="plate-formula">${state.barWeight} lb bar</div>`;
    return;
  }
  const chips = result.plates.map(p => `<span class="plate-chip">${p}</span>`).join('');
  const reach = result.plates.reduce((a,b) => a+b, 0) * 2 + state.barWeight;
  const note = result.remaining > 0.01
    ? `<div class="plate-formula" style="color:var(--danger)">Best fit: ${reach} lbs (off by ${(result.remaining*2).toFixed(1)})</div>`
    : `<div class="plate-formula">${state.barWeight} bar + ${result.perSide} per side</div>`;
  popover.innerHTML = `
    <div class="plate-popover-title">Per Side</div>
    <div class="plate-list">${chips}</div>
    ${note}
  `;
}

document.getElementById('btn-plate-toggle').addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  const popover = document.getElementById('plate-popover');
  if (popover.classList.contains('hidden')) {
    renderPlatePopover();
    popover.classList.remove('hidden');
  } else {
    popover.classList.add('hidden');
  }
});

document.getElementById('log-weight').addEventListener('input', () => {
  const popover = document.getElementById('plate-popover');
  if (!popover.classList.contains('hidden')) renderPlatePopover();
});

// Stepper buttons (+/- on weight & reps)
document.querySelectorAll('.log-step').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.step === 'weight' ? 'log-weight' : 'log-reps';
    const input = document.getElementById(target);
    const delta = parseFloat(btn.dataset.delta);
    const cur = parseFloat(input.value) || 0;
    let next = cur + delta;
    if (next < 0) next = 0;
    // Round reps to integer
    if (btn.dataset.step === 'reps') next = Math.round(next);
    // Trim trailing .0
    input.value = Number.isInteger(next) ? String(next) : String(next);
    vibrate(8);
    if (btn.dataset.step === 'weight') {
      const popover = document.getElementById('plate-popover');
      if (!popover.classList.contains('hidden')) renderPlatePopover();
    }
  });
});

// Enter key in reps field saves; Enter in weight moves to reps
document.getElementById('log-weight').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); document.getElementById('log-reps').focus(); }
});
document.getElementById('log-reps').addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); document.getElementById('btn-log-save').click(); }
});

document.getElementById('log-modal-backdrop').addEventListener('click', closeLogModal);
document.getElementById('btn-log-cancel').addEventListener('click', closeLogModal);

document.getElementById('btn-log-save').addEventListener('click', () => {
  if (!logContext) return;
  const w = document.getElementById('log-weight').value.trim();
  const r = document.getElementById('log-reps').value.trim();
  if (!r) { document.getElementById('log-reps').focus(); return; }

  const { weekNum, dayIdx, exIdx, setIdx, restStr } = logContext;
  setLog(weekNum, dayIdx, `${exIdx}-${setIdx}`, w, r);
  vibrate(15);
  const restSecs = parseRestToSeconds(restStr);
  closeLogModal();
  startRestTimer(restSecs ?? state.restDuration);
  // Re-render the same workout in place rather than calling renderToday (which would show rest day on weekends)
  openScheduleDay(weekNum, dayIdx);
});

function closeLogModal() {
  const card = document.getElementById('log-modal-card');
  card.style.transform = '';
  document.getElementById('log-modal').classList.add('hidden');
  document.getElementById('plate-popover').classList.add('hidden');
  logContext = null;
}

// Swipe-down to dismiss log modal
(function setupSwipeDismiss() {
  const card = document.getElementById('log-modal-card');
  let startY = null, currentY = 0;

  card.addEventListener('touchstart', e => {
    // Only swipe if touching the card itself / grabber area, not interactive elements
    const tag = e.target.tagName.toLowerCase();
    if (tag === 'input' || tag === 'button') return;
    startY = e.touches[0].clientY;
    currentY = 0;
    card.style.transition = 'none';
  }, { passive: true });

  card.addEventListener('touchmove', e => {
    if (startY === null) return;
    currentY = e.touches[0].clientY - startY;
    if (currentY < 0) currentY = 0;
    card.style.transform = `translateY(${currentY}px)`;
  }, { passive: true });

  card.addEventListener('touchend', () => {
    if (startY === null) return;
    card.style.transition = 'transform 0.2s ease';
    if (currentY > 110) {
      closeLogModal();
    } else {
      card.style.transform = '';
    }
    startY = null;
    currentY = 0;
  }, { passive: true });
})();

// ===== Rest Timer =====
function startRestTimer(durationSeconds) {
  const dur = (Number.isFinite(durationSeconds) && durationSeconds > 0)
    ? durationSeconds
    : (state.restDuration || 90);
  clearInterval(restTimer.interval);
  restTimer.remaining = dur;
  restTimer.total = dur;

  document.body.classList.remove('chrome-hidden');
  document.getElementById('rest-timer').classList.remove('hidden');
  updateRestDisplay();

  restTimer.interval = setInterval(() => {
    restTimer.remaining--;
    if (restTimer.remaining === 10) {
      // 10s warning - 3 short pulses
      vibrate([60, 60, 60, 60, 60]);
    }
    if (restTimer.remaining <= 0) {
      clearInterval(restTimer.interval);
      document.getElementById('rest-timer').classList.add('hidden');
      vibrate([200, 80, 200]);
      try { new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAA==').play(); } catch(e) {}
    } else {
      updateRestDisplay();
    }
  }, 1000);
}

function updateRestDisplay() {
  const m = Math.floor(restTimer.remaining / 60);
  const s = restTimer.remaining % 60;
  document.getElementById('rest-timer-countdown').textContent =
    `${m}:${String(s).padStart(2, '0')}`;
  const pct = restTimer.total > 0 ? (restTimer.remaining / restTimer.total) * 100 : 0;
  document.getElementById('rest-timer-bar').style.width = pct + '%';
}

document.getElementById('btn-skip-rest').addEventListener('click', () => {
  clearInterval(restTimer.interval);
  document.getElementById('rest-timer').classList.add('hidden');
});

document.getElementById('btn-add-rest').addEventListener('click', () => {
  restTimer.remaining = Math.min(restTimer.remaining + 30, 600);
  restTimer.total = Math.max(restTimer.total, restTimer.remaining);
  updateRestDisplay();
});

// ===== Mark complete =====
window.markWorkoutDone = function(weekNum, dayIdx) {
  // Toggle: if all sets logged → clear; else log all remaining sets as done
  const day = PROGRAM.weeks.find(w => w.week === weekNum)?.days[dayIdx];
  if (!day) return;
  const complete = isDayComplete(weekNum, dayIdx, day);
  if (complete) {
    const k = logKey(weekNum, dayIdx);
    delete logs[k];
    saveLogs(logs);
  } else {
    day.exercises.forEach((ex, exIdx) => {
      if (ex.isFinisher) return;
      const n = parseInt(ex.sets) || 0;
      const dayLog = getLog(weekNum, dayIdx);
      for (let s = 0; s < n; s++) {
        const key = `${exIdx}-${s}`;
        if (!dayLog[key]) setLog(weekNum, dayIdx, key, '', ex.reps || '');
      }
    });
  }
  openScheduleDay(weekNum, dayIdx);
};

// ===== Schedule View =====
function renderSchedule() {
  const cur = getCurrentWeekDay();
  const container = document.getElementById('schedule-content');

  let html = '';
  let block1Html = '', block2Html = '';

  PROGRAM.weeks.forEach(week => {
    const isDeload = DELOAD_WEEKS.includes(week.week);
    const isCurWeek = cur && cur.week === week.week;
    const badges = [
      isDeload ? '<span class="schedule-week-badge badge-deload">Deload</span>' : '',
      isCurWeek ? '<span class="schedule-week-badge badge-current">Current</span>' : '',
    ].filter(Boolean).join('');

    let daysHtml = '';
    DAY_ABBRS.forEach((abbr, dayIdx) => {
      const day = week.days[dayIdx];
      if (!day) { daysHtml += `<div class="schedule-day-btn" style="opacity:0.2"><span class="schedule-day-abbr">${abbr}</span></div>`; return; }

      const isComplete = isDayComplete(week.week, dayIdx, day);
      const isCurDay = isCurWeek && cur.dayIdx === dayIdx;

      daysHtml += `
        <button class="schedule-day-btn ${isComplete ? 'completed' : ''} ${isCurDay ? 'current-day' : ''}"
                onclick="openScheduleDay(${week.week}, ${dayIdx})">
          <span class="schedule-day-abbr">${abbr}</span>
          ${isComplete ? '<span class="schedule-day-check">✓</span>' : ''}
          <span class="schedule-day-label">${day.label}</span>
        </button>
      `;
    });

    const weekHtml = `
      <div class="schedule-week">
        <div class="schedule-week-header">
          <span class="schedule-week-num">Week ${week.week}</span>
          ${badges}
        </div>
        <div class="schedule-days">${daysHtml}</div>
      </div>
    `;

    if (week.week <= 6) block1Html += weekHtml;
    else block2Html += weekHtml;
  });

  const jumpBtn = cur ? `<button id="btn-jump-current" onclick="jumpToCurrentWeek()">Jump to Week ${cur.week}</button>` : '';

  html = `
    ${jumpBtn}
    <div class="schedule-block-label">Block 1 — Weeks 1–6</div>
    ${block1Html}
    <div class="schedule-block-label">Block 2 — Weeks 7–12</div>
    ${block2Html}
  `;

  container.innerHTML = html;
}

window.jumpToCurrentWeek = function() {
  const cur = getCurrentWeekDay();
  if (!cur) return;
  const target = document.querySelector('.schedule-day-btn.current-day') ||
    document.querySelectorAll('.schedule-week')[cur.week - 1];
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

window.openScheduleDay = function(weekNum, dayIdx) {
  const week = PROGRAM.weeks.find(w => w.week === weekNum);
  if (!week) return;
  const day = week.days[dayIdx];
  if (!day) return;

  // Switch to today view without re-rendering it via renderToday
  activeView = 'today';
  document.body.classList.remove('chrome-hidden');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === 'today'));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-today'));

  document.getElementById('today-no-workout').classList.add('hidden');
  document.getElementById('header-sub').textContent = `Week ${weekNum} · ${day.day}`;
  renderWorkoutDay(document.getElementById('today-workout'), weekNum, dayIdx, day);
};

// ===== Progress View =====
// Map tracker lift labels → keyword + day index for auto-population from logs
const TRACKER_MATCHERS = {
  'Bench Press (Mon Heavy)': { keywords: ['Barbell Bench Press'], dayIdx: 0 },
  'Back Squat (Tue Heavy)': { keywords: ['Back Squat'], dayIdx: 1, exclude: ['Front', 'Bulgarian', 'Goblet', 'Split', 'Pistol', 'Box'] },
  'OHP (Wed)': { keywords: ['Overhead Press', 'OHP', 'Standing Press'], dayIdx: 2 },
  'Weighted Pull-Up (Thu Heavy)': { keywords: ['Weighted Pull-Up', 'Weighted Pull Up', 'Weighted Chin'], dayIdx: 3 },
  'Deadlift (Fri Heavy)': { keywords: ['Conventional Deadlift', 'Deadlift'], dayIdx: 4, exclude: ['RDL', 'Romanian', 'Sumo', 'Stiff'] },
  'Row — Light (Mon)': { keywords: ['Row'], dayIdx: 0, exclude: ['Pull', 'Apart'] },
  'RDL — Light (Tue)': { keywords: ['RDL', 'Romanian Deadlift'], dayIdx: 1 },
  'Incline Press — Light (Thu)': { keywords: ['Incline'], dayIdx: 3 },
  'Front Squat/Variation — Light (Fri)': { keywords: ['Front Squat', 'Goblet', 'Bulgarian'], dayIdx: 4 },
};

function findTopSetForLift(lift, dayIdx, weekNum) {
  const matcher = TRACKER_MATCHERS[lift];
  if (!matcher) return null;
  const week = PROGRAM.weeks.find(w => w.week === weekNum);
  if (!week) return null;
  const day = week.days[dayIdx];
  if (!day) return null;
  const dayLog = getLog(weekNum, dayIdx);

  // Find the first matching exercise slot (priority by keyword order)
  let matchIdx = -1, matchEx = null;
  for (const kw of matcher.keywords) {
    const idx = day.exercises.findIndex(ex => {
      if (!ex.exercise.toLowerCase().includes(kw.toLowerCase())) return false;
      if (matcher.exclude && matcher.exclude.some(ex2 => ex.exercise.toLowerCase().includes(ex2.toLowerCase()))) return false;
      return true;
    });
    if (idx >= 0) { matchIdx = idx; matchEx = day.exercises[idx]; break; }
  }
  if (matchIdx < 0) return null;

  // Find heaviest logged set of this exercise this week
  const n = parseInt(matchEx.sets) || 0;
  let best = null;
  for (let s = 0; s < n; s++) {
    const hit = dayLog[`${matchIdx}-${s}`];
    if (!hit || !hit.r) continue;
    const w = parseFloat(hit.w) || 0;
    if (!best || w > parseFloat(best.w || 0)) best = hit;
  }
  if (!best || !best.r) return null;
  return best.w ? `${best.w}×${best.r}` : `BW×${best.r}`;
}

function renderProgress() {
  const container = document.getElementById('progress-content');
  const trackerData = loadTracker();

  let html = `<p class="progress-intro">Auto-filled from your logs. Tap any cell to override.</p>`;

  PROGRAM.tracker.lifts.forEach(({ lift, day }) => {
    const deloadCells = DELOAD_WEEKS;
    const matcher = TRACKER_MATCHERS[lift];
    let inputsHtml = '';
    for (let w = 1; w <= 12; w++) {
      const tKey = `W${w}-${lift}`;
      const manual = trackerData[tKey];
      const auto = matcher ? findTopSetForLift(lift, matcher.dayIdx, w) : null;
      const val = manual !== undefined ? manual : (auto || '');
      const isAuto = !manual && auto;
      const isDeload = deloadCells.includes(w);
      inputsHtml += `
        <div class="tracker-week-cell">
          <span class="tracker-week-num">W${w}</span>
          <input class="tracker-week-input ${isDeload ? 'deload-week' : ''} ${isAuto ? 'auto-filled' : ''}"
                 type="text" inputmode="text"
                 placeholder="${isDeload ? 'D' : '—'}"
                 value="${escAttr(val)}"
                 data-lift="${escAttr(lift)}" data-week="${w}"
                 title="Week ${w}${isDeload ? ' (Deload)' : ''}${isAuto ? ' · auto from logs' : ''}" />
        </div>
      `;
    }

    html += `
      <div class="tracker-card">
        <div class="tracker-card-header">
          <span class="tracker-lift-name">${escHtml(lift)}</span>
          <span class="tracker-lift-day">${escHtml(day)}</span>
        </div>
        <div class="tracker-chart">
          <canvas id="chart-${escAttr(lift.replace(/[^a-z0-9]/gi, '_'))}" height="60"></canvas>
        </div>
        <div class="tracker-weeks">${inputsHtml}</div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Bind tracker inputs
  container.querySelectorAll('.tracker-week-input').forEach(input => {
    input.addEventListener('change', () => {
      const lift = input.dataset.lift;
      const week = input.dataset.week;
      const tKey = `W${week}-${lift}`;
      const val = input.value.trim();
      if (val) trackerData[tKey] = val;
      else delete trackerData[tKey];
      saveTracker(trackerData);
      drawChart(lift);
    });
  });

  // Draw charts
  PROGRAM.tracker.lifts.forEach(({ lift }) => drawChart(lift));
}

function parse1RM(str) {
  if (!str) return null;
  const m = str.match(/(\d+(?:\.\d+)?)\s*[x×]\s*(\d+)/i);
  if (!m) return null;
  const w = parseFloat(m[1]), r = parseInt(m[2]);
  // Brzycki formula
  return Math.round(w * (36 / (37 - r)));
}

function drawChart(lift) {
  const canvasId = 'chart-' + lift.replace(/[^a-z0-9]/gi, '_');
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = 60 * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = 60;

  const trackerData = loadTracker();
  const points = [];
  for (let w = 1; w <= 12; w++) {
    const val = trackerData[`W${w}-${lift}`];
    points.push(parse1RM(val));
  }

  const valid = points.filter(p => p !== null);
  if (valid.length < 2) {
    ctx.fillStyle = '#333';
    ctx.font = '11px -apple-system';
    ctx.textAlign = 'center';
    ctx.fillText('Log sets to see progress', W / 2, H / 2 + 4);
    return;
  }

  const min = Math.min(...valid) * 0.95;
  const max = Math.max(...valid) * 1.05;
  const xStep = W / 11;

  const toX = i => i * xStep;
  const toY = v => v === null ? null : H - 8 - ((v - min) / (max - min)) * (H - 16);

  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(255,107,53,0.3)');
  grad.addColorStop(1, 'rgba(255,107,53,0)');

  ctx.beginPath();
  let started = false;
  points.forEach((p, i) => {
    if (p === null) return;
    const x = toX(i), y = toY(p);
    if (!started) { ctx.moveTo(x, y); started = true; }
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#FF6B35';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Dots
  points.forEach((p, i) => {
    if (p === null) return;
    const x = toX(i), y = toY(p);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = DELOAD_WEEKS.includes(i + 1) ? '#F7B731' : '#FF6B35';
    ctx.fill();
  });
}

// ===== Settings =====
function renderSettings() {
  const dateInput = document.getElementById('setting-start-date');
  dateInput.value = state.startDate || '';

  const restInput = document.getElementById('setting-rest-timer');
  restInput.value = state.restDuration || 90;
  updateRestLabel();

  const barInput = document.getElementById('setting-bar-weight');
  if (barInput) barInput.value = state.barWeight || 45;

  // Highlight selected accent swatch
  document.querySelectorAll('.accent-swatch').forEach(sw => {
    sw.classList.toggle('selected', sw.dataset.accent === state.accent);
  });
}

// Accent color application
function applyAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
  // Build dim variant by appending alpha
  // Convert hex to rgb for the dim version
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0,2),16), g = parseInt(hex.substr(2,2),16), b = parseInt(hex.substr(4,2),16);
  document.documentElement.style.setProperty('--accent-dim', `rgba(${r},${g},${b},0.15)`);
  // Update theme-color meta
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', color);
}

document.querySelectorAll('.accent-swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    const color = sw.dataset.accent;
    state.accent = color;
    saveState(state);
    applyAccent(color);
    renderSettings();
  });
});

const barInputEl = document.getElementById('setting-bar-weight');
if (barInputEl) {
  barInputEl.addEventListener('change', e => {
    const v = parseFloat(e.target.value);
    if (Number.isFinite(v) && v >= 0) {
      state.barWeight = v;
      saveState(state);
    }
  });
}

document.getElementById('setting-start-date').addEventListener('change', e => {
  state.startDate = e.target.value;
  saveState(state);
});

document.getElementById('setting-rest-timer').addEventListener('input', e => {
  state.restDuration = parseInt(e.target.value);
  saveState(state);
  updateRestLabel();
});

function updateRestLabel() {
  const dur = state.restDuration || 90;
  const label = dur >= 60
    ? `${Math.floor(dur / 60)}m ${dur % 60 > 0 ? (dur % 60) + 's' : ''}`.trim()
    : `${dur} seconds`;
  document.getElementById('rest-timer-label').textContent = label;
}

document.getElementById('btn-reset').addEventListener('click', () => {
  if (confirm('Reset all workout logs? This cannot be undone.')) {
    logs = {};
    saveLogs(logs);
    renderView(activeView);
  }
});

document.getElementById('btn-reset-tracker').addEventListener('click', () => {
  if (confirm('Reset all tracker data? This cannot be undone.')) {
    saveTracker({});
    renderView(activeView);
  }
});

// ===== Export / Import =====
document.getElementById('btn-export').addEventListener('click', () => {
  const backup = {
    version: 2,
    exportedAt: new Date().toISOString(),
    wk_state: loadState(),
    wk_logs: loadLogs(),
    wk_tracker: loadTracker(),
    wk_subs: loadSubs(),
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `workout-backup-${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('btn-import').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.version || !data.wk_logs) throw new Error('Invalid backup file');
      if (!confirm('This will overwrite all current logs and tracker data. Continue?')) return;
      if (data.wk_state) saveState(data.wk_state);
      if (data.wk_logs) saveLogs(data.wk_logs);
      if (data.wk_tracker) saveTracker(data.wk_tracker);
      if (data.wk_subs) saveSubs(data.wk_subs);
      // Reload in-memory state
      state = loadState();
      logs = loadLogs();
      tracker = loadTracker();
      subs = loadSubs();
      invalidatePRCache();
      applyAccent(state.accent || '#FF6B35');
      setImportStatus('✓ Data restored successfully', 'success');
      renderView(activeView);
    } catch (err) {
      setImportStatus('✗ Invalid backup file', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

function setImportStatus(msg, type) {
  const el = document.getElementById('import-status');
  el.textContent = msg;
  el.style.cssText = `font-size:13px;font-weight:600;padding:8px 0 0;color:${type === 'success' ? 'var(--teal)' : 'var(--danger)'}`;
  setTimeout(() => { el.textContent = ''; }, 4000);
}

// ===== Escape helpers =====
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escAttr(str) {
  if (!str) return '';
  return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ===== Auto-hide chrome on scroll =====
function initScrollHideChrome() {
  const HIDE_THRESHOLD  = 20;  // px of downward scroll before hiding
  const SHOW_THRESHOLD  = 4;   // px of upward scroll before showing (snappy reveal)
  const MIN_SCROLL      = 80;  // never hide within this many px of the top
  const BOTTOM_BUFFER   = 80;  // never hide within this many px of the bottom

  function isNearBottom(view) {
    return view.scrollTop + view.clientHeight >= view.scrollHeight - BOTTOM_BUFFER;
  }

  document.querySelectorAll('.view').forEach(view => {
    let lastTop = 0;
    let ticking = false;

    view.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // Clamp to valid range — prevents iOS rubber-band from producing spurious deltas
        const maxScroll = Math.max(0, view.scrollHeight - view.clientHeight);
        const top = Math.max(0, Math.min(view.scrollTop, maxScroll));

        // Always show chrome near the top
        if (top <= MIN_SCROLL) {
          document.body.classList.remove('chrome-hidden');
          lastTop = top;
          ticking = false;
          return;
        }

        const delta = top - lastTop;

        if (delta > HIDE_THRESHOLD && !isNearBottom(view)) {
          if (activeView === 'today' || activeView === 'schedule') {
            document.body.classList.add('chrome-hidden');
          }
          lastTop = top;
        } else if (delta < -SHOW_THRESHOLD) {
          document.body.classList.remove('chrome-hidden');
          lastTop = top;
        }
        // Sub-threshold moves don't update lastTop — hysteresis accumulation

        ticking = false;
      });
    }, { passive: true });

    // Re-show chrome once scroll momentum fully settles (catches iOS rubber-band jitter)
    view.addEventListener('scrollend', () => {
      if (isNearBottom(view)) {
        document.body.classList.remove('chrome-hidden');
      }
    }, { passive: true });
  });
}

// ===== Wake Lock =====
let wakeLock = null;

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    if (wakeLock) return;
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => { wakeLock = null; });
  } catch (e) {
    wakeLock = null;
  }
}

async function releaseWakeLock() {
  if (wakeLock) {
    try { await wakeLock.release(); } catch (e) {}
    wakeLock = null;
  }
}

// Re-acquire when page becomes visible (e.g. after device sleep)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && activeView === 'today') {
    requestWakeLock();
  }
});

// ===== Persistent storage =====
async function requestPersistentStorage() {
  if (navigator.storage && navigator.storage.persist) {
    try {
      const already = await navigator.storage.persisted();
      if (!already) await navigator.storage.persist();
    } catch (e) {}
  }
}

// ===== Init =====
applyAccent(state.accent || '#FF6B35');
renderToday();
initScrollHideChrome();
updateStreakDisplay();
requestPersistentStorage();
requestWakeLock();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
