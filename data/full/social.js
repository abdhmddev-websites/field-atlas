/* Full content: Social sciences & psychology */
(function () {
const { t, L, fill } = window.ATLAS;
const ba3 = { deg: 'BA', years: '3', lmd: 'Licence · 3' };

fill('social', {
  intro: t('The social sciences study people: how we think and feel (psychology), how we live together (sociology, anthropology), and how we help those who struggle (social work).',
           'تدرس العلوم الاجتماعية الإنسان: كيف نفكّر ونشعر (علم النفس)، وكيف نعيش معًا (علم الاجتماع والأنثروبولوجيا)، وكيف نساعد من يواجهون الصعوبات (العمل الاجتماعي).'),
  ladderNote: t('A 3-year BA/Licence, then a master. For helping professions the master matters a lot: to work as a clinical psychologist you need a clinical master (and supervised practice); social workers need a licence in social work.',
                'إجازة مدّتها ٣ سنوات ثم ماستر. في مهن المساعدة يكون الماستر مهمًا جدًا: لتعمل معالجًا نفسيًا تحتاج إلى ماستر في علم النفس العيادي (مع تدريب تحت الإشراف)؛ والعاملون الاجتماعيون يحتاجون إلى إجازة في العمل الاجتماعي.')
}, [
  {
    id: 'psychology', name: t('Psychology', 'علم النفس'),
    one: t('The science of the mind and behavior: thinking, emotions, development and mental health.', 'علم العقل والسلوك: التفكير والمشاعر والنموّ والصحة النفسية.'),
    think: t('"Why does this person think, feel and act this way?" You listen deeply and also respect data and research.', '«لماذا يفكّر هذا الشخص ويشعر ويتصرّف بهذه الطريقة؟» تصغي بعمق وتحترم أيضًا البيانات والبحث العلمي.'),
    school: L('Biology|علوم الحياة', 'Philosophy|الفلسفة', 'Mathematics (statistics)|الرياضيات (الإحصاء)'),
    study: L('Developmental psychology|علم نفس النموّ', 'Cognitive psychology|علم النفس المعرفي', 'Social psychology|علم النفس الاجتماعي', 'Psychopathology|علم النفس المرضي', 'Statistics & research methods|الإحصاء ومناهج البحث', 'Psychological testing|الاختبارات النفسية'),
    riasec: 'SI', bachelor: ba3,
    masters: L('Clinical psychology|علم النفس العيادي', 'Educational & school psychology|علم النفس التربوي والمدرسي', 'Counseling|الإرشاد النفسي', 'Organizational (work) psychology|علم نفس العمل والمؤسسات', 'Neuropsychology|علم النفس العصبي'),
    phd: L('Trauma & resilience|الصدمة والمرونة النفسية', 'Child development|نموّ الطفل', 'Anxiety & depression|القلق والاكتئاب', 'Cognitive neuroscience|علم الأعصاب المعرفي'),
    scopus: '3200 Psychology',
    careers: L('Clinical psychologist (after clinical master)|معالج نفسي (بعد ماستر عيادي)', 'School counselor|مرشد مدرسي', 'HR & recruitment|الموارد البشرية والتوظيف', 'NGO psychosocial support|الدعم النفسي الاجتماعي في المنظمات', 'Researcher|باحث'),
    routes: L('Master in special education|ماستر في التربية المختصة', 'Master in human resources|ماستر في الموارد البشرية', 'Master in marketing (consumer psychology)|ماستر في التسويق (علم نفس المستهلك)'),
    note: t('A psychologist is not a psychiatrist: psychiatrists are medical doctors who can prescribe medicine.', 'المعالج النفسي ليس طبيبًا نفسيًا: الطبيب النفسي درس الطب ويستطيع وصف الأدوية.')
  },
  {
    id: 'sociology', name: t('Sociology', 'علم الاجتماع'),
    one: t('How societies work: families, classes, religion, migration and social change.', 'كيف تعمل المجتمعات: العائلة والطبقات والدين والهجرة والتغيّر الاجتماعي.'),
    think: t('"Is this a personal problem — or a pattern in society?" You notice inequality and ask how groups shape individuals.', '«هل هذه مشكلة شخصية — أم نمط في المجتمع؟» تلاحظ اللامساواة وتسأل كيف تشكّل الجماعات الأفراد.'),
    school: L('Sociology & economics|الاجتماع والاقتصاد', 'History|التاريخ', 'Languages|اللغات'),
    study: L('Sociological theory|النظريات الاجتماعية', 'Research methods & surveys|مناهج البحث والاستطلاعات', 'Family & gender|الأسرة والنوع الاجتماعي', 'Urban sociology|علم الاجتماع الحضري', 'Migration|الهجرة'),
    riasec: 'SI', bachelor: ba3,
    masters: L('Sociology|علم الاجتماع', 'Development studies|دراسات التنمية', 'Gender studies|دراسات النوع الاجتماعي', 'Migration & refugee studies|دراسات الهجرة واللجوء'),
    phd: L('Youth & unemployment|الشباب والبطالة', 'Social movements|الحركات الاجتماعية', 'Religion & society|الدين والمجتمع', 'Digital society|المجتمع الرقمي'),
    scopus: '3312 Sociology and Political Science',
    careers: L('Social researcher|باحث اجتماعي', 'NGO program officer|مسؤول برامج في منظمة', 'Survey & polling companies|شركات الاستطلاعات', 'Development consultant|استشاري تنمية', 'Teacher|أستاذ'),
    routes: L('Master in public health or policy|ماستر في الصحة العامة أو السياسات', 'Master in marketing research|ماستر في أبحاث السوق')
  },
  {
    id: 'anthropology', name: t('Anthropology', 'علم الإنسان (الأنثروبولوجيا)'),
    one: t('Understanding cultures from the inside, by living among people and observing.', 'فهم الثقافات من الداخل، بالعيش بين الناس وملاحظتهم.'),
    think: t('"What makes sense in this culture that seems strange from outside?" You are open-minded and love fieldwork.', '«ما الذي يبدو منطقيًا في هذه الثقافة ويبدو غريبًا من الخارج؟» أنت منفتح الذهن وتحب العمل الميداني.'),
    school: L('History|التاريخ', 'Sociology|علم الاجتماع', 'Languages|اللغات'),
    study: L('Cultural anthropology|الأنثروبولوجيا الثقافية', 'Ethnographic fieldwork|العمل الميداني الإثنوغرافي', 'Kinship & ritual|القرابة والطقوس', 'Anthropology of the Middle East|أنثروبولوجيا الشرق الأوسط', 'Visual anthropology|الأنثروبولوجيا البصرية'),
    riasec: 'IA', bachelor: ba3,
    masters: L('Social anthropology|الأنثروبولوجيا الاجتماعية', 'Medical anthropology|الأنثروبولوجيا الطبية', 'Development & humanitarian studies|دراسات التنمية والعمل الإنساني'),
    phd: L('Displacement & camps|النزوح والمخيّمات', 'Food & culture|الطعام والثقافة', 'Urban life|الحياة الحضرية'),
    scopus: '3314 Anthropology',
    careers: L('Researcher|باحث', 'NGO & UN field researcher|باحث ميداني في المنظمات والأمم المتحدة', 'User researcher (tech companies)|باحث تجربة المستخدم (شركات التكنولوجيا)', 'Museums & documentary|المتاحف والأفلام الوثائقية'),
    routes: L('UX research in tech|أبحاث تجربة المستخدم في التكنولوجيا'),
    note: t('Often studied together with sociology.', 'يُدرَس غالبًا مع علم الاجتماع.')
  },
  {
    id: 'social-work', name: t('Social work', 'العمل الاجتماعي'),
    one: t('Supporting children, families and communities through hard times and protecting the vulnerable.', 'دعم الأطفال والأسر والمجتمعات في الأوقات الصعبة وحماية الفئات الهشّة.'),
    think: t('"What does this family need, and which services can help them?" You are empathetic, practical and strong.', '«ماذا تحتاج هذه الأسرة، وأيّ الخدمات يمكن أن تساعدها؟» أنت متعاطف وعملي وقوي.'),
    school: L('Sociology|علم الاجتماع', 'Languages|اللغات', 'Civics|التربية المدنية'),
    study: L('Social work practice|ممارسة العمل الاجتماعي', 'Child protection|حماية الطفل', 'Case management|إدارة الحالات', 'Community development|تنمية المجتمع', 'Field placements|تدريب ميداني'),
    riasec: 'SE', bachelor: { deg: 'BSW / Licence', years: '3–4', lmd: 'Licence · 3–4' },
    masters: L('Clinical social work|العمل الاجتماعي العيادي', 'Child & family welfare|رعاية الطفل والأسرة', 'Community development|تنمية المجتمع', 'Humanitarian protection|الحماية الإنسانية'),
    phd: L('Child protection systems|أنظمة حماية الطفل', 'Gender-based violence|العنف القائم على النوع الاجتماعي', 'Aging & care|الشيخوخة والرعاية'),
    scopus: '3300 Social Sciences (social work)',
    careers: L('Social worker (hospitals, schools)|عامل اجتماعي (المستشفيات والمدارس)', 'Child protection officer|مسؤول حماية الطفل', 'NGO case manager|مدير حالات في منظمة', 'Ministry of Social Affairs|وزارة الشؤون الاجتماعية'),
    routes: L('Master in psychology or public health|ماستر في علم النفس أو الصحة العامة')
  },
  {
    id: 'library-science', name: t('Library & information science', 'علم المكتبات والمعلومات'),
    one: t('Organizing knowledge so people can find it: libraries, archives and digital collections.', 'تنظيم المعرفة ليجدها الناس: المكتبات والأرشيف والمجموعات الرقمية.'),
    think: t('"How do I organize this so anyone can find exactly what they need?" You love order, books and helping researchers.', '«كيف أنظّم هذا ليجد أيّ شخص ما يحتاجه بالضبط؟» تحب النظام والكتب ومساعدة الباحثين.'),
    school: L('Languages|اللغات', 'History|التاريخ', 'Computer basics|أساسيات الحاسوب'),
    study: L('Cataloging & classification|الفهرسة والتصنيف', 'Digital libraries|المكتبات الرقمية', 'Archives management|إدارة الأرشيف', 'Information retrieval|استرجاع المعلومات', 'Research support|دعم البحث العلمي'),
    riasec: 'CI', bachelor: ba3,
    masters: L('Information science|علم المعلومات', 'Archives & records management|إدارة الأرشيف والوثائق', 'Digital curation|الحفظ الرقمي', 'Knowledge management|إدارة المعرفة'),
    phd: L('Information behavior|سلوك البحث عن المعلومات', 'Digital preservation|الحفظ الرقمي', 'Open science|العلم المفتوح'),
    scopus: '3309 Library and Information Sciences',
    careers: L('Librarian (schools, universities)|أمين مكتبة (المدارس والجامعات)', 'Archivist|أمين أرشيف', 'Information manager|مدير معلومات', 'Digital content curator|منسّق محتوى رقمي')
    , routes: L('Master in data or information systems|ماستر في البيانات أو نظم المعلومات')
  }
]);
})();
