/* Full content: Computing & information technology */
(function () {
const { t, L, fill } = window.ATLAS;
const bs3 = { deg: 'BS', years: '3', lmd: 'Licence · 3' };

fill('computing', {
  intro: t('Computing covers everything from the theory of algorithms to running a company\'s servers. The majors overlap a lot; the difference is the angle: theory (CS), building large software (SE), running systems (IT), serving organizations (IS), protecting (cybersecurity) or learning from data (data science, AI).',
           'تغطّي الحوسبة كل شيء من نظرية الخوارزميات إلى تشغيل خوادم الشركات. الاختصاصات متداخلة كثيرًا؛ والفرق في الزاوية: النظرية (علوم الحاسوب)، أو بناء البرمجيات الكبيرة (هندسة البرمجيات)، أو تشغيل الأنظمة (تكنولوجيا المعلومات)، أو خدمة المؤسسات (نظم المعلومات)، أو الحماية (الأمن السيبراني)، أو التعلّم من البيانات (علم البيانات والذكاء الاصطناعي).'),
  ladderNote: t('Usually a 3-year BS for Lebanese Bac holders (Faculty of Science at the Lebanese University, or computer science departments at private universities). Computing is very skills-based: projects, internships and certificates count a lot, and many people work right after the bachelor. Cybersecurity, data science and AI are often studied as a master after a CS bachelor.',
                'غالبًا إجازة BS مدّتها ٣ سنوات لحاملي الشهادة اللبنانية (كلية العلوم في الجامعة اللبنانية أو أقسام علوم الحاسوب في الجامعات الخاصة). الحوسبة تعتمد كثيرًا على المهارات: المشاريع والتدريب والشهادات المهنية مهمة جدًا، وكثيرون يعملون مباشرة بعد الإجازة. أمّا الأمن السيبراني وعلم البيانات والذكاء الاصطناعي فتُدرَس غالبًا كماستر بعد إجازة في علوم الحاسوب.')
}, [
  {
    id: 'computer-science', name: t('Computer science', 'علوم الحاسوب'),
    one: t('The science of computation: algorithms, programming and how software really works.', 'علم الحوسبة: الخوارزميات والبرمجة وكيف تعمل البرمجيات فعلًا.'),
    think: t('"What is the smartest, fastest way to solve this — and can a computer do it?" You like logic puzzles and building things with code.', '«ما أذكى وأسرع طريقة لحلّ هذا — وهل يستطيع الحاسوب فعله؟» تحب الألغاز المنطقية والبناء بالبرمجة.'),
    school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Physics|الفيزياء', 'English|اللغة الإنجليزية'),
    study: L('Programming|البرمجة', 'Data structures & algorithms|بنى المعطيات والخوارزميات', 'Discrete mathematics|الرياضيات المتقطعة', 'Databases|قواعد البيانات', 'Operating systems & networks|أنظمة التشغيل والشبكات', 'Theory of computation|نظرية الحوسبة'),
    riasec: 'IC', bachelor: bs3,
    masters: L('Artificial intelligence|الذكاء الاصطناعي', 'Software engineering|هندسة البرمجيات', 'Cybersecurity|الأمن السيبراني', 'Data science|علم البيانات', 'Computer graphics & games|الرسوميات الحاسوبية والألعاب'),
    phd: L('Machine learning|التعلّم الآلي', 'Algorithms & complexity|الخوارزميات والتعقيد', 'Programming languages|لغات البرمجة', 'Human–computer interaction|التفاعل بين الإنسان والحاسوب', 'Distributed systems|الأنظمة الموزّعة'),
    scopus: '1700 Computer Science',
    careers: L('Software developer|مطوّر برمجيات', 'Web & mobile developer|مطوّر مواقع وتطبيقات', 'Game developer|مطوّر ألعاب', 'AI engineer|مهندس ذكاء اصطناعي', 'Researcher|باحث'),
    routes: L('Master in AI, data science or cybersecurity|ماستر في الذكاء الاصطناعي أو علم البيانات أو الأمن السيبراني', 'Remote work for companies abroad|العمل عن بُعد لشركات في الخارج', 'Start your own tech start-up|تأسيس شركة تكنولوجيا ناشئة')
  },
  {
    id: 'software-engineering', name: t('Software engineering', 'هندسة البرمجيات'),
    one: t('Building large, reliable software with teams — apps, platforms and systems used by millions.', 'بناء برمجيات كبيرة وموثوقة مع فرق عمل — تطبيقات ومنصّات وأنظمة يستخدمها الملايين.'),
    think: t('"How do we build this so it works, can be tested and still works next year?" You like teamwork, planning and clean code.', '«كيف نبني هذا ليعمل، ويمكن اختباره، ويبقى يعمل السنة المقبلة؟» تحب العمل الجماعي والتخطيط والشيفرة النظيفة.'),
    school: L('Mathematics|الرياضيات', 'English|اللغة الإنجليزية', 'Computer basics|أساسيات الحاسوب'),
    study: L('Programming & design patterns|البرمجة وأنماط التصميم', 'Requirements & software design|المتطلبات وتصميم البرمجيات', 'Software testing|اختبار البرمجيات', 'Web & mobile development|تطوير المواقع والتطبيقات', 'Project management (Agile)|إدارة المشاريع (Agile)', 'DevOps & cloud|DevOps والحوسبة السحابية'),
    riasec: 'IC', bachelor: { deg: 'BS / BE', years: '3–4', lmd: 'Licence / Ingénieur' },
    masters: L('Software engineering|هندسة البرمجيات', 'Cloud & DevOps|الحوسبة السحابية وDevOps', 'Software architecture|معمارية البرمجيات', 'IT project management|إدارة مشاريع تكنولوجيا المعلومات'),
    phd: L('Software testing & verification|اختبار البرمجيات والتحقّق منها', 'AI for code|الذكاء الاصطناعي للبرمجة', 'Software security|أمن البرمجيات', 'Developer productivity|إنتاجية المطوّرين'),
    scopus: '1712 Software',
    careers: L('Software engineer|مهندس برمجيات', 'Full-stack developer|مطوّر متكامل', 'QA / test engineer|مهندس اختبار وجودة', 'DevOps engineer|مهندس DevOps', 'Tech lead / product manager|قائد فريق تقني / مدير منتج'),
    routes: L('MBA → product management|ماجستير إدارة أعمال ← إدارة المنتجات', 'Master in AI|ماستر في الذكاء الاصطناعي')
  },
  {
    id: 'information-technology', name: t('Information technology', 'تكنولوجيا المعلومات'),
    one: t('Running and supporting the technology that companies depend on: networks, servers, cloud and users.', 'تشغيل ودعم التكنولوجيا التي تعتمد عليها الشركات: الشبكات والخوادم والسحابة والمستخدمون.'),
    think: t('"Why is it down, and how do I keep it running for everyone?" You are a practical problem-solver who likes helping people.', '«لماذا توقّف، وكيف أُبقيه يعمل للجميع؟» أنت حلّال مشاكل عملي تحب مساعدة الناس.'),
    school: L('Mathematics|الرياضيات', 'Computer basics|أساسيات الحاسوب', 'English|اللغة الإنجليزية'),
    study: L('Networking|الشبكات', 'System administration (Windows, Linux)|إدارة الأنظمة (ويندوز ولينكس)', 'Cloud computing|الحوسبة السحابية', 'Databases|قواعد البيانات', 'IT security basics|أساسيات أمن المعلومات', 'Help desk & IT service|الدعم الفني وخدمات تكنولوجيا المعلومات'),
    riasec: 'RC', bachelor: bs3,
    masters: L('Network engineering|هندسة الشبكات', 'Cloud infrastructure|البنية التحتية السحابية', 'Cybersecurity|الأمن السيبراني', 'IT management|إدارة تكنولوجيا المعلومات'),
    phd: L('Network management|إدارة الشبكات', 'Cloud reliability|موثوقية الحوسبة السحابية', 'Green IT|تكنولوجيا المعلومات الخضراء'),
    scopus: '1705 Computer Networks and Communications',
    careers: L('Network administrator|مدير شبكات', 'System administrator|مدير أنظمة', 'Cloud engineer|مهندس سحابة', 'IT support specialist|أخصائي دعم فني', 'IT manager|مدير تكنولوجيا المعلومات'),
    routes: L('Professional certificates (Cisco, Microsoft, AWS) boost jobs fast|الشهادات المهنية (Cisco وMicrosoft وAWS) تسرّع الحصول على عمل', 'Technical route: BT / TS in IT → university|المسار المهني: BT / TS في المعلوماتية ← الجامعة')
  },
  {
    id: 'information-systems', name: t('Information systems', 'نظم المعلومات'),
    one: t('Where technology meets business: choosing and designing the systems organizations run on.', 'حيث تلتقي التكنولوجيا بالأعمال: اختيار الأنظمة التي تعمل عليها المؤسسات وتصميمها.'),
    think: t('"What does this company need, and which system will really help it?" You like both technology and people/business.', '«ماذا تحتاج هذه الشركة، وأيّ نظام سيساعدها فعلًا؟» تحب التكنولوجيا والناس والأعمال معًا.'),
    school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد', 'English|اللغة الإنجليزية'),
    study: L('Systems analysis & design|تحليل الأنظمة وتصميمها', 'Databases|قواعد البيانات', 'Enterprise systems (ERP)|أنظمة المؤسسات (ERP)', 'Business processes|عمليات الأعمال', 'Programming basics|أساسيات البرمجة', 'IT project management|إدارة مشاريع تكنولوجيا المعلومات'),
    riasec: 'EC', bachelor: bs3,
    masters: L('Business analytics|تحليلات الأعمال', 'Information systems management|إدارة نظم المعلومات', 'Digital transformation|التحوّل الرقمي', 'MBA|ماجستير إدارة الأعمال'),
    phd: L('Digital transformation|التحوّل الرقمي', 'E-government|الحكومة الإلكترونية', 'Technology adoption|تبنّي التكنولوجيا'),
    scopus: '1710 Information Systems',
    careers: L('Business analyst|محلّل أعمال', 'ERP consultant|استشاري أنظمة ERP', 'Systems analyst|محلّل أنظمة', 'IT project manager|مدير مشاريع تكنولوجيا المعلومات', 'Banks & telecom IT departments|أقسام المعلوماتية في المصارف والاتصالات'),
    routes: L('MBA → management|ماجستير إدارة أعمال ← الإدارة', 'Master in data analytics|ماستر في تحليل البيانات')
  },
  {
    id: 'cybersecurity', name: t('Cybersecurity', 'الأمن السيبراني'),
    one: t('Protecting computers, networks and data from attacks.', 'حماية الحواسيب والشبكات والبيانات من الهجمات.'),
    think: t('"How could someone break this — and how do I stop them first?" You think like an attacker to defend like a guardian.', '«كيف يمكن لأحد أن يخترق هذا — وكيف أوقفه قبل ذلك؟» تفكّر كالمهاجم لتدافع كالحارس.'),
    school: L('Mathematics|الرياضيات', 'Computer basics|أساسيات الحاسوب', 'English|اللغة الإنجليزية'),
    study: L('Networks & protocols|الشبكات والبروتوكولات', 'Cryptography|التشفير', 'Ethical hacking|الاختراق الأخلاقي', 'Security operations|عمليات الأمن', 'Digital forensics|التحقيق الجنائي الرقمي', 'Security law & ethics|قانون الأمن وأخلاقياته'),
    riasec: 'IC', bachelor: bs3,
    masters: L('Cybersecurity|الأمن السيبراني', 'Digital forensics|التحقيق الجنائي الرقمي', 'Security management|إدارة أمن المعلومات', 'Cryptography|التشفير'),
    phd: L('Malware analysis|تحليل البرمجيات الخبيثة', 'AI for security|الذكاء الاصطناعي للأمن', 'Privacy|الخصوصية', 'Post-quantum cryptography|التشفير ما بعد الكمّي'),
    scopus: '1705 Computer Networks and Communications · 1710 Information Systems',
    careers: L('Security analyst (SOC)|محلّل أمن (مركز العمليات الأمنية)', 'Penetration tester|مختبِر اختراق', 'Security engineer|مهندس أمن', 'Digital forensics investigator|محقّق جنائي رقمي', 'Banks, telecom & government security|أمن المصارف والاتصالات والحكومة'),
    routes: L('Often a CS / IT bachelor, then a cybersecurity master|غالبًا إجازة علوم حاسوب أو تكنولوجيا معلومات ثم ماستر أمن سيبراني', 'Certificates (Security+, CEH, OSCP)|شهادات مهنية (Security+ وCEH وOSCP)')
  },
  {
    id: 'data-science', name: t('Data science', 'علم البيانات'),
    one: t('Finding patterns in large amounts of data to predict and decide.', 'اكتشاف الأنماط في كميات ضخمة من البيانات للتنبؤ واتخاذ القرار.'),
    think: t('"What is this data really telling us, and can we trust it?" You like statistics, coding and curious questions.', '«ماذا تقول هذه البيانات فعلًا، وهل يمكننا الوثوق بها؟» تحب الإحصاء والبرمجة والأسئلة الفضولية.'),
    school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Economics|الاقتصاد', 'English|اللغة الإنجليزية'),
    study: L('Statistics & probability|الإحصاء والاحتمالات', 'Programming in Python|البرمجة بلغة Python', 'Databases & SQL|قواعد البيانات وSQL', 'Machine learning|التعلّم الآلي', 'Data visualization|عرض البيانات بصريًا', 'Data ethics|أخلاقيات البيانات'),
    riasec: 'IC', bachelor: bs3,
    masters: L('Data science|علم البيانات', 'Business analytics|تحليلات الأعمال', 'Machine learning|التعلّم الآلي', 'Health data science|علم البيانات الصحية'),
    phd: L('Statistical learning|التعلّم الإحصائي', 'Big data systems|أنظمة البيانات الضخمة', 'Causal inference|الاستدلال السببي', 'Fairness in algorithms|العدالة في الخوارزميات'),
    scopus: '1702 Artificial Intelligence · 1804 Statistics, Probability and Uncertainty',
    careers: L('Data analyst|محلّل بيانات', 'Data scientist|عالم بيانات', 'Data engineer|مهندس بيانات', 'Business intelligence analyst|محلّل ذكاء الأعمال'),
    routes: L('Also reached from math, statistics, physics, economics or engineering + a data master|يمكن الوصول إليه أيضًا من الرياضيات أو الإحصاء أو الفيزياء أو الاقتصاد أو الهندسة مع ماستر بيانات')
  },
  {
    id: 'artificial-intelligence', name: t('Artificial intelligence', 'الذكاء الاصطناعي'),
    one: t('Building machines that learn, see, speak and reason.', 'بناء آلات تتعلّم وترى وتتكلّم وتستنتج.'),
    think: t('"How can a machine learn this from examples — and is it fair and safe?" You love math, code and big questions about the future.', '«كيف تتعلّم الآلة هذا من الأمثلة — وهل هي عادلة وآمنة؟» تحب الرياضيات والبرمجة والأسئلة الكبيرة عن المستقبل.'),
    school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Physics|الفيزياء', 'English|اللغة الإنجليزية'),
    study: L('Linear algebra & calculus|الجبر الخطي والتفاضل', 'Programming|البرمجة', 'Machine learning|التعلّم الآلي', 'Deep learning|التعلّم العميق', 'Natural language processing|معالجة اللغات الطبيعية', 'Computer vision|الرؤية الحاسوبية'),
    riasec: 'IC', bachelor: bs3,
    masters: L('Machine learning|التعلّم الآلي', 'Natural language processing|معالجة اللغات الطبيعية', 'Computer vision|الرؤية الحاسوبية', 'Robotics & AI|الروبوتات والذكاء الاصطناعي', 'AI ethics & governance|أخلاقيات الذكاء الاصطناعي وحوكمته'),
    phd: L('Large language models|النماذج اللغوية الكبيرة', 'Arabic NLP|معالجة اللغة العربية', 'Reinforcement learning|التعلّم المعزّز', 'AI safety|سلامة الذكاء الاصطناعي', 'Medical AI|الذكاء الاصطناعي الطبي'),
    scopus: '1702 Artificial Intelligence',
    careers: L('Machine learning engineer|مهندس تعلّم آلي', 'AI researcher|باحث ذكاء اصطناعي', 'Computer vision engineer|مهندس رؤية حاسوبية', 'NLP engineer|مهندس معالجة لغات', 'AI product specialist|أخصائي منتجات ذكاء اصطناعي'),
    routes: L('Most common path: CS / math / engineering bachelor → AI master|المسار الأكثر شيوعًا: إجازة علوم حاسوب أو رياضيات أو هندسة ← ماستر ذكاء اصطناعي'),
    note: t('Few bachelor programmes are called "AI": it is usually a master or a CS track.', 'قليلة هي الإجازات التي تحمل اسم «الذكاء الاصطناعي»: غالبًا هو ماستر أو مسار ضمن علوم الحاسوب.')
  }
]);
})();
