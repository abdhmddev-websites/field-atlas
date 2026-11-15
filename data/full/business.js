/* Full content: Business & economics */
(function () {
const { t, L, fill } = window.ATLAS;
const bba = { deg: 'BBA / BS', years: '3', lmd: 'Licence · 3' };

fill('business', {
  intro: t('Business and economics study how money, people and organizations work together: how a company is run, how markets set prices, how a country\'s economy grows or falls.',
           'تدرس إدارة الأعمال والاقتصاد كيف يعمل المال والناس والمؤسسات معًا: كيف تُدار الشركة، وكيف تحدّد الأسواق الأسعار، وكيف ينمو اقتصاد البلد أو يتراجع.'),
  ladderNote: t('A 3-year bachelor (BBA, BS or Licence). Many graduates work first and do an MBA later — good MBAs usually ask for 2–3 years of experience. Professional certificates (CPA/LACPA for accountants, CFA for finance) can matter as much as a master.',
                'إجازة مدّتها ٣ سنوات (BBA أو BS أو إجازة). كثير من الخرّيجين يعملون أولًا ثم يدرسون ماجستير إدارة الأعمال (MBA) لاحقًا — وبرامج الـ MBA الجيدة تطلب عادةً خبرة ٢–٣ سنوات. والشهادات المهنية (CPA أو نقابة خبراء المحاسبة للمحاسبين، CFA للمالية) قد تكون بأهمية الماستر.')
}, [
  {
    id: 'management', name: t('Business management', 'إدارة الأعمال'),
    one: t('How organizations are planned, led and grown.', 'كيف تُخطَّط المؤسسات وتُقاد وتنمو.'),
    think: t('"What is the goal, who does what, and how do we get there?" You like leading, organizing and making decisions.', '«ما الهدف، ومن يفعل ماذا، وكيف نصل؟» تحب القيادة والتنظيم واتخاذ القرار.'),
    school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد', 'Languages|اللغات'),
    study: L('Principles of management|مبادئ الإدارة', 'Accounting & finance basics|أساسيات المحاسبة والمالية', 'Marketing|التسويق', 'Human resources|الموارد البشرية', 'Operations & supply chain|العمليات وسلاسل الإمداد', 'Business strategy|استراتيجية الأعمال'),
    riasec: 'ES', bachelor: bba,
    masters: L('MBA|ماجستير إدارة الأعمال', 'Human resource management|إدارة الموارد البشرية', 'Supply chain management|إدارة سلاسل الإمداد', 'International business|الأعمال الدولية', 'Project management|إدارة المشاريع'),
    phd: L('Leadership|القيادة', 'Organizational behavior|السلوك التنظيمي', 'Family businesses|الشركات العائلية', 'Strategy|الاستراتيجية'),
    scopus: '1400 Business, Management and Accounting',
    careers: L('Manager / team leader|مدير / قائد فريق', 'HR specialist|أخصائي موارد بشرية', 'Operations manager|مدير عمليات', 'Consultant|مستشار', 'Business owner|صاحب عمل'),
    routes: L('Work 2–3 years → MBA|العمل ٢–٣ سنوات ← ماجستير إدارة أعمال')
  },
  {
    id: 'accounting', name: t('Accounting', 'المحاسبة'),
    one: t('The language of business: recording, checking and reporting money.', 'لغة الأعمال: تسجيل المال وتدقيقه وإعداد التقارير عنه.'),
    think: t('"Do the numbers add up, and are they honest?" You are organized, careful and trustworthy.', '«هل الأرقام متطابقة، وهل هي صادقة؟» أنت منظّم ودقيق وجدير بالثقة.'),
    school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد'),
    study: L('Financial accounting|المحاسبة المالية', 'Cost & managerial accounting|محاسبة التكاليف والمحاسبة الإدارية', 'Auditing|التدقيق', 'Taxation|الضرائب', 'Accounting information systems|نظم المعلومات المحاسبية'),
    riasec: 'CE', bachelor: bba,
    masters: L('Accounting & auditing|المحاسبة والتدقيق', 'Forensic accounting|المحاسبة الجنائية', 'Taxation|الضرائب', 'Finance|المالية'),
    phd: L('Financial reporting quality|جودة التقارير المالية', 'Auditing & fraud|التدقيق والاحتيال', 'Sustainability reporting|تقارير الاستدامة'),
    scopus: '1402 Accounting',
    careers: L('Accountant|محاسب', 'Auditor (audit firms)|مدقّق حسابات (شركات التدقيق)', 'Tax consultant|مستشار ضرائب', 'Chief financial officer (later)|مدير مالي (لاحقًا)'),
    routes: L('Professional certificates: LACPA (Lebanon), CPA, ACCA|الشهادات المهنية: نقابة خبراء المحاسبة المجازين في لبنان، CPA، ACCA')
  },
  {
    id: 'finance', name: t('Finance & banking', 'المالية والمصارف'),
    one: t('How money is invested, borrowed, managed and protected from risk.', 'كيف يُستثمر المال ويُقترض ويُدار ويُحمى من المخاطر.'),
    think: t('"What is the risk, and is the return worth it?" You like numbers, markets and quick decisions.', '«ما المخاطرة، وهل يستحق العائد ذلك؟» تحب الأرقام والأسواق والقرارات السريعة.'),
    school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Economics|الاقتصاد'),
    study: L('Corporate finance|التمويل المؤسسي', 'Investments|الاستثمار', 'Financial markets|الأسواق المالية', 'Banking|العمل المصرفي', 'Risk management|إدارة المخاطر', 'Financial modelling (Excel)|النمذجة المالية'),
    riasec: 'EC', bachelor: bba,
    masters: L('Finance|المالية', 'Banking|العمل المصرفي', 'Financial engineering|الهندسة المالية', 'Fintech|التكنولوجيا المالية', 'Islamic finance|التمويل الإسلامي'),
    phd: L('Asset pricing|تسعير الأصول', 'Banking crises|الأزمات المصرفية', 'Fintech & crypto|التكنولوجيا المالية والعملات الرقمية', 'Behavioral finance|التمويل السلوكي'),
    scopus: '2003 Finance',
    careers: L('Bank officer|موظف مصرفي', 'Financial analyst|محلّل مالي', 'Investment & wealth manager|مدير استثمار وثروات', 'Risk analyst|محلّل مخاطر', 'Insurance|التأمين'),
    routes: L('CFA certificate|شهادة CFA', 'Master in data science → fintech|ماستر في علم البيانات ← التكنولوجيا المالية')
  },
  {
    id: 'marketing', name: t('Marketing', 'التسويق'),
    one: t('Understanding customers and making them want a product or idea.', 'فهم الزبائن وجعلهم يرغبون في منتج أو فكرة.'),
    think: t('"Who is this for, what do they want, and how do we reach them?" You are creative, social and curious about people.', '«لمن هذا، ماذا يريدون، وكيف نصل إليهم؟» أنت مبدع واجتماعي وفضولي تجاه الناس.'),
    school: L('Languages|اللغات', 'Economics|الاقتصاد', 'Art|الفنون'),
    study: L('Consumer behavior|سلوك المستهلك', 'Market research|أبحاث السوق', 'Branding|بناء العلامة التجارية', 'Digital & social-media marketing|التسويق الرقمي وعبر وسائل التواصل', 'Sales|المبيعات'),
    riasec: 'EA', bachelor: bba,
    masters: L('Digital marketing|التسويق الرقمي', 'Brand management|إدارة العلامات التجارية', 'Marketing analytics|تحليلات التسويق', 'MBA|ماجستير إدارة الأعمال'),
    phd: L('Consumer psychology|علم نفس المستهلك', 'Social media influence|تأثير وسائل التواصل', 'Ethical marketing|التسويق الأخلاقي'),
    scopus: '1406 Marketing',
    careers: L('Marketing specialist|أخصائي تسويق', 'Social-media manager|مدير وسائل التواصل', 'Brand manager|مدير علامة تجارية', 'Market researcher|باحث سوق', 'Sales manager|مدير مبيعات'),
    routes: L('Master in media & communication|ماستر في الإعلام والاتصال', 'Start an online business|تأسيس عمل تجاري إلكتروني')
  },
  {
    id: 'economics', name: t('Economics', 'الاقتصاد'),
    one: t('How people, companies and countries use limited resources — prices, jobs, inflation, growth.', 'كيف يستخدم الأفراد والشركات والدول الموارد المحدودة — الأسعار والوظائف والتضخّم والنمو.'),
    think: t('"What happens if we change this rule — who wins and who loses?" You like big questions, graphs and models.', '«ماذا يحدث إذا غيّرنا هذه القاعدة — من يربح ومن يخسر؟» تحب الأسئلة الكبيرة والرسوم البيانية والنماذج.'),
    school: L('Mathematics (strong)|الرياضيات (مستوى قوي)', 'Economics|الاقتصاد', 'History|التاريخ'),
    study: L('Microeconomics|الاقتصاد الجزئي', 'Macroeconomics|الاقتصاد الكلي', 'Econometrics|الاقتصاد القياسي', 'Money & banking|النقود والمصارف', 'Development economics|اقتصاد التنمية'),
    riasec: 'IE', bachelor: { deg: 'BA / BS', years: '3', lmd: 'Licence · 3' },
    masters: L('Economics|الاقتصاد', 'Financial economics|الاقتصاد المالي', 'Development economics|اقتصاد التنمية', 'Public policy|السياسات العامة', 'Data & econometrics|البيانات والاقتصاد القياسي'),
    phd: L('Inflation & monetary policy|التضخّم والسياسة النقدية', 'Labor & migration|العمل والهجرة', 'Energy economics|اقتصاد الطاقة', 'Poverty & inequality|الفقر واللامساواة'),
    scopus: '2000 Economics, Econometrics and Finance',
    careers: L('Economist (central bank, ministries)|اقتصادي (المصرف المركزي والوزارات)', 'World Bank / UN|البنك الدولي والأمم المتحدة', 'Economic researcher|باحث اقتصادي', 'Banks & consulting|المصارف والاستشارات', 'Economics teacher|أستاذ اقتصاد'),
    routes: L('Master in public policy|ماستر في السياسات العامة', 'Master in data science|ماستر في علم البيانات')
  },
  {
    id: 'business-analytics', name: t('Business analytics & MIS', 'تحليلات الأعمال ونظم المعلومات الإدارية'),
    one: t('Using data and information systems to make better business decisions.', 'استخدام البيانات ونظم المعلومات لاتخاذ قرارات أعمال أفضل.'),
    think: t('"What do the numbers say we should do next?" You like Excel, dashboards and practical decisions.', '«ماذا تقول الأرقام عن خطوتنا التالية؟» تحب Excel ولوحات المؤشرات والقرارات العملية.'),
    school: L('Mathematics|الرياضيات', 'Economics|الاقتصاد', 'Computer basics|أساسيات الحاسوب'),
    study: L('Business statistics|إحصاء الأعمال', 'Databases & SQL|قواعد البيانات وSQL', 'Data visualization (Power BI, Tableau)|عرض البيانات (Power BI وTableau)', 'ERP systems|أنظمة ERP', 'Forecasting|التنبؤ'),
    riasec: 'CE', bachelor: bba,
    masters: L('Business analytics|تحليلات الأعمال', 'Information systems|نظم المعلومات', 'Data science|علم البيانات', 'MBA|ماجستير إدارة الأعمال'),
    phd: L('Decision support systems|أنظمة دعم القرار', 'Analytics & strategy|التحليلات والاستراتيجية'),
    scopus: '1404 Management Information Systems',
    careers: L('Business / data analyst|محلّل أعمال وبيانات', 'BI developer|مطوّر ذكاء الأعمال', 'ERP consultant|استشاري ERP', 'Operations analyst|محلّل عمليات')
    , routes: L('Master in data science|ماستر في علم البيانات')
  },
  {
    id: 'hospitality', name: t('Hospitality & tourism management', 'إدارة الفنادق والسياحة'),
    one: t('Running hotels, restaurants, travel and events so guests have a great experience.', 'إدارة الفنادق والمطاعم والسفر والفعاليات ليعيش الضيوف تجربة رائعة.'),
    think: t('"How do I make every guest feel welcome — even when things go wrong?" You are social, energetic and service-minded.', '«كيف أجعل كل ضيف يشعر بالترحيب — حتى عندما تسوء الأمور؟» أنت اجتماعي ونشيط وتحب الخدمة.'),
    school: L('Languages|اللغات', 'Geography|الجغرافيا', 'Economics|الاقتصاد'),
    study: L('Hotel operations|عمليات الفنادق', 'Food & beverage management|إدارة الأطعمة والمشروبات', 'Tourism & destinations|السياحة والوجهات', 'Event management|إدارة الفعاليات', 'Hospitality marketing|تسويق الضيافة', 'Internships in hotels|تدريب في الفنادق'),
    riasec: 'ES', bachelor: { deg: 'BS / BBA', years: '3', lmd: 'Licence / BT-TS route' },
    masters: L('Hospitality management|إدارة الضيافة', 'Tourism management|إدارة السياحة', 'Event management|إدارة الفعاليات', 'Culinary management|إدارة فنون الطهي'),
    phd: L('Sustainable tourism|السياحة المستدامة', 'Heritage tourism|السياحة التراثية', 'Guest experience|تجربة الضيف'),
    scopus: '1409 Tourism, Leisure and Hospitality Management',
    careers: L('Hotel manager|مدير فندق', 'Restaurant manager|مدير مطعم', 'Event planner|منظّم فعاليات', 'Travel agency|وكالة سفر', 'Airline & cruise services|خدمات الطيران والرحلات البحرية'),
    routes: L('Technical route: BT / TS in hotel management|المسار المهني: BT / TS في الإدارة الفندقية', 'Work in the Gulf & Europe hospitality sector|العمل في قطاع الضيافة في الخليج وأوروبا')
  },
  {
    id: 'entrepreneurship', name: t('Entrepreneurship', 'ريادة الأعمال'),
    one: t('Turning an idea into a real company — and surviving the first years.', 'تحويل فكرة إلى شركة حقيقية — والصمود في السنوات الأولى.'),
    think: t('"What problem can I solve that people will pay for?" You take initiative, accept failure and try again.', '«ما المشكلة التي أستطيع حلّها ويدفع الناس مقابلها؟» تبادر وتتقبّل الفشل وتحاول من جديد.'),
    school: L('Economics|الاقتصاد', 'Mathematics|الرياضيات', 'Languages|اللغات'),
    study: L('Business model design|تصميم نموذج العمل', 'Innovation|الابتكار', 'Startup finance|تمويل الشركات الناشئة', 'Marketing|التسويق', 'Pitching to investors|العرض على المستثمرين'),
    riasec: 'EA', bachelor: bba,
    masters: L('Entrepreneurship & innovation|ريادة الأعمال والابتكار', 'MBA|ماجستير إدارة الأعمال', 'Social entrepreneurship|ريادة الأعمال الاجتماعية'),
    phd: L('Startup ecosystems|بيئات الشركات الناشئة', 'Social innovation|الابتكار الاجتماعي'),
    scopus: '1403 Business and International Management',
    careers: L('Startup founder|مؤسّس شركة ناشئة', 'Family business leader|قائد شركة عائلية', 'Innovation manager|مدير ابتكار', 'Startup accelerator staff|العمل في مسرّعات الشركات الناشئة'),
    routes: L('Any major + a startup idea (many founders are engineers or programmers)|أيّ اختصاص + فكرة شركة (كثير من المؤسّسين مهندسون أو مبرمجون)'),
    note: t('Often a track inside business management.', 'غالبًا مسار ضمن إدارة الأعمال.')
  }
]);
})();
