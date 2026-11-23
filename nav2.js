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
  { step: 0, items: [['#/test', 'navTest', ['test'], '◎'], ['#/types', 'typesTitle', ['types'], '⬡']] },
  { step: 1, items: [['#/faculties', 'navFac', ['faculties', 'f', 'm'], '⌂'], ['#/reality', 'tabReal', ['reality'], '⚠'], ['#/future', 'tabFuture', ['future'], '↗'], ['#/compare/science/engineering', 'openCompare', ['compare'], '⇄']] },
  { step: 4, items: [['#/prepare', 'navPrep', ['prepare'], '✓'], ['#/skills', 'navSkills', ['skills'], '🧩'], ['#/money', 'moneyTitle', ['money'], '€']] },
  { step: 'teacher', items: [['#/teacher', 'tTitle', ['teacher'], '★'], ['#/lesson/1', 'navLesson', ['lesson'], '▶'], ['#/plan', 'planTitle', ['plan'], '⏱'], ['#/worksheet', 'footWs', ['worksheet'], '🖨'], ['#/class', 'classTitle', ['class'], '⬢']] }
];
A.navGroups = GROUPS;

function subNav(parts) {
  const old = document.getElementById('subNav'); if (old) old.remove();
  const key = parts[0] || '';
  const g = GROUPS.find(gr => gr.items.some(it => it[2].includes(key))); if (!g || key === 'lesson') return;
  if (parts[0] === 'test' && parts[1] === 'q') return;
  const { u, esc } = H();
  const nav = document.createElement('nav'); nav.id = 'subNav'; nav.className = 'subnav'; nav.setAttribute('aria-label', u('subNav'));
  nav.innerHTML = g.items.map(([h, k, keys, ic]) => { const on = keys.includes(key); return `<a href="${h}" class="subtab${on ? ' on' : ''}"${on ? ' aria-current="page"' : ''}><span aria-hidden="true">${ic}</span> ${esc(u(k))}</a>`; }).join('');
  const app = document.getElementById('app'), after = app.querySelector('.gbar, .gshow');
  if (after) after.insertAdjacentElement('afterend', nav); else app.insertAdjacentElement('afterbegin', nav);
}
A.placeSubNav = subNav;
A.ext.after.push((page, parts) => subNav(parts || []));

/* teacher hub */
A.ext.routes.teacher = {
  page: 'teacher',
  view() {
    const { u, esc, lang } = H(), d = { navLesson: 'dTeacherPresent', planTitle: 'dTeacherPlan', footWs: 'dTeacherWs', classTitle: 'dTeacherClass' };
    return `<div class="crumbs"><a href="#/">${esc(u('navHome'))}</a><span>${esc(u('tTitle'))}</span></div>
    <section class="view phero" data-icon="★" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${esc(u('tTitle'))}</h1><p class="muted" style="max-width:720px;font-size:16px;margin:0">${esc(u('tText'))}</p></section>
    <div class="hub-grid">${GROUPS[3].items.slice(1).map(([h, k, , ic]) => `<a class="feat" href="${h}"><span class="feat-ico" aria-hidden="true">${ic}</span><b>${esc(u(k))}</b><small>${esc(u(d[k]))}</small><span class="go">${esc(u('open'))} ${lang === 'ar' ? '←' : '→'}</span></a>`).join('')}</div>`;
  }
};

/* home: all pages, grouped by step */
A.homePages = () => {
  const { u, esc, PATH } = H();
  const head = g => g.step === 'teacher' ? esc(u('navTeacher')) : `<span class="hp-num">${g.step + 1}</span> ${esc(u(PATH[g.step].n))}`;
  const extra = [{ step: 2, items: [['#/decide', 'navDecide', [], '⚖']] }, { step: 3, items: [['#/roadmap', 'navRoad', [], '➶']] }, { step: 5, items: [['#/ladder', 'navLadder', [], '▤']] }, { step: 6, items: [['#/uni', 'navUni', [], '✎']] }];
  const all = [...GROUPS.filter(g => g.step !== 'teacher'), ...extra].sort((a, b) => a.step - b.step).concat(GROUPS[3]);
  return `<div class="sec-head"><div><h2>${esc(u('morePages'))}</h2><p class="muted" style="margin:4px 0 0">${esc(u('morePagesTxt'))}</p></div></div>
  <div class="hp-grid">${all.map(g => `<div class="card hp-card"><h3>${head(g)}</h3><ul>${g.items.map(([h, k, , ic]) => `<li><a href="${h}"><span aria-hidden="true">${ic}</span> ${esc(u(k))}</a></li>`).join('')}</ul></div>`).join('')}</div>`;
};
})();
