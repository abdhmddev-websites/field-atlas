/* Full content: Law & political science */
(function () {
const { t, L, fill } = window.ATLAS;
const ba3 = { deg: 'BA', years: '3', lmd: 'Licence · 3' };

fill('law', {
  intro: t('Law studies the rules that organize a society and how disputes are settled. Political science studies power: states, elections, governments and relations between countries.',
           'تدرس الحقوق القواعد التي تنظّم المجتمع وكيف تُحلّ النزاعات. وتدرس العلوم السياسية السلطة: الدول والانتخابات والحكومات والعلاقات بين البلدان.'),
  ladderNote: t('In Lebanon, law is a 4-year Licence en droit (Lebanese University, USJ, and others). To become a lawyer you pass the Bar Association entrance exam (Beirut or Tripoli) and train for about 3 years as a trainee lawyer. To become a judge you enter the Institute of Judicial Studies by competitive exam. Political science follows the normal 3-year BA → MA → PhD ladder.',
                'في لبنان، الحقوق إجازة مدّتها ٤ سنوات (الجامعة اللبنانية وUSJ وغيرهما). لتصبح محاميًا تنجح في امتحان الدخول إلى نقابة المحامين (بيروت أو طرابلس) وتتدرّج نحو ٣ سنوات كمحامٍ متدرّج. ولتصبح قاضيًا تدخل معهد الدروس القضائية بمباراة. أمّا العلوم السياسية فتتبع السلّم العادي: إجازة ٣ سنوات ← ماستر ← دكتوراه.')
}, [
  {
    id: 'law', name: t('Law', 'الحقوق'),
    one: t('The rules of society: contracts, crimes, families, companies and the state.', 'قواعد المجتمع: العقود والجرائم والأسرة والشركات والدولة.'),
    think: t('"What does the text say, what do the facts prove, and what is fair?" You argue with evidence and read every word carefully.', '«ماذا يقول النص، وماذا تثبت الوقائع، وما العدل؟» تحاجج بالأدلة وتقرأ كل كلمة بعناية.'),
    school: L('Arabic (strong)|العربية (مستوى قوي)', 'French or English|الفرنسية أو الإنجليزية', 'History|التاريخ', 'Civics|التربية المدنية'),
    study: L('Civil law & contracts|القانون المدني والعقود', 'Criminal law|القانون الجزائي', 'Constitutional & administrative law|القانون الدستوري والإداري', 'Commercial law|القانون التجاري', 'Procedure (how courts work)|أصول المحاكمات', 'International law|القانون الدولي'),
    riasec: 'EI',
    bachelor: { deg: 'LLB / Licence en droit', years: '4', lmd: 'Licence en droit · 4' },
    stages: { phd: { name: t('PhD in law', 'الدكتوراه في الحقوق'), txt: t('For university teaching and legal research.', 'للتعليم الجامعي والبحث القانوني.') } },
    masters: L('Business & commercial law|قانون الأعمال والقانون التجاري', 'Criminal law|القانون الجزائي', 'Public international law|القانون الدولي العام', 'Human rights|حقوق الإنسان', 'Tax & banking law|القانون الضريبي والمصرفي'),
    phd: L('Constitutional law|القانون الدستوري', 'Arbitration|التحكيم', 'Technology & data law|قانون التكنولوجيا والبيانات', 'Personal status law|قانون الأحوال الشخصية'),
    scopus: '3308 Law',
    careers: L('Lawyer (after Bar exam + training)|محامٍ (بعد امتحان النقابة والتدرّج)', 'Judge (Institute of Judicial Studies)|قاضٍ (معهد الدروس القضائية)', 'Legal advisor in companies & banks|مستشار قانوني في الشركات والمصارف', 'Notary|كاتب عدل', 'UN & human-rights organizations|الأمم المتحدة ومنظمات حقوق الإنسان'),
    routes: L('LLM abroad → international firms|ماستر قانون (LLM) في الخارج ← مكاتب دولية', 'Master in political science or diplomacy|ماستر في العلوم السياسية أو الدبلوماسية')
  },
  {
    id: 'political-science', name: t('Political science', 'العلوم السياسية'),
    one: t('Power and government: how states, parties, elections and policies work.', 'السلطة والحكم: كيف تعمل الدول والأحزاب والانتخابات والسياسات.'),
    think: t('"Who has power here, why, and what would change it?" You follow the news and enjoy debate.', '«من يملك السلطة هنا، ولماذا، وما الذي قد يغيّر ذلك؟» تتابع الأخبار وتستمتع بالنقاش.'),
    school: L('History|التاريخ', 'Civics|التربية المدنية', 'Languages|اللغات'),
    study: L('Political theory|النظرية السياسية', 'Comparative politics|السياسة المقارنة', 'Public policy|السياسات العامة', 'Research methods|مناهج البحث', 'Middle East politics|سياسات الشرق الأوسط'),
    riasec: 'ES', bachelor: ba3,
    masters: L('Public policy|السياسات العامة', 'International relations|العلاقات الدولية', 'Conflict resolution|حلّ النزاعات', 'Political communication|الاتصال السياسي'),
    phd: L('Democratization|التحوّل الديمقراطي', 'Sectarianism & power-sharing|الطائفية وتقاسم السلطة', 'Political economy|الاقتصاد السياسي', 'Migration & refugees|الهجرة واللجوء'),
    scopus: '3320 Political Science and International Relations',
    careers: L('Policy analyst|محلّل سياسات', 'Parliament & ministries staff|العمل في البرلمان والوزارات', 'NGOs & think tanks|المنظمات ومراكز الأبحاث', 'Journalist|صحافي', 'Political advisor|مستشار سياسي'),
    routes: L('Law degree as well (common combination)|دراسة الحقوق أيضًا (جمع شائع)', 'Master in journalism|ماستر في الصحافة')
  },
  {
    id: 'international-relations', name: t('International relations', 'العلاقات الدولية'),
    one: t('How countries deal with each other: diplomacy, war, peace, trade and international organizations.', 'كيف تتعامل الدول مع بعضها: الدبلوماسية والحرب والسلم والتجارة والمنظمات الدولية.'),
    think: t('"Why did this country act this way, and what will the others do?" You like languages, maps and world news.', '«لماذا تصرّف هذا البلد بهذه الطريقة، وماذا ستفعل الدول الأخرى؟» تحب اللغات والخرائط وأخبار العالم.'),
    school: L('History|التاريخ', 'Geography|الجغرافيا', 'Foreign languages (strong)|اللغات الأجنبية (مستوى قوي)'),
    study: L('International relations theory|نظريات العلاقات الدولية', 'Diplomacy|الدبلوماسية', 'International organizations|المنظمات الدولية', 'International law|القانون الدولي', 'Security studies|الدراسات الأمنية'),
    riasec: 'ES', bachelor: ba3,
    masters: L('Diplomacy|الدبلوماسية', 'International security|الأمن الدولي', 'Humanitarian action|العمل الإنساني', 'International political economy|الاقتصاد السياسي الدولي'),
    phd: L('Regional security|الأمن الإقليمي', 'Foreign policy|السياسة الخارجية', 'Global governance|الحوكمة العالمية'),
    scopus: '3320 Political Science and International Relations',
    careers: L('Diplomat (Foreign Ministry entrance exam)|دبلوماسي (مباراة وزارة الخارجية)', 'UN & international agencies|الأمم المتحدة والوكالات الدولية', 'Embassies|السفارات', 'Humanitarian NGOs|المنظمات الإنسانية', 'Political risk analyst|محلّل مخاطر سياسية'),
    routes: L('Master in law or economics|ماستر في الحقوق أو الاقتصاد')
  },
  {
    id: 'public-administration', name: t('Public administration', 'الإدارة العامة'),
    one: t('Running the state: ministries, municipalities and public services.', 'إدارة الدولة: الوزارات والبلديات والخدمات العامة.'),
    think: t('"How do we deliver this service to every citizen, fairly and efficiently?" You care about the public good and organization.', '«كيف نوصل هذه الخدمة إلى كل مواطن بعدل وفعالية؟» تهتم بالمصلحة العامة وبالتنظيم.'),
    school: L('Civics|التربية المدنية', 'Economics|الاقتصاد', 'Arabic|العربية'),
    study: L('Public management|الإدارة العامة', 'Public finance & budgeting|المالية العامة والموازنة', 'Administrative law|القانون الإداري', 'Local government|الإدارة المحلية', 'Policy evaluation|تقييم السياسات'),
    riasec: 'EC', bachelor: ba3,
    masters: L('Public administration (MPA)|الإدارة العامة', 'Public policy|السياسات العامة', 'Local development|التنمية المحلية', 'Governance & anti-corruption|الحوكمة ومكافحة الفساد'),
    phd: L('Public sector reform|إصلاح القطاع العام', 'E-government|الحكومة الإلكترونية', 'Decentralization|اللامركزية'),
    scopus: '3321 Public Administration',
    careers: L('Civil servant (Civil Service Board exams)|موظف عام (مباريات مجلس الخدمة المدنية)', 'Municipality manager|مدير بلدية', 'NGO program manager|مدير برامج في منظمة', 'Governance consultant|استشاري حوكمة')
    , routes: L('Master in public policy abroad|ماستر في السياسات العامة في الخارج')
  },
  {
    id: 'criminology', name: t('Criminology', 'علم الجريمة'),
    one: t('Why crime happens, how to prevent it and how justice systems respond.', 'لماذا تحدث الجريمة، وكيف نمنعها، وكيف تستجيب أنظمة العدالة.'),
    think: t('"What led this person to crime, and what would stop the next one?" You are analytical and interested in justice and psychology.', '«ما الذي قاد هذا الشخص إلى الجريمة، وما الذي يمنع الجريمة التالية؟» أنت تحليلي ومهتم بالعدالة وعلم النفس.'),
    school: L('Sociology|علم الاجتماع', 'Biology|علوم الحياة', 'Civics|التربية المدنية'),
    study: L('Theories of crime|نظريات الجريمة', 'Criminal law|القانون الجزائي', 'Criminal psychology|علم النفس الجنائي', 'Policing & prisons|الشرطة والسجون', 'Forensic science basics|أساسيات العلوم الجنائية'),
    riasec: 'IS', bachelor: ba3,
    masters: L('Criminology|علم الجريمة', 'Forensic psychology|علم النفس الجنائي', 'Criminal justice|العدالة الجنائية', 'Cybercrime|الجرائم الإلكترونية'),
    phd: L('Juvenile delinquency|جنوح الأحداث', 'Prison reform|إصلاح السجون', 'Violence prevention|الوقاية من العنف'),
    scopus: '3308 Law · 3312 Sociology and Political Science',
    careers: L('Security & police research units|وحدات الأبحاث في الأجهزة الأمنية', 'Prison & rehabilitation programs|برامج السجون وإعادة التأهيل', 'NGOs (juvenile justice)|منظمات عدالة الأحداث', 'Researcher|باحث'),
    routes: L('Law degree → criminal lawyer|إجازة حقوق ← محامٍ جزائي'),
    note: t('Often studied as a master after law, sociology or psychology.', 'يُدرَس غالبًا كماستر بعد الحقوق أو علم الاجتماع أو علم النفس.')
  }
]);
})();
