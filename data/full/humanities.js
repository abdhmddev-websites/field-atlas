/* Full content: Arts & humanities */
(function () {
const { t, L, fill } = window.ATLAS;
const ba3 = { deg: 'BA', years: '3', lmd: 'Licence · 3' };
const teach = t('Teaching diploma → school teacher', 'دبلوم تعليم ← أستاذ مدرسة');

fill('humanities', {
  intro: t('The humanities study what humans think, write and believe: languages and literature, history, philosophy, religions and the places people live. They train you to read deeply, write clearly and think critically — skills every job needs.',
           'تدرس العلوم الإنسانية ما يفكّر فيه البشر ويكتبونه ويؤمنون به: اللغات والآداب والتاريخ والفلسفة والأديان والأماكن التي يعيشون فيها. وهي تدرّبك على القراءة العميقة والكتابة الواضحة والتفكير النقدي — مهارات تحتاجها كل وظيفة.'),
  ladderNote: t('A 3-year Licence/BA (the Lebanese University\'s Faculty of Letters and Human Sciences, and most private universities). Many graduates add a teaching diploma; others go on to a master and PhD to teach at university, or move into media, translation, culture and NGOs.',
                'إجازة مدّتها ٣ سنوات (كلية الآداب والعلوم الإنسانية في الجامعة اللبنانية ومعظم الجامعات الخاصة). كثير من الخرّيجين يضيفون دبلوم تعليم؛ وآخرون يكملون الماستر والدكتوراه للتعليم الجامعي، أو ينتقلون إلى الإعلام والترجمة والثقافة والمنظمات.')
}, [
  {
    id: 'arabic', name: t('Arabic language & literature', 'اللغة العربية وآدابها'),
    one: t('The Arabic language, its grammar and its poetry and prose across 1,500 years.', 'اللغة العربية ونحوها وشعرها ونثرها عبر ١٥٠٠ سنة.'),
    think: t('"How is this text built, and why does it move us?" You love words, poetry and the beauty of the language.', '«كيف بُني هذا النص، ولماذا يؤثّر فينا؟» تحب الكلمات والشعر وجمال اللغة.'),
    school: L('Arabic (strong)|العربية (مستوى قوي)', 'History|التاريخ', 'Philosophy|الفلسفة'),
    study: L('Grammar & morphology|النحو والصرف', 'Rhetoric|البلاغة', 'Classical poetry|الشعر القديم', 'Modern Arabic literature|الأدب العربي الحديث', 'Literary criticism|النقد الأدبي', 'Linguistics|اللسانيات'),
    riasec: 'AS', bachelor: ba3,
    masters: L('Arabic literature|الأدب العربي', 'Arabic linguistics|اللسانيات العربية', 'Teaching Arabic (including to non-native speakers)|تعليم العربية (ومنها لغير الناطقين بها)', 'Literary criticism|النقد الأدبي'),
    phd: L('Modern Arabic novel|الرواية العربية الحديثة', 'Arabic computational linguistics|اللسانيات الحاسوبية العربية', 'Classical manuscripts|المخطوطات القديمة', 'Sociolinguistics of dialects|اللسانيات الاجتماعية للّهجات'),
    scopus: '1208 Literature and Literary Theory · 1203 Language and Linguistics',
    careers: L('Arabic teacher|أستاذ لغة عربية', 'Editor & proofreader|محرّر ومدقّق لغوي', 'Journalist & writer|صحافي وكاتب', 'Publishing|النشر', 'Arabic content for AI & tech|المحتوى العربي للذكاء الاصطناعي والتكنولوجيا'),
    routes: L(teach.en + '|' + teach.ar, 'Master in translation|ماستر في الترجمة', 'Master in media|ماستر في الإعلام')
  },
  {
    id: 'english', name: t('English language & literature', 'اللغة الإنجليزية وآدابها'),
    one: t('The English language and the literature written in it — from Shakespeare to today.', 'اللغة الإنجليزية والأدب المكتوب بها — من شكسبير حتى اليوم.'),
    think: t('"What does this story say about people?" You love reading, writing and discussing ideas.', '«ماذا تقول هذه القصة عن البشر؟» تحب القراءة والكتابة ومناقشة الأفكار.'),
    school: L('English (strong)|الإنجليزية (مستوى قوي)', 'Arabic|العربية', 'History|التاريخ'),
    study: L('Literature (novel, poetry, drama)|الأدب (الرواية والشعر والمسرح)', 'Linguistics|اللسانيات', 'Academic writing|الكتابة الأكاديمية', 'Literary theory|النظرية الأدبية', 'Teaching English (TEFL)|تعليم الإنجليزية كلغة أجنبية'),
    riasec: 'AS', bachelor: ba3,
    masters: L('English literature|الأدب الإنجليزي', 'Applied linguistics / TEFL|اللسانيات التطبيقية وتعليم الإنجليزية', 'Creative writing|الكتابة الإبداعية', 'Translation|الترجمة'),
    phd: L('Postcolonial literature|أدب ما بعد الاستعمار', 'Second-language learning|تعلّم اللغة الثانية', 'Digital humanities|الإنسانيات الرقمية'),
    scopus: '1208 Literature and Literary Theory · 1203 Language and Linguistics',
    careers: L('English teacher|أستاذ لغة إنجليزية', 'Content writer & editor|كاتب ومحرّر محتوى', 'Translator|مترجم', 'Publishing & media|النشر والإعلام', 'Communications officer|مسؤول تواصل'),
    routes: L(teach.en + '|' + teach.ar, 'Master in media or marketing|ماستر في الإعلام أو التسويق')
  },
  {
    id: 'french', name: t('French language & literature', 'اللغة الفرنسية وآدابها'),
    one: t('The French language and francophone literature and culture.', 'اللغة الفرنسية والأدب والثقافة الفرنكوفونية.'),
    think: t('"How do language and culture shape each other?" You love French, reading and cultural exchange.', '«كيف تشكّل اللغة والثقافة بعضهما؟» تحب الفرنسية والقراءة والتبادل الثقافي.'),
    school: L('French (strong)|الفرنسية (مستوى قوي)', 'Arabic|العربية', 'Philosophy|الفلسفة'),
    study: L('French literature|الأدب الفرنسي', 'Francophone literature|الأدب الفرنكوفوني', 'Linguistics|اللسانيات', 'Teaching French (FLE)|تعليم الفرنسية كلغة أجنبية', 'Written & oral expression|التعبير الكتابي والشفهي'),
    riasec: 'AS', bachelor: ba3,
    masters: L('French literature|الأدب الفرنسي', 'Teaching French (FLE)|تعليم الفرنسية كلغة أجنبية', 'Translation|الترجمة', 'Cultural mediation|الوساطة الثقافية'),
    phd: L('Lebanese francophone literature|الأدب اللبناني الفرنكوفوني', 'Language didactics|تعليمية اللغات', 'Comparative literature|الأدب المقارن'),
    scopus: '1208 Literature and Literary Theory · 1203 Language and Linguistics',
    careers: L('French teacher|أستاذ لغة فرنسية', 'Translator|مترجم', 'Cultural institutes|المعاهد الثقافية', 'Tourism & diplomacy|السياحة والدبلوماسية', 'Publishing|النشر'),
    routes: L(teach.en + '|' + teach.ar, 'Master in France or Canada|ماستر في فرنسا أو كندا')
  },
  {
    id: 'translation', name: t('Translation & interpreting', 'الترجمة'),
    one: t('Carrying meaning between languages — in writing (translation) and speech (interpreting).', 'نقل المعنى بين اللغات — كتابةً (الترجمة التحريرية) وشفهيًا (الترجمة الفورية).'),
    think: t('"What did the author really mean, and how would they say it in my language?" You are precise in at least three languages.', '«ماذا قصد الكاتب فعلًا، وكيف كان سيقولها بلغتي؟» أنت دقيق في ثلاث لغات على الأقل.'),
    school: L('Arabic (strong)|العربية (مستوى قوي)', 'English (strong)|الإنجليزية (مستوى قوي)', 'French (strong)|الفرنسية (مستوى قوي)'),
    study: L('Translation techniques|تقنيات الترجمة', 'Legal & economic translation|الترجمة القانونية والاقتصادية', 'Scientific & medical translation|الترجمة العلمية والطبية', 'Interpreting|الترجمة الفورية', 'Translation software (CAT tools)|برامج الترجمة'),
    riasec: 'AC', bachelor: ba3,
    masters: L('Conference interpreting|الترجمة الفورية للمؤتمرات', 'Specialized translation|الترجمة المتخصّصة', 'Audiovisual translation (subtitling)|الترجمة السمعية البصرية (السترجة)', 'Localization|التوطين'),
    phd: L('Machine translation & AI|الترجمة الآلية والذكاء الاصطناعي', 'Translation studies|دراسات الترجمة', 'Literary translation|الترجمة الأدبية'),
    scopus: '1203 Language and Linguistics',
    careers: L('Sworn translator (courts)|مترجم محلّف (المحاكم)', 'Conference interpreter|مترجم فوري للمؤتمرات', 'UN & international organizations|الأمم المتحدة والمنظمات الدولية', 'Subtitler|مترجم أفلام (سترجة)', 'Localization for tech companies|التوطين لشركات التكنولوجيا')
    , routes: L('Master in conference interpreting|ماستر في الترجمة الفورية للمؤتمرات')
  },
  {
    id: 'philosophy', name: t('Philosophy', 'الفلسفة'),
    one: t('The deepest questions: truth, knowledge, ethics, mind and justice.', 'أعمق الأسئلة: الحقيقة والمعرفة والأخلاق والعقل والعدالة.'),
    think: t('"Is this argument actually valid, and what are we assuming?" You love asking "why" one more time than everyone else.', '«هل هذه الحجة صحيحة فعلًا، وما الذي نفترضه؟» تحب أن تسأل «لماذا؟» مرّة أكثر من الجميع.'),
    school: L('Philosophy (strong)|الفلسفة (مستوى قوي)', 'Arabic|العربية', 'Mathematics (logic)|الرياضيات (المنطق)'),
    study: L('Logic|المنطق', 'Ethics|الأخلاق', 'History of philosophy|تاريخ الفلسفة', 'Arab & Islamic philosophy|الفلسفة العربية والإسلامية', 'Philosophy of mind & science|فلسفة العقل والعلم', 'Political philosophy|الفلسفة السياسية'),
    riasec: 'IA', bachelor: ba3,
    masters: L('Ethics & applied ethics|الأخلاق والأخلاق التطبيقية', 'Political philosophy|الفلسفة السياسية', 'Philosophy of science|فلسفة العلوم', 'Arab philosophy|الفلسفة العربية'),
    phd: L('AI ethics|أخلاقيات الذكاء الاصطناعي', 'Philosophy of mind|فلسفة العقل', 'Ibn Rushd & Ibn Sina|ابن رشد وابن سينا', 'Bioethics|أخلاقيات علم الأحياء'),
    scopus: '1211 Philosophy',
    careers: L('Philosophy teacher|أستاذ فلسفة', 'Researcher & writer|باحث وكاتب', 'Ethics advisor (hospitals, tech)|مستشار أخلاقيات (المستشفيات والتكنولوجيا)', 'Journalism & publishing|الصحافة والنشر'),
    routes: L('Law, political science or psychology master|ماستر في الحقوق أو العلوم السياسية أو علم النفس', teach.en + '|' + teach.ar)
  },
  {
    id: 'history', name: t('History', 'التاريخ'),
    one: t('Understanding the past from sources — and what it explains about today.', 'فهم الماضي من مصادره — وما يفسّره عن حاضرنا.'),
    think: t('"Who wrote this source, why, and what are they not telling us?" You like stories, evidence and context.', '«من كتب هذا المصدر، ولماذا، وماذا يُخفي عنّا؟» تحب القصص والأدلة والسياق.'),
    school: L('History (strong)|التاريخ (مستوى قوي)', 'Arabic|العربية', 'Geography|الجغرافيا'),
    study: L('Ancient & medieval history|التاريخ القديم والوسيط', 'Modern Middle East|الشرق الأوسط الحديث', 'History of Lebanon|تاريخ لبنان', 'Historical methods & sources|مناهج البحث التاريخي والمصادر', 'Archives|الأرشيف'),
    riasec: 'IA', bachelor: ba3,
    masters: L('Modern history|التاريخ الحديث', 'Archives & heritage|الأرشيف والتراث', 'Museum studies|الدراسات المتحفية', 'Oral history|التاريخ الشفهي'),
    phd: L('Ottoman history|التاريخ العثماني', 'Social history|التاريخ الاجتماعي', 'Memory & conflict|الذاكرة والنزاع', 'Economic history|التاريخ الاقتصادي'),
    scopus: '1202 History',
    careers: L('History teacher|أستاذ تاريخ', 'Archivist|أمين أرشيف', 'Museum & heritage work|العمل في المتاحف والتراث', 'Researcher & author|باحث ومؤلّف', 'Documentary research|البحث للأفلام الوثائقية'),
    routes: L(teach.en + '|' + teach.ar, 'Master in journalism or political science|ماستر في الصحافة أو العلوم السياسية')
  },
  {
    id: 'geography', name: t('Geography', 'الجغرافيا'),
    one: t('Places and people: land, climate, cities, population and maps.', 'الأماكن والناس: الأرض والمناخ والمدن والسكان والخرائط.'),
    think: t('"Why is this here and not there?" You love maps, travel and seeing patterns in space.', '«لماذا هذا هنا وليس هناك؟» تحب الخرائط والسفر ورؤية الأنماط في المكان.'),
    school: L('Geography (strong)|الجغرافيا (مستوى قوي)', 'Mathematics|الرياضيات', 'Biology|علوم الحياة'),
    study: L('Physical geography|الجغرافيا الطبيعية', 'Human & urban geography|الجغرافيا البشرية والحضرية', 'Cartography & GIS|رسم الخرائط ونظم المعلومات الجغرافية', 'Remote sensing|الاستشعار عن بُعد', 'Population & migration|السكان والهجرة'),
    riasec: 'IR', bachelor: ba3,
    masters: L('GIS & remote sensing|نظم المعلومات الجغرافية والاستشعار عن بُعد', 'Urban planning|التخطيط المدني', 'Environmental management|الإدارة البيئية', 'Tourism planning|التخطيط السياحي'),
    phd: L('Urban growth|النمو الحضري', 'Climate & risk|المناخ والمخاطر', 'Water & territory|المياه والأرض'),
    scopus: '3305 Geography, Planning and Development',
    careers: L('GIS specialist|أخصائي نظم معلومات جغرافية', 'Urban & regional planner|مخطّط مدني وإقليمي', 'Geography teacher|أستاذ جغرافيا', 'Environmental & NGO work|العمل البيئي وفي المنظمات'),
    routes: L('GIS skills open tech jobs|مهارات GIS تفتح وظائف تكنولوجية', teach.en + '|' + teach.ar)
  },
  {
    id: 'archaeology', name: t('Archaeology', 'علم الآثار'),
    one: t('Discovering past civilizations from what they left in the ground.', 'اكتشاف الحضارات القديمة ممّا تركته تحت الأرض.'),
    think: t('"What does this object tell us about the people who made it?" You like fieldwork, patience and mysteries.', '«ماذا تخبرنا هذه القطعة عن الناس الذين صنعوها؟» تحب العمل الميداني والصبر والألغاز.'),
    school: L('History|التاريخ', 'Geography|الجغرافيا', 'Chemistry|الكيمياء'),
    study: L('Phoenician, Roman & Islamic archaeology|الآثار الفينيقية والرومانية والإسلامية', 'Excavation methods|مناهج التنقيب', 'Dating techniques|تقنيات التأريخ', 'Ancient languages|اللغات القديمة', 'Heritage conservation|حفظ التراث'),
    riasec: 'IR', bachelor: ba3,
    masters: L('Archaeology|علم الآثار', 'Heritage management|إدارة التراث', 'Museum studies|الدراسات المتحفية', 'Conservation|الترميم والحفظ'),
    phd: L('Bronze Age Levant|المشرق في العصر البرونزي', 'Archaeological science|العلوم الأثرية', 'Digital archaeology|الآثار الرقمية'),
    scopus: '1204 Archeology (arts and humanities)',
    careers: L('Archaeologist (Directorate General of Antiquities)|عالم آثار (المديرية العامة للآثار)', 'Museum curator|أمين متحف', 'Heritage consultant|استشاري تراث', 'Cultural tourism|السياحة الثقافية'),
    routes: L('Master in tourism or heritage management|ماستر في السياحة أو إدارة التراث')
  },
  {
    id: 'religious-studies', name: t('Religious studies', 'الدراسات الدينية'),
    one: t('Religions, their texts, history and role in society.', 'الأديان ونصوصها وتاريخها ودورها في المجتمع.'),
    think: t('"What do these texts and traditions mean to the people who live them?" You are respectful, curious and reflective.', '«ماذا تعني هذه النصوص والتقاليد لمن يعيشونها؟» أنت محترِم وفضولي ومتأمّل.'),
    school: L('Arabic|العربية', 'History|التاريخ', 'Philosophy|الفلسفة'),
    study: L('Sacred texts|النصوص المقدّسة', 'History of religions|تاريخ الأديان', 'Theology|اللاهوت / علم الكلام', 'Interfaith dialogue|الحوار بين الأديان', 'Ethics|الأخلاق'),
    riasec: 'SA', bachelor: ba3,
    masters: L('Islamic studies|الدراسات الإسلامية', 'Christian theology|اللاهوت المسيحي', 'Interreligious dialogue|الحوار بين الأديان', 'Religion & society|الدين والمجتمع'),
    phd: L('Religion & peacebuilding|الدين وبناء السلام', 'Manuscripts & exegesis|المخطوطات والتفسير', 'Religion & law|الدين والقانون'),
    scopus: '1212 Religious Studies',
    careers: L('Religious education teacher|أستاذ تربية دينية', 'Researcher|باحث', 'Interfaith & peace NGOs|منظمات الحوار والسلام', 'Religious institutions|المؤسسات الدينية'),
    routes: L('Master in conflict resolution|ماستر في حلّ النزاعات')
  }
]);
})();
