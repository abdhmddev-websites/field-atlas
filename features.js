/* Field Atlas — feature layer (council plan): verification strips, report a mistake, guided student path,
 * class hexagon, parent view, alumni stories, school config, offline app.
 * Loaded BEFORE app.js: it registers routes and strings on window.ATLAS; helpers are read later from ATLAS.h.
 */
(function () {
const A = window.ATLAS;
A.ext = A.ext || { routes: {}, after: [] };
const H = () => A.h;
const $ = id => document.getElementById(id);
const S = (en, ar) => [en, ar];

A.extUI = {
  dataAsOf: S('Information as of Nov 2026', 'المعلومات كما في تشرين الثاني 2026'),
  copyParent: S('Copy link for parents', 'انسخ رابطًا للأهل'),
  codeExplain: S('Your code is your three strongest interest types, strongest first. It describes what you enjoy today — not what you must study. Use it to start exploring and talking.', 'رمزك هو أقوى ثلاثة أنماط اهتمام لديك، الأقوى أولًا. يصف ما تستمتع به اليوم — لا ما يجب أن تدرسه. استعمله لتبدأ الاستكشاف والحوار.'),
  vTitle: S('How sure is this information?', 'ما مدى دقّة هذه المعلومات؟'),
  vTeacher: S('Confirmed by the school', 'أكّدته المدرسة'), vSource: S('Matches an official source', 'يطابق مصدرًا رسميًا'), vUnverified: S('Not yet verified — check the official page', 'لم يُتحقَّق منه بعد — راجع الصفحة الرسمية'),
  report: S('Report a mistake', 'أبلغ عن خطأ'), reportTitle: S('Report a mistake on this page', 'أبلغ عن خطأ في هذه الصفحة'),
  reportText: S('Tell us what is wrong and, if you know it, the correct information. Do not write your name or any personal details.', 'أخبرنا ما الخطأ، والمعلومة الصحيحة إن كنت تعرفها. لا تكتب اسمك أو أيّ معلومات شخصية.'),
  reportField: S('What is wrong?', 'ما الخطأ؟'), send: S('Send', 'أرسل'), cancel: S('Cancel', 'إلغاء'),
  reportSent: S('Thank you — the teacher will check it.', 'شكرًا — سيتحقّق الأستاذ منه.'), reportFail: S('Could not send. Please tell your teacher instead.', 'تعذّر الإرسال. أخبر أستاذك بدلًا من ذلك.'), reportEmpty: S('Please describe the mistake first.', 'يرجى وصف الخطأ أولًا.'),
  startTitle: S('Your path in 7 steps', 'طريقك في 7 خطوات'),
  startText: S('Follow the steps in order during the lesson. A bar at the top of each step shows where you are and takes you to the next one.', 'اتّبع الخطوات بالترتيب خلال الحصة. شريط في أعلى كل خطوة يُظهر أين أنت ويأخذك إلى الخطوة التالية.'),
  startBtn: S('Start with step 1', 'ابدأ بالخطوة 1'), navStart: S('Start here', 'ابدأ من هنا'),
  g1: S('Take the personality test and read your types', 'قم باختبار الشخصية واقرأ أنماطك'), g2: S('Explore the faculties and majors that interest you', 'استكشف الكليات والاختصاصات التي تهمّك'),
  g3: S('Build your roadmap: bachelor → master → PhD → career, with a Plan B', 'ابنِ طريقك: إجازة ← ماستر ← دكتوراه ← مهنة، مع خطة بديلة'), g4: S('See what to prepare this year', 'اعرف ما تحضّره هذه السنة'),
  g5: S('Read more: the degree ladder', 'للمزيد: سلّم الشهادات'), g6: S('Read more: how university works', 'للمزيد: كيف تعمل الجامعة'),
  gStep: S('Step {n} of 7', 'الخطوة {n} من 7'), gNext: S('Next', 'التالي'), gBack: S('Back', 'السابق'), gExit: S('Hide the steps', 'أخفِ الخطوات'), gDone: S('Path complete — well done!', 'أنهيت المسار — أحسنت!'),
  navUni: S('University system', 'نظام الجامعة'), navHome: S('Home', 'الرئيسية'),
  classTitle: S('Class interest map', 'خريطة ميول الصف'),
  classText: S('After the test, ask students to raise their hand for the first letter of their code and type the counts. The map shows the class profile on the projector. Nothing is saved or sent.', 'بعد الاختبار، اطلب من الطلاب رفع اليد بحسب الحرف الأول من رمزهم واكتب الأعداد. تُظهر الخريطة ملف الصف على الشاشة. لا يُحفظ شيء ولا يُرسَل.'),
  classTotal: S('{n} students', '{n} طالبًا'), classTop: S('Most common', 'الأكثر شيوعًا'), classAsk: S('Discuss', 'ناقشوا'), classReset: S('Clear', 'امسح'), countOf: S('Number of students with {t} first', 'عدد الطلاب الذين نمطهم الأول {t}'),
  parentTitle: S('Your child\'s university plan', 'خطة ابنكم/ابنتكم الجامعية'),
  parentText: S('This is the plan your child built in class. It is a first draft to discuss together, not a final decision.', 'هذه هي الخطة التي بناها ولدكم في الصف. هي مسودة أولى للنقاش معًا، وليست قرارًا نهائيًا.'),
  parentCost: S('What it may cost (per year)', 'الكلفة المتوقّعة (سنويًا)'), parentLeads: S('Where it can lead', 'إلى أين قد يقود'), parentCheck: S('What to check and prepare', 'ما يجب التحقّق منه وتحضيره'),
  parentTalk: S('Questions to talk about together', 'أسئلة للحديث معًا'),
  parentQs: S('Why does this field interest you?|Which country feels right for us, and why?|What is our budget, and which scholarships could help?|What is your Plan B, and do you like it?|Who could you talk to who works in this field?', 'لماذا يثير هذا المجال اهتمامك؟|أيّ بلد يناسبنا، ولماذا؟|ما ميزانيتنا، وأيّ منح قد تساعد؟|ما خطتك البديلة، وهل تحبها؟|مع مَن يمكنك التحدّث ممّن يعمل في هذا المجال؟'),
  parentOpen: S('Open the full roadmap', 'افتح الطريق كاملًا'), parentNone: S('This link does not contain a plan. Ask your child to copy the parent link again from "My roadmap".', 'هذا الرابط لا يحتوي على خطة. اطلبوا من ولدكم نسخ رابط الأهل مجددًا من «طريقي».'),
  storiesTitle: S('Stories from former students', 'قصص من طلاب سابقين'),
  storiesText: S('Former students tell what they studied, where, and what they would tell their Grade 10 self. Stories appear here only after the teacher has checked them and the student agreed.', 'طلاب سابقون يخبرون ماذا درسوا وأين، وماذا كانوا ليقولوا لأنفسهم في الأول ثانوي. تظهر القصص هنا فقط بعد أن يراجعها الأستاذ ويوافق الطالب.'),
  storiesEmpty: S('No stories yet. Are you a former student? Share yours below.', 'لا قصص بعد. هل أنت طالب سابق؟ شارك قصتك أدناه.'),
  storyForm: S('Share your story (former students)', 'شارك قصتك (للطلاب السابقين)'),
  sName: S('First name (as you want it shown)', 'الاسم الأول (كما تريده أن يظهر)'), sYear: S('Year you graduated from school', 'سنة تخرّجك من المدرسة'),
  sStudied: S('What did you study?', 'ماذا درست؟'), sWhere: S('Where (university, country)?', 'أين (الجامعة، البلد)؟'),
  sAdvice: S('What would you tell your Grade 10 self?', 'ماذا تقول لنفسك في الأول ثانوي؟'),
  sConsent: S('I agree that the school may publish this story on Field Atlas.', 'أوافق على أن تنشر المدرسة هذه القصة على أطلس الاختصاصات.'),
  sSent: S('Thank you! The teacher will review your story before it appears.', 'شكرًا! سيراجع الأستاذ قصتك قبل نشرها.'), sNeed: S('Please fill in every field and tick the consent box.', 'يرجى تعبئة كل الحقول ووضع إشارة الموافقة.'),
  navStories: S('Stories', 'قصص'), madeFor: S('Made for', 'صُمّم لـ')
};

/* ---------- fact register & verification strips ---------- */
let FACTS = null;
fetch('data/facts.json?v=2026-11g').then(r => r.json()).then(j => { FACTS = j.facts || []; injectStrip(); }).catch(() => {});
function pageKey(parts) { return parts.slice(0, 3).join('/'); }
function injectStrip() {
  if (!A.showFacts) return; // set window.ATLAS.showFacts = true to show the boxes again
  if (!FACTS || !A.h) return;
  const old = document.querySelector('.vstrip'); if (old) old.remove();
  const parts = location.hash.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean);
  const keys = [parts[0] || '', parts.slice(0, 2).join('/'), pageKey(parts)];
  const list = FACTS.filter(f => (f.pages || []).some(p => keys.includes(p)));
  if (!list.length) return;
  const { u, esc, lang } = H();
  const st = { teacher: ['ok', u('vTeacher')], source: ['src', u('vSource')], unverified: ['un', u('vUnverified')] };
  const html = `<aside class="vstrip" aria-label="${esc(u('vTitle'))}"><b>${esc(u('vTitle'))}</b><ul>${list.map(f => { const s = st[f.status] || st.unverified; return `<li><span class="vchip v-${s[0]}">${esc(s[1])}</span> <span>${esc(lang === 'ar' ? f.ar : f.en)}</span> · <a href="${esc(f.src[1])}" target="_blank" rel="noopener">${esc(f.src[0])}<span class="sr"> ${esc(u('newTab'))}</span></a> <small>${esc(f.checked)}</small></li>`; }).join('')}</ul></aside>`;
  const anchor = document.querySelector('#app .fhero, #app .mhead, #app .phero, #app .hero2');
  if (anchor) anchor.insertAdjacentHTML('afterend', html); else { const app = $('app'); if (app) app.insertAdjacentHTML('afterbegin', html); }
}

/* ---------- report a mistake (Netlify Forms, no personal data) ---------- */
const enc = o => Object.keys(o).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(o[k])).join('&');
function postForm(data) {
  return fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: enc(data) }).then(r => { if (!r.ok) throw new Error(r.status); });
}
function openReport() {
  const { u, esc } = H();
  const d = document.createElement('dialog'); d.className = 'mini-dialog'; d.setAttribute('aria-labelledby', 'rpT');
  d.innerHTML = `<form method="dialog" id="rpForm"><h2 id="rpT">${esc(u('reportTitle'))}</h2><p class="muted">${esc(u('reportText'))}</p>
    <label class="fld"><span>${esc(u('reportField'))}</span><textarea id="rpMsg" rows="5" maxlength="1500"></textarea></label>
    <p class="muted" id="rpState" role="status"></p>
    <div class="cta"><button type="submit" class="btn" id="rpSend">${esc(u('send'))}</button><button type="button" class="btn ghost" id="rpCancel">${esc(u('cancel'))}</button></div></form>`;
  document.body.appendChild(d);
  const close = () => { d.close(); d.remove(); const b = $('reportBtn'); if (b) b.focus(); };
  d.querySelector('#rpCancel').onclick = close;
  d.addEventListener('cancel', e => { e.preventDefault(); close(); });
  d.querySelector('#rpForm').onsubmit = e => {
    e.preventDefault();
    const msg = d.querySelector('#rpMsg').value.trim(), stt = d.querySelector('#rpState');
    if (!msg) { stt.textContent = u('reportEmpty'); return; }
    d.querySelector('#rpSend').disabled = true;
    postForm({ 'form-name': 'report', page: location.hash || '#/', lang: H().lang, message: msg, 'bot-field': '' })
      .then(() => { stt.textContent = u('reportSent'); setTimeout(close, 1800); })
      .catch(() => { stt.textContent = u('reportFail'); d.querySelector('#rpSend').disabled = false; });
  };
  if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  d.querySelector('#rpMsg').focus();
}

/* ---------- guided student path ---------- */
/* The lesson path (PATH lives in app.js and also drives the numbered top menu). The bar is on by default. */
const gOn = () => { try { return localStorage.getItem('fieldAtlasGuide') !== 'off'; } catch (e) { return true; } };
const gSet = v => { try { v ? localStorage.removeItem('fieldAtlasGuide') : localStorage.setItem('fieldAtlasGuide', 'off'); } catch (e) {} };
A.gSet = gSet;
function guideBar(parts) {
  const old = document.querySelector('.gbar'); if (old) old.remove();
  if (!gOn()) return;
  if (parts[0] === 'test' && parts[1] === 'q') return; // keep the questions page calm
  const P = H().PATH, i = P.findIndex(s => s.k.includes(parts[0] || '-'));
  if (i < 0) return;
  const { u, esc, lang } = H(), arrowF = lang === 'ar' ? '←' : '→', arrowB = lang === 'ar' ? '→' : '←';
  const next = P[i + 1], prev = P[i - 1];
  const html = `<nav class="gbar" aria-label="${esc(u('startTitle'))}"><div class="gsteps" aria-hidden="true">${P.map((s, k) => `<i class="${k < i ? 'done' : k === i ? 'now' : ''}"></i>`).join('')}</div>
    <p><b>${esc(u('gStep').replace('{n}', i + 1))}:</b> ${esc(u(P[i].d))}</p>
    <div class="gbtns">${prev ? `<a class="btn ghost" href="${prev.h}">${arrowB} ${esc(u('gBack'))}</a>` : ''}${next ? (A.stepDone && i < 4 && !A.stepDone(i) ? `<span class="gtodo">🔒 ${esc(u('gTodo'))}: ${esc(u('need' + i))}</span>` : `<a class="btn" href="${next.h}">${esc(u('gNext'))}: ${esc(u(next.n))} ${arrowF}</a>`) : `<span class="gdone">${esc(u('gDone'))}</span>`}<button type="button" class="btn ghost" id="gExit">${esc(u('gExit'))}</button></div></nav>`;
  const app = $('app'); app.insertAdjacentHTML('afterbegin', html);
  $('gExit').onclick = () => { gSet(false); guideBar(parts); };
}
/* old "Start here" links now open the home page, which shows the path */
A.ext.routes.start = { page: 'home', view() { return ''; }, bind() { gSet(true); location.replace('#/'); } };

/* ---------- how university works: credits, semesters, GPA ---------- */
const GP = { 'A': 4, 'A−': 3.67, 'B+': 3.33, 'B': 3, 'B−': 2.67, 'C+': 2.33, 'C': 2, 'C−': 1.67, 'D+': 1.33, 'D': 1, 'F': 0 }; // LAU catalogue 2025-26
let calc = [[3, 'A'], [4, 'B'], [3, 'C'], [1, 'A']];
function calcRows() {
  const { tx, esc } = H(), U = A.uni;
  return calc.map(([c, g], i) => `<tr><th scope="row">${i + 1}</th>
    <td><select data-ci="${i}" data-f="c" aria-label="${esc(tx(U.calcCredits))} ${i + 1}">${[1, 2, 3, 4, 5, 6].map(n => `<option${n === c ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
    <td><select data-ci="${i}" data-f="g" aria-label="${esc(tx(U.calcGrade))} ${i + 1}">${Object.keys(GP).map(k => `<option value="${k}"${k === g ? ' selected' : ''}>${k}</option>`).join('')}</select></td>
    <td>${calc.length > 1 ? `<button type="button" class="btn ghost sm" data-del="${i}">${esc(tx(U.calcRemove))}</button>` : ''}</td></tr>`).join('');
}
function calcResult() {
  const cr = calc.reduce((s, [c]) => s + c, 0), pts = calc.reduce((s, [c, g]) => s + c * GP[g], 0);
  return { cr, gpa: cr ? (pts / cr).toFixed(2) : '0.00' };
}
A.ext.routes.uni = {
  page: 'uni',
  view() {
    const { tx, esc, u } = H(), U = A.uni;
    const list = arr => `<ul class="checks">${arr.map(x => `<li>${tx(x)}</li>`).join('')}</ul>`;
    const two = (arr) => `<div class="prep-2">${arr.map(b => `<div class="card"><h3>${tx(b.sys)}</h3>${list(b.pts)}</div>`).join('')}</div>`;
    const cell = v => typeof v === 'string' ? `<bdi dir="ltr">${esc(v)}</bdi>` : tx(v);
    const r = calcResult();
    return `<div class="crumbs"><a href="#/">${esc(u('navHome'))}</a><span>${tx(U.title)}</span></div>
    <section class="view phero" style="padding:16px 0 10px"><div class="eyebrow">${esc(u('navUni'))}</div><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${tx(U.title)}</h1><p class="muted" style="max-width:760px;font-size:16px;margin:0">${tx(U.intro)}</p></section>
    <h2 class="uni-h">${tx(U.creditTitle)}</h2>${two(U.credit)}
    <h2 class="uni-h">${tx(U.degTitle)}</h2>
    <div class="card uni-table-wrap"><table class="uni-table"><thead><tr>${U.degHead.map(h => `<th scope="col">${tx(h)}</th>`).join('')}</tr></thead>
      <tbody>${U.deg.map(r => `<tr><th scope="row">${tx(r.d)}${r.how ? `<small class="muted how">${tx(r.how)}</small>` : ''}</th><td>${cell(r.sem)}</td><td>${cell(r.n)}</td><td class="tot">${cell(r.tot)}</td><td>${cell(r.y)}</td></tr>`).join('')}</tbody></table></div>
    <div class="warn"><b>${tx(U.unitsTitle)}</b> ${tx(U.units)}</div>
    <div class="card"><h3>${tx(U.loadTitle)}</h3>${list(U.load)}</div>
    <div class="warn"><b>${tx(U.freshTitle)}</b> ${tx(U.fresh)}</div>
    <h2 class="uni-h">${tx(U.semTitle)}</h2><p class="muted" style="margin:0 0 12px">${tx(U.semText)}</p>
    <ol class="sem-row">${U.sem.map((s, i) => `<li class="card"><span class="gnum" aria-hidden="true">${i + 1}</span><h3>${tx(s.name)}</h3><p class="sem-when">${tx(s.when)}</p><p>${tx(s.what)}</p></li>`).join('')}</ol>
    <p class="muted">${tx(U.semLmd)}</p>
    <div class="card"><h3>${tx(U.weekTitle)}</h3><p style="margin:0">${tx(U.week)}</p></div>
    <h2 class="uni-h">${tx(U.gpaTitle)}</h2><p style="max-width:780px">${tx(U.gpaText)}</p>
    <div class="prep-2">
      <div class="card"><div class="gpa-scale" dir="ltr">${U.scale.map(([g, p]) => `<span><b>${g}</b>${p}</span>`).join('')}</div>
        <p class="gpa-formula">${tx(U.formula)}</p><p class="muted" style="margin:0">${tx(U.example)}</p></div>
      <div class="card">${list(U.gpaNotes)}</div>
    </div>
    <div class="card gpa-calc"><h3>${tx(U.calcTitle)}</h3>
      <table class="uni-table"><thead><tr><th scope="col">${tx(U.calcCourse)}</th><th scope="col">${tx(U.calcCredits)}</th><th scope="col">${tx(U.calcGrade)}</th><th scope="col"><span class="sr">${tx(U.calcRemove)}</span></th></tr></thead><tbody id="calcBody">${calcRows()}</tbody></table>
      <div class="gpa-out"><button type="button" class="btn ghost" id="calcAdd">+ ${tx(U.calcAdd)}</button>
        <p role="status" id="calcOut"><span>${tx(U.calcTotal)}: <b><bdi>${r.cr}</bdi></b></span> <span>${tx(U.calcResult)}: <b class="gpa-big"><bdi>${r.gpa}</bdi></b></span></p></div></div>
    <h2 class="uni-h">${tx(U.lateTitle)}</h2>${two(U.late)}
    <div class="card"><h3>${tx(U.catchTitle)}</h3>${list(U.catch)}</div>
    <h2 class="uni-h">${tx(U.wordsTitle)}</h2>
    ${[[U.wordsSub, U.words], [U.peopleTitle, U.people], [U.placesTitle, U.places]].map(([h, arr]) => `<div class="card words-card"><h3>${tx(h)}</h3><dl class="abbr-list">${arr.map(([w, d]) => `<div><dt><bdi dir="ltr">${esc(w)}</bdi></dt><dd><span>${tx(d)}</span></dd></div>`).join('')}</dl></div>`).join('')}`;
  },
  bind() {
    const body = $('calcBody'); if (!body) return;
    const { tx } = H(), U = A.uni;
    const refresh = (rows) => {
      if (rows) body.innerHTML = calcRows();
      const r = calcResult();
      $('calcOut').innerHTML = `<span>${tx(U.calcTotal)}: <b><bdi>${r.cr}</bdi></b></span> <span>${tx(U.calcResult)}: <b class="gpa-big"><bdi>${r.gpa}</bdi></b></span>`;
    };
    body.onchange = e => { const s = e.target, i = +s.dataset.ci; if (isNaN(i)) return; calc[i][s.dataset.f === 'c' ? 0 : 1] = s.dataset.f === 'c' ? +s.value : s.value; refresh(false); };
    body.onclick = e => { const b = e.target.closest('[data-del]'); if (!b) return; calc.splice(+b.dataset.del, 1); refresh(true); const f = body.querySelector('select'); if (f) f.focus(); };
    $('calcAdd').onclick = () => { calc.push([3, 'B']); refresh(true); const s = body.querySelectorAll('tr'); s[s.length - 1].querySelector('select').focus(); };
  }
};

/* ---------- class interest map (nothing stored) ---------- */
A.ext.routes.class = {
  page: 'class',
  view() {
    const { u, esc, PZ, T } = H();
    return `<div class="crumbs"><a href="#/types">${esc(u('typesTitle'))}</a><span>${esc(u('classTitle'))}</span></div>
      <section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${esc(u('classTitle'))}</h1><p class="muted" style="max-width:760px;font-size:16px;margin:0">${esc(u('classText'))}</p></section>
      <div class="class-grid"><div class="card"><div class="cinputs">${PZ.order.map(k => `<label class="cin" style="--accent:${PZ.types[k].color}"><span><b>${k}</b> ${esc(T(PZ.types[k].name))}</span><input type="number" min="0" max="99" inputmode="numeric" id="cn-${k}" value="0" aria-label="${esc(u('countOf').replace('{t}', T(PZ.types[k].name)))}"></label>`).join('')}</div>
        <p class="muted" id="cTotal" role="status"></p><button type="button" class="btn ghost" id="cClear">${esc(u('classReset'))}</button></div>
        <div class="card class-out"><div id="cHex"></div><div id="cTop"></div></div></div>`;
  },
  bind() {
    const { u, esc, PZ, T, hexagon } = H();
    const draw = () => {
      const c = {}; let tot = 0, max = 0;
      PZ.order.forEach(k => { c[k] = Math.max(0, +($('cn-' + k).value || 0)); tot += c[k]; max = Math.max(max, c[k]); });
      const pct = {}; PZ.order.forEach(k => pct[k] = max ? Math.round(c[k] / max * 100) : 0);
      $('cHex').innerHTML = hexagon(tot ? pct : null);
      $('cTotal').textContent = u('classTotal').replace('{n}', tot);
      const top = [...PZ.order].sort((a, b) => c[b] - c[a]).filter(k => c[k] > 0)[0];
      $('cTop').innerHTML = top ? `<p><b>${esc(u('classTop'))}:</b> ${top} · ${esc(T(PZ.types[top].name))}</p><p><b>${esc(u('classAsk'))}:</b> ${esc(T(PZ.types[top].ask[0]))}</p>` : '';
    };
    PZ.order.forEach(k => { $('cn-' + k).oninput = draw; });
    $('cClear').onclick = () => { PZ.order.forEach(k => { $('cn-' + k).value = 0; }); draw(); };
    draw();
  }
};

/* ---------- parent view of a shared roadmap ---------- */
A.ext.routes.parent = {
  page: 'parent',
  view(parts, query) {
    const h = H(), { u, esc, T, tx, fac, maj, C, MN, chips, prepList, labelOf, b64d } = h;
    let r = null;
    try { const d = query && new URLSearchParams(query).get('d'); if (d) r = { ...h.RM0, ...JSON.parse(b64d(d)) }; } catch (e) { r = null; }
    const head = `<section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,42px);margin:6px 0 8px">${esc(u('parentTitle'))}</h1><p class="muted" style="max-width:720px;font-size:16px;margin:0">${esc(u('parentText'))}</p></section>`;
    if (!r || !r.fid) return head + `<div class="warn">${esc(u('parentNone'))}</div>`;
    const f = fac(r.fid), m = maj(f, r.mid), cc = k => k && C.countries[k] ? ` <span class="cc">${C.countries[k].code}</span> ${tx(C.countries[k].name)}` : '';
    const rows = [
      [u('faculty'), f ? T(f.name) : ''],
      [u('bachelor'), (m ? T(m.name) : '') + (r.cB ? ' ·' : ''), r.cB],
      [u('master'), r.after === 'work' ? u('skipped') : (r.masterOwn || (m && labelOf(m.masters, r.master)) || ''), r.cM],
      [u('phd'), (r.after === 'work' || r.after === 'masterWork') ? u('skipped') : (r.phdOwn || (m && labelOf(m.phd, r.phd)) || ''), r.cP],
      [u('career'), r.careerOwn || (m && labelOf(m.careers, r.career)) || '', r.cW]
    ];
    const c = MN.costs[r.cB || 'lb'];
    const qs = u('parentQs').split('|');
    const back = location.hash.replace('#/parent', '#/roadmap');
    return head + `<div class="parent-grid">
      <div class="card"><h2 class="h3">${esc(r.name || u('student'))}</h2><dl class="plist">${rows.map(([k, v, ctry]) => `<div><dt>${esc(k)}</dt><dd>${esc(v || u('notChosen'))}${ctry ? cc(ctry) : ''}</dd></div>`).join('')}</dl></div>
      <div class="card"><h2 class="h3">${esc(u('parentCost'))}${r.cB ? cc(r.cB) : ''}</h2><p><b>${esc(u('tuition'))}:</b> ${tx(c.tuition)}</p><p><b>${esc(u('living'))}:</b> ${tx(c.living)}</p><p class="muted"><b>${esc(u('aidT'))}:</b> ${tx(c.aid)}</p><a class="go-link" href="#/money">${esc(u('moneyTitle'))}</a></div>
      <div class="card"><h2 class="h3">${esc(u('parentLeads'))}</h2>${m ? chips(m.careers) : ''}</div>
      <div class="card"><h2 class="h3">${esc(u('parentCheck'))}</h2><ul class="checks">${prepList(f, m, r).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
      <div class="card"><h2 class="h3">${esc(u('parentTalk'))}</h2><ol>${qs.map(q => `<li>${esc(q)}</li>`).join('')}</ol></div></div>
      <p class="muted">${esc(u('dataAsOf'))}</p><div class="cta"><a class="btn" href="${esc(back)}">${esc(u('parentOpen'))}</a></div>`;
  }
};

/* ---------- alumni stories (published only after the teacher checks them) ---------- */
A.ext.routes.stories = {
  page: 'stories',
  view() {
    const { u, esc, lang } = H(), list = (A.stories || []);
    const field = (id, key, type = 'text') => `<label class="fld"><span>${esc(u(key))}</span>${type === 'area' ? `<textarea id="${id}" rows="4" maxlength="1500"></textarea>` : `<input id="${id}" type="text" maxlength="120">`}</label>`;
    return `<section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${esc(u('storiesTitle'))}</h1><p class="muted" style="max-width:720px;font-size:16px;margin:0">${esc(u('storiesText'))}</p></section>
      ${list.length ? `<div class="types3">${list.map(s => `<article class="card story"><b>${esc(s.name)}</b> <small class="muted">${esc(s.year)}</small><p class="muted">${esc(s.studied)} · ${esc(s.where)}</p><blockquote>${esc(lang === 'ar' ? (s.adviceAr || s.advice) : s.advice)}</blockquote></article>`).join('')}</div>` : `<div class="warn">${esc(u('storiesEmpty'))}</div>`}
      <form class="card story-form" id="stForm" novalidate><h2 class="h3">${esc(u('storyForm'))}</h2>
        ${field('stName', 'sName')}${field('stYear', 'sYear')}${field('stStudied', 'sStudied')}${field('stWhere', 'sWhere')}${field('stAdvice', 'sAdvice', 'area')}
        <label class="consent"><input type="checkbox" id="stConsent"> <span>${esc(u('sConsent'))}</span></label>
        <p class="muted" id="stState" role="status"></p><button type="submit" class="btn">${esc(u('send'))}</button></form>`;
  },
  bind() {
    const { u } = H();
    $('stForm').onsubmit = e => {
      e.preventDefault();
      const v = id => $(id).value.trim(), st = $('stState');
      const data = { 'form-name': 'story', name: v('stName'), year: v('stYear'), studied: v('stStudied'), where: v('stWhere'), advice: v('stAdvice'), consent: $('stConsent').checked ? 'yes' : '', 'bot-field': '' };
      if (!data.name || !data.year || !data.studied || !data.where || !data.advice || !data.consent) { st.textContent = u('sNeed'); return; }
      postForm(data).then(() => { st.textContent = u('sSent'); $('stForm').reset(); }).catch(() => { st.textContent = u('reportFail'); });
    };
  }
};

/* ---------- after every render: strip, guide bar, footer additions, school name ---------- */
A.ext.after.push((page, parts) => {
  injectStrip();
  guideBar(parts);
  const foot = $('foot');
  if (foot && !$('reportBtn')) {
    const { u, esc } = H(), sc = A.school || {};
    foot.insertAdjacentHTML('afterbegin', `<span id="reportBtn" hidden></span>`);
    if (sc.name) foot.insertAdjacentHTML('beforeend', `<p class="muted">${esc(u('madeFor'))} ${esc(sc.name)}${sc.city ? ' · ' + esc(sc.city) : ''}</p>`);
  }
});

/* ---------- offline / installable ---------- */
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}
})();
