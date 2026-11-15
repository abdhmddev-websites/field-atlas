/* Full content: Media & communication */
(function () {
const { t, L, fill } = window.ATLAS;
const ba3 = { deg: 'BA', years: '3', lmd: 'Licence · 3' };

fill('media', {
  intro: t('Media and communication is about telling true and powerful stories — in newspapers, radio, TV, social media and campaigns — and understanding how media shapes society.',
           'الإعلام والاتصال هو فنّ رواية قصص صادقة ومؤثّرة — في الصحف والإذاعة والتلفزيون ووسائل التواصل والحملات — وفهم كيف يشكّل الإعلام المجتمع.'),
  ladderNote: t('A 3-year BA/Licence (the Lebanese University\'s Faculty of Information, and media departments in private universities). Your portfolio — articles, videos, campaigns, internships — matters as much as the degree. A master helps with specialization and teaching.',
                'إجازة مدّتها ٣ سنوات (كلية الإعلام في الجامعة اللبنانية وأقسام الإعلام في الجامعات الخاصة). ملفّ أعمالك — المقالات والفيديوهات والحملات والتدريب — مهم بقدر الشهادة. والماستر يساعد على التخصّص والتعليم.')
}, [
  {
    id: 'journalism', name: t('Journalism', 'الصحافة'),
    one: t('Finding, checking and reporting the news.', 'البحث عن الأخبار والتحقّق منها ونقلها.'),
    think: t('"Is this true, who says so, and why does it matter to people?" You are curious, brave and stubborn about facts.', '«هل هذا صحيح، ومن يقوله، ولماذا يهمّ الناس؟» أنت فضولي وجريء ومتمسّك بالحقائق.'),
    school: L('Arabic (strong)|العربية (مستوى قوي)', 'Foreign languages|اللغات الأجنبية', 'History & civics|التاريخ والتربية المدنية'),
    study: L('News writing & reporting|كتابة الأخبار والتقارير', 'Investigative journalism|الصحافة الاستقصائية', 'Fact-checking|التحقّق من الأخبار', 'Media law & ethics|قانون الإعلام وأخلاقياته', 'Data journalism|صحافة البيانات'),
    riasec: 'AI', bachelor: ba3,
    masters: L('Investigative journalism|الصحافة الاستقصائية', 'Data journalism|صحافة البيانات', 'International reporting|التغطية الدولية', 'Media studies|الدراسات الإعلامية'),
    phd: L('Disinformation|التضليل الإعلامي', 'Media & conflict|الإعلام والنزاعات', 'Press freedom|حرية الصحافة'),
    scopus: '3315 Communication',
    careers: L('Reporter|مراسل', 'Editor|محرّر', 'Fact-checker|مدقّق أخبار', 'Investigative journalist|صحافي استقصائي', 'Foreign correspondent|مراسل أجنبي'),
    routes: L('Master in political science|ماستر في العلوم السياسية')
  },
  {
    id: 'radio-tv', name: t('Radio & television', 'الإذاعة والتلفزيون'),
    one: t('Producing and presenting audio and video programs.', 'إنتاج البرامج الصوتية والمرئية وتقديمها.'),
    think: t('"How do I keep the audience with me for the next minute?" You are comfortable with a microphone or camera.', '«كيف أُبقي الجمهور معي الدقيقة التالية؟» أنت مرتاح أمام الميكروفون أو الكاميرا.'),
    school: L('Arabic|العربية', 'Languages|اللغات', 'Art|الفنون'),
    study: L('TV & radio production|الإنتاج الإذاعي والتلفزيوني', 'Presenting & voice|التقديم والصوت', 'Camera & editing|التصوير والمونتاج', 'Scriptwriting|كتابة النصوص', 'Podcasting|البودكاست'),
    riasec: 'AE', bachelor: ba3,
    masters: L('Broadcast journalism|الصحافة المرئية والمسموعة', 'Documentary production|إنتاج الوثائقيات', 'Media management|إدارة المؤسسات الإعلامية'),
    phd: L('Audiences & streaming|الجمهور والمنصّات', 'Media history|تاريخ الإعلام'),
    scopus: '3315 Communication',
    careers: L('TV / radio presenter|مقدّم تلفزيوني / إذاعي', 'Producer|منتج', 'Director & editor|مخرج ومونتير', 'Podcaster|صانع بودكاست')
    , routes: L('Master in film|ماستر في السينما')
  },
  {
    id: 'pr-advertising', name: t('Public relations & advertising', 'العلاقات العامة والإعلان'),
    one: t('Building the image of brands and organizations and running campaigns.', 'بناء صورة العلامات التجارية والمؤسسات وإدارة الحملات.'),
    think: t('"What should people feel about this brand, and how do we get them there?" You are creative and persuasive.', '«ماذا يجب أن يشعر الناس تجاه هذه العلامة، وكيف نوصلهم إلى ذلك؟» أنت مبدع ومقنع.'),
    school: L('Languages|اللغات', 'Art|الفنون', 'Economics|الاقتصاد'),
    study: L('Public relations|العلاقات العامة', 'Advertising & copywriting|الإعلان وكتابة النصوص الإعلانية', 'Campaign planning|تخطيط الحملات', 'Crisis communication|الاتصال في الأزمات', 'Social media strategy|استراتيجية وسائل التواصل'),
    riasec: 'EA', bachelor: ba3,
    masters: L('Strategic communication|الاتصال الاستراتيجي', 'Advertising|الإعلان', 'Digital marketing|التسويق الرقمي', 'Corporate communication|اتصال المؤسسات'),
    phd: L('Persuasion|الإقناع', 'Brand trust|الثقة بالعلامات التجارية', 'Political campaigns|الحملات السياسية'),
    scopus: '3315 Communication · 1406 Marketing',
    careers: L('PR officer|مسؤول علاقات عامة', 'Copywriter|كاتب إعلانات', 'Account manager (agencies)|مدير حسابات (وكالات)', 'Communications manager (NGOs, companies)|مدير اتصال (منظمات وشركات)'),
    routes: L('Master in marketing|ماستر في التسويق')
  },
  {
    id: 'digital-media', name: t('Digital media', 'الإعلام الرقمي'),
    one: t('Creating content for the internet: social media, video, web and interactive stories.', 'صناعة المحتوى للإنترنت: وسائل التواصل والفيديو والمواقع والقصص التفاعلية.'),
    think: t('"What will make people stop scrolling — and is it worth their time?" You live online but think critically about it.', '«ما الذي سيجعل الناس يتوقّفون عن التمرير — وهل يستحق وقتهم؟» تعيش على الإنترنت لكنك تفكّر فيه بنقد.'),
    school: L('Languages|اللغات', 'Art|الفنون', 'Computer basics|أساسيات الحاسوب'),
    study: L('Content creation|صناعة المحتوى', 'Video & mobile journalism|الفيديو وصحافة الهاتف', 'Web & social analytics|تحليلات المواقع ووسائل التواصل', 'Interactive storytelling|السرد التفاعلي', 'Digital ethics|الأخلاقيات الرقمية'),
    riasec: 'AE', bachelor: ba3,
    masters: L('Digital media|الإعلام الرقمي', 'Social media management|إدارة وسائل التواصل', 'UX & interactive media|تجربة المستخدم والإعلام التفاعلي', 'Media & AI|الإعلام والذكاء الاصطناعي'),
    phd: L('Algorithms & news|الخوارزميات والأخبار', 'Youth & social media|الشباب ووسائل التواصل', 'Online communities|المجتمعات الرقمية'),
    scopus: '3315 Communication',
    careers: L('Content creator|صانع محتوى', 'Social media manager|مدير وسائل التواصل', 'Digital producer|منتج رقمي', 'Community manager|مدير مجتمع رقمي', 'Media analyst|محلّل إعلامي')
    , routes: L('Master in marketing or UX|ماستر في التسويق أو تجربة المستخدم')
  }
]);
})();
