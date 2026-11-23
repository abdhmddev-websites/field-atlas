/* Field Atlas — faculty → major → master → PhD → careers data (Phase 1).
 *
 * Every visible string is bilingual: {en, ar}.
 *   t('English','العربية')            → {en, ar}
 *   L('English|العربية', ...)          → [{en, ar}, ...]
 *
 * Faculty  { id, icon, color, status:'full'|'outline', name, question, think, intro,
 *            school[], riasec, ladderNote?, majors[] }
 * Major    { id, name, one, think, school[], study[], riasec,
 *            bachelor:{deg, years, lmd}, masters[], phd[], scopus, careers[], routes[], note? }
 *            stages? { bachelor|master|phd: {name, txt, years} } — overrides the ladder labels
 *            for professions with a different path (e.g. Medicine: MD → Residency → Fellowship).
 *   'outline' faculties only carry { id, name } per major; data/full/<faculty>.js fills them.
 *
 * riasec = Holland interest codes (R realistic, I investigative, A artistic,
 * S social, E enterprising, C conventional) — hooks for the later personality module.
 * scopus = Scopus ASJC subject area used for the PhD / research layer.
 */
(function () {
const t = (en, ar) => ({ en, ar });
const L = (...xs) => xs.map(s => { const [en, ar] = s.split('|'); return { en, ar }; });

/* ───────────── The degree ladder (shared by every faculty) ───────────── */
const ladder = {
  levels: [
    { id: 'school', name: t('School', 'المدرسة'), what: t('Lebanese Baccalaureate (or equivalent). Your section (Life Sciences (SV), General Sciences (SG), Sociology & Economics (SE), Literature & Humanities (LH)) opens some doors more easily than others.', 'الشهادة الثانوية اللبنانية أو ما يعادلها. فرعك (علوم الحياة (SV)، علوم عامة (SG)، اجتماع واقتصاد (SE)، آداب وإنسانيات (LH)) يسهّل الدخول إلى بعض الكليات أكثر من غيرها.') },
    { id: 'bachelor', name: t('Bachelor', 'الإجازة / البكالوريوس'), what: t('Your first university degree. You learn the foundations of one discipline and can already start working.', 'شهادتك الجامعية الأولى. تتعلّم فيها أساسيات اختصاص واحد ويمكنك بعدها أن تبدأ العمل.') },
    { id: 'master', name: t('Master', 'الماستر'), what: t('You go deeper into one specialization. Some masters are professional (prepare for a job), others are research masters (prepare for a PhD).', 'تتعمّق في اختصاص فرعي واحد. بعض شهادات الماستر مهنية تحضّر للعمل، وبعضها بحثية تحضّر للدكتوراه.') },
    { id: 'phd', name: t('PhD / Doctorate', 'الدكتوراه'), what: t('You create new knowledge: a research question nobody has answered, a thesis, published papers. Leads to research and university teaching.', 'تنتج معرفة جديدة: سؤال بحثي لم يُجب عنه أحد، وأطروحة، وأبحاث منشورة. تقود إلى البحث العلمي والتعليم الجامعي.') },
    { id: 'career', name: t('Career', 'المهنة'), what: t('You can enter work after any step. Some professions also need a licence or registration (Order of Engineers, Bar association, medical colloquium…).', 'يمكنك دخول سوق العمل بعد أي مرحلة. بعض المهن تتطلّب أيضًا ترخيصًا أو انتسابًا إلى نقابة (نقابة المهندسين، نقابة المحامين، الكولوكيوم الطبي…).') }
  ],
  systems: [
    { id: 'lmd', name: t('LMD system (French-style)', 'نظام LMD (الفرنسي)'), where: t('e.g. Lebanese University, USJ', 'مثل الجامعة اللبنانية وجامعة القديس يوسف'),
      steps: [t('Licence · 3 years', 'إجازة · ٣ سنوات'), t('Master · 2 years (M1 + M2)', 'ماستر · سنتان (M1 + M2)'), t('Doctorat · 3 years', 'دكتوراه · ٣ سنوات')] },
    { id: 'us', name: t('American system', 'النظام الأميركي'), where: t('e.g. AUB, LAU, NDU', 'مثل الجامعة الأميركية واللبنانية الأميركية وسيدة اللويزة'),
      steps: [t('Bachelor (BS / BA / BE) · 3–4 years', 'بكالوريوس (BS / BA / BE) · ٣–٤ سنوات'), t('Master (MS / MA / MEng / MBA) · 1–2 years', 'ماستر (MS / MA / MEng / MBA) · سنة إلى سنتين'), t('PhD · 4–6 years', 'دكتوراه · ٤–٦ سنوات')] }
  ],
  /* What the American-system degree letters mean (shown on the Degree Ladder page). */
  abbr: [
    { code: 'BS / BSc', name: t('Bachelor of Science', 'بكالوريوس في العلوم'), what: t('Science, numbers and technology: computer science, biology, chemistry, maths, nursing.', 'العلوم والأرقام والتكنولوجيا: علوم الحاسوب، الأحياء، الكيمياء، الرياضيات، التمريض.') },
    { code: 'BA', name: t('Bachelor of Arts', 'بكالوريوس في الآداب'), what: t('Humanities and social sciences: languages, history, psychology, media, political science, art.', 'الآداب والعلوم الإنسانية والاجتماعية: اللغات، التاريخ، علم النفس، الإعلام، العلوم السياسية، الفنون.') },
    { code: 'BE / BEng', name: t('Bachelor of Engineering', 'بكالوريوس في الهندسة'), what: t('Engineering: civil, electrical, mechanical, computer… Usually 4 years.', 'الهندسة: مدنية، كهربائية، ميكانيكية، كمبيوتر… مدتها عادةً ٤ سنوات.') },
    { code: 'MS / MSc', name: t('Master of Science', 'ماستر في العلوم'), what: t('A science master, usually with research and a thesis. A good step towards a PhD.', 'ماستر في العلوم، غالبًا فيه بحث وأطروحة. خطوة جيدة نحو الدكتوراه.') },
    { code: 'MA', name: t('Master of Arts', 'ماستر في الآداب'), what: t('The master that follows a BA, in the humanities and social sciences.', 'الماستر الذي يأتي بعد الـ BA، في الآداب والعلوم الإنسانية والاجتماعية.') },
    { code: 'MEng', name: t('Master of Engineering', 'ماستر في الهندسة'), what: t('A professional master for engineers: courses and a project, little research. Prepares you for work more than for a PhD.', 'ماستر مهني للمهندسين: مواد ومشروع، وبحث قليل. يحضّرك للعمل أكثر من الدكتوراه.') },
    { code: 'MBA', name: t('Master of Business Administration', 'ماجستير إدارة الأعمال'), what: t('Management. Open to graduates of any field (engineers, doctors, programmers…), often after a few years of work, to lead teams and companies.', 'الإدارة. مفتوح لخرّيجي كل الاختصاصات (مهندسون، أطباء، مبرمجون…)، غالبًا بعد سنوات من العمل، لقيادة الفرق والشركات.') },
    { code: 'MPhil', name: t('Master of Philosophy', 'ماستر في الفلسفة (بحثي)'), what: t('A research-only master that prepares directly for a PhD. "Philosophy" is a traditional name, it has nothing to do with the subject.', 'ماستر بحثي فقط يحضّر مباشرة للدكتوراه. كلمة «فلسفة» تسمية تقليدية لا علاقة لها بالاختصاص.') },
    { code: 'PhD', name: t('Doctor of Philosophy', 'دكتوراه في الفلسفة'), what: t('The research doctorate, in any field, not only philosophy.', 'الدكتوراه البحثية، في أي اختصاص وليس في الفلسفة فقط.') }
  ],
  tech: {
    title: t('The technical route in Lebanon, step by step', 'المسار المهني والتقني في لبنان، خطوة بخطوة'),
    intro: t('A practical path in technical schools and institutes. Each step leads to a job, or to the next step, or to university.', 'مسار عملي في المدارس والمعاهد الفنية. كل خطوة تقود إلى عمل، أو إلى الخطوة التالية، أو إلى الجامعة.'),
    steps: [
      { code: 'BP', name: t('Brevet Professionnel', 'البريفيه المهني'), when: t('After Grade 7', 'بعد الصف السابع'), years: t('2 years ≈ Grades 8–9', 'سنتان ≈ الصفّان الثامن والتاسع'),
        what: t('A first trade (electricity, mechanics, hairdressing, cooking…). Leads to work, or to the BT.', 'مهنة أولى (كهرباء، ميكانيك، تزيين، طبخ…). تقود إلى العمل، أو إلى BT.') },
      { code: 'BT', name: t('Baccalauréat Technique (Technical Bac)', 'البكالوريا الفنية'), when: t('After Grade 9 (Brevet) or the BP', 'بعد الصف التاسع (البريفيه) أو BP'), years: t('3 years (BT1, BT2, BT3) ≈ Grades 10–12', '3 سنوات (BT1 وBT2 وBT3) ≈ من الأول إلى الثالث ثانوي'),
        what: t('A technical specialty plus general subjects. It is the technical version of the Bac.', 'اختصاص فني مع مواد عامة. هي النسخة الفنية من البكالوريا.'),
        uni: t('First door to university: with a BT you can apply to university, usually to majors close to your specialty.', 'أول باب إلى الجامعة: مع BT يمكنك التقدّم إلى الجامعة، غالبًا في اختصاصات قريبة من اختصاصك.') },
      { code: 'TS', name: t('Technicien Supérieur (Higher Technician)', 'الامتياز الفني'), when: t('After the BT or the Lebanese Bac (Grade 12)', 'بعد BT أو الشهادة الثانوية اللبنانية (الثالث ثانوي)'), years: t('2–3 years ≈ first university years', '2–3 سنوات ≈ السنوات الجامعية الأولى'),
        what: t('Higher technician diploma, very practical, with internships. Many graduates start working straight away.', 'شهادة تقني عالٍ، تطبيقية جدًا مع تدريب عملي. كثير من الخرّيجين يبدأون العمل مباشرة.'),
        uni: t('Second door: some universities count part of the TS towards a bachelor in the same field.', 'الباب الثاني: بعض الجامعات تحتسب جزءًا من TS لإجازة في المجال نفسه.') },
      { code: 'LT', name: t('Licence Technique (Technical bachelor)', 'الإجازة الفنية'), when: t('After the TS', 'بعد TS'), years: t('About 1 year', 'نحو سنة واحدة'),
        what: t('Completes the TS into a bachelor-level degree.', 'تُكمل TS لتصبح شهادة بمستوى الإجازة.'),
        uni: t('Third door: after the LT you can apply for a master, like any bachelor graduate.', 'الباب الثالث: بعد LT يمكنك التقدّم إلى الماستر، مثل أيّ خرّيج إجازة.') }
    ],
    note: t('General guidance: years and names can differ by school and specialty. Check with the Directorate General of Vocational and Technical Education (DGVTE) and the school.', 'إرشاد عام: قد تختلف المدّة والأسماء بحسب المدرسة والاختصاص. تحقّق مع المديرية العامة للتعليم المهني والتقني والمدرسة.')
  },
  technical: t('Technical route (Lebanon): BT → TS (Technicien Supérieur) → LT (Licence Technique). A strong practical path that can also lead to a university master later.',
               'المسار المهني والتقني في لبنان: BT ← TS (الامتياز الفني) ← LT (الإجازة الفنية). مسار تطبيقي قوي ويمكن أن يقود لاحقًا إلى الماستر.'),
  professionalDoctorates: t('Some degrees are called "doctor" but are professional, not research: MD (medicine), DDS/DMD (dentistry), PharmD (pharmacy). A PhD is a research degree, and it is open to graduates of almost every faculty — engineers, doctors and lawyers included.',
                            'بعض الشهادات اسمها «دكتور» لكنها مهنية لا بحثية: MD (الطب)، DDS/DMD (طب الأسنان)، PharmD (الصيدلة). أمّا الـ PhD فهي شهادة بحثية ومتاحة تقريبًا لخرّيجي كل الكليات، ومنهم المهندسون والأطباء والمحامون.')
};

/* ───────────── Faculties ───────────── */
const faculties = [

/* ===== 1. SCIENCE (full) ===== */
{
  id: 'science', icon: 'atom', color: '#3f7d6a', status: 'full',
  name: t('Faculty of Science', 'كلية العلوم'),
  question: t('Why does the world work this way?', 'لماذا يعمل العالم بهذه الطريقة؟'),
  think: t('Scientists explain. They ask a question, build a model, test it with experiments or proofs, and accept being wrong until the evidence is strong.',
           'العالِم يفسّر. يطرح سؤالًا، ويبني نموذجًا، ويختبره بالتجربة أو بالبرهان، ويتقبّل أن يكون مخطئًا حتى تصبح الأدلة قوية.'),
  intro: t('The Faculty of Science studies nature and number: mathematics, physics, chemistry, life and the Earth. It is the foundation that engineering, medicine and computing are built on.',
           'تدرس كلية العلوم الطبيعة والأرقام: الرياضيات والفيزياء والكيمياء والحياة والأرض. وهي الأساس الذي تُبنى عليه الهندسة والطب والحوسبة.'),
  school: L('Mathematics|الرياضيات', 'Physics|الفيزياء', 'Chemistry|الكيمياء', 'Biology|علوم الحياة'),
  riasec: 'IR',
  ladderNote: t('Science bachelors take 3 years (Licence at the Lebanese University, BS at AUB/LAU for Lebanese Bac holders). Many graduates add a teaching diploma, a professional master, or continue to a PhD. In American-style universities, a science bachelor is also the usual door into Medicine (MD).',
                'مدة الإجازة في العلوم ٣ سنوات (إجازة في الجامعة اللبنانية، وBS في AUB وLAU لحاملي الشهادة اللبنانية). كثير من الخرّيجين يضيفون دبلوم تعليم أو ماستر مهني أو يكملون إلى الدكتوراه. وفي الجامعات ذات النظام الأميركي تكون إجازة العلوم عادةً هي الطريق إلى دراسة الطب (MD).'),
  majors: [
    {
      id: 'mathematics', name: t('Mathematics', 'الرياضيات'),
      one: t('Patterns, structure and proof: the language every other science speaks.', 'الأنماط والبُنى والبرهان: اللغة التي تتكلّمها كل العلوم الأخرى.'),
      think: t('"Can I prove this is always true?" You enjoy staying with one hard problem for hours.', '«هل أستطيع أن أبرهن أن هذا صحيح دائمًا؟» تستمتع بالبقاء مع مسألة صعبة واحدة لساعات.'),
      school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Physics|الفيزياء', 'Logic & philosophy|المنطق والفلسفة'),
      study: L('Calculus & analysis|التفاضل والتكامل والتحليل', 'Linear algebra|الجبر الخطي', 'Abstract algebra|الجبر المجرّد', 'Probability|الاحتمالات', 'Differential equations|المعادلات التفاضلية', 'Numerical methods|الطرائق العددية'),
      riasec: 'IC',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Pure mathematics|الرياضيات البحتة', 'Applied mathematics & modelling|الرياضيات التطبيقية والنمذجة', 'Financial mathematics|الرياضيات المالية', 'Data science|علم البيانات', 'Mathematics education|تعليم الرياضيات'),
      phd: L('Number theory|نظرية الأعداد', 'Geometry & topology|الهندسة والطوبولوجيا', 'Analysis & PDEs|التحليل والمعادلات التفاضلية الجزئية', 'Optimization|الأمثَلة', 'Cryptography|التشفير', 'Mathematical physics|الفيزياء الرياضية'),
      scopus: '2600 Mathematics',
      careers: L('University lecturer & researcher|أستاذ جامعي وباحث', 'Actuary (insurance)|خبير اكتواري (تأمين)', 'Quantitative analyst (finance)|محلّل كمّي (مالية)', 'Data scientist|عالم بيانات', 'Cryptographer|مختص تشفير', 'Mathematics teacher|أستاذ رياضيات'),
      routes: L('Master in data science or AI → tech jobs|ماستر في علم البيانات أو الذكاء الاصطناعي ← وظائف تكنولوجية', 'Actuarial exams → insurance and banks|امتحانات الخبرة الاكتوارية ← شركات التأمين والمصارف', 'Teaching diploma → school teacher|دبلوم تعليم ← أستاذ مدرسة', 'Master in finance or economics|ماستر في المالية أو الاقتصاد')
    },
    {
      id: 'statistics', name: t('Statistics', 'الإحصاء'),
      one: t('Turning data into decisions while measuring how sure we are.', 'تحويل البيانات إلى قرارات مع قياس مدى ثقتنا بها.'),
      think: t('"How sure am I, and what could be fooling me?" You like evidence more than opinions.', '«ما مدى تأكّدي، وما الذي قد يخدعني؟» تحب الدليل أكثر من الآراء.'),
      school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد', 'Computer basics|أساسيات الحاسوب'),
      study: L('Probability theory|نظرية الاحتمالات', 'Statistical inference|الاستدلال الإحصائي', 'Regression models|نماذج الانحدار', 'Design of experiments|تصميم التجارب', 'Sampling & surveys|المعاينة والاستطلاعات', 'Programming in R / Python|البرمجة بلغة R وPython'),
      riasec: 'IC',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Statistics|الإحصاء', 'Biostatistics|الإحصاء الحيوي', 'Data science|علم البيانات', 'Econometrics|الاقتصاد القياسي', 'Actuarial science|العلوم الاكتوارية'),
      phd: L('Bayesian statistics|الإحصاء البايزي', 'Statistical machine learning|التعلّم الآلي الإحصائي', 'Causal inference|الاستدلال السببي', 'Biostatistics & clinical trials|الإحصاء الحيوي والتجارب السريرية', 'Time series & forecasting|السلاسل الزمنية والتنبؤ'),
      scopus: '2613 Statistics and Probability',
      careers: L('Data analyst|محلّل بيانات', 'Biostatistician (hospitals, clinical trials)|إحصائي حيوي (مستشفيات وتجارب سريرية)', 'Actuary|خبير اكتواري', 'Market research analyst|محلّل أبحاث السوق', 'Official statistics (statistics administration, UN)|الإحصاء الرسمي (إدارة الإحصاء، الأمم المتحدة)'),
      routes: L('Master in data science → AI and tech|ماستر في علم البيانات ← الذكاء الاصطناعي والتكنولوجيا', 'Master in public health → epidemiology|ماستر في الصحة العامة ← علم الأوبئة', 'Master in economics → banks and policy|ماستر في الاقتصاد ← المصارف والسياسات العامة')
    },
    {
      id: 'physics', name: t('Physics', 'الفيزياء'),
      one: t('Matter, energy, space and time — from the smallest particle to the whole universe.', 'المادة والطاقة والمكان والزمان — من أصغر جسيم إلى الكون كله.'),
      think: t('"What is the simplest law that explains this?" You like to model things with equations and then test them.', '«ما أبسط قانون يفسّر هذا؟» تحب أن تصف الأشياء بالمعادلات ثم تختبرها.'),
      school: L('Physics|الفيزياء', 'Mathematics (strong)|الرياضيات (مستوى قوي)', 'Chemistry|الكيمياء'),
      study: L('Classical mechanics|الميكانيك الكلاسيكي', 'Electromagnetism|الكهرومغناطيسية', 'Quantum mechanics|ميكانيك الكم', 'Thermodynamics & statistical physics|الديناميكا الحرارية والفيزياء الإحصائية', 'Optics|البصريات', 'Lab & computational physics|الفيزياء المخبرية والحسابية'),
      riasec: 'IR',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Theoretical physics|الفيزياء النظرية', 'Condensed matter & materials|فيزياء المادة المكثّفة والمواد', 'Medical physics|الفيزياء الطبية', 'Astrophysics|الفيزياء الفلكية', 'Renewable energy|الطاقة المتجددة', 'Quantum technologies|التقنيات الكمومية'),
      phd: L('Particle physics|فيزياء الجسيمات', 'Quantum information & computing|المعلومات والحوسبة الكمومية', 'Astrophysics & cosmology|الفيزياء الفلكية وعلم الكون', 'Nanophysics|فيزياء النانو', 'Lasers & photonics|الليزر والفوتونيات', 'Biophysics|الفيزياء الحيوية'),
      scopus: '3100 Physics and Astronomy',
      careers: L('Researcher (universities, CERN-type labs)|باحث (جامعات ومختبرات مثل CERN)', 'Medical physicist (radiotherapy)|فيزيائي طبي (العلاج الإشعاعي)', 'Energy & solar sector|قطاع الطاقة والطاقة الشمسية', 'Data scientist|عالم بيانات', 'Physics teacher|أستاذ فيزياء'),
      routes: L('Master in medical physics → hospitals|ماستر في الفيزياء الطبية ← المستشفيات', 'Master in energy or electrical engineering|ماستر في الطاقة أو الهندسة الكهربائية', 'Master in data science → tech|ماستر في علم البيانات ← التكنولوجيا')
    },
    {
      id: 'chemistry', name: t('Chemistry', 'الكيمياء'),
      one: t('What substances are made of, and how they react and change.', 'ممّ تتكوّن المواد، وكيف تتفاعل وتتحوّل.'),
      think: t('"What is this made of, and how can I change it?" You are patient, precise and careful in the lab.', '«ممّ يتكوّن هذا، وكيف أغيّره؟» أنت صبور ودقيق وحذر في المختبر.'),
      school: L('Chemistry|الكيمياء', 'Mathematics|الرياضيات', 'Biology|علوم الحياة'),
      study: L('General & organic chemistry|الكيمياء العامة والعضوية', 'Inorganic chemistry|الكيمياء غير العضوية', 'Physical chemistry|الكيمياء الفيزيائية', 'Analytical chemistry|الكيمياء التحليلية', 'Introductory biochemistry|مدخل إلى الكيمياء الحيوية', 'Lab safety & instruments|السلامة المخبرية والأجهزة'),
      riasec: 'IR',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Analytical chemistry|الكيمياء التحليلية', 'Organic & medicinal chemistry|الكيمياء العضوية والدوائية', 'Polymer & materials chemistry|كيمياء البوليمرات والمواد', 'Environmental chemistry|الكيمياء البيئية', 'Food chemistry|كيمياء الأغذية'),
      phd: L('Drug design|تصميم الأدوية', 'Catalysis|الحفز الكيميائي', 'Green chemistry|الكيمياء الخضراء', 'Nanomaterials|المواد النانوية', 'Batteries & electrochemistry|البطاريات والكيمياء الكهربائية'),
      scopus: '1600 Chemistry',
      careers: L('Quality-control lab chemist|كيميائي في مختبر مراقبة الجودة', 'Pharmaceutical industry|صناعة الأدوية', 'Food & cosmetics industry|صناعة الأغذية ومستحضرات التجميل', 'Environmental testing lab|مختبر الفحوص البيئية', 'Forensic chemist|كيميائي جنائي', 'Chemistry teacher|أستاذ كيمياء'),
      routes: L('Master in chemical or environmental engineering|ماستر في الهندسة الكيميائية أو البيئية', 'Master in food science → food industry|ماستر في علوم الأغذية ← الصناعات الغذائية', 'Master in materials → batteries and energy|ماستر في المواد ← البطاريات والطاقة')
    },
    {
      id: 'biology', name: t('Biology', 'علوم الحياة (البيولوجيا)'),
      one: t('Living things: cells, bodies, microbes and whole ecosystems.', 'الكائنات الحيّة: الخلايا والأجسام والميكروبات والأنظمة البيئية.'),
      think: t('"How does life solve this problem?" You are curious about living things and like to observe and experiment.', '«كيف تحلّ الحياة هذه المشكلة؟» لديك فضول تجاه الكائنات الحيّة وتحب الملاحظة والتجربة.'),
      school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'),
      study: L('Cell & molecular biology|البيولوجيا الخلوية والجزيئية', 'Genetics|علم الوراثة', 'Microbiology|علم الأحياء الدقيقة', 'Physiology|علم وظائف الأعضاء', 'Ecology & evolution|البيئة والتطوّر', 'Lab techniques|التقنيات المخبرية'),
      riasec: 'IR',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Molecular biology|البيولوجيا الجزيئية', 'Microbiology|علم الأحياء الدقيقة', 'Genetics|علم الوراثة', 'Biotechnology|التكنولوجيا الحيوية', 'Ecology & conservation|علم البيئة وحماية الطبيعة', 'Neuroscience|علم الأعصاب'),
      phd: L('Genomics|علم الجينوم', 'Immunology|علم المناعة', 'Cancer biology|بيولوجيا السرطان', 'Neuroscience|علم الأعصاب', 'Marine biology|علم الأحياء البحرية', 'Evolution|التطوّر'),
      scopus: '1100 Agricultural and Biological Sciences · 1300 Biochemistry, Genetics and Molecular Biology',
      careers: L('Research & medical lab|مختبر أبحاث ومختبر طبي', 'Biotech & pharma companies|شركات التكنولوجيا الحيوية والأدوية', 'Conservation & environment NGOs|منظمات حماية البيئة', 'Biology teacher|أستاذ علوم حياة', 'Medical sales & science communication|المبيعات الطبية والتواصل العلمي'),
      routes: L('Medicine or dentistry where they come after a bachelor (e.g. AUB, LAU)|الطب أو طب الأسنان حيث يُدرَسان بعد الإجازة (مثل AUB وLAU)', 'Master in public health|ماستر في الصحة العامة', 'Master in biotechnology → industry|ماستر في التكنولوجيا الحيوية ← الصناعة', 'Teaching diploma → school teacher|دبلوم تعليم ← أستاذ مدرسة')
    },
    {
      id: 'biochemistry', name: t('Biochemistry', 'الكيمياء الحيوية'),
      one: t('The chemistry of life: the molecules working inside every cell.', 'كيمياء الحياة: الجزيئات التي تعمل داخل كل خلية.'),
      think: t('"Which molecule is causing this?" You connect chemistry and biology to explain disease and health.', '«أيّ جزيء يسبّب هذا؟» تربط الكيمياء بالبيولوجيا لتفسير المرض والصحة.'),
      school: L('Chemistry|الكيمياء', 'Biology|علوم الحياة', 'Mathematics|الرياضيات'),
      study: L('Organic chemistry|الكيمياء العضوية', 'Proteins & enzymes|البروتينات والإنزيمات', 'Metabolism|الأيض', 'Molecular biology|البيولوجيا الجزيئية', 'Biophysical methods|الطرائق الفيزيائية الحيوية', 'Introductory bioinformatics|مدخل إلى المعلوماتية الحيوية'),
      riasec: 'IR',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Biochemistry|الكيمياء الحيوية', 'Molecular medicine|الطب الجزيئي', 'Pharmacology|علم الأدوية', 'Bioinformatics|المعلوماتية الحيوية', 'Biotechnology|التكنولوجيا الحيوية'),
      phd: L('Structural biology|البيولوجيا البنيوية', 'Drug discovery|اكتشاف الأدوية', 'Metabolic diseases|أمراض الأيض', 'Enzyme engineering|هندسة الإنزيمات', 'Proteomics|علم البروتيوميات'),
      scopus: '1303 Biochemistry',
      careers: L('Research lab scientist|باحث في مختبر', 'Pharma R&D|البحث والتطوير الدوائي', 'Clinical & diagnostic lab|المختبرات السريرية والتشخيصية', 'Food & nutrition industry|صناعة الغذاء والتغذية', 'Biotech start-ups|شركات التكنولوجيا الحيوية الناشئة'),
      routes: L('Medicine where it comes after a bachelor|الطب حيث يُدرَس بعد الإجازة', 'Master in pharmacology or bioinformatics|ماستر في علم الأدوية أو المعلوماتية الحيوية')
    },
    {
      id: 'earth-sciences', name: t('Geology & Earth sciences', 'الجيولوجيا وعلوم الأرض'),
      one: t('The Earth itself: rocks, earthquakes, underground water and natural resources.', 'الأرض نفسها: الصخور والزلازل والمياه الجوفية والموارد الطبيعية.'),
      think: t('"What happened here millions of years ago, and what will happen next?" You like fieldwork and reading landscapes.', '«ماذا حدث هنا قبل ملايين السنين، وماذا سيحدث بعد ذلك؟» تحب العمل الميداني وقراءة التضاريس.'),
      school: L('Geography|الجغرافيا', 'Chemistry|الكيمياء', 'Physics|الفيزياء'),
      study: L('Mineralogy & petrology|علم المعادن والصخور', 'Structural geology|الجيولوجيا البنيوية', 'Sedimentology|علم الرسوبيات', 'Hydrogeology|الهيدروجيولوجيا (المياه الجوفية)', 'Geophysics|الجيوفيزياء', 'Field mapping & GIS|المسح الميداني ونظم المعلومات الجغرافية'),
      riasec: 'RI',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Hydrogeology & water resources|الهيدروجيولوجيا والموارد المائية', 'Petroleum geology|جيولوجيا النفط', 'Geophysics|الجيوفيزياء', 'Natural hazards|المخاطر الطبيعية', 'GIS & remote sensing|نظم المعلومات الجغرافية والاستشعار عن بُعد'),
      phd: L('Seismology (earthquakes)|علم الزلازل', 'Paleoclimate|المناخ القديم', 'Groundwater systems|أنظمة المياه الجوفية', 'Volcanology|علم البراكين', 'Planetary geology|جيولوجيا الكواكب'),
      scopus: '1900 Earth and Planetary Sciences',
      careers: L('Hydrogeologist (water wells, water authorities)|جيولوجي مياه (آبار ومؤسسات المياه)', 'Oil, gas & mining|النفط والغاز والتعدين', 'Geotechnical & environmental consultant|استشاري جيوتقني وبيئي', 'Natural hazard agencies|هيئات رصد المخاطر الطبيعية', 'Researcher|باحث'),
      routes: L('Master in GIS → planning and mapping|ماستر في نظم المعلومات الجغرافية ← التخطيط ورسم الخرائط', 'Master in environmental or geotechnical engineering|ماستر في الهندسة البيئية أو الجيوتقنية')
    },
    {
      id: 'environmental-science', name: t('Environmental science', 'علوم البيئة'),
      one: t('How nature works and how people change it: water, air, climate and biodiversity.', 'كيف تعمل الطبيعة وكيف يغيّرها الإنسان: الماء والهواء والمناخ والتنوّع الحيوي.'),
      think: t('"What is the whole system here, and what is breaking it?" You care about the planet and like connecting many fields.', '«ما النظام الكامل هنا، وما الذي يخرّبه؟» تهتم بالكوكب وتحب ربط اختصاصات كثيرة ببعضها.'),
      school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء', 'Geography|الجغرافيا'),
      study: L('Ecology|علم البيئة', 'Environmental chemistry|الكيمياء البيئية', 'Climate science|علم المناخ', 'Water & air pollution|تلوّث المياه والهواء', 'GIS|نظم المعلومات الجغرافية', 'Environmental law & policy|القانون والسياسات البيئية'),
      riasec: 'IS',
      bachelor: { deg: 'BS', years: '3', lmd: 'Licence' },
      masters: L('Environmental management|الإدارة البيئية', 'Climate change|التغيّر المناخي', 'Water resources|الموارد المائية', 'Sustainability|الاستدامة', 'Conservation|حماية الطبيعة'),
      phd: L('Climate modelling|نمذجة المناخ', 'Pollution & health|التلوّث والصحة', 'Biodiversity|التنوّع الحيوي', 'Water security|الأمن المائي', 'Environmental policy|السياسات البيئية'),
      scopus: '2300 Environmental Science',
      careers: L('Environmental consultant|استشاري بيئي', 'NGOs & UN programmes|المنظمات غير الحكومية وبرامج الأمم المتحدة', 'Ministry of Environment|وزارة البيئة', 'Environmental impact assessment|تقييم الأثر البيئي', 'Sustainability officer in companies|مسؤول استدامة في الشركات'),
      routes: L('Master in environmental engineering|ماستر في الهندسة البيئية', 'Master in public health|ماستر في الصحة العامة', 'Master in public policy|ماستر في السياسات العامة')
    }
  ]
},

/* ===== 2. ENGINEERING (full) ===== */
{
  id: 'engineering', icon: 'cog', color: '#c0703c', status: 'full',
  name: t('Faculty of Engineering', 'كلية الهندسة'),
  question: t('How can I build something that works?', 'كيف أبني شيئًا يعمل فعلًا؟'),
  think: t('Engineers build. They take science and mathematics and turn them into safe, working solutions — within a budget, a deadline and real-world limits.',
           'المهندس يبني. يأخذ العلوم والرياضيات ويحوّلها إلى حلول آمنة تعمل فعلًا — ضمن ميزانية ومهلة وقيود الواقع.'),
  intro: t('The Faculty of Engineering designs buildings, machines, circuits, factories and systems. Science asks "why?"; engineering asks "how do we make it?"',
           'كلية الهندسة تصمّم المباني والآلات والدارات والمصانع والأنظمة. العلوم تسأل «لماذا؟»، والهندسة تسأل «كيف نصنعه؟»'),
  school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Physics (strong)|الفيزياء (مستوى قوي)', 'Chemistry|الكيمياء'),
  riasec: 'RI',
  ladderNote: t('Two models in Lebanon: the American BE (4 years, e.g. AUB, LAU, NDU) and the French-style Diplôme d\'ingénieur (5 years, e.g. Lebanese University, USJ-ESIB). To practise as an engineer you register with the Order of Engineers and Architects. After that you can do an MEng (professional) or an MS (research), and yes — engineers can and often do continue to a PhD.',
                'في لبنان نموذجان: البكالوريوس الأميركي BE (٤ سنوات، مثل AUB وLAU وNDU) ودبلوم المهندس على النمط الفرنسي (٥ سنوات، مثل الجامعة اللبنانية وUSJ-ESIB). لممارسة المهنة تنتسب إلى نقابة المهندسين. بعدها يمكنك متابعة ماستر مهني (MEng) أو بحثي (MS)، ونعم — يستطيع المهندس أن يكمل إلى الدكتوراه، وكثيرون يفعلون ذلك.'),
  majors: [
    {
      id: 'civil', name: t('Civil engineering', 'الهندسة المدنية'),
      one: t('Buildings, bridges, roads, tunnels and water networks.', 'المباني والجسور والطرقات والأنفاق وشبكات المياه.'),
      think: t('"Will it stand, and will it be safe for fifty years?" You think about loads, materials and people\'s safety.', '«هل سيصمد، وهل سيبقى آمنًا خمسين سنة؟» تفكّر في الأحمال والمواد وسلامة الناس.'),
      school: L('Mathematics|الرياضيات', 'Physics|الفيزياء'),
      study: L('Statics & strength of materials|الستاتيك ومقاومة المواد', 'Structural analysis & concrete design|التحليل الإنشائي وتصميم الخرسانة', 'Soil mechanics|ميكانيك التربة', 'Hydraulics|الهيدروليك', 'Transportation engineering|هندسة النقل', 'Construction management|إدارة البناء'),
      riasec: 'RI',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Structural engineering|الهندسة الإنشائية', 'Geotechnical engineering|الهندسة الجيوتقنية', 'Water resources|الموارد المائية', 'Transportation|النقل', 'Construction & project management|إدارة البناء والمشاريع'),
      phd: L('Earthquake engineering|هندسة الزلازل', 'Sustainable construction materials|مواد البناء المستدامة', 'Smart infrastructure|البنى التحتية الذكية', 'Urban water systems|أنظمة المياه الحضرية', 'Traffic modelling|نمذجة حركة السير'),
      scopus: '2205 Civil and Structural Engineering',
      careers: L('Site engineer|مهندس موقع', 'Structural designer|مصمّم إنشائي', 'Project manager|مدير مشاريع', 'Infrastructure & water consultant|استشاري بنى تحتية ومياه', 'Public works & municipalities|الأشغال العامة والبلديات'),
      routes: L('MBA or project management → management roles|ماجستير إدارة أعمال أو إدارة مشاريع ← مناصب إدارية', 'Master in environmental engineering|ماستر في الهندسة البيئية', 'Master in urban planning|ماستر في التخطيط المدني')
    },
    {
      id: 'mechanical', name: t('Mechanical engineering', 'الهندسة الميكانيكية'),
      one: t('Machines, engines, heating and cooling, energy and manufacturing.', 'الآلات والمحرّكات والتدفئة والتبريد والطاقة والتصنيع.'),
      think: t('"How do forces, motion and heat move through this machine?" You like to take things apart to see how they work.', '«كيف تنتقل القوى والحركة والحرارة داخل هذه الآلة؟» تحب أن تفكّك الأشياء لترى كيف تعمل.'),
      school: L('Physics|الفيزياء', 'Mathematics|الرياضيات'),
      study: L('Mechanics & dynamics|الميكانيك والديناميك', 'Thermodynamics|الديناميكا الحرارية', 'Fluid mechanics|ميكانيك الموائع', 'Machine design|تصميم الآلات', 'Manufacturing processes|عمليات التصنيع', 'CAD (computer-aided design)|التصميم بمساعدة الحاسوب'),
      riasec: 'RI',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Energy & thermal systems|أنظمة الطاقة والحرارة', 'Mechanical design|التصميم الميكانيكي', 'Manufacturing|التصنيع', 'HVAC|التدفئة والتهوية والتكييف', 'Mechatronics|الميكاترونيكس'),
      phd: L('Renewable energy systems|أنظمة الطاقة المتجددة', '3D printing (additive manufacturing)|الطباعة ثلاثية الأبعاد', 'Computational fluid dynamics|ديناميكا الموائع الحسابية', 'Robotics|الروبوتات', 'Biomechanics|الميكانيك الحيوي'),
      scopus: '2210 Mechanical Engineering',
      careers: L('HVAC / MEP design engineer|مهندس تصميم تكييف وأنظمة كهروميكانيكية', 'Plant & maintenance engineer|مهندس مصنع وصيانة', 'Automotive industry|صناعة السيارات', 'Solar & energy companies|شركات الطاقة الشمسية والطاقة', 'Product design engineer|مهندس تصميم منتجات'),
      routes: L('Master in aerospace engineering|ماستر في هندسة الطيران والفضاء', 'Master in biomedical engineering|ماستر في الهندسة الطبية الحيوية', 'Master in industrial engineering or MBA|ماستر في الهندسة الصناعية أو إدارة الأعمال')
    },
    {
      id: 'electrical', name: t('Electrical engineering', 'الهندسة الكهربائية'),
      one: t('Power, electronics and signals — from the national grid to the smallest chip.', 'الطاقة والإلكترونيات والإشارات — من الشبكة الوطنية إلى أصغر شريحة.'),
      think: t('"How does energy or information flow through this circuit?" You like invisible things you can still calculate.', '«كيف تتدفّق الطاقة أو المعلومات في هذه الدارة؟» تحب الأشياء غير المرئية التي يمكنك حسابها.'),
      school: L('Physics (strong)|الفيزياء (مستوى قوي)', 'Mathematics (strong)|الرياضيات (مستوى قوي)'),
      study: L('Electric circuits|الدارات الكهربائية', 'Electronics|الإلكترونيات', 'Signals & systems|الإشارات والأنظمة', 'Electromagnetics|الكهرومغناطيسية', 'Power systems|أنظمة القدرة الكهربائية', 'Control systems|أنظمة التحكّم'),
      riasec: 'IR',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Power & energy|القدرة والطاقة', 'Electronics|الإلكترونيات', 'Telecommunications|الاتصالات', 'Control & automation|التحكّم والأتمتة', 'Renewable energy|الطاقة المتجددة'),
      phd: L('Smart grids|الشبكات الذكية', 'Power electronics|إلكترونيات القدرة', 'Wireless communications (5G / 6G)|الاتصالات اللاسلكية', 'Semiconductor devices|أشباه الموصلات', 'Autonomous control|التحكّم الذاتي'),
      scopus: '2208 Electrical and Electronic Engineering',
      careers: L('Power utility & grid engineer|مهندس في مؤسسة الكهرباء والشبكات', 'Electrical design (buildings)|تصميم كهربائي للمباني', 'Telecom operators|شركات الاتصالات', 'Solar energy design|تصميم أنظمة الطاقة الشمسية', 'Industrial automation|الأتمتة الصناعية'),
      routes: L('Master in computer engineering or AI|ماستر في هندسة الحاسوب أو الذكاء الاصطناعي', 'Master in biomedical engineering|ماستر في الهندسة الطبية الحيوية', 'Master in energy management|ماستر في إدارة الطاقة')
    },
    {
      id: 'computer-communications', name: t('Computer & communications engineering', 'هندسة الحاسوب والاتصالات'),
      one: t('Where hardware meets software: processors, embedded systems and networks.', 'حيث يلتقي العتاد بالبرمجيات: المعالجات والأنظمة المدمجة والشبكات.'),
      think: t('"How do the chip and the code work together?" You like both programming and electronics.', '«كيف تعمل الشريحة والبرنامج معًا؟» تحب البرمجة والإلكترونيات معًا.'),
      school: L('Mathematics|الرياضيات', 'Physics|الفيزياء', 'Computer basics|أساسيات الحاسوب'),
      study: L('Digital logic|المنطق الرقمي', 'Computer architecture|معمارية الحاسوب', 'Programming & data structures|البرمجة وبنى المعطيات', 'Embedded systems|الأنظمة المدمجة', 'Computer networks|شبكات الحاسوب', 'Operating systems|أنظمة التشغيل'),
      riasec: 'IR',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Computer engineering|هندسة الحاسوب', 'Embedded systems & IoT|الأنظمة المدمجة وإنترنت الأشياء', 'Networks & telecommunications|الشبكات والاتصالات', 'Artificial intelligence|الذكاء الاصطناعي', 'Cybersecurity|الأمن السيبراني'),
      phd: L('Computer architecture|معمارية الحاسوب', 'Internet of Things|إنترنت الأشياء', 'Hardware security|أمن العتاد', 'AI on devices (edge AI)|الذكاء الاصطناعي على الأجهزة', 'Next-generation networks|شبكات الجيل القادم'),
      scopus: '1700 Computer Science · 2208 Electrical and Electronic Engineering',
      careers: L('Software engineer|مهندس برمجيات', 'Embedded systems engineer|مهندس أنظمة مدمجة', 'Network engineer|مهندس شبكات', 'Chip design (abroad)|تصميم الشرائح (في الخارج)', 'Cybersecurity engineer|مهندس أمن سيبراني'),
      routes: L('Master in computer science or AI|ماستر في علوم الحاسوب أو الذكاء الاصطناعي', 'MBA → technology management|ماجستير إدارة أعمال ← إدارة التكنولوجيا')
    },
    {
      id: 'chemical', name: t('Chemical engineering', 'الهندسة الكيميائية'),
      one: t('Turning raw materials into products at factory scale: fuels, medicines, food, plastics, clean water.', 'تحويل المواد الخام إلى منتجات على مستوى المصنع: وقود وأدوية وأغذية وبلاستيك ومياه نظيفة.'),
      think: t('"How do I take this reaction from a beaker to a factory — safely and cheaply?" You like chemistry but want to build at scale.', '«كيف أنقل هذا التفاعل من الكأس المخبرية إلى المصنع — بأمان وبكلفة منخفضة؟» تحب الكيمياء لكنك تريد البناء على نطاق واسع.'),
      school: L('Chemistry (strong)|الكيمياء (مستوى قوي)', 'Mathematics|الرياضيات', 'Physics|الفيزياء'),
      study: L('Mass & energy balances|موازنات الكتلة والطاقة', 'Thermodynamics|الديناميكا الحرارية', 'Transport phenomena|ظواهر الانتقال', 'Reaction engineering|هندسة التفاعلات', 'Separation processes|عمليات الفصل', 'Process control & plant design|التحكّم بالعمليات وتصميم المصانع'),
      riasec: 'IR',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Process engineering|هندسة العمليات', 'Petroleum & energy|النفط والطاقة', 'Environmental engineering|الهندسة البيئية', 'Biochemical engineering|الهندسة الكيميائية الحيوية', 'Materials|المواد'),
      phd: L('Green processes|العمليات الخضراء', 'Hydrogen & clean fuels|الهيدروجين والوقود النظيف', 'Catalysis|الحفز', 'Water treatment & desalination|معالجة المياه وتحليتها', 'Pharmaceutical processes|العمليات الصيدلانية'),
      scopus: '1500 Chemical Engineering',
      careers: L('Process engineer (plants, refineries)|مهندس عمليات (مصانع ومصافٍ)', 'Pharma & food manufacturing|تصنيع الأدوية والأغذية', 'Water treatment|معالجة المياه', 'Quality & safety|الجودة والسلامة', 'Energy companies|شركات الطاقة'),
      routes: L('Master in environmental or petroleum engineering|ماستر في الهندسة البيئية أو هندسة البترول', 'MBA → plant management|ماجستير إدارة أعمال ← إدارة المصانع')
    },
    {
      id: 'industrial', name: t('Industrial engineering', 'الهندسة الصناعية'),
      one: t('Making whole systems work better: factories, hospitals, airports and supply chains.', 'جعل الأنظمة كلها تعمل بشكل أفضل: المصانع والمستشفيات والمطارات وسلاسل الإمداد.'),
      think: t('"Where is the waste, and how can the whole system run better?" You like organizing, optimizing and working with people.', '«أين الهدر، وكيف يعمل النظام كله بشكل أفضل؟» تحب التنظيم والتحسين والعمل مع الناس.'),
      school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد', 'Physics|الفيزياء'),
      study: L('Operations research|بحوث العمليات', 'Probability & statistics|الاحتمالات والإحصاء', 'Production planning|تخطيط الإنتاج', 'Supply chain & logistics|سلاسل الإمداد واللوجستيات', 'Quality engineering|هندسة الجودة', 'Ergonomics (human factors)|بيئة العمل والعوامل البشرية'),
      riasec: 'EC',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Engineering management|الإدارة الهندسية', 'Supply chain & logistics|سلاسل الإمداد واللوجستيات', 'Operations research|بحوث العمليات', 'Data analytics|تحليل البيانات', 'Quality management|إدارة الجودة'),
      phd: L('Optimization|الأمثَلة', 'Healthcare systems|أنظمة الرعاية الصحية', 'Supply chain resilience|مرونة سلاسل الإمداد', 'Human factors|العوامل البشرية', 'Smart manufacturing|التصنيع الذكي'),
      scopus: '2209 Industrial and Manufacturing Engineering',
      careers: L('Operations & supply-chain engineer|مهندس عمليات وسلاسل إمداد', 'Quality manager|مدير جودة', 'Management consultant|مستشار إداري', 'Data analyst|محلّل بيانات', 'Banks & hospital operations|عمليات المصارف والمستشفيات'),
      routes: L('MBA → business leadership|ماجستير إدارة أعمال ← القيادة في الشركات', 'Master in data science|ماستر في علم البيانات')
    },
    {
      id: 'biomedical', name: t('Biomedical engineering', 'الهندسة الطبية الحيوية'),
      one: t('Engineering for medicine: medical devices, imaging machines, prosthetics and implants.', 'الهندسة في خدمة الطب: الأجهزة الطبية وأجهزة التصوير والأطراف الاصطناعية والزرعات.'),
      think: t('"How can I build a machine that helps the human body?" You like both biology and engineering.', '«كيف أبني جهازًا يساعد جسم الإنسان؟» تحب البيولوجيا والهندسة معًا.'),
      school: L('Biology|علوم الحياة', 'Physics|الفيزياء', 'Mathematics|الرياضيات'),
      study: L('Anatomy & physiology|التشريح ووظائف الأعضاء', 'Biomechanics|الميكانيك الحيوي', 'Biomaterials|المواد الحيوية', 'Medical instrumentation|الأجهزة الطبية', 'Medical imaging|التصوير الطبي', 'Biosignal processing|معالجة الإشارات الحيوية'),
      riasec: 'IR',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Medical devices|الأجهزة الطبية', 'Clinical engineering|الهندسة السريرية', 'Tissue engineering & biomaterials|هندسة الأنسجة والمواد الحيوية', 'Medical imaging|التصوير الطبي', 'Bioinformatics|المعلوماتية الحيوية'),
      phd: L('Tissue engineering|هندسة الأنسجة', 'Neuroengineering|الهندسة العصبية', 'AI in medical imaging|الذكاء الاصطناعي في التصوير الطبي', 'Prosthetics|الأطراف الاصطناعية', 'Wearable sensors|المستشعرات القابلة للارتداء'),
      scopus: '2204 Biomedical Engineering',
      careers: L('Clinical engineer in hospitals|مهندس سريري في المستشفيات', 'Medical device companies|شركات الأجهزة الطبية', 'Regulatory affairs|الشؤون التنظيمية', 'Research & development|البحث والتطوير', 'Application specialist|أخصائي تطبيقات'),
      routes: L('Medicine (MD) after the BE in American-style systems|الطب (MD) بعد الهندسة في الأنظمة الأميركية', 'Master in data science → health AI|ماستر في علم البيانات ← الذكاء الاصطناعي الصحي')
    },
    {
      id: 'mechatronics', name: t('Mechatronics & robotics', 'الميكاترونيكس والروبوتات'),
      one: t('Mechanics + electronics + software = robots and smart machines.', 'ميكانيك + إلكترونيات + برمجيات = روبوتات وآلات ذكية.'),
      think: t('"How do I make it sense, decide and move?" You love building things that come alive.', '«كيف أجعله يستشعر ويقرّر ويتحرّك؟» تحب بناء أشياء تدبّ فيها الحياة.'),
      school: L('Physics|الفيزياء', 'Mathematics|الرياضيات', 'Computer basics|أساسيات الحاسوب'),
      study: L('Mechanics|الميكانيك', 'Electronics|الإلكترونيات', 'Control systems|أنظمة التحكّم', 'Microcontrollers|المتحكّمات الدقيقة', 'Sensors & actuators|المستشعرات والمشغّلات', 'Robotics|الروبوتات'),
      riasec: 'RI',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Robotics|الروبوتات', 'Automation|الأتمتة', 'Control engineering|هندسة التحكّم', 'AI & autonomous systems|الذكاء الاصطناعي والأنظمة الذاتية'),
      phd: L('Autonomous robots|الروبوتات الذاتية', 'Human–robot interaction|التفاعل بين الإنسان والروبوت', 'Drones|الطائرات المسيّرة', 'Soft robotics|الروبوتات اللينة', 'Industrial automation|الأتمتة الصناعية'),
      scopus: '2207 Control and Systems Engineering',
      careers: L('Automation engineer|مهندس أتمتة', 'Robotics engineer|مهندس روبوتات', 'Smart-factory maintenance|صيانة المصانع الذكية', 'Automotive & drones|السيارات والطائرات المسيّرة'),
      routes: L('Master in AI → autonomous systems|ماستر في الذكاء الاصطناعي ← الأنظمة الذاتية', 'Master in mechanical or electrical engineering|ماستر في الهندسة الميكانيكية أو الكهربائية'),
      note: t('Often offered as a track inside mechanical or electrical engineering.', 'يُقدَّم غالبًا كمسار داخل الهندسة الميكانيكية أو الكهربائية.')
    },
    {
      id: 'environmental-engineering', name: t('Environmental engineering', 'الهندسة البيئية'),
      one: t('Designing solutions that protect water, air and soil.', 'تصميم حلول تحمي الماء والهواء والتربة.'),
      think: t('"How do I clean this — and stop the problem at its source?" You want engineering skills for the planet.', '«كيف أنظّف هذا — وأوقف المشكلة من مصدرها؟» تريد مهارات هندسية في خدمة الكوكب.'),
      school: L('Chemistry|الكيمياء', 'Biology|علوم الحياة', 'Mathematics|الرياضيات'),
      study: L('Water & wastewater treatment|معالجة المياه ومياه الصرف', 'Air pollution control|مكافحة تلوّث الهواء', 'Solid waste management|إدارة النفايات الصلبة', 'Hydrology|علم المياه', 'Environmental chemistry|الكيمياء البيئية', 'Environmental impact assessment|تقييم الأثر البيئي'),
      riasec: 'IR',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Water resources|الموارد المائية', 'Environmental management|الإدارة البيئية', 'Renewable energy|الطاقة المتجددة', 'Climate adaptation|التكيّف مع التغيّر المناخي'),
      phd: L('Water reuse|إعادة استخدام المياه', 'Waste-to-energy|تحويل النفايات إلى طاقة', 'Air-quality modelling|نمذجة جودة الهواء', 'Climate-resilient infrastructure|البنى التحتية المقاومة للتغيّر المناخي'),
      scopus: '2305 Environmental Engineering',
      careers: L('Water & wastewater plants|محطات المياه والصرف الصحي', 'Environmental consultant|استشاري بيئي', 'Municipalities|البلديات', 'NGOs & UN agencies|المنظمات غير الحكومية ووكالات الأمم المتحدة', 'Waste management companies|شركات إدارة النفايات'),
      routes: L('Master in public health|ماستر في الصحة العامة', 'Master in energy|ماستر في الطاقة'),
      note: t('Often a track of civil or chemical engineering.', 'غالبًا مسار ضمن الهندسة المدنية أو الكيميائية.')
    },
    {
      id: 'aerospace', name: t('Aerospace engineering', 'هندسة الطيران والفضاء'),
      one: t('Aircraft, drones, satellites and rockets.', 'الطائرات والمسيّرات والأقمار الصناعية والصواريخ.'),
      think: t('"How do I make it light, strong and able to fly?" You dream big and like hard physics.', '«كيف أجعله خفيفًا وقويًا وقادرًا على الطيران؟» تحلم بأشياء كبيرة وتحب الفيزياء الصعبة.'),
      school: L('Physics (strong)|الفيزياء (مستوى قوي)', 'Mathematics (strong)|الرياضيات (مستوى قوي)'),
      study: L('Aerodynamics|الديناميكا الهوائية', 'Flight mechanics|ميكانيك الطيران', 'Propulsion|الدفع', 'Aerospace structures|هياكل الطائرات', 'Flight control|التحكّم بالطيران', 'Space systems|الأنظمة الفضائية'),
      riasec: 'IR',
      bachelor: { deg: 'BE', years: '4', lmd: 'Diplôme d\'ingénieur · 5' },
      masters: L('Aerodynamics|الديناميكا الهوائية', 'Space systems|الأنظمة الفضائية', 'Propulsion|الدفع', 'Avionics|إلكترونيات الطيران'),
      phd: L('Hypersonic flight|الطيران فوق الصوتي', 'Satellite systems|أنظمة الأقمار الصناعية', 'Drones (UAVs)|الطائرات المسيّرة', 'Sustainable aviation|الطيران المستدام'),
      scopus: '2202 Aerospace Engineering',
      careers: L('Airlines & aircraft maintenance|شركات الطيران وصيانة الطائرات', 'Aerospace manufacturers (abroad)|مصنّعو الطائرات (في الخارج)', 'Drone companies|شركات الطائرات المسيّرة', 'Space agencies & research|وكالات الفضاء والبحث'),
      routes: L('Mechanical engineering bachelor → aerospace master|إجازة في الهندسة الميكانيكية ← ماستر في هندسة الطيران'),
      note: t('Few programmes in Lebanon: many students study mechanical engineering first, then an aerospace master abroad.', 'البرامج قليلة في لبنان: كثير من الطلاب يدرسون الهندسة الميكانيكية أولًا ثم ماستر في الطيران في الخارج.')
    }
  ]
},

/* ===== 3–12. OUTLINE faculties (full content in Phase 3) ===== */
{
  id: 'health', icon: 'stethoscope', color: '#b4545a', status: 'outline',
  name: t('Medicine & health sciences', 'الطب والعلوم الصحية'),
  question: t('How can I keep people healthy and treat them when they are sick?', 'كيف أحافظ على صحة الناس وأعالجهم عندما يمرضون؟'),
  think: t('Health professionals combine science with care. They diagnose, decide under pressure, follow strict ethics and keep learning their whole career.', 'العاملون في الصحة يجمعون العلم والرعاية. يشخّصون ويقرّرون تحت الضغط ويلتزمون بأخلاقيات صارمة ويتعلّمون طوال حياتهم المهنية.'),
  school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'), riasec: 'IS',
  majors: [['medicine','Medicine|الطب'],['dentistry','Dentistry|طب الأسنان'],['pharmacy','Pharmacy|الصيدلة'],['nursing','Nursing & midwifery|التمريض والقبالة'],['physiotherapy','Physiotherapy|العلاج الفيزيائي'],['nutrition','Nutrition & dietetics|التغذية وعلم الحمية'],['medical-lab','Medical laboratory sciences|علوم المختبرات الطبية'],['public-health','Public health|الصحة العامة'],['speech-therapy','Speech & occupational therapy|تقويم النطق والعلاج الانشغالي']]
},
{
  id: 'computing', icon: 'laptop', color: '#3d6c9e', status: 'outline',
  name: t('Computing & information technology', 'الحوسبة وتكنولوجيا المعلومات'),
  question: t('How can I make computers solve problems?', 'كيف أجعل الحاسوب يحلّ المشكلات؟'),
  think: t('Computing people break problems into small logical steps, build with code, test, fail, fix — and repeat.', 'أهل الحوسبة يقسّمون المشكلة إلى خطوات منطقية صغيرة، ويبنون بالبرمجة، ويختبرون ويخطئون ويصلحون — ثم يكرّرون.'),
  school: L('Mathematics|الرياضيات', 'Computer basics|أساسيات الحاسوب', 'English|اللغة الإنجليزية'), riasec: 'IC',
  majors: [['computer-science','Computer science|علوم الحاسوب'],['software-engineering','Software engineering|هندسة البرمجيات'],['information-technology','Information technology|تكنولوجيا المعلومات'],['information-systems','Information systems|نظم المعلومات'],['cybersecurity','Cybersecurity|الأمن السيبراني'],['data-science','Data science|علم البيانات'],['artificial-intelligence','Artificial intelligence|الذكاء الاصطناعي']]
},
{
  id: 'business', icon: 'chart-column', color: '#8c6d2e', status: 'outline',
  name: t('Business & economics', 'إدارة الأعمال والاقتصاد'),
  question: t('How do organizations and markets create value?', 'كيف تخلق المؤسسات والأسواق القيمة؟'),
  think: t('Business people read numbers and people, take calculated risks and turn ideas into organizations.', 'أهل الأعمال يقرؤون الأرقام والناس، ويخاطرون بحساب، ويحوّلون الأفكار إلى مؤسسات.'),
  school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد', 'Languages|اللغات'), riasec: 'EC',
  majors: [['management','Business management|إدارة الأعمال'],['accounting','Accounting|المحاسبة'],['finance','Finance & banking|المالية والمصارف'],['marketing','Marketing|التسويق'],['economics','Economics|الاقتصاد'],['business-analytics','Business analytics & MIS|تحليلات الأعمال ونظم المعلومات الإدارية'],['hospitality','Hospitality & tourism management|إدارة الفنادق والسياحة'],['entrepreneurship','Entrepreneurship|ريادة الأعمال']]
},
{
  id: 'law', icon: 'gavel', color: '#5b4a7a', status: 'outline',
  name: t('Law & political science', 'الحقوق والعلوم السياسية'),
  question: t('What is fair, and how should society be governed?', 'ما العدل، وكيف يجب أن يُحكَم المجتمع؟'),
  think: t('Lawyers and political scientists argue with evidence and texts, see both sides of a case and write with precision.', 'المحامون وعلماء السياسة يحاججون بالأدلة والنصوص، ويرون وجهَي القضية، ويكتبون بدقة.'),
  school: L('Arabic & languages|العربية واللغات', 'History|التاريخ', 'Civics|التربية المدنية'), riasec: 'ES',
  majors: [['law','Law|الحقوق'],['political-science','Political science|العلوم السياسية'],['international-relations','International relations|العلاقات الدولية'],['public-administration','Public administration|الإدارة العامة'],['criminology','Criminology|علم الجريمة']]
},
{
  id: 'humanities', icon: 'book-open', color: '#7a5c45', status: 'outline',
  name: t('Arts & humanities', 'الآداب والعلوم الإنسانية'),
  question: t('What do people think, write and believe — and why?', 'بماذا يفكّر الناس ويكتبون ويؤمنون — ولماذا؟'),
  think: t('Humanities people read deeply, interpret meaning, connect past and present and express ideas clearly.', 'أهل العلوم الإنسانية يقرؤون بعمق، ويفسّرون المعاني، ويربطون الماضي بالحاضر، ويعبّرون عن الأفكار بوضوح.'),
  school: L('Arabic|العربية', 'Foreign languages|اللغات الأجنبية', 'History|التاريخ', 'Philosophy|الفلسفة'), riasec: 'AS',
  majors: [['arabic','Arabic language & literature|اللغة العربية وآدابها'],['english','English language & literature|اللغة الإنجليزية وآدابها'],['french','French language & literature|اللغة الفرنسية وآدابها'],['translation','Translation & interpreting|الترجمة'],['philosophy','Philosophy|الفلسفة'],['history','History|التاريخ'],['geography','Geography|الجغرافيا'],['archaeology','Archaeology|علم الآثار'],['religious-studies','Religious studies|الدراسات الدينية']]
},
{
  id: 'social', icon: 'users-round', color: '#4f8a8b', status: 'outline',
  name: t('Social sciences & psychology', 'العلوم الاجتماعية وعلم النفس'),
  question: t('Why do people and groups behave the way they do?', 'لماذا يتصرّف الأفراد والجماعات بهذه الطريقة؟'),
  think: t('Social scientists observe people, listen carefully, measure behaviour and look for patterns without judging too quickly.', 'علماء الاجتماع والنفس يلاحظون الناس ويصغون جيدًا ويقيسون السلوك ويبحثون عن الأنماط من دون حكم متسرّع.'),
  school: L('Sociology & economics|الاجتماع والاقتصاد', 'Biology|علوم الحياة', 'Languages|اللغات'), riasec: 'SI',
  majors: [['psychology','Psychology|علم النفس'],['sociology','Sociology|علم الاجتماع'],['anthropology','Anthropology|علم الإنسان (الأنثروبولوجيا)'],['social-work','Social work|العمل الاجتماعي'],['library-science','Library & information science|علم المكتبات والمعلومات']]
},
{
  id: 'education', icon: 'apple', color: '#6f8f3d', status: 'outline',
  name: t('Education', 'التربية'),
  question: t('How do people learn, and how can I help them learn better?', 'كيف يتعلّم الناس، وكيف أساعدهم على التعلّم بشكل أفضل؟'),
  think: t('Educators explain the same idea in many ways, stay patient, and watch each learner closely.', 'المربّون يشرحون الفكرة نفسها بطرق كثيرة، ويتحلّون بالصبر، ويراقبون كل متعلّم عن قرب.'),
  school: L('Languages|اللغات', 'The subject you want to teach|المادة التي تريد تعليمها'), riasec: 'SA',
  majors: [['early-childhood','Early childhood education|تربية الطفولة المبكرة'],['elementary','Elementary education|التعليم الابتدائي'],['secondary','Secondary teaching (by subject)|التعليم الثانوي (حسب المادة)'],['special-education','Special education|التربية المختصة'],['educational-technology','Educational technology|تكنولوجيا التعليم'],['educational-leadership','Educational leadership|الإدارة التربوية'],['physical-education','Physical education & sport|التربية البدنية والرياضة']]
},
{
  id: 'arts-design', icon: 'palette', color: '#a0577e', status: 'outline',
  name: t('Fine arts, architecture & design', 'الفنون الجميلة والعمارة والتصميم'),
  question: t('How can I create spaces, images and objects that people feel?', 'كيف أبتكر أماكن وصورًا وأشياء يشعر بها الناس؟'),
  think: t('Designers and artists sketch, prototype, take critique and try again until form and meaning fit.', 'المصمّمون والفنانون يرسمون المسودات ويصنعون النماذج ويتقبّلون النقد ويحاولون من جديد حتى يتطابق الشكل مع المعنى.'),
  school: L('Drawing & art|الرسم والفنون', 'Mathematics (for architecture)|الرياضيات (للعمارة)'), riasec: 'AR',
  majors: [['architecture','Architecture|العمارة'],['interior-design','Interior design|التصميم الداخلي'],['landscape','Landscape architecture|عمارة المناظر الطبيعية'],['urban-planning','Urban planning|التخطيط المدني'],['graphic-design','Graphic design|التصميم الغرافيكي'],['fine-arts','Fine arts (painting, sculpture)|الفنون التشكيلية'],['music','Music|الموسيقى'],['theatre','Theatre|المسرح'],['film','Film & audiovisual|السينما والسمعي البصري'],['fashion','Fashion design|تصميم الأزياء'],['product-design','Product design|تصميم المنتجات']]
},
{
  id: 'media', icon: 'megaphone', color: '#c2554a', status: 'outline',
  name: t('Media & communication', 'الإعلام والاتصال'),
  question: t('How do I tell stories that inform and move people?', 'كيف أروي قصصًا تُعلِم الناس وتؤثّر فيهم؟'),
  think: t('Media people are curious, check facts, and shape a message for each audience and platform.', 'أهل الإعلام فضوليون، يتحقّقون من الحقائق، ويصوغون الرسالة لكل جمهور ومنصة.'),
  school: L('Arabic|العربية', 'Foreign languages|اللغات الأجنبية', 'Civics & history|التربية المدنية والتاريخ'), riasec: 'AE',
  majors: [['journalism','Journalism|الصحافة'],['radio-tv','Radio & television|الإذاعة والتلفزيون'],['pr-advertising','Public relations & advertising|العلاقات العامة والإعلان'],['digital-media','Digital media|الإعلام الرقمي']]
},
{
  id: 'agriculture', icon: 'sprout', color: '#5f8a4a', status: 'outline',
  name: t('Agriculture, food & veterinary', 'الزراعة والغذاء والطب البيطري'),
  question: t('How do we feed people and care for animals and land?', 'كيف نطعم الناس ونرعى الحيوانات والأرض؟'),
  think: t('Agriculture people combine biology, technology and business — in the field, the lab and the market.', 'أهل الزراعة يجمعون البيولوجيا والتكنولوجيا والأعمال — في الحقل والمختبر والسوق.'),
  school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'), riasec: 'RI',
  majors: [['agronomy','Agronomy & plant production|الهندسة الزراعية والإنتاج النباتي'],['animal-production','Animal production|الإنتاج الحيواني'],['veterinary','Veterinary medicine|الطب البيطري'],['food-science','Food science & technology|علوم وتكنولوجيا الأغذية'],['agricultural-engineering','Agricultural engineering|الهندسة الزراعية الآلية'],['agribusiness','Agribusiness|إدارة الأعمال الزراعية']]
}
];

/* expand outline majors from [id, 'en|ar'] pairs into {id, name} */
faculties.forEach(f => {
  f.majors = f.majors.map(m => Array.isArray(m) ? { id: m[0], name: L(m[1])[0] } : m);
});

/* ATLAS.fill(facultyId, {intro, ladderNote}, [fullMajors]) — used by data/full/*.js
 * to replace a faculty's outline majors with full content (matched by id). */
function fill(fid, extra, majors) {
  const f = faculties.find(x => x.id === fid);
  if (!f) throw new Error('Unknown faculty ' + fid);
  Object.assign(f, extra || {});
  majors.forEach(m => {
    const i = f.majors.findIndex(x => x.id === m.id);
    if (i >= 0) f.majors[i] = m; else f.majors.push(m);
  });
  if (f.majors.every(m => m.masters)) f.status = 'full';
}

window.ATLAS = { ladder, faculties, t, L, fill };
})();
