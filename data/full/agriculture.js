/* Full content: Agriculture, food & veterinary */
(function () {
const { t, L, fill } = window.ATLAS;
const bs = { deg: 'BS', years: '3–4', lmd: 'Licence · 3 / Ingénieur agronome · 5' };

fill('agriculture', {
  intro: t('This faculty feeds the world: growing crops, raising animals, keeping them healthy, making food safe, and running farms as businesses — with more and more technology.',
           'هذه الكلية تُطعم العالم: زراعة المحاصيل وتربية الحيوانات والحفاظ على صحتها وضمان سلامة الغذاء وإدارة المزارع كمشاريع — مع تكنولوجيا تزداد يومًا بعد يوم.'),
  ladderNote: t('Two models: a 3–4 year BS (e.g. AUB Faculty of Agricultural and Food Sciences) or the 5-year agricultural engineer diploma (Lebanese University Faculty of Agronomy, USJ). Veterinary medicine is a 5-year professional diploma, taught in Lebanon only at the Lebanese University Faculty of Agronomy (since 2006); some students also study it abroad.',
                'نموذجان: إجازة BS مدّتها ٣–٤ سنوات (مثل كلية العلوم الزراعية والغذائية في AUB) أو دبلوم المهندس الزراعي لمدة ٥ سنوات (كلية الزراعة في الجامعة اللبنانية وUSJ). أمّا الطب البيطري فدبلوم مهني لخمس سنوات، يُدرَّس في لبنان فقط في كلية الزراعة في الجامعة اللبنانية (منذ 2006)؛ ويدرسه بعض الطلاب في الخارج.')
}, [
  {
    id: 'agronomy', name: t('Agronomy & plant production', 'الهندسة الزراعية والإنتاج النباتي'),
    one: t('Growing crops better: soil, water, seeds, pests and harvests.', 'زراعة المحاصيل بشكل أفضل: التربة والمياه والبذور والآفات والحصاد.'),
    think: t('"How do we grow more food with less water and fewer chemicals?" You like nature, science and practical results.', '«كيف ننتج غذاءً أكثر بمياه أقل ومواد كيميائية أقل؟» تحب الطبيعة والعلم والنتائج العملية.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'),
    study: L('Soil science|علم التربة', 'Crop production|إنتاج المحاصيل', 'Plant protection (pests, diseases)|وقاية النبات (الآفات والأمراض)', 'Irrigation|الري', 'Greenhouses|الزراعة المحمية (البيوت البلاستيكية)'),
    riasec: 'RI', bachelor: bs,
    masters: L('Crop science|علم المحاصيل', 'Plant protection|وقاية النبات', 'Water & irrigation management|إدارة المياه والري', 'Sustainable agriculture|الزراعة المستدامة'),
    phd: L('Drought-resistant crops|المحاصيل المقاومة للجفاف', 'Precision agriculture|الزراعة الدقيقة', 'Biological pest control|المكافحة الحيوية للآفات'),
    scopus: '1102 Agronomy and Crop Science',
    careers: L('Agricultural engineer|مهندس زراعي', 'Farm manager|مدير مزرعة', 'Ministry of Agriculture|وزارة الزراعة', 'Seed & fertilizer companies|شركات البذور والأسمدة', 'FAO & NGOs|منظمة الأغذية والزراعة والمنظمات'),
    routes: L('Master in environmental science|ماستر في علوم البيئة', 'Agri-tech start-ups|شركات التكنولوجيا الزراعية الناشئة')
  },
  {
    id: 'animal-production', name: t('Animal production', 'الإنتاج الحيواني'),
    one: t('Raising livestock and poultry for food, healthily and efficiently.', 'تربية الماشية والدواجن للغذاء بطريقة صحية وفعّالة.'),
    think: t('"How do we keep these animals healthy and productive?" You are practical and comfortable with animals.', '«كيف نحافظ على صحة هذه الحيوانات وإنتاجيتها؟» أنت عملي ومرتاح مع الحيوانات.'),
    school: L('Biology|علوم الحياة', 'Chemistry|الكيمياء'),
    study: L('Animal nutrition|تغذية الحيوان', 'Animal breeding & genetics|تربية الحيوان ووراثته', 'Dairy & poultry production|إنتاج الألبان والدواجن', 'Animal health & welfare|صحة الحيوان ورفاهيته', 'Farm management|إدارة المزارع'),
    riasec: 'RI', bachelor: bs,
    masters: L('Animal nutrition|تغذية الحيوان', 'Animal breeding|تربية الحيوان', 'Dairy science|علوم الألبان', 'Aquaculture|الاستزراع المائي'),
    phd: L('Feed efficiency|كفاءة الأعلاف', 'Animal welfare|رفاهية الحيوان', 'Climate & livestock|المناخ والثروة الحيوانية'),
    scopus: '1103 Animal Science and Zoology',
    careers: L('Farm & dairy manager|مدير مزرعة ومعمل ألبان', 'Animal feed companies|شركات الأعلاف', 'Poultry industry|صناعة الدواجن', 'Agricultural extension officer|مرشد زراعي'),
    routes: L('Master in food science|ماستر في علوم الأغذية')
  },
  {
    id: 'veterinary', name: t('Veterinary medicine', 'الطب البيطري'),
    one: t('Medicine for animals — pets, farm animals and wildlife — and protecting people from animal diseases.', 'الطب للحيوانات — الأليفة وحيوانات المزارع والبرية — وحماية الإنسان من الأمراض المنقولة من الحيوان.'),
    think: t('"What is wrong with this animal that cannot tell me?" You love animals and science, and stay calm with them.', '«ما الذي يؤلم هذا الحيوان الذي لا يستطيع إخباري؟» تحب الحيوانات والعلم وتبقى هادئًا معها.'),
    school: L('Biology (strong)|علوم الحياة (مستوى قوي)', 'Chemistry (strong)|الكيمياء (مستوى قوي)'),
    study: L('Animal anatomy & physiology|تشريح الحيوان ووظائف أعضائه', 'Veterinary pharmacology|علم الأدوية البيطرية', 'Animal surgery|الجراحة البيطرية', 'Infectious diseases|الأمراض المعدية', 'Food safety & public health|سلامة الغذاء والصحة العامة', 'Clinical training|التدريب السريري'),
    riasec: 'IR',
    bachelor: { deg: 'DVM', years: '5', lmd: 'Diplôme · 5' },
    stages: { bachelor: { name: t('Veterinary degree (DVM)', 'شهادة الطب البيطري (DVM)'), txt: t('5 years at the Lebanese University Faculty of Agronomy (the only programme in Lebanon), or abroad. There is no qualifying exam: graduates register with the Lebanese Veterinary Association.', '٥ سنوات في كلية الزراعة في الجامعة اللبنانية (البرنامج الوحيد في لبنان)، أو في الخارج. لا يوجد امتحان تأهيل: يسجّل الخرّيجون في جمعية الأطباء البيطريين اللبنانية.') }, master: { name: t('Specialty / master', 'الاختصاص / الماستر') } },
    masters: L('Small animal medicine|طب الحيوانات الأليفة', 'Farm animal medicine|طب حيوانات المزارع', 'Veterinary public health|الصحة العامة البيطرية', 'Animal surgery|الجراحة البيطرية'),
    phd: L('Zoonotic diseases (One Health)|الأمراض المشتركة (الصحة الواحدة)', 'Animal vaccines|اللقاحات الحيوانية', 'Wildlife health|صحة الحياة البرية'),
    scopus: '3400 Veterinary',
    careers: L('Pet clinic vet|طبيب بيطري في عيادة', 'Farm & poultry vet|طبيب بيطري للمزارع والدواجن', 'Food safety inspector|مفتّش سلامة غذاء', 'Ministry of Agriculture|وزارة الزراعة', 'Pharma (animal health)|شركات أدوية الحيوان')
    , routes: L('Master in public health (One Health)|ماستر في الصحة العامة (الصحة الواحدة)')
  },
  {
    id: 'food-science', name: t('Food science & technology', 'علوم وتكنولوجيا الأغذية'),
    one: t('Making food safe, nutritious and tasty — from the farm to the factory to your plate.', 'جعل الغذاء آمنًا ومغذّيًا ولذيذًا — من المزرعة إلى المصنع إلى طبقك.'),
    think: t('"Is this food safe, and how can we make it better and last longer?" You like chemistry, biology and cooking.', '«هل هذا الغذاء آمن، وكيف نجعله أفضل ويدوم أطول؟» تحب الكيمياء والبيولوجيا والطبخ.'),
    school: L('Chemistry|الكيمياء', 'Biology|علوم الحياة'),
    study: L('Food chemistry|كيمياء الأغذية', 'Food microbiology|الأحياء الدقيقة للأغذية', 'Food processing|تصنيع الأغذية', 'Quality & safety (HACCP, ISO)|الجودة والسلامة', 'Product development|تطوير المنتجات'),
    riasec: 'IR', bachelor: { deg: 'BS', years: '3–4', lmd: 'Licence · 3' },
    masters: L('Food safety & quality|سلامة الغذاء وجودته', 'Food technology|تكنولوجيا الأغذية', 'Nutrition|التغذية', 'Food business|أعمال الأغذية'),
    phd: L('Functional foods|الأغذية الوظيفية', 'Food packaging|تغليف الأغذية', 'Food waste reduction|تقليل هدر الغذاء'),
    scopus: '1106 Food Science',
    careers: L('Quality manager (food factories)|مدير جودة (مصانع الأغذية)', 'Product developer|مطوّر منتجات', 'Food safety inspector|مفتّش سلامة غذاء', 'Lab analyst|محلّل مختبر', 'Restaurant & catering quality|جودة المطاعم والتموين'),
    routes: L('Master in nutrition|ماستر في التغذية', 'Master in chemical engineering|ماستر في الهندسة الكيميائية')
  },
  {
    id: 'agricultural-engineering', name: t('Agricultural engineering', 'الهندسة الزراعية الآلية'),
    one: t('Engineering for farms: machines, irrigation systems, greenhouses and sensors.', 'الهندسة في خدمة المزارع: الآلات وأنظمة الري والبيوت المحمية والمستشعرات.'),
    think: t('"Which machine or system will make this farm work smarter?" You like engineering and the outdoors.', '«أيّ آلة أو نظام سيجعل هذه المزرعة تعمل بذكاء أكبر؟» تحب الهندسة والطبيعة.'),
    school: L('Mathematics|الرياضيات', 'Physics|الفيزياء', 'Biology|علوم الحياة'),
    study: L('Farm machinery|الآلات الزراعية', 'Irrigation engineering|هندسة الري', 'Greenhouse systems|أنظمة البيوت المحمية', 'Sensors & drones in agriculture|المستشعرات والمسيّرات في الزراعة', 'Renewable energy on farms|الطاقة المتجددة في المزارع'),
    riasec: 'RI', bachelor: bs,
    masters: L('Precision agriculture|الزراعة الدقيقة', 'Water engineering|هندسة المياه', 'Agricultural automation|الأتمتة الزراعية'),
    phd: L('Smart irrigation|الري الذكي', 'Agri-robotics|الروبوتات الزراعية', 'Solar-powered farming|الزراعة بالطاقة الشمسية'),
    scopus: '1102 Agronomy and Crop Science · 2305 Environmental Engineering',
    careers: L('Irrigation engineer|مهندس ري', 'Agri-tech companies|شركات التكنولوجيا الزراعية', 'Farm equipment companies|شركات المعدّات الزراعية', 'Development projects (FAO, NGOs)|مشاريع التنمية (الفاو والمنظمات)')
    , routes: L('Master in mechatronics or environmental engineering|ماستر في الميكاترونيكس أو الهندسة البيئية')
  },
  {
    id: 'agribusiness', name: t('Agribusiness', 'إدارة الأعمال الزراعية'),
    one: t('The business side of food: markets, prices, exports and farm management.', 'الجانب التجاري للغذاء: الأسواق والأسعار والتصدير وإدارة المزارع.'),
    think: t('"How does this product get from the farmer to the buyer — and who earns what?" You like both farming and business.', '«كيف يصل هذا المنتج من المزارع إلى المشتري — ومن يربح ماذا؟» تحب الزراعة والأعمال معًا.'),
    school: L('Economics|الاقتصاد', 'Mathematics|الرياضيات', 'Biology|علوم الحياة'),
    study: L('Agricultural economics|الاقتصاد الزراعي', 'Food marketing|تسويق الأغذية', 'Supply chains & exports|سلاسل الإمداد والتصدير', 'Farm management|إدارة المزارع', 'Rural development|التنمية الريفية'),
    riasec: 'EC', bachelor: bs,
    masters: L('Agricultural economics|الاقتصاد الزراعي', 'Food supply chain|سلاسل إمداد الغذاء', 'Rural development|التنمية الريفية', 'MBA|ماجستير إدارة الأعمال'),
    phd: L('Food security|الأمن الغذائي', 'Agricultural policy|السياسات الزراعية', 'Cooperatives|التعاونيات'),
    scopus: '1100 Agricultural and Biological Sciences · 2002 Economics and Econometrics',
    careers: L('Agri-food company manager|مدير شركة أغذية زراعية', 'Export & trade specialist|أخصائي تصدير وتجارة', 'Rural development officer|مسؤول تنمية ريفية', 'Cooperative manager|مدير تعاونية')
    , routes: L('MBA → food industry leadership|ماجستير إدارة أعمال ← قيادة صناعة الغذاء')
  }
]);
})();
