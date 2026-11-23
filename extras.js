/* Field Atlas — "Reality check" and "Future-ready" pages (#/reality, #/future) + the two boxes on each major page.
 * Content per major lives in data/insight*.js. Loaded after decide.js and before app.js.
 */
(function () {
const A = window.ATLAS;
A.ext = A.ext || { routes: {}, after: [] };
const H = () => A.h;
const S = (en, ar) => [en, ar];

Object.assign(A.extUI = A.extUI || {}, {
  rcTitle: S('Reality check', 'من أرض الواقع'),
  rcPage: S('Before you choose: reality check', 'قبل أن تختار: من أرض الواقع'),
  rcText: S('Students often choose a major from a picture in their head. Here is what many of them discover only once they are inside — and where they go if it is not for them. These are typical situations, not stories of real people.', 'كثير من الطلاب يختارون اختصاصهم من صورة في رأسهم. هنا ما يكتشفه كثيرون منهم فقط بعد أن يدخلوا — وإلى أين يذهبون إذا لم يناسبهم. هذه مواقف شائعة، لا قصص أشخاص حقيقيين.'),
  rcNo: S('It may not suit you if…', 'قد لا يناسبك إذا…'), rcHidden: S('What nobody tells you', 'ما لا يخبرك به أحد'), rcPivot: S('Not for you? Close options', 'لا يناسبك؟ خيارات قريبة'),
  fuTitle: S('Make it future-ready', 'اجعله مطلوبًا في المستقبل'), fuAdd: S('Add to your major', 'أضف إلى اختصاصك'),
  fuPage: S('Make your major future-ready', 'اجعل اختصاصك مطلوبًا في المستقبل'),
  fuText: S('Nobody knows exactly which jobs will exist in 15 years — so do not choose a major only because it is "the future". A better plan: choose what fits you, then add the skills employers are asking for.', 'لا أحد يعرف بالضبط أيّ وظائف ستوجد بعد 15 سنة — فلا تختر اختصاصًا فقط لأنه «المستقبل». الخطة الأفضل: اختر ما يناسبك، ثم أضف المهارات التي يطلبها أصحاب العمل.'),
  fuFacts: S('What employers say (World Economic Forum, Future of Jobs Report 2025)', 'ماذا يقول أصحاب العمل (المنتدى الاقتصادي العالمي، تقرير مستقبل الوظائف 2025)'),
  fuFormula: S('The formula', 'المعادلة'),
  fuFormulaTxt: S('Your major + one digital skill + languages + people skills = in demand.', 'اختصاصك + مهارة رقمية واحدة + لغات + مهارات التعامل مع الناس = مطلوب.'),
  fuList: S('For every major: what to add', 'لكل اختصاص: ماذا تضيف'),
  fuSrc: S('Source: World Economic Forum — Future of Jobs Report 2025', 'المصدر: المنتدى الاقتصادي العالمي — تقرير مستقبل الوظائف 2025'),
  seeAll: S('See all majors', 'اطّلع على كل الاختصاصات'), reviewNote: S('General guidance written for this class; your teacher reviews it.', 'إرشاد عام كُتب لهذا الصف؛ يراجعه أستاذك.')
});

const FACTS = [
  S('By 2030, about 170 million jobs will be created and 92 million will disappear worldwide: a net gain of about 78 million. Change is certain; the skills you add matter.', 'حتى 2030، ستُخلق نحو 170 مليون وظيفة وتختفي 92 مليونًا في العالم: أي زيادة صافية بنحو 78 مليونًا. التغيير أكيد؛ والمهارات التي تضيفها هي المهمّة.'),
  S('Fastest-growing jobs (in %): technology — big data specialists, fintech engineers, AI and machine-learning specialists, software developers — and green jobs — renewable-energy and environmental engineers, electric-vehicle specialists.', 'أسرع الوظائف نموًّا (بالنسبة المئوية): التكنولوجيا — متخصّصو البيانات الضخمة، مهندسو التكنولوجيا المالية، متخصّصو الذكاء الاصطناعي والتعلّم الآلي، مطوّرو البرمجيات — والوظائف الخضراء — مهندسو الطاقة المتجددة والبيئة، متخصّصو السيارات الكهربائية.'),
  S('Largest growth in numbers: front-line and care jobs — farm workers, delivery and construction workers, nurses, social and care workers, teachers.', 'أكبر نموّ بالأعداد: الوظائف الميدانية ووظائف الرعاية — العاملون في الزراعة، والتوصيل والبناء، والممرّضون، والعاملون في الرعاية والعمل الاجتماعي، والأساتذة.'),
  S('Shrinking: routine office jobs — cashiers, data-entry clerks, administrative assistants, bank tellers.', 'في تراجع: الوظائف المكتبية الروتينية — أمناء الصناديق، مدخلو البيانات، المساعدون الإداريون، موظفو شبابيك المصارف.'),
  S('Fastest-growing skills: AI and big data, networks and cybersecurity, technological literacy — together with creative thinking, resilience and flexibility, curiosity and lifelong learning. Caring for the environment entered the top 10 for the first time.', 'أسرع المهارات نموًّا: الذكاء الاصطناعي والبيانات الضخمة، الشبكات والأمن السيبراني، الثقافة التكنولوجية — مع التفكير الإبداعي، والمرونة والقدرة على التكيّف، والفضول والتعلّم مدى الحياة. والعناية بالبيئة دخلت لائحة العشر الأوائل لأول مرة.')
];
const SRC = 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/';

/* the two boxes shown on a major page (called from app.js) */
A.insightBoxes = (f, m) => {
  const X = (A.insight || {})[m.id]; if (!X) return '';
  const { u, tx, esc } = H(), L = k => esc(u(k));
  return `<div class="ins-grid">
    <section class="card ins-card ins-reality"><h2 class="h3">${A.ic('triangle-alert')} ${L('rcTitle')}</h2>
      <dl><dt>${L('rcNo')}</dt><dd>${tx(X.no)}</dd><dt>${L('rcHidden')}</dt><dd>${tx(X.hidden)}</dd><dt>${L('rcPivot')}</dt><dd>${tx(X.pivot)}</dd></dl>
      <a class="go-link" href="#/reality">${L('seeAll')}</a></section>
    <section class="card ins-card ins-future"><h2 class="h3">${A.ic('trending-up')} ${L('fuTitle')}</h2>
      <p><b>${L('fuAdd')}:</b> ${tx(X.future)}</p><p class="muted">${L('fuFormulaTxt')}</p>
      <a class="go-link" href="#/future">${L('seeAll')}</a></section></div>`;
};

const byFaculty = (render) => {
  const { tx } = H();
  return H().faculties.map((f, i) => {
    const list = f.majors.filter(m => (A.insight || {})[m.id]); if (!list.length) return '';
    return `<details class="card ins-fac"${i === 0 ? ' open' : ''}><summary><h2 class="ins-h">${A.ic(f.icon)} ${tx(f.name)}</h2> <small class="muted">(${list.length})</small></summary>${list.map(m => render(f, m, A.insight[m.id])).join('')}</details>`;
  }).join('');
};

A.ext.routes.reality = {
  page: 'reality',
  view() {
    const { u, tx, esc } = H(), L = k => esc(u(k));
    return `<div class="crumbs"><a href="#/faculties">${L('navFac')}</a><span>${L('rcPage')}</span></div>
    <section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${L('rcPage')}</h1><p class="muted" style="max-width:780px;font-size:16px;margin:0">${L('rcText')}</p><p class="muted" style="margin:8px 0 0"><small>${L('reviewNote')}</small></p></section>
    ${byFaculty((f, m, X) => `<article class="ins-row"><h3><a href="#/m/${f.id}/${m.id}">${tx(m.name)}</a></h3>
      <dl><dt>${L('rcNo')}</dt><dd>${tx(X.no)}</dd><dt>${L('rcHidden')}</dt><dd>${tx(X.hidden)}</dd><dt>${L('rcPivot')}</dt><dd>${tx(X.pivot)}</dd></dl></article>`)}`;
  }
};

A.ext.routes.future = {
  page: 'future',
  view() {
    const { u, tx, esc, lang } = H(), L = k => esc(u(k)), T2 = p => esc(p[lang === 'ar' ? 1 : 0]);
    return `<div class="crumbs"><a href="#/faculties">${L('navFac')}</a><span>${L('fuPage')}</span></div>
    <section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${L('fuPage')}</h1><p class="muted" style="max-width:780px;font-size:16px;margin:0">${L('fuText')}</p></section>
    <section class="card"><h2 class="h3">${L('fuFacts')}</h2><ul class="checks">${FACTS.map(p => `<li>${T2(p)}</li>`).join('')}</ul>
      <p class="muted" style="margin:8px 0 0"><a href="${SRC}" target="_blank" rel="noopener">${L('fuSrc')} ${A.ext_()}</a></p></section>
    <div class="warn"><b>${L('fuFormula')}:</b> ${L('fuFormulaTxt')}</div>
    <div class="sec-head" style="margin-top:22px"><h2>${L('fuList')}</h2></div>
    ${byFaculty((f, m, X) => `<article class="ins-row ins-row-fu"><h3><a href="#/m/${f.id}/${m.id}">${tx(m.name)}</a></h3><p>${tx(X.future)}</p></article>`)}
    <p class="muted"><small>${L('reviewNote')}</small></p>`;
  }
};
})();
