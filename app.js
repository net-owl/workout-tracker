'use strict';

// ===== Constants =====
const DELOAD_WEEKS = [4, 8, 12];
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

// ===== App State =====
let state = loadState();
let logs = loadLogs();
let tracker = loadTracker();

// Defaults
if (!state.restDuration) state.restDuration = 90;

// Active context for log modal
let logContext = null;
let restTimer = { interval: null, remaining: 0, total: 0 };
// When browsing a specific workout from schedule, store it here
let pinnedWorkout = null; // { weekNum, dayIdx }

// ===== Helpers =====
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
}

function clearLog(weekNum, dayIdx, setKey) {
  const k = logKey(weekNum, dayIdx);
  if (logs[k]) delete logs[k][setKey];
  saveLogs(logs);
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
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewName);
  });
  document.querySelectorAll('.view').forEach(v => {
    v.classList.toggle('active', v.id === `view-${viewName}`);
  });
  renderView(viewName);
}

function renderView(name) {
  if (name === 'today') renderToday();
  else if (name === 'schedule') renderSchedule();
  else if (name === 'progress') renderProgress();
  else if (name === 'settings') renderSettings();
}

// ===== Today View =====
function renderToday() {
  const cur = pinnedWorkout || getCurrentWeekDay();
  const container = document.getElementById('today-workout');
  const noWorkout = document.getElementById('today-no-workout');

  if (!state.startDate) {
    noWorkout.classList.remove('hidden');
    noWorkout.innerHTML = `
      <div class="empty-icon">💪</div>
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
      <div class="empty-icon">🏖️</div>
      <div class="empty-title">Rest Day</div>
      <div class="empty-sub">No workout scheduled for today. Recover well!</div>
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
  const collapsed = block.isBonus ? 'collapsed' : '';

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

  let metaHtml = '';
  if (ex.reps) metaHtml += `<span class="meta-chip accent">${escHtml(ex.reps)} reps</span>`;
  if (ex.tempo) metaHtml += `<span class="meta-chip">${escHtml(ex.tempo)}</span>`;
  if (ex.rest) metaHtml += `<span class="meta-chip">Rest: ${escHtml(ex.rest)}</span>`;

  let setsHtml = '';
  for (let s = 0; s < n; s++) {
    const key = `${exIdx}-${s}`;
    const logged = dayLog[key];
    const isLogged = !!logged;
    setsHtml += `
      <div class="set-row ${isLogged ? 'logged' : ''}"
           data-ex="${exIdx}" data-set="${s}"
           data-ex-name="${escAttr(ex.exercise)}"
           data-target-reps="${escAttr(ex.reps || '')}"
           data-week="${weekNum}" data-day="${dayIdx}">
        <div class="set-circle">${isLogged ? '✓' : s + 1}</div>
        <div class="set-info">
          <div class="set-label">Set ${s + 1}</div>
          ${isLogged
            ? `<div class="set-logged-value">${logged.w ? logged.w + ' lbs' : 'BW'} × ${logged.r} reps</div>`
            : `<div class="set-target">${escHtml(ex.reps || '—')} reps${ex.tempo ? ' · ' + escHtml(ex.tempo) : ''}</div>`
          }
        </div>
        ${isLogged ? `<span class="set-edit-btn">Edit</span>` : ''}
      </div>
    `;
  }

  return `
    <div class="exercise-item">
      ${bonusBadge}
      <div class="exercise-name">${escHtml(ex.exercise)}</div>
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
        <span class="finisher-icon">🔥</span>
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
      const existing = getLog(weekNum, dayIdx)[`${exIdx}-${setIdx}`];
      openLogModal(weekNum, dayIdx, exIdx, setIdx, exName, targetReps, existing);
    });
  });
}

function toggleBlock(headerEl) {
  headerEl.closest('.block-card').classList.toggle('collapsed');
}
window.toggleBlock = toggleBlock;

// ===== Log Modal =====
function openLogModal(weekNum, dayIdx, exIdx, setIdx, exName, targetReps, existing) {
  logContext = { weekNum, dayIdx, exIdx, setIdx };
  document.getElementById('log-modal-title').textContent = exName;
  document.getElementById('log-modal-set-label').textContent =
    `Set ${setIdx + 1}${targetReps ? ' · ' + targetReps + ' reps target' : ''}`;

  const wInput = document.getElementById('log-weight');
  const rInput = document.getElementById('log-reps');
  wInput.value = existing ? existing.w : '';
  rInput.value = existing ? existing.r : '';

  document.getElementById('log-modal').classList.remove('hidden');
  setTimeout(() => wInput.focus(), 100);
}

document.getElementById('log-modal-backdrop').addEventListener('click', closeLogModal);
document.getElementById('btn-log-cancel').addEventListener('click', closeLogModal);

document.getElementById('btn-log-save').addEventListener('click', () => {
  if (!logContext) return;
  const w = document.getElementById('log-weight').value.trim();
  const r = document.getElementById('log-reps').value.trim();
  if (!r) { document.getElementById('log-reps').focus(); return; }

  const { weekNum, dayIdx, exIdx, setIdx } = logContext;
  setLog(weekNum, dayIdx, `${exIdx}-${setIdx}`, w, r);
  closeLogModal();
  startRestTimer();
  // Re-render the same workout in place rather than calling renderToday (which would show rest day on weekends)
  openScheduleDay(weekNum, dayIdx);
});

function closeLogModal() {
  document.getElementById('log-modal').classList.add('hidden');
  logContext = null;
}

// ===== Rest Timer =====
function startRestTimer() {
  const dur = state.restDuration || 90;
  clearInterval(restTimer.interval);
  restTimer.remaining = dur;
  restTimer.total = dur;

  document.getElementById('rest-timer').classList.remove('hidden');
  updateRestDisplay();

  restTimer.interval = setInterval(() => {
    restTimer.remaining--;
    if (restTimer.remaining <= 0) {
      clearInterval(restTimer.interval);
      document.getElementById('rest-timer').classList.add('hidden');
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

  html = `
    <div class="schedule-block-label">Block 1 — Weeks 1–6</div>
    ${block1Html}
    <div class="schedule-block-label">Block 2 — Weeks 7–12</div>
    ${block2Html}
  `;

  container.innerHTML = html;
}

window.openScheduleDay = function(weekNum, dayIdx) {
  const week = PROGRAM.weeks.find(w => w.week === weekNum);
  if (!week) return;
  const day = week.days[dayIdx];
  if (!day) return;

  // Switch to today view without re-rendering it via renderToday
  activeView = 'today';
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === 'today'));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-today'));

  document.getElementById('today-no-workout').classList.add('hidden');
  document.getElementById('header-sub').textContent = `Week ${weekNum} · ${day.day}`;
  renderWorkoutDay(document.getElementById('today-workout'), weekNum, dayIdx, day);
};

// ===== Progress View =====
function renderProgress() {
  const container = document.getElementById('progress-content');
  const trackerData = loadTracker();

  let html = `<p class="progress-intro">Log your top working set each week for your main lifts. Use "weight×reps" format (e.g. 185×5).</p>`;

  PROGRAM.tracker.lifts.forEach(({ lift, day }) => {
    const deloadCells = DELOAD_WEEKS;
    let inputsHtml = '';
    for (let w = 1; w <= 12; w++) {
      const tKey = `W${w}-${lift}`;
      const val = trackerData[tKey] || '';
      const isDeload = deloadCells.includes(w);
      inputsHtml += `
        <div class="tracker-week-cell">
          <span class="tracker-week-num">W${w}</span>
          <input class="tracker-week-input ${isDeload ? 'deload-week' : ''}"
                 type="text" inputmode="text"
                 placeholder="${isDeload ? 'D' : '—'}"
                 value="${escAttr(val)}"
                 data-lift="${escAttr(lift)}" data-week="${w}"
                 title="Week ${w}${isDeload ? ' (Deload)' : ''}" />
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
    version: 1,
    exportedAt: new Date().toISOString(),
    wk_state: loadState(),
    wk_logs: loadLogs(),
    wk_tracker: loadTracker(),
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
      // Reload in-memory state
      state = loadState();
      logs = loadLogs();
      tracker = loadTracker();
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

// ===== Init =====
renderToday();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
