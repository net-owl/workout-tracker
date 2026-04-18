const PROGRAM = {
  "weeks": [
    {
      "week": 1,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 1 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Chest-Supported Row (DB or Machine)",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep back work. Focus on squeeze + control.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Incline DB Press",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push (upper pec angle).",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Banded Pull-Apart",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Vertical/scap plane pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette / DB-Handle Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push, deficit ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "One-Arm DB Row (bench)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "EZ-Bar Curl",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Pin elbows. Full stretch.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Cable Chest Press (neutral)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Pec finisher.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Russian Twist — 20 reps (10/side) — Heavy KB.\n  • Hanging Leg Raise — 10-12 reps — Strict, no swing.\n  • Cable Crunch — 15 reps — Hips back, crunch hard.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 1 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Romanian Deadlift",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep hinge. Hinge, soft knee, feel hamstrings.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press (close stance)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Bilateral, knee-dominant quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Lying Hamstring Curl",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Knee-flexion hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Walking Lunge",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Single-Leg DB Romanian Deadlift",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension hamstring, unilateral.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Hip Adductor Machine",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Adductor balance.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Leg Extension",
              "sets": "3",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Quad isolation.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 8 min:\n  10 KB Swings (heavy) → 10 Goblet Squats → 200m Row",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Score = rounds + reps. Aim 5+.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 1 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Standing Overhead Press (BB)",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Strict press. Brace hard. No leg drive.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Power Clean 3 reps → 250m Row → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Face Pull (rope, high)",
              "sets": "3",
              "reps": "15",
              "tempo": "2012",
              "rest": "45s",
              "notes": "Horizontal pull / rear delt.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette Pike Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Hammer Curl",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "45s",
              "notes": "Elbow flexion, brachialis.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Overhead Tricep Extension (rope)",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "75s",
              "notes": "Elbow extension, overhead.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Reverse Pec Deck",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Rear delt isolation.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "DB Lateral Raise",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Side delt pump.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Suitcase Carry — 30 sec/side — Anti-lateral-flexion.\n  • Pallof Press (cable) — 10/side — Anti-rotation.\n  • Weighted Sit-Up — 12 reps — DB on chest.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 1 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Incline DB Press",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep chest work. Control, full ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "One-Arm DB Row",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette Pike Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (wide grip)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Push-Up (deficit)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Close-Grip Bench Press",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Hands shoulder-width.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Straight-Arm Pulldown",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Lat isolation.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: Battle Ropes // Mountain Climbers",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Max effort.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 1 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "3",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Front Squat",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep quad work. Upright torso, full depth.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Romanian Deadlift (DB)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring, bilateral.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "BW Reverse Lunge",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Lying Hamstring Curl",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Knee-flex hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Leg Press (bilateral)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Bilateral quad.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Pull-Through",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Posterior chain.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Lying Hamstring Curl",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Hamstring finisher.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Windmill — 8/side — Core + thoracic mobility.\n  • Plank with Plate Drag — 10 drags total — Anti-rotation.\n  • V-Up — 15 reps — Fingers to toes.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 2,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 2 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Chest-Supported Row (DB or Machine)",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep back work. Focus on squeeze + control.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Flat DB Press",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Inverted Row (parallettes or BB)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Horizontal pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Pike Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Wide-Grip Pull-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Incline DB Curl",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Stretch position bias.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Machine Chest Press",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Safe, high-rep pec.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Halo — 10 reps (5/direction) — Heavy KB around head.\n  • Toes-to-Bar — 8-10 reps — Sub hanging knee raise if needed.\n  • Plank (weighted) — 45 sec — Plate on back.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 2 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Romanian Deadlift",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep hinge. Hinge, soft knee, feel hamstrings.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Bulgarian Split Squat",
              "sets": "3",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Unilateral quad-dominant.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "BB Good Morning (light)",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension hamstring, bilateral.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Hack Squat",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Bilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Nordic Curl (eccentric)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "5010",
              "rest": "90s",
              "notes": "Knee-flexion hamstring, eccentric focus.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Hip Abduction Machine",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Glute med.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Sissy Squat (BW or weighted)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Quad stretch.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: Air Squat // Burpee",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Max reps each interval.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 2 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Seated DB Shoulder Press",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Full ROM. Pause at top.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Push Press (BB) 5 reps → 20 cal Bike → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Reverse Pec Deck (or DB rear fly)",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Horizontal pull / rear delt.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette Handstand Hold/Walk-Out",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "-",
              "rest": "75s",
              "notes": "Vertical push isometric, 20-40s.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BB Cable Curl (straight bar)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "45s",
              "notes": "Elbow flexion, bilateral.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Close-Grip Push-Up (parallettes)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Elbow extension, AMRAP.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Band Pull-Apart",
              "sets": "3",
              "reps": "20",
              "tempo": "2010",
              "rest": "45s",
              "notes": "Upper back endurance.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Cable Lateral Raise",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Constant tension.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Bottoms-Up Carry — 20 sec/side — Heavy KB upside-down.\n  • Side Plank with Reach — 8/side — Reach under.\n  • Hollow Hold — 30 sec — Low back flat.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 2 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "5",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Incline DB Press",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep chest work. Control, full ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Neutral-Grip Pull-Up (weighted if poss)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Flat DB Press",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Seal Row (BB)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Banded DB Overhead Press",
              "sets": "3",
              "reps": "12",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push, band tension.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Skullcrusher (EZ-bar)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "To forehead.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Cable Pullover (rope)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Lat stretch.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 8 min:\n  5 Pull-Ups → 10 Push-Ups → 15 Air Squats",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "\"Cindy\" mini.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 2 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "3",
              "tempo": "3010",
              "rest": "3 min",
              "notes": "Start ~70% 1RM. Tempo emphasis week. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Front Squat",
              "sets": "3",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Moderate load. Tempo emphasis. Leave 3-4 reps in tank. | Higher-rep quad work. Upright torso, full depth.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Stiff-Leg BB Deadlift",
              "sets": "3",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring, strict.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette Sissy Squat (BW)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "BW quad stretch.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Nordic Curl (eccentric)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "5010",
              "rest": "60s",
              "notes": "Knee-flex hamstring, eccentric.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Goblet Squat (paused)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "3210",
              "rest": "90s",
              "notes": "Bilateral quad, 2s bottom.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Reverse Hyperextension",
              "sets": "3",
              "reps": "12",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Low-back friendly hinge.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Seated Hamstring Curl",
              "sets": "3",
              "reps": "12",
              "tempo": "2012",
              "rest": "60s",
              "notes": "2 sec hold.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Turkish Get-Up — 3/side — Slow, controlled.\n  • Hollow Body Hold — 30 sec — Low back pinned.\n  • Russian Twist (BW or plate) — 20 reps — Slow.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 3,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 3 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 2. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Chest-Supported Row (DB or Machine)",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep back work. Focus on squeeze + control.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Low-Incline BB Bench",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Pull-Up (neutral or chin)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull, AMRAP strict.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Banded Overhead DB Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical push, band on DBs for top tension.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Seal Row (BB on bench)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull, no body english.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Curl (straight bar)",
              "sets": "3",
              "reps": "12",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Constant tension.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Decline DB Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Lower pec emphasis.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Around-the-World — 10 reps (5/direction) — KB around waist.\n  • Decline Sit-Up (weighted) — 12 reps — DB or plate on chest.\n  • Cable Woodchopper — 12/side — Rotational power.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 3 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 2. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Romanian Deadlift",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep hinge. Hinge, soft knee, feel hamstrings.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Front-Foot-Elevated Split Squat (DB)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Unilateral quad emphasis.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Seated Hamstring Curl",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2012",
              "rest": "90s",
              "notes": "Knee-flexion hamstring, lengthened.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Sissy Squat (BW)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "BW quad stretch.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Kettlebell Swing",
              "sets": "3",
              "reps": "12-15",
              "tempo": "-",
              "rest": "90s",
              "notes": "Hip-extension hamstring, ballistic.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Copenhagen Plank",
              "sets": "3",
              "reps": "20s/side",
              "tempo": "-",
              "rest": "45s",
              "notes": "Adductor isometric.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Goblet Squat (paused)",
              "sets": "3",
              "reps": "10",
              "tempo": "3210",
              "rest": "60s",
              "notes": "2 sec bottom.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (IWT) — IWT — 5 rounds, 90s rest:\n  8 KB Front-Rack Squats + 200m Row",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Same KB weight all rounds.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 3 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Push Press (BB)",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 2. | Leg drive allowed. Heavier than strict.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Power Clean + Push Press 3+3 → 15 cal Ski Erg → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Band Pull-Apart (overhead variation)",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Scap plane pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Banded DB Overhead Press",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Vertical push, band over DBs.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Incline DB Curl (supinated)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "45s",
              "notes": "Elbow flexion, stretched.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Skullcrusher (EZ-bar)",
              "sets": "3",
              "reps": "12-15",
              "tempo": "3010",
              "rest": "75s",
              "notes": "Elbow extension, supine.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "DB Shrug (slow)",
              "sets": "3",
              "reps": "12",
              "tempo": "2012",
              "rest": "60s",
              "notes": "2 sec hold top.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Leaning DB Lateral Raise",
              "sets": "3",
              "reps": "12/side",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Hold post.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Front-Rack Carry — 40 sec — Two KBs front-racked.\n  • Cable Pallof Press (half-kneeling) — 10/side — Anti-rotation.\n  • V-Up — 15 reps — Hands to feet.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 3 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 2. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Incline DB Press",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep chest work. Control, full ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Pendlay Row (explosive)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU (or pike)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Chin-Up (weighted if poss)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Incline DB Fly-Press",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Horizontal push-stretch hybrid.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Overhead Tricep Extension (rope)",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Full stretch.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Dumbbell Pullover",
              "sets": "3",
              "reps": "12",
              "tempo": "3011",
              "rest": "60s",
              "notes": "Stretch emphasis.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (IWT) — IWT — 5 rounds, 90s rest:\n  6 Strict Pull-Ups + 15 cal Bike",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Per round.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 3 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "3",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 2. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Front Squat",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep quad work. Upright torso, full depth.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Snatch-Grip RDL",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring + upper back.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "BW Bulgarian Split Squat",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Seated Hamstring Curl",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Knee-flex hamstring, lengthened.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Step-Up (high box)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "45° Back Extension (weighted)",
              "sets": "3",
              "reps": "10",
              "tempo": "3011",
              "rest": "60s",
              "notes": "Plate at chest.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Nordic Curl (eccentric)",
              "sets": "3",
              "reps": "5",
              "tempo": "5010",
              "rest": "60s",
              "notes": "5 sec eccentric.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Single-Arm Overhead Squat — 5/side — Light KB.\n  • Side Plank (weighted) — 30 sec/side — DB on hip.\n  • Hanging Leg Raise — 10 reps — Strict.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 4,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 4 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 3. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Chest-Supported Row (DB or Machine)",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep back work. Focus on squeeze + control.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Bench Press (neutral grip)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push, shoulder-friendly.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Chest-Supported DB Row (prone)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Handstand Push-Up (or pike)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Banded Pull-Up (assisted or resisted)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Preacher Curl (machine or EZ)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Strict, no bounce.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Pec Deck (slow eccentric)",
              "sets": "3",
              "reps": "12",
              "tempo": "3011",
              "rest": "60s",
              "notes": "3 sec down.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Russian Twist — 24 reps (12/side) — Heavier than W1.\n  • Dragon Flag (or negative) — 6 reps — Eccentric focus.\n  • Cable Crunch — 15 reps — Heavy.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 4 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 3. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Romanian Deadlift",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep hinge. Hinge, soft knee, feel hamstrings.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press (1.25 reps)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Bilateral quad, partial-full.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Lying Hamstring Curl",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Knee-flexion hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Step-Up (high box)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Stiff-Leg DB Deadlift",
              "sets": "3",
              "reps": "12-15",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension hamstring.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Banded Lateral Walk",
              "sets": "3",
              "reps": "15/side",
              "tempo": "-",
              "rest": "45s",
              "notes": "Glute med.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Leg Extension (1.5 reps)",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "60s",
              "notes": "½ + full = 1.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 10 min:\n  5 Box Jumps → 10 Wallballs → 15 cal Bike",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Score = rounds.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 4 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Standing Overhead Press (BB)",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 3. | Continue strict pressing cycle.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Push Jerk (BB) 3 reps → 250m Row → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Chest-Supported DB Rear Fly",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Horizontal pull / rear delt.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette Pseudo-Planche Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "75s",
              "notes": "Angled vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Preacher Curl (EZ or DB)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "45s",
              "notes": "Elbow flexion, stretched.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Tricep Rope Pushdown",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2011",
              "rest": "75s",
              "notes": "Elbow extension, pronated.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Rear Delt Fly (single arm)",
              "sets": "3",
              "reps": "15/side",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Per side.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "DB Front Raise",
              "sets": "3",
              "reps": "12",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Front delt.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Suitcase Carry — 40 sec/side — Heavier.\n  • Side Plank (weighted) — 30 sec/side — DB on top hip.\n  • Stir-the-Pot (plank on ball) — 10/direction — Anti-extension.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 4 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 3. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Incline DB Press",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep chest work. Control, full ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Meadows Row (single-arm BB)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull per side.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Overhead Press (seated)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Pull-Up (strict)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Cable Fly (mid)",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Horizontal push adduction.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Dip (weighted, upright)",
              "sets": "3",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical torso.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Rack Pull (from knee)",
              "sets": "3",
              "reps": "6",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Upper back thickness.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: Burpees // Sit-Ups",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Max reps.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 4 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "3",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "+5 lb upper / +10 lb lower vs Wk 3. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Front Squat",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate load. Focus on full ROM and squeeze. | Higher-rep quad work. Upright torso, full depth.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Single-Leg DB RDL",
              "sets": "3",
              "reps": "12-15",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring, unilateral.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Hack Squat",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Bilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Banded Good Morning",
              "sets": "3",
              "reps": "12-15",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext, band overload at top.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Pistol Squat (assisted)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Unilateral BW quad.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Single-Leg RDL (DB)",
              "sets": "3",
              "reps": "10/leg",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Balance + posterior.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Single-Leg Hamstring Curl",
              "sets": "3",
              "reps": "10/leg",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Unilateral.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Windmill (heavier) — 8/side — Heavier.\n  • Plank with Plate Drag — 12 drags — Heavier plate.\n  • Decline Sit-Up (weighted) — 15 reps — DB on chest.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 5,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 5 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "5",
              "reps": "3",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavy low-rep range. ~85-88% 1RM. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Chest-Supported Row (DB or Machine)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Slight load bump, still RPE 7. | Higher-rep back work. Focus on squeeze + control.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Weighted Dip (chest lean)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Angled push (chest-forward dip).",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Meadows Row (single-arm BB)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull per side.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Banded Push-Up (heavy band)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push, max reps.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Pull-Up (cluster 3+3+3, 15s rest)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Hammer Curl (DB or rope)",
              "sets": "4",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Brachialis emphasis.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Incline DB Fly",
              "sets": "3",
              "reps": "12",
              "tempo": "3011",
              "rest": "60s",
              "notes": "Stretch.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Goblet Hold March — 20 steps — KB at chest, march high knees.\n  • Hanging Windshield Wiper — 10 reps (5/side) — Knees tucked OK.\n  • Ab Wheel Rollout — 10 reps — Full ROM.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 5 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "5",
              "reps": "3",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavy low-rep range. ~85-88% 1RM. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Romanian Deadlift",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Slight load bump, still RPE 7. | Higher-rep hinge. Hinge, soft knee, feel hamstrings.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Hack Squat (paused)",
              "sets": "4",
              "reps": "8",
              "tempo": "3210",
              "rest": "60s",
              "notes": "Bilateral quad, 2s bottom.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Nordic Curl",
              "sets": "4",
              "reps": "8",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Knee-flexion hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BW Pistol Squat (assisted)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Unilateral quad, BW.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Back Extension (weighted)",
              "sets": "4",
              "reps": "10",
              "tempo": "3011",
              "rest": "90s",
              "notes": "Hip-extension hamstring.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Glute Kickback",
              "sets": "4",
              "reps": "12/side",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Glute max.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Front-Foot-Elevated Reverse Lunge",
              "sets": "3",
              "reps": "10/leg",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Quad bias.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: KB Swings // Mountain Climbers",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Max reps.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 5 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Seated BB Shoulder Press",
              "sets": "5",
              "reps": "3",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavy low-rep range. ~85-88% 1RM. | Upright bench, no leg drive.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Hang Power Snatch 3 reps → 20 cal Bike → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Cable Face Pull → External Rotation",
              "sets": "4",
              "reps": "12",
              "tempo": "2012",
              "rest": "45s",
              "notes": "Pull + cuff work.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU (or Pike HSPU)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Cable Hammer Curl (rope)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "45s",
              "notes": "Elbow flexion, neutral.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Diamond Parallette Push-Up",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Elbow extension, AMRAP.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Trap-3 Raise (incline DB)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Lower trap.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Cable Upright Row",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Wide grip, elbows high.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Overhead Carry — 30 sec/side — KB locked overhead.\n  • Cable Pallof Press — 12/side — Heavier.\n  • Hanging Knee Raise — 12 reps — Strict.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 5 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "5",
              "reps": "3",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavy low-rep range. ~85-88% 1RM. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Incline DB Press",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Slight load bump, still RPE 7. | Higher-rep chest work. Control, full ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "T-Bar Row",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull, heavy.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU (deficit)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Vertical push, extra ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Pull-Up (cluster 3+3+3)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, cluster.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Parallette Dip",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Angled push.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "JM Press",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Hybrid skullcrusher/CGBP.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Chest-Supported Reverse Row",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "High elbows.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 10 min:\n  5 BB Bent-Over Rows (light) → 10 Push-Ups → 15 KB Swings",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Score = rounds.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 5 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "5",
              "reps": "2",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavy low-rep range. ~85-88% 1RM. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Front Squat",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Slight load bump, still RPE 7. | Higher-rep quad work. Upright torso, full depth.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Trap-Bar RDL",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Hip-ext hamstring, trap bar.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press (1.25 reps)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Bilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Lying Hamstring Curl (heavy)",
              "sets": "4",
              "reps": "10",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Knee-flex hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Sissy Squat (weighted)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "BW+plate quad stretch.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Glute Drive Machine (or hip thrust)",
              "sets": "4",
              "reps": "10",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Glute finisher.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Glute Ham Raise",
              "sets": "3",
              "reps": "8",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Full ROM.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Turkish Get-Up — 4/side — Heavier KB.\n  • Ab Wheel Rollout — 12 reps — Full ROM.\n  • Hanging Knee Raise (slow) — 12 reps — 3010 tempo.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 6,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 6 — Upper Day 1 (Heavy Chest + Light Back)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight from Wk 5. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Chest-Supported Row (DB or Machine)",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Higher-rep back work. Focus on squeeze + control.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Bench Press",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "DELOAD — light horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Inverted Row (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Submaximal horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pike Push-Up",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "60s",
              "notes": "BW vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal vertical pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "DB Curl",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Cable Fly (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Plank — 45 sec — DELOAD — BW only.\n  • Bird Dog — 10/side — Slow.\n  • Dead Bug — 10/side — Press low back.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 6 — Lower Day 1 (Heavy Quad + Light Ham)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight from Wk 5. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Romanian Deadlift",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Higher-rep hinge. Hinge, soft knee, feel hamstrings.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "DELOAD — bilateral quad, light.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Lying Hamstring Curl",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Light.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BW Reverse Lunge",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Submaximal unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Bodyweight Good Morning",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension, light.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Hip Adductor Machine",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Leg Extension (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (EASY) — Easy Aerobic 8 min:\n  8 min easy bike or row, conversational",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "DELOAD — Zone 2.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 6 — Accessory (Shoulder Strength + IWT)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "DB Shoulder Press (light)",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight from Wk 5. | DELOAD — light load.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: BB Front Squat 5 reps (light) → 200m Row easy → rest",
              "sets": "3 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "90s",
              "notes": "DELOAD: 3 rounds, light loads, easy pace.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Face Pull",
              "sets": "2",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Pike Push-Up",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "75s",
              "notes": "BW vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Curl",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Light elbow flexion.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Tricep Pushdown",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "75s",
              "notes": "Light elbow extension.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Face Pull",
              "sets": "2",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "DB Lateral Raise (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Suitcase Carry (light) — 30 sec/side — DELOAD.\n  • Pallof Press (light) — 8/side — Light.\n  • Plank — 45 sec — BW.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 6 — Upper Day 2 (Heavy Back + Light Chest)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight from Wk 5. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Incline DB Press",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Higher-rep chest work. Control, full ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Inverted Row (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Submaximal horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Overhead Press (light)",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "DELOAD — vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Submaximal vertical pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Push-Up (parallettes)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal horizontal push.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Tricep Pushdown",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Lat Pulldown (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (EASY) — Easy Aerobic 8 min:\n  8 min easy ski erg or row, Zone 2",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "DELOAD.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 6 — Lower Day 2 (Heavy Hinge + Light Quad)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight from Wk 5. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Front Squat",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Higher-rep quad work. Upright torso, full depth.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Romanian Deadlift (light)",
              "sets": "2",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "DELOAD — hip-ext.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "BW Squat",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal bilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Lying Hamstring Curl",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Light knee-flex.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BW Lunge",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal unilateral quad.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Back Extension (BW)",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Lying Hamstring Curl (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • KB Windmill (light) — 5/side — DELOAD.\n  • Plank — 45 sec — BW.\n  • Sit-Up — 15 reps — BW.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 7,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 7 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Pendlay Row",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Explosive unsupported horizontal pull from dead stop. Core demand, novel motor pattern vs Block 1 supported row.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Incline BB Bench (paused)",
              "sets": "3",
              "reps": "10",
              "tempo": "3110",
              "rest": "60s",
              "notes": "Horizontal push, 1s chest pause.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Kroc Row (heavy DB)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull, heavy and fast.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Pseudo-Planche Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Vertical/angled push, lean forward.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Band-Assisted One-Arm Pull-Up Negative",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "5010",
              "rest": "90s",
              "notes": "Vertical pull, 5s eccentric.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Spider Curl",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Incline bench, arms hang.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Svend Press (plate)",
              "sets": "3",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Inner pec squeeze.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Sit-Up (overhead) — 12 reps — KB overhead.\n  • Hanging Leg Raise — 12 reps — Strict.\n  • Cable Pallof Press — 10/side — Anti-rotation.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 7 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Barbell Good Morning",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Bar on back shifts load angle vs RDL. Hits hamstrings in a more stretched position at hip flexion. Keep load conservative.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Hack Squat",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Bilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Seated Hamstring Curl",
              "sets": "3",
              "reps": "12",
              "tempo": "2012",
              "rest": "90s",
              "notes": "Knee-flexion hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Jumping Lunge",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "10X0",
              "rest": "60s",
              "notes": "Unilateral explosive quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Banded Good Morning",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension, band tension.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Bulgarian Split Squat (light, slow)",
              "sets": "3",
              "reps": "12/leg",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Unilateral work.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Step-Up (high box)",
              "sets": "3",
              "reps": "8/leg",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Per leg.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 7 min:\n  8 Thrusters (light BB) → 10 Burpees Over Bar",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Unbroken thrusters.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 7 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Push Press (BB)",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Block 2 opener.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Power Clean 3 reps → 250m Row → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Cable Y-Raise (lower trap)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Scap plane pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Banded Push-Up (parallettes)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Horizontal push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Spider Curl (DB)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "45s",
              "notes": "Elbow flexion, arms-down stretch.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Overhead DB Tricep Ext (single arm)",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "75s",
              "notes": "Elbow extension, stretched.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Prone Y-T-W Raise",
              "sets": "3",
              "reps": "8 each",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Light DBs.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Arnold Press (DB)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Rotation through press.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Bottoms-Up Press + Carry — 5 press + 20 sec carry/side — Press then walk.\n  • Side Plank (weighted) — 30 sec/side — DB on hip.\n  • Reverse Crunch — 15 reps — Lift hips.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 7 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "DB Floor Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Floor stops elbows at 90° — lockout-biased, increased tricep contribution, reduced shoulder stress. Different ROM stimulus vs incline.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Yates Row (underhand BB)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull, underhand.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Wide-Grip Pull-Up (weighted)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, width focus.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Low-Incline DB Press",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Horizontal push.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Tate Press (DB)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Elbows out.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Kroc Row (heavy DB)",
              "sets": "3",
              "reps": "15/side",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Heavy, controlled cheat.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: Ring Row // Push-Up",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "BW max reps.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 7 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Belt Squat",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Zero axial spinal load after heavy deadlifts. Isolates quad drive. Novel stimulus vs front squat.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Stiff-Leg BB Deadlift",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Jumping Lunge",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "10X0",
              "rest": "90s",
              "notes": "Unilateral explosive quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Nordic Curl (slow ecc)",
              "sets": "3",
              "reps": "10",
              "tempo": "5010",
              "rest": "60s",
              "notes": "Knee-flex hamstring, 5s down.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Hack Squat (moderate)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Bilateral quad.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Kettlebell Swing (heavy)",
              "sets": "4",
              "reps": "15",
              "tempo": "-",
              "rest": "60s",
              "notes": "Hip-snap.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Seated Hamstring Curl (1.5 reps)",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "60s",
              "notes": "½ + full = 1.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Single-Arm Overhead Carry — 30 sec/side — Locked out.\n  • Pallof Press (cable) — 12/side — Anti-rotation.\n  • Toes-to-Bar — 10 reps — Strict.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 8,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 8 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Pendlay Row",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Explosive unsupported horizontal pull from dead stop. Core demand, novel motor pattern vs Block 1 supported row.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Flat DB Press (floor press variation)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push, floor stops elbow.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Seal Row",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull, fully supported.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Band-Resisted Push-Up (parallettes)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical/scap-heavy push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Chin-Up (weighted)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Bayesian Curl (cable behind)",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Behind-body stretch.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Machine Incline Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Upper pec.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Russian Twist — 30 reps (15/side) — Heavy.\n  • Toes-to-Bar — 10 reps — Strict.\n  • Weighted Decline Sit-Up — 15 reps — DB on chest.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 8 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Barbell Good Morning",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Bar on back shifts load angle vs RDL. Hits hamstrings in a more stretched position at hip flexion. Keep load conservative.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press (high stance)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Bilateral, glute/ham bias cue, still quad-priority.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Lying Hamstring Curl (1.5 reps)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Knee-flexion, half+full.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BW Pistol Squat",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "KB Single-Leg RDL",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Unilateral hip-extension hamstring.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Reverse Hyperextension",
              "sets": "3",
              "reps": "12",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Posterior chain.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Leg Extension (drop set)",
              "sets": "3",
              "reps": "12",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Drop set final.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Assault Bike (or row) — max cal each interval",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Single-modality all out.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 8 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Standing Overhead Press (BB)",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Strict, push load.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Push Press 5 reps → 20 cal Ski Erg → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Reverse Pec Deck (heavy)",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Horizontal rear-delt pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette Dip (upright torso)",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Vertical push, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Cable Curl (rope, spread at top)",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "45s",
              "notes": "Elbow flexion.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Tricep Kickback (DB)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "75s",
              "notes": "Elbow extension, humerus locked.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Reverse Fly",
              "sets": "3",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Constant tension.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Cable Y-Raise",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Lower trap + side.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Farmer Carry (heavy) — 40m — Two KBs.\n  • Pallof Hold (cable) — 20 sec/side — Static.\n  • Weighted Sit-Up — 15 reps — Heavy.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 8 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "DB Floor Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Floor stops elbows at 90° — lockout-biased, increased tricep contribution, reduced shoulder stress. Different ROM stimulus vs incline.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Chest-Supported BB Row (paused)",
              "sets": "3",
              "reps": "10",
              "tempo": "2110",
              "rest": "60s",
              "notes": "Horizontal pull, 1s top pause.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Standing DB Push Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push with leg drive.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Neutral-Grip Chin-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, AMRAP.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Deficit Push-Up",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Horizontal push, extra ROM.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Single-Arm Overhead Cable Ext.",
              "sets": "3",
              "reps": "12 per arm",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Stretch focus.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Cable Row (wide grip)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Upper back focus.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 7 min:\n  6 Pull-Ups → 12 Push-Ups → 18 Air Squats",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Score = rounds.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 8 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "6",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Restart ~75% 1RM. Add 5 lb each week. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Belt Squat",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Block 2 — add weight vs Block 1. | Block 2 swap. Zero axial spinal load after heavy deadlifts. Isolates quad drive. Novel stimulus vs front squat.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Deficit RDL (1\" plate)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring, extra ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "BW Pistol Squat",
              "sets": "3",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Seated Hamstring Curl (1.5 reps)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Knee-flex, half+full.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Bulgarian Split Squat (paused)",
              "sets": "3",
              "reps": "10",
              "tempo": "3210",
              "rest": "90s",
              "notes": "Unilateral quad, 2s bottom.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Good Morning (BB, light)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Kettlebell Swing",
              "sets": "3",
              "reps": "20",
              "tempo": "-",
              "rest": "60s",
              "notes": "Hip hinge power.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Windmill (heavy) — 6/side — Heavy.\n  • Hollow Hold (rocking) — 30 sec — Rock front to back.\n  • Cable Crunch — 15 reps — Hips back.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 9,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 9 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "5",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Classic 5x5. Push beyond Block 1 top loads. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Pendlay Row",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate-heavy. | Block 2 swap. Explosive unsupported horizontal pull from dead stop. Core demand, novel motor pattern vs Block 1 supported row.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Incline DB Press (heavy)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "T-Bar Row",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Handstand Push-Up",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical push, AMRAP (or pike sub).",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "21s (Barbell Curl)",
              "sets": "3",
              "reps": "21",
              "tempo": "2010",
              "rest": "90s",
              "notes": "7+7+7.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Low-to-High Cable Fly",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Upper pec.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Windmill — 6/side — KB overhead, hinge.\n  • Dragon Flag — 6 reps — Or eccentric only.\n  • Cable Crunch (drop set) — 12+12 — Drop weight 30%.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 9 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "5",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Classic 5x5. Push beyond Block 1 top loads. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Barbell Good Morning",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate-heavy. | Block 2 swap. Bar on back shifts load angle vs RDL. Hits hamstrings in a more stretched position at hip flexion. Keep load conservative.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Belt Squat (heavy)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Bilateral quad, back-friendly.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Nordic Curl",
              "sets": "4",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Knee-flexion hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Walking Lunge (long stride)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Stiff-Leg BB Deadlift",
              "sets": "4",
              "reps": "12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension hamstring.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Single-Leg Press",
              "sets": "4",
              "reps": "10/leg",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Unilateral quad.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Spanish Squat (band)",
              "sets": "3",
              "reps": "12",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Quad/knee-friendly.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (IWT) — IWT — 5 rounds, 75s rest:\n  5 Power Cleans + 12 cal Bike",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Moderate-heavy cleans.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 9 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Seated DB Shoulder Press (heavy)",
              "sets": "5",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Classic 5x5. Push beyond Block 1 top loads. | Heavy DBs.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Hang Power Clean 3 reps → 15 cal Bike (max effort) → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Cable Rear Delt Row (high elbow)",
              "sets": "4",
              "reps": "15",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Horizontal rear-delt pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU (deficit)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "75s",
              "notes": "Vertical push, extra ROM.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Concentration Curl",
              "sets": "4",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "45s",
              "notes": "Elbow flexion, per arm.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Parallette Dip",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Elbow extension, upright.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "BB Shrug (heavy)",
              "sets": "4",
              "reps": "10",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Push weight.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "DB Lateral Raise (heavy partials)",
              "sets": "3",
              "reps": "12",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Last 5 as partials.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Overhead Carry — 40 sec/side — Heavier.\n  • Side Plank with Hip Dip — 12/side — Active obliques.\n  • Hanging Leg Raise — 12 reps — Strict.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 9 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "5",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Classic 5x5. Push beyond Block 1 top loads. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "DB Floor Press",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate-heavy. | Block 2 swap. Floor stops elbows at 90° — lockout-biased, increased tricep contribution, reduced shoulder stress. Different ROM stimulus vs incline.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Pendlay Row (heavy)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Banded DB Overhead Press",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Weighted Chin-Up (cluster)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, 3+3+3.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Push-Up (slow eccentric)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "5010",
              "rest": "90s",
              "notes": "Horizontal push, 5s down.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Close-Grip Floor Press",
              "sets": "3",
              "reps": "8",
              "tempo": "2110",
              "rest": "90s",
              "notes": "1 sec pause.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Face Pull (high to low)",
              "sets": "3",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Rear delt + upper back.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (IWT) — IWT — 5 rounds, 75s rest:\n  5 Hang Power Cleans + 200m Row",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Moderate.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 9 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "5",
              "reps": "5",
              "tempo": "2010",
              "rest": "3 min",
              "notes": "Classic 5x5. Push beyond Block 1 top loads. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Belt Squat",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Moderate-heavy. | Block 2 swap. Zero axial spinal load after heavy deadlifts. Isolates quad drive. Novel stimulus vs front squat.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Snatch-Grip Deadlift (light)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Hip-ext + posterior chain.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Belt Squat (heavy)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Bilateral quad, back-friendly.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Nordic Curl (BW)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Knee-flex hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Sissy Squat (weighted)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Quad stretch.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Reverse Hyper (drop set last)",
              "sets": "4",
              "reps": "12",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Drop set.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Hamstring Curl (drop set)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Drop set final.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Turkish Get-Up — 4/side — Heavier.\n  • Side Plank with Reach — 10/side — Active obliques.\n  • Dragon Flag — 6 reps — Or eccentric.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 10,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 10 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "4",
              "reps": "4",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavier — ~85% 1RM. Add back-off set 8 reps @ 70%. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Pendlay Row",
              "sets": "4",
              "reps": "8",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Push weight, still RPE 7-8. | Block 2 swap. Explosive unsupported horizontal pull from dead stop. Core demand, novel motor pattern vs Block 1 supported row.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Weighted Dip (drop set last)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Angled push, drop to BW.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Pendlay Row",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull, explosive.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Plyo Push-Up (clap or hand release)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "10X0",
              "rest": "60s",
              "notes": "Horizontal explosive push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (weighted, drop to BW last)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Curl (drop set last)",
              "sets": "4",
              "reps": "10-12",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Drop set on final.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Pec Deck (drop set)",
              "sets": "3",
              "reps": "12-15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Drop set final.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Halo — 12 reps — Heavier KB.\n  • Hanging Windshield Wiper — 12 reps (6/side) — Strict.\n  • Ab Wheel Rollout (from feet) — 6-8 reps — Advanced.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 10 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "4",
              "reps": "4",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavier — ~85% 1RM. Add back-off set 8 reps @ 70%. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Barbell Good Morning",
              "sets": "4",
              "reps": "8",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Push weight, still RPE 7-8. | Block 2 swap. Bar on back shifts load angle vs RDL. Hits hamstrings in a more stretched position at hip flexion. Keep load conservative.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Hack Squat (drop set last)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Bilateral quad, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Seated Hamstring Curl",
              "sets": "4",
              "reps": "10-12",
              "tempo": "2012",
              "rest": "90s",
              "notes": "Knee-flexion hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette Sissy Squat (weighted)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Quad stretch, plate held.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Single-Leg Back Extension",
              "sets": "4",
              "reps": "10-12",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Hip-extension hamstring, unilateral.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Cable Pull-Through",
              "sets": "4",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Posterior chain.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Leg Extension (slow eccentric)",
              "sets": "3",
              "reps": "10",
              "tempo": "4011",
              "rest": "60s",
              "notes": "4 sec down.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 10 min:\n  15 KB Swings → 10 Goblet Lunges → 200m Row",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Score = rounds.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 10 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Push Jerk (BB)",
              "sets": "4",
              "reps": "4",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavier — ~85% 1RM. Add back-off set 8 reps @ 70%. | Dip-drive-catch in quarter squat.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Push Jerk (heavy) 3 reps → 15 cal Ski Erg → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Band Pull-Apart (drop tension last)",
              "sets": "4",
              "reps": "12-15",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Scap plane pull, drop set.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU → Pike (mech drop)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Vertical push, failure drop.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Barbell Curl (21s)",
              "sets": "4",
              "reps": "10-12",
              "tempo": "2010",
              "rest": "60s",
              "notes": "7 lower + 7 upper + 7 full.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Close-Grip Bench → Parallette Dip (mech drop)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Elbow extension drop.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Reverse Pec Deck (drop set last)",
              "sets": "4",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Drop set on final.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Lateral Raise (drop set)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Drop set final.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Suitcase Deadlift + Carry — 5 DL + 30 sec carry/side — Combo.\n  • Cable Pallof Press (heavy) — 12/side — Push weight.\n  • Ab Wheel Rollout — 10 reps — Full ROM.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 10 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "4",
              "reps": "4",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavier — ~85% 1RM. Add back-off set 8 reps @ 70%. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "DB Floor Press",
              "sets": "4",
              "reps": "8",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Push weight, still RPE 7-8. | Block 2 swap. Floor stops elbows at 90° — lockout-biased, increased tricep contribution, reduced shoulder stress. Different ROM stimulus vs incline.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Meadows Row (drop set last)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Parallette HSPU (drop to pike)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Vertical push, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (weighted → BW drop)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical pull, drop weight at failure.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Cable Fly (drop set last)",
              "sets": "4",
              "reps": "12-15",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Horizontal push, drop final.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Dip (weighted, drop set last)",
              "sets": "4",
              "reps": "8-10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Drop to BW last set.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Lat Pulldown (drop set)",
              "sets": "3",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Drop set final.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: Battle Ropes // Box Jumps",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Max reps.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 10 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "4",
              "reps": "4",
              "tempo": "2010",
              "rest": "3-4 min",
              "notes": "Heavier — ~85% 1RM. Add back-off set 8 reps @ 70%. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Belt Squat",
              "sets": "4",
              "reps": "8",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Push weight, still RPE 7-8. | Block 2 swap. Zero axial spinal load after heavy deadlifts. Isolates quad drive. Novel stimulus vs front squat.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Trap-Bar RDL (heavy)",
              "sets": "4",
              "reps": "8",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press (drop set last)",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Bilateral quad, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Lying Hamstring Curl (drop set last)",
              "sets": "4",
              "reps": "10-12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Knee-flex, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Deficit DB Reverse Lunge",
              "sets": "4",
              "reps": "8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Unilateral quad, front foot on plate.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Trap-Bar RDL",
              "sets": "4",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Posterior chain.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Good Morning (light)",
              "sets": "3",
              "reps": "10",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hinge pattern.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Bent Press OR Windmill — 5/side — Slow controlled.\n  • Plank with Plate Drag (heavier) — 14 drags — Heavier.\n  • V-Ups (weighted) — 12 reps — DB between feet.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 11,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 11 — Upper Day 1 (Heavy Chest + Light Back)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "5",
              "reps": "3",
              "tempo": "20X0 (X=explosive)",
              "rest": "4 min",
              "notes": "Peak loading. ~90% 1RM. Optional: test 1RM. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Pendlay Row",
              "sets": "4",
              "reps": "8 + drop set last",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Drop set on final set. | Block 2 swap. Explosive unsupported horizontal pull from dead stop. Core demand, novel motor pattern vs Block 1 supported row.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Floor DB Press",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Meadows Row (drop set last)",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Horizontal pull per side, drop set.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Parallette HSPU → Pike Push-Up (mech drop)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Vertical push, failure drop.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Archer Pull-Up",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Vertical pull, unilateral bias.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Concentration Curl",
              "sets": "4",
              "reps": "10 per arm",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Peak contraction.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "DB Squeeze Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DBs pressed together.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Turkish Sit-Up — 5/side — KB pressed, sit up to elbow.\n  • Toes-to-Bar (cluster) — 5+5 reps, 15s rest — Two mini-sets.\n  • Cable Woodchopper (heavy) — 10/side — Heavy.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 11 — Lower Day 1 (Heavy Quad + Light Ham)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "5",
              "reps": "3",
              "tempo": "20X0 (X=explosive)",
              "rest": "4 min",
              "notes": "Peak loading. ~90% 1RM. Optional: test 1RM. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Barbell Good Morning",
              "sets": "4",
              "reps": "8 + drop set last",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Drop set on final set. | Block 2 swap. Bar on back shifts load angle vs RDL. Hits hamstrings in a more stretched position at hip flexion. Keep load conservative.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press (drop set last)",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Bilateral quad, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Lying Hamstring Curl (drop set last)",
              "sets": "4",
              "reps": "10",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Knee-flexion, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Box Jump",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "10X0",
              "rest": "60s",
              "notes": "Explosive quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "KB Swing (heavy)",
              "sets": "4",
              "reps": "10",
              "tempo": "-",
              "rest": "90s",
              "notes": "Hip-extension, ballistic.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Sled Push (heavy)",
              "sets": "4",
              "reps": "20m",
              "tempo": "-",
              "rest": "90s",
              "notes": "Quad/glute conditioning.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Hack Squat (light, high rep)",
              "sets": "3",
              "reps": "15",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Pump work.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (TABATA) — TABATA — 4 min:\n  Alternate: Wallball // Cal Row",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Max reps.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 11 — Accessory (Shoulder Strength + IWT)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "Standing Overhead Press (BB)",
              "sets": "5",
              "reps": "3",
              "tempo": "20X0 (X=explosive)",
              "rest": "4 min",
              "notes": "Peak loading. ~90% 1RM. Optional: test 1RM. | Peak strict press. RPE 8-9.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: Power Snatch 2 reps (heavy) → 250m Row sprint → rest",
              "sets": "5 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "60s",
              "notes": "5 rounds. Per round: Lift → Cardio → 60s rest. Pick a weight you can sustain clean across all 5 rounds.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Chest-Supported DB Rear Fly (drop set last)",
              "sets": "4",
              "reps": "12",
              "tempo": "2011",
              "rest": "45s",
              "notes": "Horizontal pull, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Archer Parallette Push-Up",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "75s",
              "notes": "Unilateral push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Incline DB Curl (drop set last)",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "2010",
              "rest": "45s",
              "notes": "Elbow flexion, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Diamond Push-Up → Standard (mech drop)",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "2010",
              "rest": "75s",
              "notes": "Elbow extension drop.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Inverted Row (rear delt wide grip)",
              "sets": "3",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "High elbows.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "Machine Shoulder Press",
              "sets": "3",
              "reps": "10",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Safe overhead.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Bottoms-Up Carry — 30 sec/side — Grip + core.\n  • Side Plank (weighted, drop) — 30 sec/side then BW 15s — Drop weight.\n  • Dragon Flag — 6 reps — Or eccentric.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 11 — Upper Day 2 (Heavy Back + Light Chest)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "5",
              "reps": "3",
              "tempo": "20X0 (X=explosive)",
              "rest": "4 min",
              "notes": "Peak loading. ~90% 1RM. Optional: test 1RM. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "DB Floor Press",
              "sets": "4",
              "reps": "8 + drop set last",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Drop set on final set. | Block 2 swap. Floor stops elbows at 90° — lockout-biased, increased tricep contribution, reduced shoulder stress. Different ROM stimulus vs incline.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Seal Row (heavy)",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Horizontal pull, supported heavy.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Push Jerk",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "10X0",
              "rest": "90s",
              "notes": "Vertical push, explosive.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Archer Pull-Up",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Vertical pull, unilateral bias.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Plyo Parallette Push-Up",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "10X0",
              "rest": "90s",
              "notes": "Horizontal push, explosive.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Skullcrusher → Close-Grip Press",
              "sets": "4",
              "reps": "8+8",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Mechanical drop set.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Single-Arm Lat Pulldown",
              "sets": "3",
              "reps": "10/side",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Full ROM.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (AMRAP) — AMRAP 10 min:\n  10 KB Swings → 8 Renegade Rows → 12 Push-Ups",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Score = rounds.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 11 — Lower Day 2 (Heavy Hinge + Light Quad)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "5",
              "reps": "2",
              "tempo": "20X0 (X=explosive)",
              "rest": "4 min",
              "notes": "Peak loading. ~90% 1RM. Optional: test 1RM. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Belt Squat",
              "sets": "4",
              "reps": "8 + drop set last",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Drop set on final set. | Block 2 swap. Zero axial spinal load after heavy deadlifts. Isolates quad drive. Novel stimulus vs front squat.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "RDL (drop set last)",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "3010",
              "rest": "60s",
              "notes": "Hip-ext hamstring, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Box Jump",
              "sets": "4",
              "reps": "AMRAP",
              "tempo": "10X0",
              "rest": "90s",
              "notes": "Bilateral explosive quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Seated Hamstring Curl (drop set last)",
              "sets": "4",
              "reps": "10",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Knee-flex, drop final.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Leg Press (heavy 6 → 15 drop)",
              "sets": "4",
              "reps": "6-8 (drop set last)",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Bilateral quad, mech drop.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Single-Leg Hip Thrust (drop set last)",
              "sets": "4",
              "reps": "10/leg",
              "tempo": "2012",
              "rest": "60s",
              "notes": "Drop set.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Single-Leg RDL (slow)",
              "sets": "3",
              "reps": "8/leg",
              "tempo": "3011",
              "rest": "60s",
              "notes": "Balance + hinge.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Kettlebell Turkish Get-Up (heavy) — 3/side — Heaviest TGU.\n  • Ab Wheel Rollout (drop set) — 8 reps + 5 from knees — Feet then knees.\n  • Hanging Leg Raise — 12 reps — Strict.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    },
    {
      "week": 12,
      "days": [
        {
          "dayAbbr": "Mon",
          "day": "Monday",
          "label": "Upper Day 1",
          "title": "WEEK 12 — Upper Day 1 (Heavy Chest + Light Back)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Barbell Bench Press",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight. Recover. | Top set RPE 7-8. Add 2.5-5 lb when all reps clean.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Pendlay Row",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Block 2 swap. Explosive unsupported horizontal pull from dead stop. Core demand, novel motor pattern vs Block 1 supported row.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Bench Press",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "DELOAD — light horizontal push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Inverted Row (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Submaximal horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pike Push-Up",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "60s",
              "notes": "BW vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal vertical pull.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "DB Curl",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Chest",
              "exercise": "Cable Fly (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Plank — 45 sec — DELOAD.\n  • Bird Dog — 10/side — Light.\n  • Dead Bug — 10/side — Light.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Tue",
          "day": "Tuesday",
          "label": "Lower Day 1",
          "title": "WEEK 12 — Lower Day 1 (Heavy Quad + Light Ham)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Back Squat",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight. Recover. | Top set RPE 7-8. Drive knees out, hit depth.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Barbell Good Morning",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Block 2 swap. Bar on back shifts load angle vs RDL. Hits hamstrings in a more stretched position at hip flexion. Keep load conservative.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Leg Press",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Lying Hamstring Curl",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Light.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BW Reverse Lunge",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Submaximal unilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Bodyweight Good Morning",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "3010",
              "rest": "90s",
              "notes": "Light hip-extension.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Hip Abduction Machine",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Quad",
              "exercise": "Leg Extension (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (EASY) — Easy Aerobic 8 min:\n  8 min easy bike or row, conversational",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "DELOAD.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Wed",
          "day": "Wednesday",
          "label": "Accessory",
          "title": "WEEK 12 — Accessory (Shoulder Strength + IWT)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Shoulder)",
              "exercise": "DB Shoulder Press (light)",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight. Recover. | DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (IWT)",
              "exercise": "IWT: BB Front Squat 5 reps (light) → 200m Row easy → rest",
              "sets": "3 rounds",
              "reps": "-",
              "tempo": "controlled",
              "rest": "90s",
              "notes": "DELOAD: 3 rounds, light loads, easy pace.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Face Pull",
              "sets": "2",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Pike Push-Up",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "75s",
              "notes": "BW vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "DB Curl",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Light elbow flexion.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Tricep Pushdown",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "75s",
              "notes": "Light elbow extension.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Face Pull",
              "sets": "2",
              "reps": "15",
              "tempo": "2012",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Shoulder",
              "exercise": "DB Lateral Raise (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • Suitcase Carry (light) — 30 sec/side — DELOAD.\n  • Pallof Press (light) — 8/side — Light.\n  • Plank — 45 sec — BW.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Thu",
          "day": "Thursday",
          "label": "Upper Day 2",
          "title": "WEEK 12 — Upper Day 2 (Heavy Back + Light Chest)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Weighted Pull-Up",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight. Recover. | Add weight via belt. Sub lat pulldown if <5 strict BW.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "DB Floor Press",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Block 2 swap. Floor stops elbows at 90° — lockout-biased, increased tricep contribution, reduced shoulder stress. Different ROM stimulus vs incline.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Inverted Row (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2011",
              "rest": "90s",
              "notes": "Submaximal horizontal pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "DB Overhead Press (light)",
              "sets": "2",
              "reps": "10",
              "tempo": "2010",
              "rest": "90s",
              "notes": "DELOAD — vertical push.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Pull-Up (BW)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "60s",
              "notes": "Submaximal vertical pull.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Push-Up (parallettes)",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal horizontal push.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Tricep Pushdown",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Back",
              "exercise": "Lat Pulldown (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "METCON (EASY) — Easy Aerobic 8 min:\n  8 min easy ski erg or row",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "DELOAD.",
              "isFinisher": true
            }
          ]
        },
        {
          "dayAbbr": "Fri",
          "day": "Friday",
          "label": "Lower Day 2",
          "title": "WEEK 12 — Lower Day 2 (Heavy Hinge + Light Quad)  (DELOAD)",
          "exercises": [
            {
              "block": "STRENGTH (Heavy)",
              "exercise": "Conventional Deadlift",
              "sets": "2",
              "reps": "5",
              "tempo": "2010",
              "rest": "2 min",
              "notes": "DELOAD: 60% top weight. Recover. | Top set RPE 8. Reset every rep, no touch-and-go.",
              "isBonus": false
            },
            {
              "block": "STRENGTH (Light)",
              "exercise": "Belt Squat",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "90s",
              "notes": "DELOAD — light, full ROM. | Block 2 swap. Zero axial spinal load after heavy deadlifts. Isolates quad drive. Novel stimulus vs front squat.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "Romanian Deadlift (light)",
              "sets": "2",
              "reps": "10",
              "tempo": "3010",
              "rest": "90s",
              "notes": "DELOAD — hip-ext.",
              "isBonus": false
            },
            {
              "block": "SUPERSET A",
              "exercise": "BW Squat",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal bilateral quad.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "Lying Hamstring Curl",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "Light knee-flex.",
              "isBonus": false
            },
            {
              "block": "SUPERSET B",
              "exercise": "BW Lunge",
              "sets": "2",
              "reps": "AMRAP-2",
              "tempo": "2010",
              "rest": "90s",
              "notes": "Submaximal unilateral quad.",
              "isBonus": false
            },
            {
              "block": "ACCESSORY",
              "exercise": "Back Extension (BW)",
              "sets": "2",
              "reps": "12",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": false
            },
            {
              "block": "BONUS (Optional) — Posterior Chain",
              "exercise": "Hamstring Curl (light)",
              "sets": "2",
              "reps": "15",
              "tempo": "2011",
              "rest": "60s",
              "notes": "DELOAD — light.",
              "isBonus": true
            },
            {
              "block": "FINISHER",
              "exercise": "AB ROUTINE — 3 rounds, 60s rest between rounds:\n  • KB Windmill (light) — 5/side — DELOAD.\n  • Plank — 45 sec — BW.\n  • Sit-Up — 15 reps — BW.",
              "sets": "",
              "reps": "",
              "tempo": "",
              "rest": "",
              "notes": "Includes Kettlebell movement.",
              "isFinisher": true
            }
          ]
        }
      ]
    }
  ],
  "tracker": {
    "lifts": [
      {
        "lift": "Bench Press (Heavy)",
        "day": "Mon"
      },
      {
        "lift": "Chest-Supported Row (Light)",
        "day": "Mon"
      },
      {
        "lift": "Back Squat (Heavy)",
        "day": "Tue"
      },
      {
        "lift": "Romanian Deadlift (Light)",
        "day": "Tue"
      },
      {
        "lift": "Shoulder Press (Heavy)",
        "day": "Wed"
      },
      {
        "lift": "Weighted Pull-Up (Heavy)",
        "day": "Thu"
      },
      {
        "lift": "Incline DB Press (Light)",
        "day": "Thu"
      },
      {
        "lift": "Deadlift (Heavy)",
        "day": "Fri"
      },
      {
        "lift": "Front Squat (Light)",
        "day": "Fri"
      }
    ],
    "deloadWeeks": [
      4,
      8,
      12
    ],
    "notes": "Block 1 (W1-6): build base. Block 2 (W7-12): exceed Block 1 top loads. Log top set as \"weight x reps\" (e.g. \"185x5\")."
  }
};
