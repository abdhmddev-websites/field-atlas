/* Field Atlas — page organisation: every extra page sits as a tab at the TOP of the step it belongs to,
 * the teacher pages live under "For the teacher" in the header (#/teacher), and the home page lists all pages.
 * Loaded after layout.js, before app.js.
 */
(function () {
const A = window.ATLAS;
A.ext = A.ext || { routes: {}, after: [] };
const H = () => A.h;
Object.assign(A.extUI = A.extUI || {}, {
  navTeacher: ['For the teacher', 'للأستاذ'],
  nextT: ['Finished this step?', 'أنهيت هذه الخطوة؟'], nextBtn: ['Next: step {n} · {name}', 'التالي: الخطوة {n} · {name}'],
  endT: ['You reached the end of the path. Well done!', 'وصلت إلى نهاية المسار. أحسنت!'], endBtn: ['See my roadmap', 'شاهد طريقي'],
  shortL: ['My shortlist', 'لائحتي'], doneL: ['Done', 'مُنجزة'],
  tabReal: ['Reality check', 'من أرض الواقع'], tabFuture: ['Future-ready major', 'اختصاصك والمستقبل'],
  tTitle: ['For the teacher', 'للأستاذ'],
  tText: ['Tools to run the lesson. Students do not need these pages.', 'أدوات لإدارة الحصة. الطلاب لا يحتاجون هذه الصفحات.'],
  morePages: ['All pages', 'كل الصفحات'],
  morePagesTxt: ['Each step has extra pages. You find them as tabs at the top of that step.', 'لكل خطوة صفحات إضافية. تجدها كأزرار في أعلى تلك الخطوة.'],
  subNav: ['Pages in this step', 'صفحات هذه الخطوة'],
  dTeacherPresent: ['Show the lesson slides on the projector.', 'اعرض شرائح الحصة على الشاشة.'],
  dTeacherPlan: ['The 45-minute plan, minute by minute, with exit tickets.', 'خطة الـ 45 دقيقة، دقيقة بدقيقة، مع بطاقات الخروج.'],
  dTeacherWs: ['A worksheet to print for each student.', 'ورقة عمل تطبعها لكل طالب.'],
  dTeacherClass: ['Count the first letters of the class and show the class profile.', 'اجمع الأحرف الأولى للصف واعرض ملف الصف.']
});

/* groups: [step index or 'teacher', [ [href, label key, route keys, icon] ... ] ] */
const GROUPS = [
  { step: 0, items: [['#/test', 'navTest', ['test'], 'clipboard-list'], ['#/types', 'typesTitle', ['types'], 'hexagon']] },
  { step: 1, items: [['#/faculties', 'navFac', ['faculties', 'f', 'm'], 'school'], ['#/reality', 'tabReal', ['reality'], 'triangle-alert'], ['#/future', 'tabFuture', ['future'], 'trending-up'], ['#/compare/science/engineering', 'openCompare', ['compare'], 'arrow-left-right']] },
  { step: 4, items: [['#/prepare', 'navPrep', ['prepare'], 'list-checks'], ['#/skills', 'navSkills', ['skills'], 'puzzle'], ['#/money', 'moneyTitle', ['money'], 'wallet']] },
  { step: 'teacher', items: [['#/teacher', 'tTitle', ['teacher'], 'presentation'], ['#/lesson/1', 'navLesson', ['lesson'], 'play'], ['#/plan', 'planTitle', ['plan'], 'clock'], ['#/worksheet', 'footWs', ['worksheet'], 'printer'], ['#/class', 'classTitle', ['class'], 'chart-pie']] }
];
A.navGroups = GROUPS;

function subNav(parts) {
  const old = document.getElementById('subNav'); if (old) old.remove();
  const key = parts[0] || '';
  const g = GROUPS.find(gr => gr.items.some(it => it[2].includes(key))); if (!g || key === 'lesson') return;
  if (parts[0] === 'test' && parts[1] === 'q') return;
  const { u, esc } = H();
  const nav = document.createElement('nav'); nav.id = 'subNav'; nav.className = 'subnav'; nav.setAttribute('aria-label', u('subNav'));
  nav.innerHTML = g.items.map(([h, k, keys, ic]) => { const on = keys.includes(key); return `<a href="${h}" class="subtab${on ? ' on' : ''}"${on ? ' aria-current="page"' : ''}>${A.ic(ic)} ${esc(u(k))}</a>`; }).join('');
  if (g.step === 1 && A.decide) { const n = A.decide.list().length; if (n) nav.insertAdjacentHTML('beforeend', `<a class="short-chip" href="#/decide">${A.ic('scale')} ${esc(u('shortL'))} <bdi>${n}/5</bdi></a>`); }
  const app = document.getElementById('app'), after = app.querySelector('.gbar, .gshow');
  if (after) after.insertAdjacentElement('afterend', nav); else app.insertAdjacentElement('afterbegin', nav);
}
A.placeSubNav = subNav;
A.ext.after.push((page, parts) => {
  parts = parts || []; subNav(parts);
  const app = document.getElementById('app'), key = parts[0] || '';
  /* the top menu and tabs already say where you are: keep breadcrumbs only on deep pages, and no label that repeats the title */
  if (!['f', 'm'].includes(key)) app.querySelectorAll('.crumbs').forEach(c => c.remove());
  app.querySelectorAll('.phero > .eyebrow').forEach(e => e.remove());
  endOfStep(page, key, parts);
});
/* end of every step page: the one main action is to go on */
function endOfStep(page, key, parts) {
  const { u, esc, PATH } = H(), i = PATH.findIndex(p => p.k.includes(key || '-'));
  /* faculty, major and decision pages already end with their own main action */
  if (i < 0 || page === 'gate' || ['f', 'm', 'decide', 'types'].includes(key) || (key === 'test' && parts[1] !== 'result')) return;
  if (A.locksOn && A.locksOn() && i < 4 && !A.stepDone(i)) return;
  const nx = PATH[i + 1];
  document.getElementById('app').insertAdjacentHTML('beforeend', nx
    ? `<section class="next-step"><b>${esc(u('nextT'))}</b><a class="btn" href="${nx.h}">${esc(u('nextBtn').replace('{n}', i + 2).replace('{name}', u(nx.n)))} ${A.go()}</a></section>`
    : `<section class="next-step"><b>${A.ic('flag')} ${esc(u('endT'))}</b><a class="btn" href="#/roadmap">${A.ic('map')} ${esc(u('endBtn'))}</a></section>`);
}

/* teacher hub */
A.ext.routes.teacher = {
  page: 'teacher',
  view() {
    const { u, esc, lang } = H(), d = { navLesson: 'dTeacherPresent', planTitle: 'dTeacherPlan', footWs: 'dTeacherWs', classTitle: 'dTeacherClass' };
    return `<div class="crumbs"><a href="#/">${esc(u('navHome'))}</a><span>${esc(u('tTitle'))}</span></div>
    <section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${esc(u('tTitle'))}</h1><p class="muted" style="max-width:720px;font-size:16px;margin:0">${esc(u('tText'))}</p></section>
    <div class="hub-grid">${GROUPS[3].items.slice(1).map(([h, k, , ic]) => `<a class="feat" href="${h}"><span class="feat-ico" aria-hidden="true">${A.ic(ic)}</span><b>${esc(u(k))}</b><small>${esc(u(d[k]))}</small><span class="go">${esc(u('open'))} ${A.go()}</span></a>`).join('')}</div>`;
  }
};

/* home: one card per step; its extra pages sit inside the card, so nothing is listed twice */
A.homePages = () => {
  const { u, esc, PATH } = H(), SD = A.stepDone || (() => false);
  const IC = ['clipboard-list', 'school', 'scale', 'map', 'list-checks', 'graduation-cap', 'university'];
  const more = g => g && g.items.length > 1 ? `<ul class="pc-sub">${g.items.slice(1).map(([h, k, , ic]) => `<li><a href="${h}">${A.ic(ic)} ${esc(u(k))}</a></li>`).join('')}</ul>` : '';
  const card = (num, ic, href, title, text, done, sub, cls = '') => `<li class="card pcard${cls}"><span class="pc-top"><span class="pc-ico" aria-hidden="true">${A.ic(ic)}</span>${num ? `<span class="pc-num">${num}</span>` : ''}${done ? `<span class="pc-done">${A.ic('check')} ${esc(u('doneL'))}</span>` : ''}</span>
    <h3><a class="pc-main" href="${href}">${esc(title)}</a></h3><p>${esc(text)}</p>${sub}</li>`;
  return `<ol class="path-cards">${PATH.map((p, i) => card(u('gStep').replace('{n}', i + 1).replace(/ (of|من) 7$/, ''), IC[i], p.h, u(p.n), u(p.d), i < 4 && SD(i), more(GROUPS.find(g => g.step === i)))).join('')}
  ${card('', 'presentation', '#/teacher', u('navTeacher'), u('tText'), false, more(GROUPS[3]), ' pc-teacher')}</ol>`;
};
})();
