/* Field Atlas — "Prepare now" + entry requirements (Phase 2 of the improvement plan).
 * Two tracks, matching the school: 'lb' = Lebanese curriculum, 'us' = American system.
 * Facts are general guidance written 2026-11; exact rules change yearly → always link to official pages.
 */
(function () {
const { t, L } = window.ATLAS;

const tracks = {
  lb: {
    name: t('Lebanese curriculum', 'المنهج اللبناني'),
    who: t('For students preparing the Lebanese Baccalaureate (official exams).', 'للطلاب الذين يحضّرون الشهادة الثانوية اللبنانية (الامتحانات الرسمية).'),
    years: [
      { grade: t('Grade 10 · 1st secondary', 'الأول ثانوي'),
        goal: t('Build strong foundations and discover what you like.', 'ابنِ أساسًا قويًا واكتشف ما تحبّه.'),
        todo: L('Keep strong grades in math, sciences and languages — next year\'s choice depends on them|حافظ على علامات قوية في الرياضيات والعلوم واللغات — خيار السنة المقبلة يعتمد عليها', 'Explore Field Atlas and take the personality test|استكشف أطلس الاختصاصات وقم باختبار الشخصية', 'Read in English (and French if you can) every week|اقرأ بالإنجليزية (وبالفرنسية إن استطعت) كل أسبوع', 'Join one activity: club, volunteering, sport or competition|انضمّ إلى نشاط واحد: نادٍ أو تطوّع أو رياضة أو مسابقة') },
      { grade: t('Grade 11 · 2nd secondary', 'الثاني ثانوي'),
        goal: t('Choose your branch: Scientific or Humanities. This decides which Grade 12 sections stay open.', 'اختر فرعك: علمي أو أدبي. هذا يحدّد أيّ فروع الثالث ثانوي تبقى متاحة.'),
        todo: L('Pick Scientific if you are considering medicine, engineering, sciences, pharmacy or computing|اختر العلمي إذا كنت تفكّر في الطب أو الهندسة أو العلوم أو الصيدلة أو الحوسبة', 'Shortlist 2–3 faculties and 3–5 universities (Lebanon and abroad)|اختر ٢–٣ كليات و٣–٥ جامعات (في لبنان والخارج)', 'Check which universities ask for SAT or an English test, and plan when to sit them|تحقّق أيّ الجامعات تطلب SAT أو اختبار لغة إنجليزية، وخطّط لموعده', 'Talk to someone who studies or works in your chosen field|تحدّث مع شخص يدرس أو يعمل في المجال الذي اخترته') },
      { grade: t('Grade 12 · 3rd secondary', 'الثالث ثانوي'),
        goal: t('Your section, your applications and the official exams.', 'فرعك وطلبات الالتحاق والامتحانات الرسمية.'),
        todo: L('Your section: General Sciences (SG), Life Sciences (SV), Sociology & Economics (SE) or Literature & Humanities (LH)|فرعك: علوم عامة (SG) أو علوم الحياة (SV) أو اجتماع واقتصاد (SE) أو آداب وإنسانيات (LH)', 'Apply to private universities during the year (deadlines often between autumn and spring)|قدّم طلباتك للجامعات الخاصة خلال السنة (المواعيد غالبًا بين الخريف والربيع)', 'Prepare the entrance exam if your faculty has one (e.g. Lebanese University engineering). LU medicine is different: first a year at the Faculty of Sciences (average at least 12/20), then a competitive exam into Year 2|حضّر لمباراة الدخول إذا كانت كليتك تطلبها (مثل هندسة الجامعة اللبنانية). الطب في اللبنانية مختلف: سنة أولى في كلية العلوم (معدّل 12/20 على الأقل) ثم مباراة للدخول إلى السنة الثانية', 'Get your Bac through the official exams — every Lebanese university requires it|احصل على الشهادة الثانوية عبر الامتحانات الرسمية — كل الجامعات اللبنانية تطلبها') }
    ],
    exams: L('Lebanese official exams (Baccalaureate)|الامتحانات الرسمية (الشهادة الثانوية)', 'Entrance exams of some faculties (e.g. Lebanese University engineering; LU medicine after a science year)|مباريات الدخول لبعض الكليات (مثل هندسة الجامعة اللبنانية؛ وطب اللبنانية بعد سنة علوم)', 'SAT — asked by some private universities (e.g. AUB) and most universities abroad|اختبار SAT — تطلبه بعض الجامعات الخاصة (مثل AUB) ومعظم جامعات الخارج', 'English test (TOEFL, IELTS or the university\'s own) for English-language universities|اختبار لغة إنجليزية (TOEFL أو IELTS أو اختبار الجامعة) للجامعات التي تدرّس بالإنجليزية', 'French placement test for French-language universities (e.g. USJ)|اختبار لغة فرنسية للجامعات التي تدرّس بالفرنسية (مثل USJ)'),
    docs: L('School transcripts (Grades 10–12)|كشوف العلامات (الأول حتى الثالث ثانوي)', 'Official Bac certificate, certified by the Ministry of Education|شهادة البكالوريا الرسمية مصدّقة من وزارة التربية', 'ID / civil record extract and passport|الهوية أو إخراج القيد وجواز السفر', 'Test score reports (SAT, English test) if asked|نتائج الاختبارات (SAT واختبار اللغة) عند الطلب', 'Recommendation letters and a personal statement for universities abroad|رسائل توصية وخطاب شخصي لجامعات الخارج'),
    abroad: t('Studying abroad with the Lebanese Bac is possible: the UK, Europe and Canada usually accept it with good grades and an English or French test; the US also looks at the SAT, activities and essays.',
              'الدراسة في الخارج بالشهادة اللبنانية ممكنة: بريطانيا وأوروبا وكندا تقبلها عادةً مع علامات جيدة واختبار لغة إنجليزية أو فرنسية؛ والولايات المتحدة تنظر أيضًا إلى SAT والأنشطة والمقالات.')
  },
  us: {
    name: t('American system', 'النظام الأميركي'),
    who: t('For students finishing an American high-school diploma.', 'للطلاب الذين ينهون شهادة الثانوية الأميركية.'),
    years: [
      { grade: t('Grade 9–10', 'الصف التاسع والعاشر'),
        goal: t('Your GPA starts counting now. Universities see your grades from Grade 9.', 'معدّلك (GPA) يبدأ بالاحتساب الآن. الجامعات ترى علاماتك منذ الصف التاسع.'),
        todo: L('Take the strongest courses you can handle, especially math and sciences|اختر أقوى المواد التي تستطيع النجاح فيها، خصوصًا الرياضيات والعلوم', 'Start one or two activities you really care about and stay with them|ابدأ نشاطًا أو اثنين تهتم بهما فعلًا واستمر فيهما', 'Read widely and practise writing — essays matter later|اقرأ كثيرًا وتمرّن على الكتابة — المقالات مهمة لاحقًا', 'Explore faculties here and take the personality test|استكشف الكليات هنا وقم باختبار الشخصية') },
      { grade: t('Grade 11', 'الصف الحادي عشر'),
        goal: t('The most important year for grades and tests.', 'السنة الأهم للعلامات والاختبارات.'),
        todo: L('Take AP or honors courses linked to your field (e.g. AP Biology for medicine, AP Calculus and Physics for engineering)|اختر مواد AP أو honors مرتبطة باختصاصك (مثل AP Biology للطب، وAP Calculus والفيزياء للهندسة)', 'Sit the SAT (or ACT) in spring; you can retake in the fall|قدّم SAT (أو ACT) في الربيع؛ ويمكنك الإعادة في الخريف', 'Build your university list: Lebanon, the US, the UK, Canada, Europe…|ضع لائحة جامعاتك: لبنان، الولايات المتحدة، بريطانيا، كندا، أوروبا…', 'Ask two teachers early for recommendation letters|اطلب باكرًا من أستاذين رسائل توصية', 'Use the summer for a project, internship, course or volunteering|استغلّ الصيف لمشروع أو تدريب أو دورة أو تطوّع') },
      { grade: t('Grade 12', 'الصف الثاني عشر'),
        goal: t('Applications, essays and keeping your grades up.', 'الطلبات والمقالات والمحافظة على علاماتك.'),
        todo: L('Write your personal essay in the summer before Grade 12|اكتب مقالتك الشخصية في الصيف الذي يسبق الصف الثاني عشر', 'US: apply via the Common App (early deadlines around November, regular around January)|الولايات المتحدة: قدّم عبر Common App (المواعيد المبكرة نحو تشرين الثاني، والعادية نحو كانون الثاني)', 'UK: apply via UCAS (medicine, dentistry, vet and Oxford/Cambridge by 15 October; most others by mid-January — 13 January for 2027 entry)|بريطانيا: قدّم عبر UCAS (الطب وطب الأسنان والبيطري وأكسفورد وكامبريدج حتى 15 تشرين الأول؛ والباقي حتى منتصف كانون الثاني — 13 كانون الثاني لدخول 2027)', 'Lebanon: apply directly to each university; get the diploma equivalence (see below)|لبنان: قدّم مباشرة لكل جامعة؛ واحصل على معادلة الشهادة (انظر أدناه)', 'Apply for scholarships and financial aid at the same time|قدّم طلبات المنح والمساعدات المالية في الوقت نفسه') }
    ],
    exams: L('SAT or ACT (many universities are test-optional, but strong scores help)|SAT أو ACT (كثير من الجامعات لا تشترطه، لكن العلامات القوية تساعد)', 'AP exams (May) — can earn university credit|امتحانات AP (أيار) — قد تُحتسب كمواد جامعية', 'TOEFL / IELTS — only if English is not your first language and the university asks|TOEFL أو IELTS — فقط إذا لم تكن الإنجليزية لغتك الأولى وطلبتها الجامعة', 'Entrance or interview for some programs (medicine, arts portfolio, architecture)|مباراة دخول أو مقابلة لبعض البرامج (الطب، ملف الأعمال الفنية، العمارة)'),
    docs: L('High-school transcript (Grades 9–12) with GPA|كشف العلامات (من التاسع حتى الثاني عشر) مع المعدّل', 'High-school diploma|شهادة الثانوية', 'SAT / ACT / AP score reports|نتائج SAT وACT وAP', 'Personal essay|المقالة الشخصية', '2 teacher recommendations + counselor letter|رسالتا توصية من أساتذة + رسالة من المرشد', 'Passport (and visa later for study abroad)|جواز السفر (والتأشيرة لاحقًا للدراسة في الخارج)'),
    abroad: t('To enter a Lebanese university with an American diploma you need an equivalence from the Lebanese Ministry of Education and Higher Education. It usually asks for SAT scores and proof of your school years — check the current rules early, at least a year before.',
              'للدخول إلى جامعة لبنانية بشهادة أميركية تحتاج إلى معادلة من وزارة التربية والتعليم العالي في لبنان. وهي تطلب عادةً علامات SAT وإثبات سنوات الدراسة — تحقّق من الشروط الحالية باكرًا، قبل سنة على الأقل.')
  }
};

/* Skills every student should build, whatever the faculty */
const skills = L(
  'Study habits: plan your week, revise a little every day|عادات الدراسة: خطّط لأسبوعك وراجع قليلًا كل يوم',
  'English (and French if you aim at French-language universities)|الإنجليزية (والفرنسية إن كنت تستهدف جامعات فرنكوفونية)',
  'Writing: clear paragraphs, emails and a personal statement|الكتابة: فقرات واضحة ورسائل إلكترونية وخطاب شخصي',
  'Digital basics: typing, documents, spreadsheets, safe internet use|الأساسيات الرقمية: الطباعة والمستندات والجداول والاستخدام الآمن للإنترنت',
  'Asking for help and talking to adults (teachers, counselors, professionals)|طلب المساعدة والتحدّث مع الكبار (الأساتذة والمرشدين والمهنيين)',
  'Managing money and time — you may live alone at university|إدارة المال والوقت — قد تعيش وحدك في الجامعة'
);

/* Typical entry requirements per faculty. 'lb' = Lebanese Bac section; 'us' = American courses. */
const req = {
  science: { lb: t('General Sciences (SG) or Life Sciences (SV)', 'علوم عامة (SG) أو علوم الحياة (SV)'), us: L('Calculus|التفاضل والتكامل', 'Chemistry, Biology, Physics|الكيمياء والبيولوجيا والفيزياء'), extra: t('Strong math and science grades.', 'علامات قوية في الرياضيات والعلوم.') },
  engineering: { lb: t('General Sciences (SG) (some universities also accept Life Sciences (SV))', 'علوم عامة (SG) (وبعض الجامعات تقبل علوم الحياة (SV) أيضًا)'), us: L('Calculus (AP if possible)|التفاضل والتكامل (AP إن أمكن)', 'Physics (AP if possible)|الفيزياء (AP إن أمكن)', 'Chemistry|الكيمياء'), extra: t('Entrance exam at the Lebanese University; high math scores everywhere.', 'مباراة دخول في الجامعة اللبنانية؛ وعلامات رياضيات مرتفعة في كل مكان.') },
  health: { lb: t('Life Sciences (SV) or General Sciences (SG)', 'علوم الحياة (SV) أو علوم عامة (SG)'), us: L('Biology and Chemistry (AP if possible)|البيولوجيا والكيمياء (AP إن أمكن)', 'Math|الرياضيات'), extra: t('Very competitive. Lebanese University medicine: a first year at the Faculty of Sciences (average at least 12/20), then a competitive exam. Private universities: interviews and top grades. In the US, medicine starts after a bachelor (pre-med).', 'تنافسية جدًا. طب الجامعة اللبنانية: سنة أولى في كلية العلوم (معدّل 12/20 على الأقل) ثم مباراة. الجامعات الخاصة: مقابلات وعلامات عالية. في الولايات المتحدة يبدأ الطب بعد الإجازة (pre-med).') },
  computing: { lb: t('General Sciences (SG) or Life Sciences (SV) (some accept Sociology & Economics (SE))', 'علوم عامة (SG) أو علوم الحياة (SV) (وبعضها يقبل اجتماع واقتصاد (SE))'), us: L('Math (Calculus or Statistics)|الرياضيات (التفاضل أو الإحصاء)', 'Computer science (AP CS if offered)|علوم الحاسوب (AP CS إن وُجدت)'), extra: t('Show projects: a small app, website or game helps.', 'أظهر مشاريعك: تطبيق صغير أو موقع أو لعبة يساعدك.') },
  business: { lb: t('Any section (Sociology & Economics (SE) and General Sciences (SG) are common)', 'أيّ فرع (اجتماع واقتصاد (SE) وعلوم عامة (SG) هما الأكثر شيوعًا)'), us: L('Math|الرياضيات', 'Economics if offered|الاقتصاد إن وُجد'), extra: t('Good math and English; activities that show leadership.', 'رياضيات وإنجليزية جيدتان؛ وأنشطة تُظهر روح القيادة.') },
  law: { lb: t('Any section (Literature & Humanities (LH) and Sociology & Economics (SE) are common)', 'أيّ فرع (آداب وإنسانيات (LH) واجتماع واقتصاد (SE) هما الأكثر شيوعًا)'), us: L('English & writing|الإنجليزية والكتابة', 'History / social studies|التاريخ والدراسات الاجتماعية'), extra: t('Strong Arabic and French/English for Lebanese law; in the US and Canada law is studied after a bachelor.', 'عربية قوية وفرنسية أو إنجليزية لدراسة الحقوق في لبنان؛ وفي الولايات المتحدة وكندا تُدرَس الحقوق بعد الإجازة.') },
  humanities: { lb: t('Any section (Literature & Humanities (LH) is common)', 'أيّ فرع (آداب وإنسانيات (LH) هو الأكثر شيوعًا)'), us: L('English|الإنجليزية', 'History|التاريخ', 'A foreign language|لغة أجنبية'), extra: t('Language programs may test your level.', 'برامج اللغات قد تختبر مستواك.') },
  social: { lb: t('Any section', 'أيّ فرع'), us: L('English|الإنجليزية', 'Psychology / social studies|علم النفس والدراسات الاجتماعية', 'Statistics|الإحصاء'), extra: t('Volunteering with people (children, elderly, NGOs) is a strong plus.', 'التطوّع مع الناس (أطفال، مسنّون، منظمات) نقطة قوة كبيرة.') },
  education: { lb: t('Any section', 'أيّ فرع'), us: L('English|الإنجليزية', 'The subject you want to teach|المادة التي تريد تعليمها'), extra: t('Experience with children (tutoring, camps) helps.', 'الخبرة مع الأطفال (دروس خصوصية، مخيّمات) تساعد.') },
  'arts-design': { lb: t('Any section (architecture usually General Sciences (SG) or Life Sciences (SV))', 'أيّ فرع (العمارة غالبًا علوم عامة (SG) أو علوم الحياة (SV))'), us: L('Art & design|الفنون والتصميم', 'Math and physics for architecture|الرياضيات والفيزياء للعمارة'), extra: t('A portfolio of your work, sometimes a drawing test or audition (music, theatre).', 'ملف أعمال (بورتفوليو)، وأحيانًا اختبار رسم أو أداء (موسيقى، مسرح).') },
  media: { lb: t('Any section', 'أيّ فرع'), us: L('English & writing|الإنجليزية والكتابة', 'Media / journalism if offered|الإعلام أو الصحافة إن وُجدت'), extra: t('Show your work: articles, videos, a school newspaper or social-media project.', 'أظهر أعمالك: مقالات أو فيديوهات أو صحيفة مدرسية أو مشروع على وسائل التواصل.') },
  agriculture: { lb: t('Life Sciences (SV) or General Sciences (SG)', 'علوم الحياة (SV) أو علوم عامة (SG)'), us: L('Biology|البيولوجيا', 'Chemistry|الكيمياء'), extra: t('Veterinary medicine is competitive, like medicine.', 'الطب البيطري تنافسي مثل الطب.') }
};

const links = [
  { name: t('Jameati — Lebanese universities: requirements, fees, deadlines', 'جامعتي — الجامعات اللبنانية: الشروط والأقساط والمواعيد'), url: 'https://jameati.com.lb/ar/universities' },
  { name: t('Ministry of Education and Higher Education (Lebanon) — equivalence', 'وزارة التربية والتعليم العالي (لبنان) — المعادلات'), url: 'https://www.mehe.gov.lb' },
  { name: t('SAT (College Board)', 'اختبار SAT (College Board)'), url: 'https://satsuite.collegeboard.org/sat' },
  { name: t('AP exams (College Board)', 'امتحانات AP (College Board)'), url: 'https://apstudents.collegeboard.org' },
  { name: t('Common App — US universities', 'Common App — الجامعات الأميركية'), url: 'https://www.commonapp.org' },
  { name: t('UCAS — UK universities', 'UCAS — الجامعات البريطانية'), url: 'https://www.ucas.com' },
  { name: t('IELTS', 'IELTS'), url: 'https://ielts.org' },
  { name: t('TOEFL', 'TOEFL'), url: 'https://www.ets.org/toefl.html' }
];

window.ATLAS.prepare = { tracks, skills, req, links, checked: '2026-11' };
/* tests by destination (general guidance; each university publishes its own list) */
window.ATLAS.prepare.dest = {
  title: t('Which tests, for which country?', 'أيّ اختبارات، لأيّ بلد؟'),
  intro: t('Students hear about many tests. Here is which one is asked where. You rarely need all of them: choose your countries first.', 'يسمع الطلاب عن اختبارات كثيرة. هنا أيّ اختبار يُطلب وأين. نادرًا ما تحتاجها كلها: اختر بلدانك أولًا.'),
  list: [
    { flag: '🇱🇧', where: t('Lebanon', 'لبنان'), tests: L('American-style universities (AUB, LAU, NDU…): often the SAT, and an English test (TOEFL, IELTS or the university\'s own exam)|الجامعات ذات النظام الأميركي (AUB وLAU وNDU…): غالبًا SAT، واختبار لغة إنجليزية (TOEFL أو IELTS أو اختبار الجامعة)', 'Lebanese University: an entrance exam in some faculties (engineering, medicine after a science year…)|الجامعة اللبنانية: مباراة دخول في بعض الكليات (الهندسة، والطب بعد سنة علوم…)', 'French-language universities (e.g. USJ): a French test or the university\'s own entrance exam|الجامعات الفرنكوفونية (مثل USJ): اختبار لغة فرنسية أو مباراة الجامعة') },
    { flag: '🇺🇸', where: t('United States', 'الولايات المتحدة'), tests: L('SAT or ACT — many universities are "test-optional", but a good score still helps|SAT أو ACT — كثير من الجامعات تجعله اختياريًا، لكن العلامة الجيدة تساعد', 'English test if English is not your first language: TOEFL, IELTS or Duolingo English Test|اختبار لغة إنجليزية إذا لم تكن لغتك الأم: TOEFL أو IELTS أو Duolingo English Test', 'AP exams (optional) can give you university credits|امتحانات AP (اختيارية) قد تمنحك كريدت جامعية', 'Later: MCAT for medicine, LSAT for law (after a bachelor)|لاحقًا: MCAT للطب وLSAT للحقوق (بعد الإجازة)') },
    { flag: '🇨🇦', where: t('Canada', 'كندا'), tests: L('Usually no SAT: your school grades matter most|غالبًا لا SAT: علاماتك المدرسية هي الأهم', 'English test (IELTS, TOEFL or Duolingo), or a French test for French-language universities in Québec|اختبار لغة إنجليزية (IELTS أو TOEFL أو Duolingo)، أو اختبار فرنسية للجامعات الفرنكوفونية في كيبيك') },
    { flag: '🇬🇧', where: t('United Kingdom', 'بريطانيا'), tests: L('English test, usually IELTS (the visa may need the "UKVI" version)|اختبار لغة إنجليزية، غالبًا IELTS (قد تطلب التأشيرة نسخة UKVI)', 'Extra tests for some courses: UCAT (medicine, dentistry), LNAT (law at some universities), TMUA (maths, computer science, economics at some universities), ESAT (engineering and sciences at Cambridge and Imperial)|اختبارات إضافية لبعض الاختصاصات: UCAT (الطب وطب الأسنان)، LNAT (الحقوق في بعض الجامعات)، TMUA (الرياضيات وعلوم الحاسوب والاقتصاد في بعض الجامعات)، ESAT (الهندسة والعلوم في كامبريدج وإمبيريال)', 'Some universities ask for a foundation year first, or AP scores with an American diploma|بعض الجامعات تطلب سنة تأسيسية أولًا، أو علامات AP مع الشهادة الأميركية') },
    { flag: '🇫🇷', where: t('France', 'فرنسا'), tests: L('French-taught programmes: a French test (TCF, or DELF/DALF, usually level B2)|البرامج بالفرنسية: اختبار لغة فرنسية (TCF أو DELF/DALF، غالبًا مستوى B2)', 'Applications from abroad often go through Campus France|الطلبات من الخارج تمرّ غالبًا عبر Campus France', 'English-taught programmes: IELTS or TOEFL|البرامج بالإنجليزية: IELTS أو TOEFL') },
    { flag: '🇩🇪', where: t('Germany', 'ألمانيا'), tests: L('German-taught programmes: TestDaF or DSH (about level C1)|البرامج بالألمانية: TestDaF أو DSH (نحو مستوى C1)', 'English-taught programmes: IELTS or TOEFL|البرامج بالإنجليزية: IELTS أو TOEFL', 'With some diplomas you first do a preparatory year (Studienkolleg) and its exam|مع بعض الشهادات تبدأ بسنة تحضيرية (Studienkolleg) وامتحانها') },
    { flag: '🇪🇺', where: t('Other European countries (English-taught)', 'دول أوروبية أخرى (بالإنجليزية)'), tests: L('IELTS or TOEFL|IELTS أو TOEFL', 'Sometimes a minimum level in maths or an entrance test, depending on the programme|أحيانًا مستوى أدنى في الرياضيات أو اختبار دخول، بحسب البرنامج') }
  ],
  note: t('Rules change every year: always check the admissions page of each university you choose.', 'القوانين تتغيّر كل سنة: راجع دائمًا صفحة القبول لكل جامعة تختارها.')
};
})();
