/* Full content: Technical & vocational routes (council plan, Phase 3).
 * Lebanese technical ladder BT → TS → LT is general guidance (fact T1, not yet verified by the school).
 * Loaded after prepare.js and countries.js: it also adds entry requirements and country examples.
 */
(function () {
const { t, L } = window.ATLAS;
const A = window.ATLAS;
const stages = {
  bachelor: { name: t('BT — Technical Baccalaureate', 'البكالوريا الفنية (BT)'), txt: t('About 3 years after Grade 9 (Brevet), in a technical school. It counts like a Bac for many next steps.', 'نحو 3 سنوات بعد الشهادة المتوسطة (البريفيه) في مدرسة فنية. تُعتبر مثل البكالوريا في كثير من الخطوات التالية.') },
  master: { name: t('TS — Technicien Supérieur', 'الامتياز الفني (TS)'), txt: t('Higher technician diploma, 2–3 years after a BT or a Bac. Very practical, with internships.', 'شهادة تقني عالٍ، 2–3 سنوات بعد BT أو البكالوريا. تطبيقية جدًا مع تدريب عملي.'), years: '2–3' },
  phd: { name: t('LT and bridges to university', 'الإجازة الفنية (LT) والانتقال إلى الجامعة'), txt: t('After a TS, a Licence Technique (LT) or a bridge into a university bachelor, then even a master.', 'بعد TS، الإجازة الفنية (LT) أو الانتقال إلى إجازة جامعية، ثم حتى الماستر.'), years: '1–2' }
};
const bt = { deg: 'BT / TS', years: '3 + 3', lmd: 'BT · TS · LT' };
const majors = [
  { id: 'electrical-tech', name: t('Electrical & electronics technology', 'تكنولوجيا الكهرباء والإلكترونيات'),
    one: t('Wiring buildings, installing solar systems, repairing electronic equipment.', 'تمديد الكهرباء في المباني وتركيب أنظمة الطاقة الشمسية وتصليح الأجهزة الإلكترونية.'),
    think: t('"Why is there no current here, and how do I fix it safely?" You like hands-on problem solving.', '«لماذا لا يصل التيار هنا، وكيف أصلحه بأمان؟» تحب حلّ المشكلات بيديك.'),
    school: L('Physics|الفيزياء', 'Mathematics|الرياضيات'), study: L('Electrical installations|التمديدات الكهربائية', 'Electronics|الإلكترونيات', 'Solar & renewable energy|الطاقة الشمسية والمتجددة', 'Safety standards|معايير السلامة', 'Workshop practice|التطبيق في المشغل'),
    riasec: 'RI', bachelor: bt, stages, masters: L('TS Electrical engineering technology|TS تكنولوجيا الهندسة الكهربائية', 'TS Electronics & automation|TS الإلكترونيات والأتمتة', 'TS Renewable energy|TS الطاقة المتجددة'),
    phd: L('LT in electrical technology|LT في التكنولوجيا الكهربائية', 'Bridge to an engineering bachelor|الانتقال إلى إجازة في الهندسة'), scopus: 'Applied technical route',
    careers: L('Electrician|كهربائي', 'Solar installer|مركّب أنظمة شمسية', 'Maintenance technician|تقني صيانة', 'Own electrical business|عمل خاص في الكهرباء'),
    routes: L('Strong TS results can lead to engineering studies|نتائج قوية في TS قد تقود إلى دراسة الهندسة') },
  { id: 'mechanical-tech', name: t('Mechanical & automotive technology', 'تكنولوجيا الميكانيك والسيارات'),
    one: t('Repairing cars and machines, diagnostics, manufacturing parts.', 'تصليح السيارات والآلات، والتشخيص، وتصنيع القطع.'),
    think: t('"What is this noise telling me?" You like engines, tools and seeing a machine run again.', '«ماذا يقول لي هذا الصوت؟» تحب المحرّكات والأدوات ورؤية الآلة تعمل من جديد.'),
    school: L('Physics|الفيزياء', 'Mathematics|الرياضيات'), study: L('Engines & mechanics|المحرّكات والميكانيك', 'Electronic diagnostics|التشخيص الإلكتروني', 'Hydraulics|الهيدروليك', 'Machining & welding|التشغيل واللحام', 'Hybrid & electric vehicles|السيارات الهجينة والكهربائية'),
    riasec: 'RI', bachelor: bt, stages, masters: L('TS Automotive mechanics|TS ميكانيك السيارات', 'TS Industrial mechanics|TS الميكانيك الصناعي', 'TS Refrigeration & air conditioning|TS التبريد والتكييف'),
    phd: L('LT in mechanical technology|LT في التكنولوجيا الميكانيكية', 'Bridge to mechanical engineering|الانتقال إلى الهندسة الميكانيكية'), scopus: 'Applied technical route',
    careers: L('Auto technician|تقني سيارات', 'HVAC technician|تقني تكييف وتبريد', 'Factory maintenance|صيانة المصانع', 'Own garage|كراج خاص'),
    routes: L('Electric-vehicle skills are in growing demand|مهارات السيارات الكهربائية مطلوبة أكثر فأكثر') },
  { id: 'it-tech', name: t('IT, networks & computer maintenance', 'المعلوماتية والشبكات وصيانة الحواسيب'),
    one: t('Setting up networks, fixing computers, supporting users, basic programming.', 'إعداد الشبكات، تصليح الحواسيب، دعم المستخدمين، وبرمجة أساسية.'),
    think: t('"Why is it not connecting, and how do I make it work for everyone?" You are practical and patient with people.', '«لماذا لا يتّصل، وكيف أجعله يعمل للجميع؟» أنت عملي وصبور مع الناس.'),
    school: L('Mathematics|الرياضيات', 'Computer basics|أساسيات الحاسوب', 'English|الإنجليزية'), study: L('Computer hardware|عتاد الحاسوب', 'Networks|الشبكات', 'Operating systems|أنظمة التشغيل', 'Web basics & programming|أساسيات الويب والبرمجة', 'IT support|الدعم الفني'),
    riasec: 'RC', bachelor: bt, stages, masters: L('TS Computer networks|TS شبكات الحاسوب', 'TS Software development|TS تطوير البرمجيات', 'TS IT management|TS إدارة المعلوماتية'),
    phd: L('LT in computing|LT في المعلوماتية', 'Bridge to a computer science bachelor|الانتقال إلى إجازة في علوم الحاسوب'), scopus: 'Applied technical route',
    careers: L('IT support technician|تقني دعم فني', 'Network technician|تقني شبكات', 'Junior web developer|مطوّر ويب مبتدئ', 'Computer shop owner|صاحب متجر حواسيب'),
    routes: L('Certificates (Cisco, CompTIA, Microsoft) add a lot of value|الشهادات المهنية (Cisco وCompTIA وMicrosoft) تضيف قيمة كبيرة') },
  { id: 'hospitality-tech', name: t('Hospitality & culinary arts', 'الفندقية وفنون الطهي'),
    one: t('Cooking, pastry, hotel service and running restaurants.', 'الطبخ والحلويات والخدمة الفندقية وإدارة المطاعم.'),
    think: t('"How do I make every guest happy — even on a busy night?" You like teamwork, food and people.', '«كيف أُسعد كل ضيف — حتى في ليلة مزدحمة؟» تحب العمل الجماعي والطعام والناس.'),
    school: L('Languages|اللغات', 'Biology (food safety)|علوم الحياة (سلامة الغذاء)'), study: L('Culinary techniques|تقنيات الطهي', 'Pastry & bakery|الحلويات والمخبوزات', 'Food safety & hygiene|سلامة الغذاء والنظافة', 'Restaurant & hotel service|خدمة المطاعم والفنادق', 'Internships|تدريب عملي'),
    riasec: 'ES', bachelor: bt, stages, masters: L('TS Hotel management|TS الإدارة الفندقية', 'TS Culinary arts|TS فنون الطهي', 'TS Tourism|TS السياحة'),
    phd: L('LT in hospitality|LT في الفندقية', 'Bridge to a hospitality management bachelor|الانتقال إلى إجازة في إدارة الفنادق'), scopus: 'Applied technical route',
    careers: L('Chef / cook|طاهٍ', 'Pastry chef|حلواني', 'Hotel reception & service|استقبال وخدمة فندقية', 'Own restaurant or catering|مطعم أو تموين خاص'),
    routes: L('Lebanese hospitality skills are in demand in the Gulf and Europe|مهارات الضيافة اللبنانية مطلوبة في الخليج وأوروبا') },
  { id: 'business-tech', name: t('Accounting & office technology', 'المحاسبة وتكنولوجيا المكاتب'),
    one: t('Bookkeeping, office software, administration and customer files.', 'مسك الدفاتر وبرامج المكتب والإدارة وملفات الزبائن.'),
    think: t('"Is every number in the right place?" You are organized, careful and reliable.', '«هل كل رقم في مكانه الصحيح؟» أنت منظّم ودقيق ويُعتمد عليك.'),
    school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد'), study: L('Accounting|المحاسبة', 'Office software (Excel)|برامج المكتب (Excel)', 'Business administration|إدارة الأعمال', 'Commercial correspondence|المراسلات التجارية', 'Tax basics|أساسيات الضرائب'),
    riasec: 'CE', bachelor: bt, stages, masters: L('TS Accounting & IT|TS المحاسبة والمعلوماتية', 'TS Banking & finance|TS المصارف والمالية', 'TS Marketing & sales|TS التسويق والمبيعات'),
    phd: L('LT in accounting|LT في المحاسبة', 'Bridge to a business bachelor|الانتقال إلى إجازة في إدارة الأعمال'), scopus: 'Applied technical route',
    careers: L('Accounting assistant|مساعد محاسب', 'Office administrator|إداري مكتب', 'Bank teller|موظف صندوق في مصرف', 'Sales coordinator|منسّق مبيعات') ,
    routes: L('Can continue toward a full accounting qualification|يمكن المتابعة نحو شهادة محاسبة كاملة') },
  { id: 'health-tech', name: t('Health technician routes', 'المسارات الصحية الفنية'),
    one: t('Assisting in labs, pharmacies, radiology and nursing care.', 'المساعدة في المختبرات والصيدليات والأشعة والرعاية التمريضية.'),
    think: t('"How can I help this patient safely and kindly?" You are caring and careful.', '«كيف أساعد هذا المريض بأمان ولطف؟» أنت حنون ودقيق.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'), study: L('Anatomy basics|أساسيات التشريح', 'Lab techniques|التقنيات المخبرية', 'First aid|الإسعافات الأولية', 'Hygiene & infection control|النظافة ومكافحة العدوى', 'Hospital internships|تدريب في المستشفيات'),
    riasec: 'SR', bachelor: bt, stages, masters: L('TS Medical laboratory|TS المختبرات الطبية', 'TS Nursing (technical)|TS التمريض الفني', 'TS Radiology technician|TS تقني أشعة'),
    phd: L('LT in health technology|LT في التكنولوجيا الصحية', 'Bridge to a nursing or lab sciences bachelor|الانتقال إلى إجازة في التمريض أو علوم المختبرات'), scopus: 'Applied technical route',
    careers: L('Lab technician|تقني مختبر', 'Nursing assistant|مساعد تمريض', 'Pharmacy assistant|مساعد صيدلي', 'Radiology technician|تقني أشعة'),
    routes: L('Some health jobs also need a licence exam — check before choosing|بعض المهن الصحية تحتاج أيضًا إلى امتحان ترخيص — تحقّق قبل الاختيار') },
  { id: 'building-tech', name: t('Building & construction technology', 'تكنولوجيا البناء والإنشاءات'),
    one: t('Technical drawing, site work, surveying and building services.', 'الرسم الفني والعمل في الورش والمساحة وخدمات المباني.'),
    think: t('"How do I turn this drawing into a real building?" You like plans, measurements and outdoor work.', '«كيف أحوّل هذا الرسم إلى بناء حقيقي؟» تحب المخططات والقياسات والعمل الميداني.'),
    school: L('Mathematics|الرياضيات', 'Physics|الفيزياء', 'Drawing|الرسم'), study: L('Technical drawing & CAD|الرسم الفني والرسم بالحاسوب', 'Building materials|مواد البناء', 'Surveying|المساحة', 'Site supervision|الإشراف على الورش', 'Plumbing & building services|التمديدات الصحية وخدمات المباني'),
    riasec: 'RC', bachelor: bt, stages, masters: L('TS Civil works|TS الأشغال المدنية', 'TS Surveying|TS المساحة', 'TS Architectural drafting|TS الرسم المعماري'),
    phd: L('LT in construction|LT في البناء', 'Bridge to civil engineering or architecture|الانتقال إلى الهندسة المدنية أو العمارة'), scopus: 'Applied technical route',
    careers: L('Site technician|تقني ورشة', 'Surveyor|مسّاح', 'CAD draftsperson|رسّام بالحاسوب', 'Building contractor|مقاول بناء'),
    routes: L('Reconstruction creates steady demand for skilled technicians|إعادة الإعمار تخلق طلبًا ثابتًا على التقنيين المهرة') },
  { id: 'media-tech', name: t('Graphic design & media production', 'التصميم الغرافيكي والإنتاج الإعلامي'),
    one: t('Designing, printing, filming and editing for real clients.', 'التصميم والطباعة والتصوير والمونتاج لزبائن حقيقيين.'),
    think: t('"Will people notice and understand this?" You are creative and like practical tools.', '«هل سيلاحظ الناس هذا ويفهمونه؟» أنت مبدع وتحب الأدوات العملية.'),
    school: L('Art|الفنون', 'Languages|اللغات', 'Computer basics|أساسيات الحاسوب'), study: L('Graphic design software|برامج التصميم الغرافيكي', 'Photography|التصوير', 'Video editing|المونتاج', 'Printing techniques|تقنيات الطباعة', 'Social media content|محتوى وسائل التواصل'),
    riasec: 'AR', bachelor: bt, stages, masters: L('TS Graphic design|TS التصميم الغرافيكي', 'TS Audiovisual production|TS الإنتاج السمعي البصري', 'TS Printing & publishing|TS الطباعة والنشر'),
    phd: L('LT in design|LT في التصميم', 'Bridge to a design or media bachelor|الانتقال إلى إجازة في التصميم أو الإعلام'), scopus: 'Applied technical route',
    careers: L('Graphic designer|مصمّم غرافيكي', 'Video editor|مونتير', 'Photographer|مصوّر', 'Print shop technician|تقني مطبعة'),
    routes: L('A strong portfolio matters more than the diploma|ملف أعمال قوي أهم من الشهادة') }
];

A.faculties.push({
  id: 'vocational', icon: '⚒', color: '#6a6f2e', status: 'full',
  name: t('Technical & vocational routes', 'المسارات الفنية والمهنية'),
  question: t('How can I learn a skill and start working sooner?', 'كيف أتعلّم مهارة وأبدأ العمل أسرع؟'),
  think: t('Technical students learn by doing: workshops, internships and real clients. Many start earning early and can still move on to university later.', 'طلاب المسار الفني يتعلّمون بالممارسة: المشاغل والتدريب والزبائن الحقيقيون. كثيرون يبدأون الكسب باكرًا ويستطيعون الانتقال إلى الجامعة لاحقًا.'),
  intro: t('The technical route is a real, respected path — not a second choice. In Lebanon it runs BT → TS → LT, with bridges into university. Abroad: technical universities in Ghana, apprenticeships and HNDs in the UK, community colleges in the US, BTS and dual apprenticeships in France and Germany.', 'المسار الفني طريق حقيقي ومحترم — وليس خيارًا ثانيًا. في لبنان يمرّ بـ BT ← TS ← LT مع إمكانية الانتقال إلى الجامعة. وفي الخارج: الجامعات التقنية في غانا، والتلمذة المهنية وHND في بريطانيا، وكليات المجتمع في أميركا، وBTS والتلمذة المزدوجة في فرنسا وألمانيا.'),
  ladderNote: t('BT about 3 years after Grade 9; TS about 3 years after a BT or Bac; LT after a TS. Exact durations and bridges depend on the specialty — check with the technical education directorate (fact T1, not yet verified).', 'BT نحو 3 سنوات بعد البريفيه؛ TS نحو 3 سنوات بعد BT أو البكالوريا؛ LT بعد TS. المدد والانتقالات الدقيقة تختلف بحسب الاختصاص — تحقّق لدى المديرية العامة للتعليم المهني والتقني (المعلومة T1، لم يُتحقَّق منها بعد).'),
  school: L('Practical subjects|المواد العملية', 'Mathematics|الرياضيات', 'Languages|اللغات'), riasec: 'RE',
  majors
});
if (A.prepare) A.prepare.req.vocational = { lb: t('Brevet (Grade 9) for a BT; a BT or any Bac section for a TS', 'البريفيه للـ BT؛ وBT أو أيّ فرع ثانوي للـ TS'), us: L('Any courses; practical electives help|أيّ مواد؛ والمواد العملية الاختيارية تساعد'), extra: t('Workshops, internships and a portfolio of real work matter most.', 'المشاغل والتدريب وملف أعمال حقيقي هي الأهم.') };
if (A.countries) A.countries.facultyIn.vocational = { lb: ['Public technical schools (DGVTE)', 'Lebanese University Faculty of Technology', 'Private technical institutes'], gh: ['Accra Technical University', 'Kumasi Technical University', 'Takoradi Technical University'], uk: ['Further education colleges (BTEC, HNC/HND)', 'Degree apprenticeships'], na: ['Community colleges (associate degrees)', 'Apprenticeship programs'], eu: ['France: BTS / BUT', 'Germany: dual apprenticeship (Ausbildung)'], notes: {} };
})();
