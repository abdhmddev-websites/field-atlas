/* Field Atlas — "Decision balance": the student compares 2–5 majors using several voices
 * (own interest, test, grades, cost, parents, teacher, friends), each with a weight the student sets.
 * Result: a ranked list with the reasons, not a verdict. Saved only on this computer (localStorage).
 * Loaded after features.js and before app.js; helpers are read later from ATLAS.h.
 */
(function () {
const A = window.ATLAS;
A.ext = A.ext || { routes: {}, after: [] };
const H = () => A.h;
const $ = id => document.getElementById(id);
const S = (en, ar) => [en, ar];

Object.assign(A.extUI = A.extUI || {}, {
  navDecide: S('Decision balance', 'ميزان القرار'),
  gDecide: S('Weigh your options: you, your test, your grades, family, teacher and friends', 'زِن خياراتك: أنت واختبارك وعلاماتك وأهلك وأستاذك ورفاقك'),
  dTitle: S('Decision balance', 'ميزان القرار'),
  dText: S('Many voices help you choose: what you like, your test, your grades, the cost, your parents, your teacher, your friends. Here you decide how much each voice counts, rate each major, and see which one comes out on top — and why.', 'أصوات كثيرة تساعدك على الاختيار: ما تحبّه، واختبارك، وعلاماتك، والكلفة، وأهلك، وأستاذك، ورفاقك. هنا تقرّر أنت كم يُحسب كل صوت، وتقيّم كل اختصاص، وترى أيّها يتقدّم — ولماذا.'),
  d1: S('1. Choose 2 to 5 majors', '1. اختر من 2 إلى 5 اختصاصات'),
  d1t: S('The majors you added in step 2 are here. You can add more or remove some.', 'الاختصاصات التي أضفتها في الخطوة 2 موجودة هنا. يمكنك إضافة غيرها أو حذف بعضها.'),
  dAdd: S('Add a major…', 'أضف اختصاصًا…'), dRemove: S('Remove', 'احذف'), dMax: S('5 majors at most.', '5 اختصاصات كحدّ أقصى.'),
  d2: S('2. How much does each voice count for you?', '2. كم يُحسب كل صوت بالنسبة إليك؟'),
  d2t: S('Move the sliders. The percentages always add up to 100%. There is no right answer — but be honest.', 'حرّك المؤشّرات. النسب يكون مجموعها دائمًا 100%. لا جواب صحيح — لكن كن صادقًا.'),
  dReset: S('Back to the suggested weights', 'العودة إلى الأوزان المقترحة'),
  d3: S('3. Rate each major (1 = not at all, 5 = very much)', '3. قيّم كل اختصاص (1 = أبدًا، 5 = كثيرًا جدًا)'),
  d3t: S('Ask your parents, teacher and friends, then fill in what they really think. Leave "–" if you do not know yet.', 'اسأل أهلك وأستاذك ورفاقك، ثم املأ ما يفكّرون فيه فعلًا. اترك «–» إذا كنت لا تعرف بعد.'),
  dAuto: S('from your test', 'من اختبارك'),
  d4: S('4. Result', '4. النتيجة'),
  dNeed: S('Choose at least 2 majors and rate them to see the result.', 'اختر اختصاصين على الأقل وقيّمهما لترى النتيجة.'),
  dWhyUp: S('Pushed up by', 'رفعه'), dWhyDown: S('Held back by', 'أنزله'), dMissing: S('not rated yet', 'لم يُقيَّم بعد'),
  dBuild: S('Build my roadmap with this major', 'ابنِ طريقي بهذا الاختصاص'),
  dPressP: S('Your parents count for {n}% of your decision. Is this choice yours or theirs? Talk about it with them and with your teacher.', 'أهلك يمثّلون {n}% من قرارك. هل هذا الخيار لك أم لهم؟ تحدّث عن ذلك معهم ومع أستاذك.'),
  dPressF: S('Your friends count for {n}% of your decision. Will they study it with you for years? Think about what YOU want.', 'رفاقك يمثّلون {n}% من قرارك. هل سيدرسونه معك لسنوات؟ فكّر فيما تريده أنت.'),
  stDone: S('done', 'مُنجزة'), stLocked: S('locked: finish the step before', 'مقفلة: أنهِ الخطوة السابقة'),
  gTodo: S('To go on', 'لتتابع'),
  need0: S('answer all 60 questions of the test', 'أجب عن أسئلة الاختبار الستين كلها'),
  need1: S('add at least 2 majors: open a major and press «Add to my decision balance»', 'أضف اختصاصين على الأقل: افتح اختصاصًا واضغط «أضف إلى ميزان القرار»'),
  need2: S('rate your majors, then press «Build my roadmap with this major»', 'قيّم اختصاصاتك، ثم اضغط «ابنِ طريقي بهذا الاختصاص»'),
  need3: S('choose your major in «My roadmap»', 'اختر اختصاصك في «طريقي»'),
  gateT: S('This step is still locked', 'هذه الخطوة ما زالت مقفلة'),
  gateTxt: S('The path works in order, so each step uses what you did before. First finish step {n} — {name}:', 'المسار يسير بالترتيب، فكل خطوة تستعمل ما فعلته قبلها. أنهِ أولًا الخطوة {n} — {name}:'),
  gateGo: S('Go to step {n}', 'انتقل إلى الخطوة {n}'),
  dAddBtn: S('Add to my decision balance', 'أضف إلى ميزان القرار'), dAddShort: S('+ Decision balance', '+ ميزان القرار'),
  dAdded: S('✓ In my decision balance — go to step 3', '✓ في ميزان القرار — انتقل إلى الخطوة 3'), dAddedShort: S('✓ Added', '✓ أُضيف'),
  dFull: S('Your decision balance is full (5 majors)', 'ميزان القرار ممتلئ (5 اختصاصات)'),
  dList: S('My shortlist', 'لائحتي'), dGo3: S('Go to step 3: Decision balance', 'انتقل إلى الخطوة 3: ميزان القرار'), dNeed2: S('add at least 2 to go on', 'أضف اختصاصين على الأقل لتتابع'),
  dPressure: S('Your parents and friends count for {n}% of your decision. Is this choice yours or theirs? Talk about it with them and with your teacher.', 'أهلك ورفاقك يمثّلون {n}% من قرارك. هل هذا الخيار لك أم لهم؟ تحدّث عن ذلك معهم ومع أستاذك.'),
  dLowMe: S('Your own interest counts for less than 15%. You will study this for years: your interest matters.', 'اهتمامك أنت يُحسب أقل من 15%. ستدرس هذا لسنوات: اهتمامك مهمّ.'),
  dNote: S('This is a tool to think and talk, not a decision. Close results mean: explore both, visit, ask people who study them.', 'هذه أداة للتفكير والحوار، لا قرار. النتائج المتقاربة تعني: استكشف الاثنين، وزُر، واسأل من يدرسهما.'),
  dClose: S('These two are very close: explore both before deciding.', 'هذان متقاربان جدًا: استكشف الاثنين قبل أن تقرّر.'),
  fMe: S('How much I like it', 'كم أحبّه'), fTest: S('My test result', 'نتيجة اختباري'), fGrades: S('My grades & abilities in its subjects', 'علاماتي وقدراتي في موادّه'),
  fCost: S('Cost & country fit my family', 'الكلفة والبلد يناسبان عائلتي'), fParents: S('What my parents think', 'رأي أهلي'), fTeacher: S('What my teacher thinks', 'رأي أستاذي'), fFriends: S('What my friends think', 'رأي رفاقي')
});

const F = [['me', 'fMe', 25], ['test', 'fTest', 15], ['grades', 'fGrades', 20], ['cost', 'fCost', 10], ['parents', 'fParents', 15], ['teacher', 'fTeacher', 10], ['friends', 'fFriends', 5]];
const W0 = Object.fromEntries(F.map(([k, , w]) => [k, w]));
const KEY = 'fieldAtlasDecide';
let st = null;
function load() {
  if (st) return st;
  try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  if (!st || !Array.isArray(st.c)) st = { c: [], w: { ...W0 }, r: {}, seeded: false };
  st.w = { ...W0, ...st.w };
  return st;
}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };

/* test-based rating 1..5 (only when the test is complete) */
function testRate(fid, mid) {
  const h = H(); if (!h.testDone || !h.testDone()) return 0;
  const m = h.maj(h.fac(fid), mid); if (!m || !m.riasec) return 0;
  const f = h.fit(m.riasec, h.pScores());
  return Math.max(1, Math.min(5, Math.round(1 + f / 25)));
}
function seed() {
  const h = H(); if (st.seeded || !h.testDone || !h.testDone()) return;
  const pct = h.pScores(), all = [];
  h.faculties.forEach(f => f.majors.forEach(m => m.riasec && all.push({ k: f.id + '/' + m.id, s: h.fit(m.riasec, pct) })));
  all.sort((a, b) => b.s - a.s).slice(0, 3).forEach(x => { if (!st.c.includes(x.k)) st.c.push(x.k); });
  st.seeded = true; save();
}
function score(k) {
  const [fid, mid] = k.split('/'), r = st.r[k] || {};
  let s = 0, d = 0; const parts = [];
  F.forEach(([f]) => {
    const v = f === 'test' ? (testRate(fid, mid) || r.test || 0) : (r[f] || 0);
    if (!v || !st.w[f]) return;
    s += st.w[f] * (v - 1) / 4; d += st.w[f]; parts.push({ f, v, w: st.w[f] });
  });
  return { k, pct: d ? Math.round(s / d * 100) : null, parts, missing: F.filter(([f]) => st.w[f] && !(f === 'test' ? (testRate(fid, mid) || r.test) : r[f])).map(([f]) => f) };
}

/* ---------- ordered path: what counts as "done" for steps 1–4 ---------- */
A.decide = { add(k) { load(); if (!st.c.includes(k) && st.c.length < 5) { st.c.push(k); save(); } }, has(k) { return load().c.includes(k); }, list() { return load().c.slice(); } };
A.stepDone = i => {
  const h = H(); if (!h) return true;
  if (i === 0) return h.testDone();
  if (i === 1) return load().c.length >= 2;
  if (i === 2) return !!load().chosen;
  if (i === 3) return !!(h.rm && h.rm.mid);
  return true;
};
A.stepState = i => {
  if (i > 4) return '';
  for (let j = 0; j < i; j++) if (!A.stepDone(j)) return 'locked';
  return i < 4 && A.stepDone(i) ? 'done' : '';
};
A.gate = si => {
  if (si > 4) return null;
  const j = [0, 1, 2, 3].find(k => k < si && !A.stepDone(k)); if (j === undefined) return null;
  const h = H(), { u, esc } = h, P = h.PATH[j];
  return `<section class="view card gate"><div class="gate-ico" aria-hidden="true">🔒</div><h1>${esc(u('gateT'))}</h1>
    <p>${esc(u('gateTxt').replace('{n}', j + 1).replace('{name}', u(P.n)))}</p><p class="gate-need"><b>${esc(u('need' + j))}</b></p>
    <a class="btn" href="${P.h}">${esc(u('gateGo').replace('{n}', j + 1))}</a></section>`;
};
A.decideBtn = (f, m, small) => {
  const { u, esc } = H(), k = f.id + '/' + m.id, has = A.decide.has(k), full = !has && load().c.length >= 5;
  const label = has ? (small ? 'dAddedShort' : 'dAdded') : full ? 'dFull' : (small ? 'dAddShort' : 'dAddBtn');
  return `<button type="button" class="${small ? 'go linkbtn' : 'btn'}${has ? ' added' : ''}" data-dadd="${esc(k)}"${full ? ' disabled' : ''}>${esc(u(label))}</button>`;
};
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('[data-dadd]'); if (!b) return;
  const k = b.dataset.dadd;
  if (A.decide.has(k)) { location.hash = '#/decide'; return; }
  A.decide.add(k); H().rerender();
  const nb = document.querySelector(`[data-dadd="${CSS.escape(k)}"]`); if (nb) nb.focus();
});
/* shortlist bar on the step-2 pages */
A.ext.after.push((page, parts) => {
  const old = document.getElementById('dBar'); if (old) old.remove();
  if (!['faculties', 'f', 'm', 'compare', 'reality', 'future', 'test'].includes(parts[0]) || page === 'gate') return;
  if (parts[0] === 'test' && parts[1] !== 'result') return;
  const h = H(), { u, esc, tx } = h, c = load().c; if (!c.length) return;
  const names = c.map(k => { const [fid, mid] = k.split('/'), f = h.fac(fid), m = f && h.maj(f, mid); return m ? `<li>${f.icon} ${tx(m.name)}</li>` : ''; }).join('');
  const bar = `<aside class="dbar" id="dBar" aria-label="${esc(u('dList'))}"><b>${esc(u('dList'))} <bdi>(${c.length}/5)</bdi></b><ul>${names}</ul>
    ${c.length >= 2 ? `<a class="btn sm" href="#/decide">${esc(u('dGo3'))} ${h.lang === 'ar' ? '←' : '→'}</a>` : `<span class="muted">${esc(u('dNeed2'))}</span>`}</aside>`;
  const g = document.querySelector('#app .gbar'); if (g) g.insertAdjacentHTML('afterend', bar); else document.getElementById('app').insertAdjacentHTML('afterbegin', bar);
});

A.ext.routes.decide = {
  page: 'decide',
  view() {
    load();
    const h = H(), { u, tx, esc, lang } = h, L = k => esc(u(k));
    const total = F.reduce((n, [f]) => n + (+st.w[f] || 0), 0) || 1, pc = f => Math.round((+st.w[f] || 0) / total * 100);
    const name = k => { const [fid, mid] = k.split('/'), f = h.fac(fid), m = f && h.maj(f, mid); return m ? `${f.icon} ${tx(m.name)}` : esc(k); };
    const opts = h.faculties.map(f => `<optgroup label="${esc(h.T(f.name))}">${f.majors.map(m => `<option value="${f.id}/${m.id}"${st.c.includes(f.id + '/' + m.id) ? ' disabled' : ''}>${esc(h.T(m.name))}</option>`).join('')}</optgroup>`).join('');
    const res = st.c.map(score).filter(x => x.pct !== null).sort((a, b) => b.pct - a.pct);
    const pressure = pc('parents') + pc('friends'), fname = f => L(F.find(x => x[0] === f)[1]);
    const why = x => {
      const up = [...x.parts].sort((a, b) => b.v * b.w - a.v * a.w)[0], down = [...x.parts].sort((a, b) => a.v - b.v || b.w - a.w)[0];
      return `<small class="d-why">${up && up.v >= 4 ? `<span>▲ ${L('dWhyUp')}: ${fname(up.f)} (${up.v}/5)</span>` : ''}${down && down.v <= 2 ? `<span>▼ ${L('dWhyDown')}: ${fname(down.f)} (${down.v}/5)</span>` : ''}${x.missing.length ? `<span class="muted">${x.missing.map(fname).join('، ')}: ${L('dMissing')}</span>` : ''}</small>`;
    };
    return `<div id="decideRoot"><div class="crumbs"><a href="#/">${L('navHome')}</a><span>${L('dTitle')}</span></div>
    <section class="view phero" style="padding:16px 0 10px"><div class="eyebrow">${L('navDecide')}</div><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${L('dTitle')}</h1><p class="muted" style="max-width:780px;font-size:16px;margin:0">${L('dText')}</p></section>

    <section class="card d-sec"><h2 class="h3">${L('d1')}</h2><p class="muted">${L('d1t')}</p>
      <ul class="d-chosen">${st.c.map(k => `<li><span>${name(k)}</span><button type="button" class="btn ghost sm" data-act="del" data-val="${esc(k)}" aria-label="${L('dRemove')}: ${esc(h.T((h.maj(h.fac(k.split('/')[0]), k.split('/')[1]) || {}).name || k))}">${L('dRemove')}</button></li>`).join('')}</ul>
      ${st.c.length < 5 ? `<label class="sr" for="dAdd">${L('dAdd')}</label><select id="dAdd" data-act="add" data-val="x"><option value="">${L('dAdd')}</option>${opts}</select>` : `<p class="muted">${L('dMax')}</p>`}</section>

    <section class="card d-sec"><h2 class="h3">${L('d2')}</h2><p class="muted">${L('d2t')}</p>
      <div class="d-weights">${F.map(([f, key]) => `<div class="d-w"><label for="w_${f}">${L(key)}</label><input type="range" id="w_${f}" min="0" max="50" step="5" value="${st.w[f]}" data-act="w" data-val="${f}"><output id="o_${f}" for="w_${f}"><bdi>${pc(f)}%</bdi></output></div>`).join('')}</div>
      <button type="button" class="btn ghost sm" data-act="wreset" data-val="x">${L('dReset')}</button>
      ${pressure > 40 ? `<p class="warn" role="note">${esc(u(pc('parents') && pc('friends') ? 'dPressure' : pc('parents') ? 'dPressP' : 'dPressF').replace('{n}', pressure))}</p>` : ''}${pc('me') < 15 ? `<p class="warn" role="note">${L('dLowMe')}</p>` : ''}</section>

    ${st.c.length ? `<section class="card d-sec"><h2 class="h3">${L('d3')}</h2><p class="muted">${L('d3t')}</p>
      <div class="d-grid-wrap"><table class="uni-table d-grid"><thead><tr><th scope="col"></th>${st.c.map(k => `<th scope="col">${name(k)}</th>`).join('')}</tr></thead><tbody>
      ${F.map(([f, key]) => `<tr><th scope="row">${L(key)} <small class="muted"><bdi>${pc(f)}%</bdi></small></th>${st.c.map(k => {
        const [fid, mid] = k.split('/'), auto = f === 'test' ? testRate(fid, mid) : 0, v = auto || (st.r[k] || {})[f] || 0;
        return `<td>${auto ? `<b>${auto}</b> <small class="muted">${L('dAuto')}</small>` : `<select data-act="r" data-val="${esc(k)}|${f}" aria-label="${L(key)} — ${esc(h.T((h.maj(h.fac(fid), mid) || {}).name || k))}"><option value="0">–</option>${[1, 2, 3, 4, 5].map(n => `<option value="${n}"${v === n ? ' selected' : ''}>${n}</option>`).join('')}</select>`}</td>`;
      }).join('')}</tr>`).join('')}</tbody></table></div></section>` : ''}

    <section class="card d-sec d-result" aria-live="polite"><h2 class="h3">${L('d4')}</h2>
      ${res.length < 2 ? `<p class="muted">${L('dNeed')}</p>` : `<ol class="d-rank">${res.map((x, i) => `<li class="${i === 0 ? 'top' : ''}"><div class="d-row"><b>${name(x.k)}</b><span class="d-pct"><bdi>${x.pct}%</bdi></span></div>
        <span class="bt"><i style="width:${x.pct}%"></i></span>${why(x)}${i === 0 ? `<a class="btn sm" href="#/roadmap/${x.k}" data-act="choose" data-val="${esc(x.k)}">${L('dBuild')} ${lang === 'ar' ? '←' : '→'}</a>` : ''}</li>`).join('')}</ol>
        ${res[1] && res[0].pct - res[1].pct <= 5 ? `<p class="warn">${L('dClose')}</p>` : ''}`}
      <p class="muted" style="margin:10px 0 0">${L('dNote')}</p></section></div>`;
  },
  bind() {
    const app = $('decideRoot'); if (!app) return;
    app.querySelectorAll('[data-act="w"]').forEach(inp => {
      inp.oninput = () => {
        st.w[inp.dataset.val] = +inp.value;
        const total = F.reduce((n, [f]) => n + (+st.w[f] || 0), 0) || 1;
        F.forEach(([f]) => { const o = $('o_' + f); if (o) o.innerHTML = `<bdi>${Math.round((+st.w[f] || 0) / total * 100)}%</bdi>`; });
      };
      inp.onchange = () => { save(); H().rerender(); };
    });
    app.onchange = e => {
      const el = e.target, act = el.dataset && el.dataset.act;
      if (act === 'add' && el.value) { if (st.c.length < 5 && !st.c.includes(el.value)) st.c.push(el.value); save(); H().rerender(); const d = $('dAdd'); if (d) d.focus(); }
      else if (act === 'r') { const [k, f] = el.dataset.val.split('|'); st.r[k] = st.r[k] || {}; st.r[k][f] = +el.value; save(); H().rerender(); }
    };
    app.onclick = e => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      if (b.dataset.act === 'del') { st.c = st.c.filter(k => k !== b.dataset.val); save(); H().rerender(); const d = $('dAdd'); if (d) d.focus(); }
      else if (b.dataset.act === 'wreset') { st.w = { ...W0 }; save(); H().rerender(); }
      else if (b.dataset.act === 'choose') { st.chosen = b.dataset.val; save(); }
    };
  }
};
})();
