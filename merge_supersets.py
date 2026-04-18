import json, re
import pandas as pd

with open('data.js', 'r', encoding='utf-8') as f:
    raw = f.read()
json_str = re.sub(r'^const PROGRAM\s*=\s*', '', raw.strip()).rstrip(';').rstrip()
program = json.loads(json_str)

xl = pd.read_excel('../12_Week_Upper_Lower_Program.xlsx', sheet_name=None)

updated = 0
for sheet_name, df in xl.items():
    if sheet_name in ['Overview', 'Weekly Tracker']:
        continue
    parts = sheet_name.split(' ')
    week_num = int(parts[0][1:])
    day_abbr = parts[1]

    ss_mask = df.iloc[:, 0].astype(str).str.contains('SUPERSET', na=False)
    ss_rows = df[ss_mask]
    if ss_rows.empty:
        continue

    def val(v):
        return str(v).strip() if pd.notna(v) and str(v) != 'nan' else ""

    new_ss = []
    for _, row in ss_rows.iterrows():
        new_ss.append({
            "block": val(row.iloc[0]),
            "exercise": val(row.iloc[1]),
            "sets": val(row.iloc[2]),
            "reps": val(row.iloc[3]),
            "tempo": val(row.iloc[4]),
            "rest": val(row.iloc[5]),
            "notes": val(row.iloc[6]),
            "isBonus": False
        })

    week_data = program['weeks'][week_num - 1]
    for day in week_data['days']:
        if day['dayAbbr'] != day_abbr:
            continue
        exs = day['exercises']
        first_ss = next((i for i, e in enumerate(exs) if 'SUPERSET' in e.get('block', '')), None)
        if first_ss is None:
            continue
        before = exs[:first_ss]
        after  = [e for e in exs[first_ss:] if 'SUPERSET' not in e.get('block', '')]
        day['exercises'] = before + new_ss + after
        updated += 1
        break

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const PROGRAM = ')
    json.dump(program, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f"Done — updated {updated} days.")
