"""Field Atlas data checker and fact register.

Usage (from the project folder):
  python tools/check_data.py            check data/facts.json: missing sources, old dates, broken links;
                                        then write tools/facts-register.csv (open it in Excel or Google Sheets)
  python tools/check_data.py --offline  same, without testing the links
  python tools/check_data.py --import   read tools/facts-register.csv back into data/facts.json
                                        (the teacher edits the "status", "checked" and "note" columns)

status values: teacher (confirmed by the school), source (matches an official source), unverified.
A fact is flagged "old" when it was last checked more than 12 months ago — re-check it before each admissions year.
"""
import csv, json, sys, datetime, urllib.request, ssl
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FACTS = ROOT / 'data' / 'facts.json'
CSV = ROOT / 'tools' / 'facts-register.csv'
STATUSES = {'teacher', 'source', 'unverified'}
COLS = ['id', 'status', 'checked', 'en', 'ar', 'source_name', 'source_url', 'pages', 'note']


def load():
    return json.loads(FACTS.read_text(encoding='utf-8'))


def link_ok(url):
    ctx = ssl.create_default_context()   # normal certificate checks; a site with a broken certificate is reported, not skipped
    req = urllib.request.Request(url, method='GET', headers={'User-Agent': 'Mozilla/5.0 (FieldAtlasLinkCheck/1.0)'})
    try:
        with urllib.request.urlopen(req, timeout=15, context=ctx) as r:
            return r.status < 400
    except Exception:
        return False


def check(offline=False):
    data = load()
    today = datetime.date.today()
    problems = []
    for f in data['facts']:
        fid = f.get('id', '?')
        if f.get('status') not in STATUSES:
            problems.append(f'{fid}: unknown status "{f.get("status")}"')
        src = f.get('src') or []
        if len(src) < 2 or not str(src[1]).startswith('https://'):
            problems.append(f'{fid}: missing or non-https source')
        try:
            d = datetime.date.fromisoformat(f.get('checked', ''))
            if (today - d).days > 365:
                problems.append(f'{fid}: old — last checked {d}')
        except ValueError:
            problems.append(f'{fid}: missing "checked" date')
        if not f.get('en') or not f.get('ar'):
            problems.append(f'{fid}: missing English or Arabic label')
        if not offline and len(src) > 1 and str(src[1]).startswith('https://') and not link_ok(src[1]):
            problems.append(f'{fid}: link does not open — {src[1]}')
    unverified = [f['id'] for f in data['facts'] if f.get('status') == 'unverified']
    print(f'{len(data["facts"])} facts · {len(unverified)} not yet verified: {", ".join(unverified) or "none"}')
    print('\n'.join(problems) if problems else 'No problems found.')
    write_csv(data)
    return 1 if problems else 0


def write_csv(data):
    with CSV.open('w', newline='', encoding='utf-8-sig') as fh:
        w = csv.DictWriter(fh, fieldnames=COLS)
        w.writeheader()
        for f in data['facts']:
            w.writerow({'id': f['id'], 'status': f.get('status', ''), 'checked': f.get('checked', ''), 'en': f.get('en', ''), 'ar': f.get('ar', ''),
                        'source_name': (f.get('src') or ['', ''])[0], 'source_url': (f.get('src') or ['', ''])[1],
                        'pages': ' '.join(f.get('pages', [])), 'note': f.get('note', '')})
    print(f'Fact register written: {CSV.relative_to(ROOT)}')


def import_csv():
    data = load()
    by_id = {f['id']: f for f in data['facts']}
    with CSV.open(encoding='utf-8-sig') as fh:
        for row in csv.DictReader(fh):
            f = by_id.get(row['id'])
            if not f:
                print(f'skip unknown id {row["id"]}'); continue
            if row['status'] in STATUSES:
                f['status'] = row['status']
            if row.get('checked'):
                f['checked'] = row['checked']
            if row.get('source_name') and row.get('source_url'):
                f['src'] = [row['source_name'], row['source_url']]
            f['note'] = row.get('note', '')
    FACTS.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print('data/facts.json updated from the register. Bump the ?v= numbers in index.html, then publish.')


if __name__ == '__main__':
    if '--import' in sys.argv:
        import_csv()
    else:
        sys.exit(check(offline='--offline' in sys.argv))
