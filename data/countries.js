/* Field Atlas — country layer (Phase 3 of the improvement plan).
 * Where will you study? lb Lebanon · gh Ghana · uk United Kingdom · na US & Canada · eu France & Europe.
 *   countries[c]       → system steps, how to get in, where to apply
 *   facultyIn[fid][c]  → universities to look at (+ optional note for that faculty in that country)
 *   pathIn[mid][c]     → the real path for regulated professions (medicine, law, …)
 * The main major content (data/faculties.js + data/full) describes the Lebanese path; this file adds the others.
 * General guidance written 2026-11 — check official pages before relying on details.
 */
(function () {
const { t, L } = window.ATLAS;

const countries = {
  lb: { code: 'LB', name: t('Lebanon', 'لبنان'),
    steps: L('Bachelor / Licence · 3–4 years (engineering 4–5, medicine ~7)|إجازة / بكالوريوس · ٣–٤ سنوات (الهندسة ٤–٥، الطب نحو ٧)', 'Master · 1–2 years|ماستر · سنة إلى سنتين', 'PhD / Doctorat · 3–6 years|دكتوراه · ٣–٦ سنوات'),
    entry: t('Lebanese Bac, or a foreign diploma with an equivalence from the Ministry of Education. Some faculties add entrance exams; private universities may ask for SAT and English/French tests.', 'الشهادة الثانوية اللبنانية، أو شهادة أجنبية مع معادلة من وزارة التربية. بعض الكليات تضيف مباريات دخول؛ والجامعات الخاصة قد تطلب SAT واختبار إنجليزية أو فرنسية.'),
    apply: t('Apply directly to each university.', 'قدّم مباشرة لكل جامعة.'),
    link: { name: t('Jameati — all Lebanese universities', 'جامعتي — كل الجامعات اللبنانية'), url: 'https://jameati.com.lb/ar/universities' } },
  gh: { code: 'GH', name: t('Ghana', 'غانا'),
    steps: L('Bachelor · 4 years (medicine ~6)|بكالوريوس · ٤ سنوات (الطب نحو ٦)', 'Master (MA / MSc 1 year, MPhil 2 years with research)|ماستر (MA / MSc سنة، وMPhil سنتان مع بحث)', 'PhD · 3–4 years|دكتوراه · ٣–٤ سنوات'),
    entry: t('WASSCE grades, or a foreign diploma (American, Lebanese Bac, IGCSE…) evaluated by the university / Ghana Tertiary Education Commission. International students pay higher fees.', 'علامات WASSCE، أو شهادة أجنبية (أميركية، لبنانية، IGCSE…) تقيّمها الجامعة أو هيئة التعليم العالي في غانا (GTEC). الطلاب الأجانب يدفعون أقساطًا أعلى.'),
    apply: t('Apply online to each university (usually early in the year).', 'قدّم عبر الإنترنت لكل جامعة (غالبًا في بداية السنة).'),
    link: { name: t('Ghana Tertiary Education Commission (GTEC)', 'هيئة التعليم العالي في غانا (GTEC)'), url: 'https://gtec.edu.gh' } },
  uk: { code: 'UK', name: t('United Kingdom', 'المملكة المتحدة'),
    steps: L('Bachelor · 3 years (Scotland 4; MEng / MSci 4)|بكالوريوس · ٣ سنوات (اسكتلندا ٤؛ MEng / MSci أربع)', 'Master · 1 year|ماستر · سنة واحدة', 'PhD · 3–4 years|دكتوراه · ٣–٤ سنوات'),
    entry: t('A-levels or equivalent: the Lebanese Bac and American diploma (with good grades and often AP / SAT) are accepted by many universities, sometimes after a one-year foundation course. English test (IELTS) if needed.', 'A-levels أو ما يعادلها: كثير من الجامعات تقبل الشهادة اللبنانية والأميركية (بعلامات جيدة وغالبًا مع AP أو SAT)، وأحيانًا بعد سنة تأسيسية (Foundation). واختبار إنجليزية (IELTS) عند الحاجة.'),
    apply: t('One application for up to 5 universities via UCAS (most by mid-January — 13 January for 2027 entry; medicine, dentistry, vet and Oxbridge by 15 October).', 'طلب واحد حتى ٥ جامعات عبر UCAS (أغلبها حتى منتصف كانون الثاني — 13 كانون الثاني لدخول 2027؛ والطب وطب الأسنان والبيطري وأكسفورد وكامبريدج حتى 15 تشرين الأول).'),
    link: { name: t('UCAS', 'UCAS'), url: 'https://www.ucas.com' } },
  na: { code: 'US·CA', name: t('US & Canada', 'الولايات المتحدة وكندا'),
    steps: L('Bachelor · 4 years (Canada 3–4)|بكالوريوس · ٤ سنوات (كندا ٣–٤)', 'Master · 1–2 years|ماستر · سنة إلى سنتين', 'PhD · 5–6 years|دكتوراه · ٥–٦ سنوات'),
    entry: t('High-school transcript (GPA), SAT/ACT (often optional), essays, activities and recommendations. Medicine and law start only after a bachelor.', 'كشف العلامات (GPA)، وSAT أو ACT (غالبًا اختياري)، والمقالات والأنشطة ورسائل التوصية. الطب والحقوق لا يبدآن إلا بعد الإجازة.'),
    apply: t('US: Common App (Nov–Jan). Canada: each province or university (e.g. OUAC in Ontario).', 'الولايات المتحدة: Common App (تشرين الثاني–كانون الثاني). كندا: حسب المقاطعة أو الجامعة (مثل OUAC في أونتاريو).'),
    link: { name: t('Common App', 'Common App'), url: 'https://www.commonapp.org' } },
  eu: { code: 'EU', name: t('France & Europe', 'فرنسا وأوروبا'),
    steps: L('Bachelor / Licence · 3 years|إجازة · ٣ سنوات', 'Master · 2 years|ماستر · سنتان', 'Doctorate · 3 years|دكتوراه · ٣ سنوات'),
    entry: t('Lebanese Bac is well known in France. Germany\'s public universities mostly charge no tuition; France\'s charge non-EU students about €2,900 (licence) to €3,900 (master) a year since 2026-27. Bachelor programs are mostly taught in the local language (French, German…); more masters are in English.', 'الشهادة اللبنانية معروفة جيدًا في فرنسا. الجامعات الرسمية في ألمانيا غالبًا بلا أقساط؛ وفي فرنسا يدفع غير الأوروبيين نحو 2,900 يورو (إجازة) إلى 3,900 يورو (ماستر) سنويًا منذ 2026-2027. برامج الإجازة غالبًا باللغة المحلية (الفرنسية، الألمانية…)، والماستر بالإنجليزية أكثر.'),
    apply: t('France: Campus France / Études en France for students from abroad. Other countries: each university.', 'فرنسا: Campus France / Études en France للطلاب من الخارج. الدول الأخرى: كل جامعة على حدة.'),
    link: { name: t('Campus France', 'Campus France'), url: 'https://www.campusfrance.org' } }
};

/* Universities to look at — examples, not rankings. */
const U = (lb, gh, uk, na, eu, notes) => ({ lb, gh, uk, na, eu, notes: notes || {} });
const facultyIn = {
  science: U(['Lebanese University', 'AUB', 'LAU', 'USJ', 'University of Balamand'], ['University of Ghana', 'KNUST', 'University of Cape Coast'], ['Imperial College London', 'University of Edinburgh', 'University of Manchester'], ['University of Toronto', 'McGill University', 'UC Berkeley'], ['Sorbonne Université', 'Université Paris-Saclay', 'Heidelberg University']),
  engineering: U(['Lebanese University', 'AUB', 'LAU', 'USJ (ESIB)', 'NDU', 'BAU'], ['KNUST', 'University of Ghana', 'Ashesi University', 'UMaT (mining)'], ['Imperial College London', 'University of Cambridge', 'University of Manchester'], ['Georgia Tech', 'Purdue University', 'University of Waterloo'], ['TU Munich', 'RWTH Aachen', 'TU Delft', 'French grandes écoles (via prépa)'], {
    gh: t('BSc Engineering, 4 years; professional registration with the Ghana Institution of Engineering.', 'بكالوريوس هندسة ٤ سنوات؛ ثم التسجيل المهني في معهد المهندسين في غانا (GhIE).'),
    uk: t('BEng 3 years or MEng 4 years; later Chartered Engineer (CEng).', 'BEng ثلاث سنوات أو MEng أربع سنوات؛ ثم لقب المهندس المعتمد (CEng) لاحقًا.'),
    na: t('Bachelor 4 years; licence later: PE exam (US) or P.Eng (Canada).', 'بكالوريوس ٤ سنوات؛ ثم الترخيص لاحقًا: امتحان PE (الولايات المتحدة) أو P.Eng (كندا).'),
    eu: t('France: 2 years of prépa + 3 years in an engineering school = "ingénieur" (5 years). Germany: Bachelor 3 + Master 2.', 'فرنسا: سنتان تحضيرية (prépa) + ٣ سنوات في مدرسة هندسة = «مهندس» (٥ سنوات). ألمانيا: إجازة ٣ + ماستر ٢.') }),
  health: U(['Lebanese University', 'AUB', 'USJ', 'LAU', 'BAU', 'University of Balamand'], ['University of Ghana (Korle Bu)', 'KNUST', 'University of Cape Coast', 'University of Health and Allied Sciences'], ["King's College London", 'University of Edinburgh', 'University of Manchester'], ['Johns Hopkins', 'University of Toronto', 'McGill University'], ['Université Paris Cité', 'Charité Berlin', 'KU Leuven']),
  computing: U(['Lebanese University', 'AUB', 'LAU', 'NDU', 'AUST', 'LIU'], ['Ashesi University', 'University of Ghana', 'KNUST'], ['University of Oxford', 'Imperial College London', 'University of Edinburgh'], ['MIT', 'Carnegie Mellon', 'University of Waterloo'], ['ETH Zurich', 'TU Munich', 'EPITA / EPITECH (France)']),
  business: U(['Lebanese University', 'AUB (OSB)', 'LAU', 'USJ', 'NDU'], ['University of Ghana Business School', 'KNUST', 'Ashesi University', 'GIMPA'], ['LSE', 'University of Warwick', 'University of Manchester'], ['University of Pennsylvania (Wharton)', 'University of Toronto', 'McGill University'], ['HEC Paris', 'ESSEC', 'Bocconi (Milan)']),
  law: U(['Lebanese University', 'USJ', 'La Sagesse University', 'BAU', 'NDU'], ['University of Ghana School of Law', 'KNUST', 'GIMPA Law School'], ['LSE', "King's College London", 'University of Oxford'], ['Harvard / Yale (JD after a bachelor)', 'University of Toronto', 'McGill University'], ['Université Paris 1 Panthéon-Sorbonne', 'Université Paris-Panthéon-Assas', 'Leiden University']),
  humanities: U(['Lebanese University', 'AUB', 'USJ', 'LAU', 'University of Balamand'], ['University of Ghana', 'University of Cape Coast', 'KNUST'], ['University of Oxford', 'University of Cambridge', 'SOAS London'], ['University of Toronto', 'Columbia University', 'McGill University'], ['Sorbonne Université', 'INALCO (languages)', 'ESIT (interpreting)']),
  social: U(['Lebanese University', 'AUB', 'USJ', 'LAU', 'Haigazian University'], ['University of Ghana', 'University of Cape Coast'], ['LSE', 'UCL', 'University of Edinburgh'], ['University of Michigan', 'University of Toronto', 'UBC'], ['Sciences Po', 'University of Amsterdam', 'Université Paris Cité']),
  education: U(['Lebanese University (Faculty of Pedagogy)', 'AUB', 'LAU', 'USJ', 'NDU'], ['University of Education, Winneba', 'University of Cape Coast', 'University of Ghana'], ['UCL Institute of Education', 'University of Oxford', 'University of Cambridge'], ['Teachers College, Columbia', 'University of Toronto (OISE)', 'UBC'], ['INSPÉ (France)', 'University of Helsinki', 'Leiden University'], {
    gh: t('BEd 4 years (e.g. Winneba, Cape Coast), then the national teacher licensure exam.', 'بكالوريوس تربية ٤ سنوات (مثل وينيبا وكيب كوست)، ثم امتحان ترخيص المعلّمين الوطني.'),
    uk: t('Bachelor in any subject + PGCE (1 year) for Qualified Teacher Status.', 'إجازة في أيّ مادة + PGCE (سنة) للحصول على صفة المعلّم المؤهَّل.'),
    na: t('Bachelor + state / provincial teacher certification (often a 1–2 year program).', 'إجازة + شهادة تعليم من الولاية أو المقاطعة (غالبًا برنامج سنة إلى سنتين).'),
    eu: t('France: master MEEF + national competitive exam (CAPES / CRPE).', 'فرنسا: ماستر MEEF + مباراة وطنية (CAPES / CRPE).') }),
  'arts-design': U(['Lebanese University (Fine Arts)', 'ALBA (Balamand)', 'AUB', 'LAU', 'NDU', 'USEK'], ['KNUST (Art & Architecture)', 'University of Ghana (Performing Arts)'], ['University of the Arts London', 'The Bartlett (UCL)', 'Glasgow School of Art'], ['Rhode Island School of Design', 'Parsons', 'OCAD University (Toronto)'], ['Beaux-Arts de Paris', 'Design Academy Eindhoven', 'Politecnico di Milano']),
  media: U(['Lebanese University (Faculty of Information)', 'LAU', 'NDU', 'USJ', 'AUB'], ['University of Media, Arts and Communication (UniMAC)', 'University of Ghana'], ['Goldsmiths, University of London', 'City, University of London', 'University of Leeds'], ['Columbia (Journalism)', 'Northwestern (Medill)', 'Toronto Metropolitan University'], ['Sciences Po (journalism school)', 'CFJ Paris', 'University of Amsterdam']),
  agriculture: U(['Lebanese University (Agronomy)', 'AUB (FAFS)', 'USJ (ESIAM)', 'USEK'], ['University of Ghana', 'KNUST', 'University of Cape Coast'], ['University of Reading', 'Harper Adams University', 'Royal Veterinary College'], ['UC Davis', 'Cornell University', 'University of Guelph'], ['Wageningen University', 'AgroParisTech', 'Ghent University'])
};

/* The real path for regulated professions, outside Lebanon (Lebanon = the main page content). */
const pathIn = {
  medicine: {
    gh: t('MBChB ~6 years (University of Ghana, KNUST, UCC…) → 2 years housemanship → licence from the Medical and Dental Council → specialist training (residency).', 'MBChB نحو ٦ سنوات (جامعة غانا، KNUST، UCC…) ← سنتا تدريب (housemanship) ← ترخيص من مجلس الطب وطب الأسنان ← تدريب تخصّصي (إقامة).'),
    uk: t('MBBS / MBChB 5–6 years (UCAT test + interview) → 2 Foundation years → GMC registration → specialty training (3–8 years).', 'MBBS / MBChB من ٥ إلى ٦ سنوات (اختبار UCAT + مقابلة) ← سنتا تدريب تأسيسي ← التسجيل في GMC ← تدريب تخصّصي (٣–٨ سنوات).'),
    na: t('4-year bachelor ("pre-med") → MCAT → 4-year MD → residency 3–7 years → licence exams (USMLE / MCCQE). Very hard for international students in the US.', 'إجازة ٤ سنوات («pre-med») ← اختبار MCAT ← ٤ سنوات MD ← إقامة ٣–٧ سنوات ← امتحانات الترخيص (USMLE / MCCQE). صعب جدًا للطلاب الأجانب في الولايات المتحدة.'),
    eu: t('France: very selective first year (PASS / L.AS), ~6 years, then residency (internat). Germany: ~6 years, high grades and German C1.', 'فرنسا: سنة أولى انتقائية جدًا (PASS / L.AS)، نحو ٦ سنوات، ثم الإقامة (internat). ألمانيا: نحو ٦ سنوات، بعلامات عالية وإتقان الألمانية (C1).')
  },
  dentistry: {
    gh: t('BDS ~6 years (University of Ghana, KNUST) → housemanship → Medical and Dental Council licence.', 'BDS نحو ٦ سنوات (جامعة غانا، KNUST) ← تدريب ← ترخيص مجلس الطب وطب الأسنان.'),
    uk: t('BDS 5 years (UCAT + interview) → 1 foundation year → General Dental Council registration.', 'BDS خمس سنوات (UCAT + مقابلة) ← سنة تأسيسية ← التسجيل في مجلس طب الأسنان العام.'),
    na: t('Bachelor (4 years) → DAT test → DDS / DMD 4 years → licence exams.', 'إجازة (٤ سنوات) ← اختبار DAT ← DDS / DMD أربع سنوات ← امتحانات الترخيص.'),
    eu: t('About 5–6 years; France uses the same selective first year as medicine (PASS / L.AS).', 'نحو ٥–٦ سنوات؛ وفرنسا تعتمد السنة الأولى الانتقائية نفسها كالطب (PASS / L.AS).')
  },
  pharmacy: {
    gh: t('PharmD 6 years (KNUST, University of Ghana, UCC) → internship → Pharmacy Council licensing exam.', 'PharmD ست سنوات (KNUST، جامعة غانا، UCC) ← تدريب ← امتحان ترخيص مجلس الصيدلة.'),
    uk: t('MPharm 4 years → 1 foundation training year → GPhC registration exam.', 'MPharm أربع سنوات ← سنة تدريب تأسيسية ← امتحان التسجيل في GPhC.'),
    na: t('2+ years of pre-pharmacy courses → PharmD 4 years → NAPLEX licence (US).', 'سنتان أو أكثر من مواد تحضيرية ← PharmD أربع سنوات ← ترخيص NAPLEX (الولايات المتحدة).'),
    eu: t('About 6 years (France: via PASS / L.AS first year).', 'نحو ٦ سنوات (فرنسا: عبر السنة الأولى PASS / L.AS).')
  },
  nursing: {
    gh: t('BSc Nursing 4 years → licensing exam of the Nursing and Midwifery Council of Ghana.', 'بكالوريوس تمريض ٤ سنوات ← امتحان ترخيص مجلس التمريض والقبالة في غانا.'),
    uk: t('BSc Nursing 3 years (adult, child or mental health) → NMC registration.', 'بكالوريوس تمريض ٣ سنوات (بالغين أو أطفال أو صحة نفسية) ← التسجيل في NMC.'),
    na: t('BSN 4 years → NCLEX-RN licence exam.', 'BSN أربع سنوات ← امتحان الترخيص NCLEX-RN.'),
    eu: t('3–4 years; France: IFSI nursing institutes (3 years).', '٣–٤ سنوات؛ فرنسا: معاهد التمريض IFSI (٣ سنوات).')
  },
  law: {
    gh: t('LLB (4 years, or shorter after another degree) → Ghana School of Law professional course → called to the Bar.', 'LLB (٤ سنوات، أو أقصر بعد شهادة أخرى) ← الدورة المهنية في كلية الحقوق في غانا ← الانتساب إلى نقابة المحامين.'),
    uk: t('LLB 3 years → solicitor: SQE exams + 2 years work experience; barrister: Bar course + pupillage.', 'LLB ثلاث سنوات ← محامٍ (solicitor): امتحانات SQE + سنتا خبرة؛ أو محامٍ مرافع (barrister): دورة النقابة + تدريب.'),
    na: t('Any 4-year bachelor → LSAT → JD 3 years → bar exam.', 'أيّ إجازة ٤ سنوات ← اختبار LSAT ← JD ثلاث سنوات ← امتحان النقابة.'),
    eu: t('France: Licence 3 + Master 2 → bar school entrance exam (CRFPA) → ~18 months at the bar school.', 'فرنسا: إجازة ٣ + ماستر ٢ ← مباراة الدخول إلى مدرسة المحاماة (CRFPA) ← نحو ١٨ شهرًا في المدرسة.')
  },
  architecture: {
    gh: t('BSc Architecture 4 years (KNUST) → MArch 2 years → Architects Registration Council.', 'بكالوريوس عمارة ٤ سنوات (KNUST) ← ماجستير عمارة سنتان ← مجلس تسجيل المعماريين.'),
    uk: t('Part 1 (BA/BSc, 3 years) → work year → Part 2 (MArch, 2 years) → Part 3 → ARB registration.', 'الجزء الأول (٣ سنوات) ← سنة عمل ← الجزء الثاني (ماجستير، سنتان) ← الجزء الثالث ← التسجيل في ARB.'),
    na: t('BArch 5 years or bachelor + MArch → internship hours → ARE licence exams (US).', 'BArch خمس سنوات أو إجازة + MArch ← ساعات تدريب ← امتحانات الترخيص ARE (الولايات المتحدة).'),
    eu: t('France: 5-year state diploma (DEA) in a national school of architecture + HMONP to practise.', 'فرنسا: دبلوم الدولة لخمس سنوات في مدرسة وطنية للعمارة + HMONP للممارسة.')
  },
  veterinary: {
    gh: t('DVM ~6 years (University of Ghana, KNUST) → Veterinary Council registration.', 'DVM نحو ٦ سنوات (جامعة غانا، KNUST) ← التسجيل في مجلس الأطباء البيطريين.'),
    uk: t('BVSc / BVetMed 5 years → RCVS registration.', 'BVSc / BVetMed خمس سنوات ← التسجيل في RCVS.'),
    na: t('Bachelor → DVM 4 years → NAVLE licence exam.', 'إجازة ← DVM أربع سنوات ← امتحان الترخيص NAVLE.'),
    eu: t('About 5–6 years; France: very selective national vet schools.', 'نحو ٥–٦ سنوات؛ فرنسا: مدارس بيطرية وطنية انتقائية جدًا.')
  },
  psychology: {
    gh: t('BA/BSc Psychology 4 years → MPhil Clinical Psychology → Ghana Psychology Council licence.', 'بكالوريوس علم نفس ٤ سنوات ← MPhil في علم النفس العيادي ← ترخيص مجلس علم النفس في غانا.'),
    uk: t('BSc 3 years (BPS-accredited) → Doctorate in Clinical Psychology (3 years) → HCPC registration.', 'بكالوريوس ٣ سنوات (معتمد من BPS) ← دكتوراه في علم النفس العيادي (٣ سنوات) ← التسجيل في HCPC.'),
    na: t('Bachelor 4 years → clinical psychologist needs a PhD or PsyD (5–7 years) + licence.', 'إجازة ٤ سنوات ← المعالج النفسي العيادي يحتاج إلى PhD أو PsyD (٥–٧ سنوات) + ترخيص.'),
    eu: t('France: Licence 3 + Master 2 in psychology to use the title "psychologue".', 'فرنسا: إجازة ٣ + ماستر ٢ في علم النفس لحمل لقب «psychologue».')
  }
};

window.ATLAS.countries = { countries, facultyIn, pathIn, order: ['lb', 'gh', 'uk', 'na', 'eu'], checked: '2026-11' };
})();
