/* Field Atlas — Skills page (#/skills): types of skills, where to build each one, where you use it,
 * and which school activities build which skills. "I have practised this" ticks are saved on this computer only.
 */
(function () {
const A = window.ATLAS;
A.ext = A.ext || { routes: {}, after: [] };
const H = () => A.h;
const $ = id => document.getElementById(id);
const S = (en, ar) => [en, ar];

Object.assign(A.extUI = A.extUI || {}, {
  navSkills: S('Skills', 'المهارات'),
  skTitle: S('Skills you need — and where to get them', 'المهارات التي تحتاجها — ومن أين تكتسبها'),
  skText: S('Universities and employers look at your skills, not only your grades. Here are the main types of skills, where you can build each one now, and where you will use it later.', 'الجامعات وأصحاب العمل ينظرون إلى مهاراتك، لا إلى علاماتك فقط. هنا الأنواع الأساسية للمهارات، ومن أين تبني كلًّا منها الآن، وأين ستستعملها لاحقًا.'),
  skTypes: S('6 types of skills', '6 أنواع من المهارات'),
  skTransfer: S('Transferable = you take it everywhere. Most people, thinking, self-management and language skills are transferable: leadership you learn in Scouts helps you in a university group project and later at work.', 'المهارة القابلة للنقل = تأخذها معك إلى كل مكان. معظم مهارات التعامل مع الناس والتفكير وإدارة الذات واللغات قابلة للنقل: القيادة التي تتعلّمها في الكشّافة تساعدك في مشروع جماعي في الجامعة ثم في العمل.'),
  skTransferT: S('What about "transferable skills"?', 'وماذا عن «المهارات القابلة للنقل»؟'),
  skAll: S('All', 'الكل'), skFilter: S('Show skills of type', 'اعرض مهارات النوع'),
  skGet: S('Build it at', 'تكتسبها من'), skUse: S('You use it in', 'تستعملها في'),
  skHave: S('I have practised this', 'مارستُ هذه المهارة'),
  skCount: S('You have practised {n} of {t} skills.', 'مارستَ {n} من {t} مهارة.'),
  skActs: S('Activities → the skills they build', 'النشاطات ← المهارات التي تبنيها'),
  skActsTxt: S('Joining one or two activities builds several skills at once. Pick what you enjoy.', 'المشاركة في نشاط أو نشاطين تبني عدّة مهارات معًا. اختر ما تستمتع به.'),
  skShow: S('Show your skills', 'أظهر مهاراتك'),
  skShowList: S('Write them in your CV with a real example ("led a team of 6 in the science fair").|Keep proof: certificates, photos, a portfolio or GitHub.|Ask a teacher or coach for a recommendation letter that names them.|Use them in your university personal statement.', 'اكتبها في سيرتك الذاتية مع مثال حقيقي («قدت فريقًا من 6 في معرض العلوم»).|احتفظ بالدليل: شهادات، صور، ملف أعمال أو GitHub.|اطلب من أستاذ أو مدرّب رسالة توصية تذكرها.|استعملها في خطابك الشخصي للجامعة.')
});

const KEY = 'fieldAtlasSkills';
let have = {}; try { have = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(have)); } catch (e) {} };
let filter = 'tech'; /* one type at a time: 23 cards at once was 8 screens */

A.ext.routes.skills = {
  page: 'skills',
  view() {
    const { u, tx, esc } = H(), L = k => esc(u(k)), D = A.skills, T = id => D.types.find(t => t.id === id);
    const byId = Object.fromEntries(D.skills.map(s => [s.id, s]));
    const list = D.skills.filter(s => filter === 'all' || s.type === filter);
    const n = D.skills.filter(s => have[s.id]).length;
    return `<div class="crumbs"><a href="#/">${L('navHome')}</a><span>${L('navSkills')}</span></div>
    <section class="view phero" style="padding:16px 0 10px"><div class="eyebrow">${L('navSkills')}</div><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${L('skTitle')}</h1><p class="muted" style="max-width:780px;font-size:16px;margin:0">${L('skText')}</p></section>

    <div class="sec-head"><h2>${L('skTypes')}</h2></div>
    <div class="sk-types">${D.types.map(t => `<div class="card sk-type" style="--accent:${t.color}"><span class="sk-ico" aria-hidden="true">${A.ic(t.icon)}</span><h3>${tx(t.name)}</h3><p>${tx(t.what)}</p>${t.note ? `<p class="muted">${tx(t.note)}</p>` : ''}</div>`).join('')}</div>
    <div class="warn"><b>${L('skTransferT')}</b> ${L('skTransfer')}</div>

    <div class="sec-head" style="margin-top:24px"><h2>${L('navSkills')}</h2><p class="muted sk-count" role="status">${esc(u('skCount').replace('{n}', n).replace('{t}', D.skills.length))}</p></div>
    <div class="sk-filter" role="group" aria-label="${L('skFilter')}">
      ${D.types.map(t => `<button type="button" class="pill-btn" data-act="skf" data-val="${t.id}" aria-pressed="${filter === t.id}">${A.ic(t.icon)} ${tx(t.name)} <bdi>(${D.skills.filter(s => s.type === t.id).length})</bdi></button>`).join('')}
      <button type="button" class="pill-btn" data-act="skf" data-val="all" aria-pressed="${filter === 'all'}">${L('skAll')} <bdi>(${D.skills.length})</bdi></button></div>
    <div class="sk-grid">${list.map(s => { const t = T(s.type); return `<article class="card sk-card${have[s.id] ? ' have' : ''}" style="--accent:${t.color}">
      <p class="sk-tag">${A.ic(t.icon)} ${tx(t.name)}</p><h3>${tx(s.name)}</h3><p class="muted">${tx(s.what)}</p>
      <h4>${L('skGet')}</h4><ul class="sk-list">${s.get.map(x => `<li>${tx(x)}</li>`).join('')}</ul>
      <h4>${L('skUse')}</h4><ul class="sk-list use">${s.use.map(x => `<li>${tx(x)}</li>`).join('')}</ul>
      <label class="sk-have"><input type="checkbox" data-act="skh" data-val="${s.id}"${have[s.id] ? ' checked' : ''}> ${L('skHave')}</label></article>`; }).join('')}</div>

    <div class="sec-head" style="margin-top:26px"><div><h2>${L('skActs')}</h2><p class="muted" style="margin:4px 0 0">${L('skActsTxt')}</p></div></div>
    <div class="sk-acts">${D.activities.map(a => `<div class="card sk-act"><h3>${A.ic(a.icon)} ${tx(a.name)}</h3><ul class="sk-chips">${a.ids.map(id => byId[id] ? `<li style="--accent:${T(byId[id].type).color}">${tx(byId[id].name)}</li>` : '').join('')}</ul></div>`).join('')}</div>

    <div class="card" style="margin-top:18px"><h3>${L('skShow')}</h3><ul class="checks">${u('skShowList').split('|').map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`;
  },
  bind() {
    document.querySelectorAll('[data-act="skf"]').forEach(b => b.onclick = () => { filter = b.dataset.val; H().rerender(); });
    document.querySelectorAll('[data-act="skh"]').forEach(c => c.onchange = () => { if (c.checked) have[c.dataset.val] = 1; else delete have[c.dataset.val]; save(); H().rerender(); });
  }
};
})();
