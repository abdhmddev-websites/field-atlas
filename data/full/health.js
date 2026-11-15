/* Full content: Medicine & health sciences */
(function () {
const { t, L, fill } = window.ATLAS;
const colloquium = t('To practise in Lebanon you pass the colloquium exam (organised by the Ministry of Education and Higher Education with the Ministry of Public Health) and register with the professional order.', 'لممارسة المهنة في لبنان تنجح في امتحان الكولوكيوم (تنظّمه وزارة التربية والتعليم العالي بالتنسيق مع وزارة الصحة العامة) وتنتسب إلى النقابة.');

fill('health', {
  intro: t('Health sciences train the people who prevent, diagnose and treat illness: doctors, dentists, pharmacists, nurses, therapists, lab scientists and public-health experts. Most of these are licensed professions.',
           'تُعدّ العلوم الصحية من يقي من المرض ويشخّصه ويعالجه: الأطباء وأطباء الأسنان والصيادلة والممرّضون والمعالجون وعلماء المختبر وخبراء الصحة العامة. ومعظمها مهن تحتاج إلى ترخيص.'),
  ladderNote: t('Health has its own ladder. Medicine, dentistry and pharmacy are long professional degrees (5–7 years) followed by a licensing exam (colloquium) and then a specialty (residency). A research PhD is optional and comes on top. Nursing, physiotherapy, nutrition and lab sciences follow the normal Bachelor → Master → PhD ladder, plus a licence.',
                'للصحة سلّمها الخاص. الطب وطب الأسنان والصيدلة شهادات مهنية طويلة (٥–٧ سنوات) يليها امتحان ترخيص (كولوكيوم) ثم اختصاص (إقامة). أمّا الدكتوراه البحثية فاختيارية وتأتي إضافةً. والتمريض والعلاج الفيزيائي والتغذية وعلوم المختبر تتبع السلّم العادي: إجازة ← ماستر ← دكتوراه، مع ترخيص.')
}, [
  {
    id: 'medicine', name: t('Medicine', 'الطب'),
    one: t('Diagnosing and treating disease to keep people alive and well.', 'تشخيص الأمراض وعلاجها للحفاظ على حياة الناس وصحتهم.'),
    think: t('"What is really wrong with this patient, and what is the safest next step?" You stay calm under pressure and never stop studying.', '«ما المشكلة الحقيقية عند هذا المريض، وما الخطوة التالية الأكثر أمانًا؟» تبقى هادئًا تحت الضغط ولا تتوقف عن الدراسة.'),
    school: L('Biology (strong)|علوم الحياة (مستوى قوي)', 'Chemistry (strong)|الكيمياء (مستوى قوي)', 'Physics|الفيزياء', 'Languages|اللغات'),
    study: L('Anatomy|التشريح', 'Physiology|علم وظائف الأعضاء', 'Pathology|علم الأمراض', 'Pharmacology|علم الأدوية', 'Clinical rotations in hospitals|تدريب سريري في المستشفيات', 'Medical ethics|أخلاقيات الطب'),
    riasec: 'IS',
    bachelor: { deg: 'MD', years: '7', lmd: 'Doctorat en médecine · 7' },
    stages: {
      bachelor: { name: t('Medical degree (MD)', 'شهادة الطب (MD)'), txt: t('About 7 years. Lebanese University: a first year at the Faculty of Sciences (average at least 12/20), then a competitive exam into Year 2 of medicine. USJ: admission after school. AUB, LAU: a 3-year science bachelor + 4-year MD. Then the colloquium licence exam, which now includes a clinical (OSCE) part.', 'نحو ٧ سنوات. الجامعة اللبنانية: سنة أولى في كلية العلوم (معدّل 12/20 على الأقل) ثم مباراة للدخول إلى السنة الثانية في الطب. USJ: قبول بعد المدرسة. AUB وLAU: إجازة علوم ٣ سنوات ثم MD ٤ سنوات. بعدها امتحان الكولوكيوم، وقد أُضيف إليه جزء سريري (OSCE).') },
      master: { name: t('Residency (specialty)', 'الإقامة (الاختصاص)'), txt: t('Paid hospital training in one specialty, 3–6 years. A fellowship can follow for a sub-specialty.', 'تدريب مدفوع في المستشفى في اختصاص واحد، ٣–٦ سنوات. ويمكن أن تليه زمالة في اختصاص فرعي.'), years: '3–6' },
      phd: { name: t('Research (PhD / MD-PhD)', 'البحث: دكتوراه أو MD-PhD'), txt: t('Optional: doctors who want to do research add a PhD or a research fellowship.', 'اختياري: الأطباء الذين يريدون البحث يضيفون دكتوراه أو زمالة بحثية.'), years: '3–4' }
    },
    masters: L('Internal medicine|الطب الداخلي', 'General surgery|الجراحة العامة', 'Pediatrics|طب الأطفال', 'Obstetrics & gynecology|التوليد وأمراض النساء', 'Cardiology (fellowship)|أمراض القلب (زمالة)', 'Psychiatry|الطب النفسي', 'Radiology|الأشعة', 'Family medicine|طب العائلة'),
    phd: L('Clinical trials|التجارب السريرية', 'Cancer research|أبحاث السرطان', 'Immunology & infection|المناعة والأمراض المعدية', 'Neuroscience|علم الأعصاب', 'Medical genetics|الوراثة الطبية'),
    scopus: '2700 Medicine',
    careers: L('Hospital doctor|طبيب في مستشفى', 'Private clinic|عيادة خاصة', 'Surgeon|جرّاح', 'Medical researcher|باحث طبي', 'NGO / humanitarian doctor|طبيب في منظمة إنسانية'),
    routes: L('Master in public health → health policy|ماستر في الصحة العامة ← السياسات الصحية', 'MBA → hospital management|ماجستير إدارة أعمال ← إدارة المستشفيات'),
    note: colloquium
  },
  {
    id: 'dentistry', name: t('Dentistry', 'طب الأسنان'),
    one: t('Health of the teeth, gums and mouth — prevention, treatment and smile design.', 'صحة الأسنان واللثة والفم — الوقاية والعلاج وتصميم الابتسامة.'),
    think: t('"How do I fix this precisely, with steady hands, while the patient stays comfortable?" You like detail, handwork and people.', '«كيف أصلح هذا بدقة وبيد ثابتة مع راحة المريض؟» تحب التفاصيل والعمل اليدوي والتعامل مع الناس.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء', 'Physics|الفيزياء'),
    study: L('Oral anatomy|تشريح الفم', 'Dental materials|المواد السنية', 'Restorative dentistry|طب الأسنان الترميمي', 'Oral radiology|الأشعة الفموية', 'Clinical practice on patients|الممارسة السريرية على المرضى'),
    riasec: 'RS',
    bachelor: { deg: 'DDS / DMD', years: '5', lmd: 'Doctorat en chirurgie dentaire · 5' },
    stages: {
      bachelor: { name: t('Dental degree', 'شهادة طب الأسنان'), txt: t('5 years directly after school (e.g. Lebanese University, USJ, BAU), then the colloquium exam.', '٥ سنوات مباشرة بعد المدرسة (مثل الجامعة اللبنانية وUSJ وBAU)، ثم امتحان الكولوكيوم.') },
      master: { name: t('Dental specialty', 'الاختصاص في طب الأسنان'), txt: t('Optional 2–3 years of specialist training.', 'تدريب تخصّصي اختياري لمدة ٢–٣ سنوات.'), years: '2–3' }
    },
    masters: L('Orthodontics|تقويم الأسنان', 'Endodontics (root canal)|علاج الجذور', 'Oral & maxillofacial surgery|جراحة الفم والوجه والفكّين', 'Periodontics (gums)|أمراض اللثة', 'Pediatric dentistry|طب أسنان الأطفال', 'Prosthodontics|التركيبات السنية'),
    phd: L('Dental biomaterials|المواد الحيوية السنية', 'Oral microbiology|الأحياء الدقيقة الفموية', 'Digital dentistry|طب الأسنان الرقمي', 'Implantology|زراعة الأسنان'),
    scopus: '3500 Dentistry',
    careers: L('Private dental clinic|عيادة أسنان خاصة', 'Hospital dentist|طبيب أسنان في مستشفى', 'Orthodontist|اختصاصي تقويم', 'University teaching|تعليم جامعي'),
    routes: L('Master in public health → community oral health|ماستر في الصحة العامة ← صحة الفم المجتمعية'),
    note: colloquium
  },
  {
    id: 'pharmacy', name: t('Pharmacy', 'الصيدلة'),
    one: t('Medicines: how they work, how they are made and how to use them safely.', 'الأدوية: كيف تعمل وكيف تُصنَع وكيف تُستعمل بأمان.'),
    think: t('"Is this medicine right, safe and at the right dose for this person?" You are precise and like chemistry with a human side.', '«هل هذا الدواء مناسب وآمن وبالجرعة الصحيحة لهذا الشخص؟» أنت دقيق وتحب الكيمياء بوجهها الإنساني.'),
    school: L('Chemistry (strong)|الكيمياء (مستوى قوي)', 'Biology|علوم الحياة', 'Mathematics|الرياضيات'),
    study: L('Pharmaceutical chemistry|الكيمياء الصيدلانية', 'Pharmacology|علم الأدوية', 'Pharmaceutics (making medicines)|الصيدلانيات (تصنيع الأدوية)', 'Microbiology|علم الأحياء الدقيقة', 'Clinical pharmacy & internship|الصيدلة السريرية والتدريب'),
    riasec: 'IC',
    bachelor: { deg: 'BS Pharm / PharmD', years: '5–6', lmd: 'Diplôme de pharmacien · 5' },
    stages: { bachelor: { name: t('Pharmacy degree', 'شهادة الصيدلة'), txt: t('5 years (BS Pharmacy) or 6 years (PharmD, more clinical), then the colloquium exam and the Order of Pharmacists.', '٥ سنوات (BS صيدلة) أو ٦ سنوات (PharmD، طابع سريري أكثر)، ثم امتحان الكولوكيوم ونقابة الصيادلة.') } },
    masters: L('Clinical & hospital pharmacy|الصيدلة السريرية والاستشفائية', 'Pharmacology & toxicology|علم الأدوية والسموم', 'Pharmaceutical industry & regulation|الصناعة الدوائية والتنظيم', 'Cosmetology|مستحضرات التجميل', 'Pharmacy management|إدارة الصيدليات'),
    phd: L('Drug delivery|توصيل الأدوية', 'Pharmacogenomics|الوراثة الدوائية', 'Antibiotic resistance|مقاومة المضادات الحيوية', 'Natural products|المنتجات الطبيعية'),
    scopus: '3000 Pharmacology, Toxicology and Pharmaceutics',
    careers: L('Community pharmacist|صيدلي في صيدلية', 'Hospital pharmacist|صيدلي في مستشفى', 'Pharmaceutical industry|الصناعة الدوائية', 'Medical representative|مندوب طبي', 'Regulatory affairs (Ministry, companies)|الشؤون التنظيمية (الوزارة والشركات)'),
    routes: L('MBA → pharma management|ماجستير إدارة أعمال ← إدارة الشركات الدوائية', 'Master in public health|ماستر في الصحة العامة'),
    note: colloquium
  },
  {
    id: 'nursing', name: t('Nursing & midwifery', 'التمريض والقبالة'),
    one: t('Caring for patients day and night, and helping mothers and babies through birth.', 'رعاية المرضى ليلًا ونهارًا، ومساعدة الأمهات والأطفال عند الولادة.'),
    think: t('"What does this patient need right now, and what changed since an hour ago?" You are caring, organized and strong under pressure.', '«ماذا يحتاج هذا المريض الآن، وما الذي تغيّر منذ ساعة؟» أنت حنون ومنظّم وقوي تحت الضغط.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء', 'Languages|اللغات'),
    study: L('Fundamentals of nursing|أساسيات التمريض', 'Anatomy & physiology|التشريح ووظائف الأعضاء', 'Medical-surgical nursing|التمريض الباطني الجراحي', 'Maternal & child health|صحة الأم والطفل', 'Hospital clinical training|التدريب السريري في المستشفى'),
    riasec: 'SI',
    bachelor: { deg: 'BSN', years: '3–4', lmd: 'Licence · 3–4' },
    masters: L('Critical care nursing|تمريض العناية الفائقة', 'Nursing administration|إدارة التمريض', 'Community health nursing|تمريض صحة المجتمع', 'Nurse practitioner|الممرّض الممارس المتقدّم', 'Midwifery|القبالة'),
    phd: L('Patient safety|سلامة المرضى', 'Chronic disease care|رعاية الأمراض المزمنة', 'Maternal health|صحة الأم', 'Nursing education|التعليم التمريضي'),
    scopus: '2900 Nursing',
    careers: L('Hospital nurse|ممرّض في مستشفى', 'ICU / emergency nurse|ممرّض عناية فائقة / طوارئ', 'Midwife|قابلة', 'School & community nurse|ممرّض مدرسي ومجتمعي', 'Nurse manager|مدير تمريض'),
    routes: L('High demand abroad (Gulf, Europe, Canada) after licence exams|طلب مرتفع في الخارج (الخليج وأوروبا وكندا) بعد امتحانات الترخيص', 'Master in public health|ماستر في الصحة العامة'),
    note: t('To practise in Lebanon you pass the colloquium and register with the Order of Nurses.', 'لممارسة المهنة في لبنان تنجح في الكولوكيوم وتنتسب إلى نقابة الممرّضين.')
  },
  {
    id: 'physiotherapy', name: t('Physiotherapy', 'العلاج الفيزيائي'),
    one: t('Helping people move again after injury, surgery, stroke or illness.', 'مساعدة الناس على الحركة من جديد بعد إصابة أو جراحة أو جلطة أو مرض.'),
    think: t('"Which movement will help this body heal?" You like sport, the human body and encouraging people.', '«أيّ حركة ستساعد هذا الجسم على الشفاء؟» تحب الرياضة وجسم الإنسان وتشجيع الناس.'),
    school: L('Biology|علوم الحياة', 'Physics|الفيزياء', 'Sport|الرياضة'),
    study: L('Anatomy & biomechanics|التشريح والميكانيك الحيوي', 'Exercise therapy|العلاج بالتمارين', 'Musculoskeletal rehabilitation|تأهيل الجهاز العضلي الهيكلي', 'Neurological rehabilitation|التأهيل العصبي', 'Clinical internships|تدريبات سريرية'),
    riasec: 'SR',
    bachelor: { deg: 'BS', years: '4', lmd: 'Licence · 4' },
    masters: L('Sports physiotherapy|العلاج الفيزيائي الرياضي', 'Neurological rehabilitation|التأهيل العصبي', 'Pediatric physiotherapy|العلاج الفيزيائي للأطفال', 'Manual therapy|العلاج اليدوي', 'Cardio-respiratory rehab|التأهيل القلبي التنفسي'),
    phd: L('Rehabilitation technology|تكنولوجيا التأهيل', 'Chronic pain|الألم المزمن', 'Sports injuries|الإصابات الرياضية', 'Aging & mobility|الشيخوخة والحركة'),
    scopus: '3612 Physical Therapy, Sports Therapy and Rehabilitation',
    careers: L('Hospital physiotherapist|معالج فيزيائي في مستشفى', 'Private clinic|عيادة خاصة', 'Sports clubs & teams|الأندية والفرق الرياضية', 'Rehabilitation centers|مراكز التأهيل', 'Home care|الرعاية المنزلية'),
    routes: L('Master in sports science|ماستر في علوم الرياضة', 'Ergonomics → workplace health|بيئة العمل ← الصحة المهنية'),
    note: colloquium
  },
  {
    id: 'nutrition', name: t('Nutrition & dietetics', 'التغذية وعلم الحمية'),
    one: t('Food as health: diets that prevent and treat disease.', 'الغذاء كصحة: حميات تقي من المرض وتعالجه.'),
    think: t('"What should this person eat, and how do I help them actually change their habits?" You like science and coaching people.', '«ماذا يجب أن يأكل هذا الشخص، وكيف أساعده على تغيير عاداته فعلًا؟» تحب العلم وتوجيه الناس.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'),
    study: L('Human nutrition|التغذية البشرية', 'Biochemistry|الكيمياء الحيوية', 'Clinical nutrition|التغذية العلاجية', 'Food science|علوم الأغذية', 'Counseling & behavior change|الإرشاد وتغيير السلوك', 'Hospital internship|تدريب في مستشفى'),
    riasec: 'IS',
    bachelor: { deg: 'BS', years: '3–4', lmd: 'Licence · 3' },
    masters: L('Clinical nutrition|التغذية العلاجية', 'Sports nutrition|التغذية الرياضية', 'Public health nutrition|تغذية الصحة العامة', 'Food safety & quality|سلامة الغذاء وجودته'),
    phd: L('Obesity & diabetes|السمنة والسكري', 'Child nutrition|تغذية الأطفال', 'Food security|الأمن الغذائي', 'Nutrigenomics|الجينوميات الغذائية'),
    scopus: '2916 Nutrition and Dietetics',
    careers: L('Clinical dietitian (hospitals)|أخصائي تغذية علاجية (مستشفيات)', 'Private nutrition clinic|عيادة تغذية خاصة', 'Sports nutritionist|أخصائي تغذية رياضية', 'Food industry|الصناعة الغذائية', 'NGOs & UN nutrition programmes|برامج التغذية في المنظمات والأمم المتحدة'),
    routes: L('Master in public health|ماستر في الصحة العامة', 'Master in food science|ماستر في علوم الأغذية'),
    note: colloquium
  },
  {
    id: 'medical-lab', name: t('Medical laboratory sciences', 'علوم المختبرات الطبية'),
    one: t('Running the blood, urine and tissue tests that tell doctors what is wrong.', 'إجراء فحوص الدم والبول والأنسجة التي تخبر الأطباء بما يعانيه المريض.'),
    think: t('"Is this result accurate, and could the sample be wrong?" You love precise lab work and trust only verified results.', '«هل هذه النتيجة دقيقة، وهل يمكن أن تكون العيّنة خاطئة؟» تحب العمل المخبري الدقيق ولا تثق إلا بالنتائج المؤكَّدة.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'),
    study: L('Hematology|علم الدم', 'Clinical biochemistry|الكيمياء الحيوية السريرية', 'Medical microbiology|الأحياء الدقيقة الطبية', 'Immunology & blood bank|المناعة وبنك الدم', 'Molecular diagnostics|التشخيص الجزيئي'),
    riasec: 'IC',
    bachelor: { deg: 'BS', years: '3–4', lmd: 'Licence · 3' },
    masters: L('Clinical microbiology|الأحياء الدقيقة السريرية', 'Molecular diagnostics|التشخيص الجزيئي', 'Hematology & transfusion|علم الدم ونقل الدم', 'Lab quality management|إدارة جودة المختبرات'),
    phd: L('Infectious disease diagnostics|تشخيص الأمراض المعدية', 'Cancer biomarkers|المؤشرات الحيوية للسرطان', 'Genetic testing|الفحوص الجينية'),
    scopus: '3607 Medical Laboratory Technology',
    careers: L('Hospital laboratory|مختبر مستشفى', 'Private medical labs|مختبرات طبية خاصة', 'Blood bank|بنك الدم', 'Research labs|مختبرات الأبحاث', 'Diagnostic companies|شركات التشخيص'),
    routes: L('Master in biotechnology|ماستر في التكنولوجيا الحيوية', 'Master in public health → epidemiology|ماستر في الصحة العامة ← علم الأوبئة'),
    note: colloquium
  },
  {
    id: 'public-health', name: t('Public health', 'الصحة العامة'),
    one: t('Keeping whole populations healthy: vaccines, clean water, prevention and health systems.', 'الحفاظ على صحة مجتمعات بأكملها: اللقاحات والمياه النظيفة والوقاية والأنظمة الصحية.'),
    think: t('"Why are so many people getting sick here, and what will prevent it?" You think about communities, data and policy.', '«لماذا يمرض كثيرون هنا، وما الذي يمنع ذلك؟» تفكّر في المجتمعات والبيانات والسياسات.'),
    school: L('Biology|علوم الحياة', 'Mathematics|الرياضيات', 'Sociology|علم الاجتماع'),
    study: L('Epidemiology|علم الأوبئة', 'Biostatistics|الإحصاء الحيوي', 'Environmental health|الصحة البيئية', 'Health promotion|تعزيز الصحة', 'Health systems & policy|الأنظمة والسياسات الصحية'),
    riasec: 'SI',
    bachelor: { deg: 'BS', years: '3–4', lmd: 'Licence · 3' },
    masters: L('Epidemiology (MPH)|علم الأوبئة', 'Health management & policy|الإدارة والسياسات الصحية', 'Health promotion|تعزيز الصحة', 'Environmental & occupational health|الصحة البيئية والمهنية', 'Humanitarian & global health|الصحة الإنسانية والعالمية'),
    phd: L('Infectious disease epidemiology|وبائيات الأمراض المعدية', 'Mental health in crises|الصحة النفسية في الأزمات', 'Health inequality|اللامساواة الصحية', 'Health economics|اقتصاد الصحة'),
    scopus: '2739 Public Health, Environmental and Occupational Health',
    careers: L('Ministry of Public Health|وزارة الصحة العامة', 'WHO, UNICEF & NGOs|منظمة الصحة العالمية واليونيسف والمنظمات', 'Hospital quality & infection control|الجودة ومكافحة العدوى في المستشفيات', 'Health researcher|باحث صحي', 'Health program manager|مدير برامج صحية'),
    routes: L('Many doctors, nurses and nutritionists add an MPH|كثير من الأطباء والممرّضين وأخصائيي التغذية يضيفون ماستر صحة عامة')
  },
  {
    id: 'speech-therapy', name: t('Speech & occupational therapy', 'تقويم النطق والعلاج الانشغالي'),
    one: t('Helping children and adults speak, swallow, learn and manage daily life.', 'مساعدة الأطفال والكبار على الكلام والبلع والتعلّم وإدارة حياتهم اليومية.'),
    think: t('"What small step can this person master today?" You are patient, playful and observant.', '«ما الخطوة الصغيرة التي يستطيع هذا الشخص إتقانها اليوم؟» أنت صبور ومرِح ودقيق الملاحظة.'),
    school: L('Languages|اللغات', 'Biology|علوم الحياة', 'Psychology basics|أساسيات علم النفس'),
    study: L('Language development|نموّ اللغة', 'Phonetics & audiology|علم الأصوات والسمعيات', 'Neurology basics|أساسيات علم الأعصاب', 'Therapy techniques|تقنيات العلاج', 'Clinical internships|تدريبات سريرية'),
    riasec: 'SA',
    bachelor: { deg: 'BS', years: '3–4', lmd: 'Licence · 3–4' },
    masters: L('Speech-language pathology|علاج اضطرابات النطق واللغة', 'Audiology|السمعيات', 'Pediatric occupational therapy|العلاج الانشغالي للأطفال', 'Neuro-rehabilitation|التأهيل العصبي'),
    phd: L('Autism & communication|التوحّد والتواصل', 'Bilingual language development|نموّ اللغة عند ثنائيي اللغة', 'Swallowing disorders|اضطرابات البلع'),
    scopus: '3616 Speech and Hearing · 3609 Occupational Therapy',
    careers: L('Speech therapist (clinics, schools)|معالج نطق (عيادات ومدارس)', 'Occupational therapist|معالج انشغالي', 'Special-needs centers|مراكز ذوي الاحتياجات الخاصة', 'Hospitals & rehab centers|المستشفيات ومراكز التأهيل'),
    routes: L('Master in special education|ماستر في التربية المختصة', 'Master in psychology|ماستر في علم النفس'),
    note: colloquium
  }
]);
})();
