/* Full content: Fine arts, architecture & design */
(function () {
const { t, L, fill } = window.ATLAS;
const bfa = { deg: 'BA / BFA', years: '3–4', lmd: 'Licence · 3–4' };

fill('arts-design', {
  intro: t('This faculty creates what we see, use and feel: buildings and cities, images and brands, objects and clothes, music, theatre and film. At the Lebanese University it is the Institute of Fine Arts; private universities have schools of architecture and design.',
           'تصنع هذه الكلية ما نراه ونستعمله ونشعر به: المباني والمدن، والصور والعلامات التجارية، والأشياء والملابس، والموسيقى والمسرح والسينما. في الجامعة اللبنانية هي معهد الفنون الجميلة، وفي الجامعات الخاصة هناك كليات للعمارة والتصميم.'),
  ladderNote: t('Architecture is a long professional degree (5 years) and architects register with the Order of Engineers and Architects. Design and arts degrees are 3–4 years and are judged by your portfolio — the work you show — more than by grades. Many artists and designers go straight to work; a master (MA / MFA) leads to specialization and teaching.',
                'العمارة شهادة مهنية طويلة (٥ سنوات) وينتسب المعماريون إلى نقابة المهندسين والمعماريين. أمّا شهادات التصميم والفنون فمدّتها ٣–٤ سنوات ويُحكم عليك فيها من خلال ملفّ أعمالك (البورتفوليو) أكثر من العلامات. كثير من الفنانين والمصمّمين يعملون مباشرة؛ والماستر (MA / MFA) يقود إلى التخصّص والتعليم.')
}, [
  {
    id: 'architecture', name: t('Architecture', 'العمارة'),
    one: t('Designing buildings and spaces that are beautiful, useful and safe.', 'تصميم مبانٍ وأماكن جميلة ومفيدة وآمنة.'),
    think: t('"How will people live, move and feel in this space?" You draw, imagine in 3D and balance art with engineering.', '«كيف سيعيش الناس ويتحرّكون ويشعرون في هذا المكان؟» ترسم وتتخيّل بالأبعاد الثلاثة وتوازن بين الفن والهندسة.'),
    school: L('Mathematics|الرياضيات', 'Physics|الفيزياء', 'Drawing|الرسم'),
    study: L('Design studio (projects every semester)|مشغل التصميم (مشروع كل فصل)', 'Architectural drawing & 3D modelling|الرسم المعماري والنمذجة الثلاثية', 'History of architecture|تاريخ العمارة', 'Structures & building technology|الإنشاءات وتقنيات البناء', 'Urban design|التصميم الحضري', 'Sustainable design|التصميم المستدام'),
    riasec: 'AR',
    bachelor: { deg: 'BArch / Diplôme d\'architecte', years: '5', lmd: 'Diplôme · 5' },
    masters: L('Urban design|التصميم الحضري', 'Sustainable architecture|العمارة المستدامة', 'Heritage conservation|حفظ التراث المعماري', 'Digital & computational design|التصميم الرقمي والحسابي', 'Landscape architecture|عمارة المناظر الطبيعية'),
    phd: L('Housing & cities|السكن والمدن', 'Post-war reconstruction|إعادة الإعمار بعد الحروب', 'Climate-responsive buildings|المباني المتجاوبة مع المناخ', 'Architectural history|تاريخ العمارة'),
    scopus: '2216 Architecture',
    careers: L('Architect (design offices)|معماري (مكاتب التصميم)', 'Own architecture firm|مكتب عمارة خاص', 'Interior & landscape projects|مشاريع داخلية وخارجية', '3D visualization artist|فنان تصوير ثلاثي الأبعاد', 'Municipal planning|التخطيط في البلديات'),
    routes: L('Master in urban planning|ماستر في التخطيط المدني', 'Master in project management|ماستر في إدارة المشاريع'),
    note: t('Architects register with the Order of Engineers and Architects to practise.', 'ينتسب المعماريون إلى نقابة المهندسين لممارسة المهنة.')
  },
  {
    id: 'interior-design', name: t('Interior design', 'التصميم الداخلي'),
    one: t('Designing the inside of homes, shops, offices and hotels.', 'تصميم داخل المنازل والمحلات والمكاتب والفنادق.'),
    think: t('"How do light, color, materials and furniture change how this room feels?" You notice every detail of a space.', '«كيف يغيّر الضوء واللون والمواد والأثاث إحساس هذه الغرفة؟» تلاحظ كل تفصيل في المكان.'),
    school: L('Drawing & art|الرسم والفنون', 'Mathematics|الرياضيات'),
    study: L('Interior design studio|مشغل التصميم الداخلي', 'Materials & finishes|المواد والتشطيبات', 'Lighting design|تصميم الإضاءة', 'Furniture design|تصميم الأثاث', 'CAD & 3D rendering|الرسم بالحاسوب والإظهار ثلاثي الأبعاد'),
    riasec: 'AE', bachelor: bfa,
    masters: L('Interior architecture|العمارة الداخلية', 'Lighting design|تصميم الإضاءة', 'Furniture & product design|تصميم الأثاث والمنتجات', 'Retail & hospitality design|تصميم المحلات والضيافة'),
    phd: L('Healthy interiors|الأماكن الداخلية الصحية', 'Sustainable materials|المواد المستدامة'),
    scopus: '2216 Architecture',
    careers: L('Interior designer|مصمّم داخلي', 'Furniture & showroom design|تصميم الأثاث وصالات العرض', 'Set & exhibition design|تصميم الديكورات والمعارض', 'Own design studio|استوديو تصميم خاص')
    , routes: L('Master in architecture or product design|ماستر في العمارة أو تصميم المنتجات')
  },
  {
    id: 'landscape', name: t('Landscape architecture', 'عمارة المناظر الطبيعية'),
    one: t('Designing outdoor spaces: parks, gardens, public squares and natural sites.', 'تصميم الأماكن الخارجية: الحدائق والمنتزهات والساحات العامة والمواقع الطبيعية.'),
    think: t('"How can nature and people share this place?" You love plants, the outdoors and design.', '«كيف يتشارك الإنسان والطبيعة هذا المكان؟» تحب النباتات والطبيعة والتصميم.'),
    school: L('Biology|علوم الحياة', 'Drawing|الرسم', 'Geography|الجغرافيا'),
    study: L('Landscape design studio|مشغل تصميم المناظر', 'Plants & ecology|النباتات وعلم البيئة', 'Site engineering & grading|هندسة المواقع والتسوية', 'GIS|نظم المعلومات الجغرافية', 'Urban landscapes|المناظر الحضرية'),
    riasec: 'AR', bachelor: { deg: 'BLA', years: '4–5', lmd: 'Diplôme · 5' },
    masters: L('Landscape architecture|عمارة المناظر الطبيعية', 'Urban ecology|البيئة الحضرية', 'Environmental planning|التخطيط البيئي'),
    phd: L('Green infrastructure|البنية التحتية الخضراء', 'Water-sensitive design|التصميم المراعي للمياه', 'Cultural landscapes|المناظر الثقافية'),
    scopus: '2216 Architecture · 2308 Management, Monitoring, Policy and Law',
    careers: L('Landscape architect|معماري مناظر طبيعية', 'Municipal parks departments|أقسام الحدائق في البلديات', 'Environmental NGOs|المنظمات البيئية', 'Resort & hotel landscaping|تنسيق مناظر المنتجعات والفنادق')
    , routes: L('Master in environmental science|ماستر في علوم البيئة')
  },
  {
    id: 'urban-planning', name: t('Urban planning', 'التخطيط المدني'),
    one: t('Planning cities and regions: land use, housing, transport and public space.', 'تخطيط المدن والمناطق: استعمالات الأراضي والسكن والنقل والأماكن العامة.'),
    think: t('"How should this city grow so it works for everyone in twenty years?" You think big, with maps, data and people.', '«كيف يجب أن تنمو هذه المدينة لتصلح للجميع بعد عشرين سنة؟» تفكّر على نطاق واسع، بالخرائط والبيانات والناس.'),
    school: L('Geography|الجغرافيا', 'Mathematics|الرياضيات', 'Sociology|علم الاجتماع'),
    study: L('Planning theory|نظريات التخطيط', 'Land use & zoning|استعمالات الأراضي والتنظيم', 'Transport planning|تخطيط النقل', 'Housing policy|سياسات السكن', 'GIS & urban data|نظم المعلومات الجغرافية والبيانات الحضرية'),
    riasec: 'IE', bachelor: { deg: 'Usually a master', years: '—', lmd: 'Master' },
    masters: L('Urban planning & policy|التخطيط والسياسات الحضرية', 'Transport planning|تخطيط النقل', 'Urban design|التصميم الحضري', 'Smart cities|المدن الذكية'),
    phd: L('Informal settlements|المساكن العشوائية', 'Urban resilience|المرونة الحضرية', 'Mobility & public transport|التنقّل والنقل العام'),
    scopus: '3305 Geography, Planning and Development · 2215 Building and Construction',
    careers: L('Urban planner (municipalities, DGU)|مخطّط مدني (البلديات والمديرية العامة للتنظيم المدني)', 'Planning consultant|استشاري تخطيط', 'UN-Habitat & NGOs|برنامج الأمم المتحدة للمستوطنات والمنظمات', 'Transport planner|مخطّط نقل'),
    routes: L('From architecture, civil engineering, geography or economics|من العمارة أو الهندسة المدنية أو الجغرافيا أو الاقتصاد'),
    note: t('Mostly a master, after architecture, engineering, geography or social sciences.', 'غالبًا ماستر بعد العمارة أو الهندسة أو الجغرافيا أو العلوم الاجتماعية.')
  },
  {
    id: 'graphic-design', name: t('Graphic design', 'التصميم الغرافيكي'),
    one: t('Communicating with images and type: logos, posters, books, apps and websites.', 'التواصل بالصور والخطوط: الشعارات والملصقات والكتب والتطبيقات والمواقع.'),
    think: t('"Will people understand this message in two seconds?" You see color, layout and typography everywhere.', '«هل سيفهم الناس هذه الرسالة في ثانيتين؟» ترى اللون والتنسيق والخط في كل مكان.'),
    school: L('Drawing & art|الرسم والفنون', 'Languages|اللغات'),
    study: L('Typography (incl. Arabic type)|فنّ الخط والطباعة (ومنه الخط العربي)', 'Branding & identity|الهوية البصرية', 'Illustration|الرسم التوضيحي', 'Digital design (Adobe, Figma)|التصميم الرقمي', 'UI / UX design|تصميم الواجهات وتجربة المستخدم', 'Motion graphics|الرسوم المتحركة'),
    riasec: 'AE', bachelor: bfa,
    masters: L('Visual communication|الاتصال البصري', 'UX / interaction design|تصميم التفاعل وتجربة المستخدم', 'Illustration & animation|الرسم التوضيحي والتحريك', 'Type design|تصميم الخطوط'),
    phd: L('Arabic typography|الخط العربي الطباعي', 'Design for social change|التصميم من أجل التغيير الاجتماعي', 'Visual culture|الثقافة البصرية'),
    scopus: '1213 Visual Arts and Performing Arts',
    careers: L('Graphic designer|مصمّم غرافيكي', 'Art director (advertising)|مدير فني (إعلانات)', 'UI / UX designer|مصمّم واجهات وتجربة مستخدم', 'Illustrator|رسّام توضيحي', 'Freelancer for clients abroad|عمل حرّ لعملاء في الخارج'),
    routes: L('Master in UX → tech companies|ماستر في تجربة المستخدم ← شركات التكنولوجيا')
  },
  {
    id: 'fine-arts', name: t('Fine arts (painting, sculpture)', 'الفنون التشكيلية'),
    one: t('Creating original artworks — painting, drawing, sculpture, printmaking and installations.', 'ابتكار أعمال فنية أصيلة — الرسم والتصوير والنحت والحفر والأعمال التركيبية.'),
    think: t('"What do I want to say, and which material says it best?" You need to create and are not afraid to be different.', '«ماذا أريد أن أقول، وأيّ مادة تقوله أفضل؟» تحتاج إلى الإبداع ولا تخاف أن تكون مختلفًا.'),
    school: L('Drawing & art (strong)|الرسم والفنون (مستوى قوي)', 'History|التاريخ'),
    study: L('Drawing & painting|الرسم والتصوير الزيتي', 'Sculpture|النحت', 'Art history|تاريخ الفن', 'Contemporary art practice|الممارسة الفنية المعاصرة', 'Exhibition making|إعداد المعارض'),
    riasec: 'A', bachelor: bfa,
    masters: L('Fine arts (MFA)|الفنون الجميلة', 'Art therapy|العلاج بالفن', 'Curating|تنظيم المعارض', 'Art education|التربية الفنية'),
    phd: L('Contemporary Arab art|الفن العربي المعاصر', 'Art & memory|الفن والذاكرة', 'Practice-based research|البحث القائم على الممارسة'),
    scopus: '1213 Visual Arts and Performing Arts',
    careers: L('Artist (exhibitions, commissions)|فنان (معارض وطلبات)', 'Art teacher|أستاذ فنون', 'Gallery & museum work|العمل في الصالات والمتاحف', 'Art therapist (after master)|معالج بالفن (بعد الماستر)', 'Illustrator|رسّام توضيحي'),
    routes: L('Teaching diploma → art teacher|دبلوم تعليم ← أستاذ فنون', 'Master in art therapy|ماستر في العلاج بالفن')
  },
  {
    id: 'music', name: t('Music', 'الموسيقى'),
    one: t('Performing, composing and studying music — Arabic and Western.', 'أداء الموسيقى وتأليفها ودراستها — العربية والغربية.'),
    think: t('"How do I make this sound exactly as I hear it inside?" You practise for hours and listen deeply.', '«كيف أجعل هذا يبدو تمامًا كما أسمعه في داخلي؟» تتمرّن لساعات وتصغي بعمق.'),
    school: L('Music (an instrument, ideally from childhood)|الموسيقى (آلة، ويُفضّل منذ الطفولة)', 'Mathematics|الرياضيات'),
    study: L('Music theory & solfège|النظريات الموسيقية والصولفيج', 'Instrument / voice|الآلة / الغناء', 'Arabic maqam|المقامات العربية', 'Composition & arrangement|التأليف والتوزيع', 'Music technology & production|تكنولوجيا الموسيقى والإنتاج'),
    riasec: 'A', bachelor: { deg: 'BMus / BA', years: '3–4', lmd: 'Licence · 3' },
    masters: L('Performance|الأداء', 'Composition|التأليف', 'Musicology|علم الموسيقى', 'Music education|التربية الموسيقية', 'Music therapy|العلاج بالموسيقى'),
    phd: L('Arab musicology|علم الموسيقى العربية', 'Music & the brain|الموسيقى والدماغ', 'Ethnomusicology|علم موسيقى الشعوب'),
    scopus: '1210 Music',
    careers: L('Performer / musician|عازف / موسيقي', 'Music teacher|أستاذ موسيقى', 'Composer for film & media|مؤلف موسيقى للأفلام والإعلام', 'Sound engineer & producer|مهندس صوت ومنتج'),
    routes: L('Lebanese National Higher Conservatory|المعهد الوطني العالي للموسيقى (الكونسرفاتوار)', 'Master in sound engineering|ماستر في هندسة الصوت')
  },
  {
    id: 'theatre', name: t('Theatre', 'المسرح'),
    one: t('Acting, directing and creating live performance.', 'التمثيل والإخراج وصناعة العروض الحيّة.'),
    think: t('"How do I make the audience believe and feel this, live, right now?" You are expressive, brave and a team player.', '«كيف أجعل الجمهور يصدّق هذا ويشعر به، مباشرة، الآن؟» أنت معبّر وجريء وتحب العمل الجماعي.'),
    school: L('Arabic & languages|العربية واللغات', 'Literature|الأدب', 'Art|الفنون'),
    study: L('Acting technique|تقنيات التمثيل', 'Voice & movement|الصوت والحركة', 'Directing|الإخراج', 'Dramatic literature|الأدب المسرحي', 'Stage & lighting design|تصميم الخشبة والإضاءة'),
    riasec: 'AS', bachelor: bfa,
    masters: L('Directing|الإخراج', 'Drama therapy|العلاج بالدراما', 'Applied theatre|المسرح التطبيقي', 'Dramaturgy|الدراماتورجيا'),
    phd: L('Arab theatre history|تاريخ المسرح العربي', 'Theatre for social change|المسرح من أجل التغيير الاجتماعي'),
    scopus: '1213 Visual Arts and Performing Arts',
    careers: L('Actor (stage, TV, film)|ممثّل (مسرح وتلفزيون وسينما)', 'Director|مخرج', 'Drama teacher|أستاذ مسرح', 'Drama therapist|معالج بالدراما', 'Voice-over & dubbing|التعليق الصوتي والدبلجة')
    , routes: L('Master in film or media|ماستر في السينما أو الإعلام')
  },
  {
    id: 'film', name: t('Film & audiovisual', 'السينما والسمعي البصري'),
    one: t('Making films, series, documentaries and videos — from script to screen.', 'صناعة الأفلام والمسلسلات والوثائقيات والفيديو — من النص إلى الشاشة.'),
    think: t('"How do I tell this story with images and sound?" You watch films with the eye of a maker.', '«كيف أروي هذه القصة بالصورة والصوت؟» تشاهد الأفلام بعين صانعها.'),
    school: L('Art|الفنون', 'Languages|اللغات', 'Literature|الأدب'),
    study: L('Screenwriting|كتابة السيناريو', 'Directing|الإخراج', 'Cinematography|التصوير السينمائي', 'Editing & sound|المونتاج والصوت', 'Film history|تاريخ السينما'),
    riasec: 'AE', bachelor: bfa,
    masters: L('Film directing|الإخراج السينمائي', 'Documentary|الفيلم الوثائقي', 'Animation & VFX|التحريك والمؤثرات البصرية', 'Producing|الإنتاج'),
    phd: L('Arab cinema|السينما العربية', 'Film & memory|السينما والذاكرة', 'Streaming & audiences|المنصّات والجمهور'),
    scopus: '1213 Visual Arts and Performing Arts · 3315 Communication',
    careers: L('Director|مخرج', 'Cinematographer|مدير تصوير', 'Editor|مونتير', 'Producer|منتج', 'Content creator|صانع محتوى'),
    routes: L('Master in media & communication|ماستر في الإعلام والاتصال')
  },
  {
    id: 'fashion', name: t('Fashion design', 'تصميم الأزياء'),
    one: t('Designing clothes and accessories — from sketch to runway.', 'تصميم الملابس والإكسسوارات — من الرسم إلى منصّة العرض.'),
    think: t('"How will this look, move and feel on a real body?" You love fabrics, trends and making things by hand.', '«كيف سيبدو هذا ويتحرّك ويُشعَر به على جسم حقيقي؟» تحب الأقمشة والصيحات والعمل اليدوي.'),
    school: L('Drawing & art|الرسم والفنون'),
    study: L('Fashion illustration|رسم الأزياء', 'Pattern making & sewing|الباترون والخياطة', 'Textiles|الأقمشة', 'Collection development|تطوير المجموعات', 'Fashion business|أعمال الأزياء'),
    riasec: 'AR', bachelor: bfa,
    masters: L('Fashion design|تصميم الأزياء', 'Fashion marketing|تسويق الأزياء', 'Sustainable fashion|الأزياء المستدامة', 'Costume design|تصميم الأزياء المسرحية'),
    phd: L('Sustainable textiles|الأقمشة المستدامة', 'Fashion & identity|الأزياء والهوية'),
    scopus: '1213 Visual Arts and Performing Arts',
    careers: L('Fashion designer|مصمّم أزياء', 'Own label|علامة تجارية خاصة', 'Stylist|منسّق أزياء', 'Costume designer (film, theatre)|مصمّم أزياء للسينما والمسرح'),
    routes: L('Lebanese designers work worldwide — internships abroad help|المصمّمون اللبنانيون يعملون عالميًا — التدريب في الخارج يساعد')
  },
  {
    id: 'product-design', name: t('Product design', 'تصميم المنتجات'),
    one: t('Designing everyday objects — furniture, devices, tools — that are useful and beautiful.', 'تصميم الأشياء اليومية — الأثاث والأجهزة والأدوات — لتكون مفيدة وجميلة.'),
    think: t('"How will people hold, use and feel this object?" You like drawing, making prototypes and solving problems.', '«كيف سيمسك الناس هذا الشيء ويستعملونه ويشعرون به؟» تحب الرسم وصناعة النماذج وحلّ المشكلات.'),
    school: L('Drawing|الرسم', 'Physics|الفيزياء', 'Mathematics|الرياضيات'),
    study: L('Design studio|مشغل التصميم', 'Sketching & 3D modelling|الرسم والنمذجة الثلاثية', 'Materials & manufacturing|المواد والتصنيع', 'Ergonomics|بيئة الاستخدام (الإرغونوميا)', 'Prototyping & 3D printing|صناعة النماذج والطباعة ثلاثية الأبعاد'),
    riasec: 'AR', bachelor: bfa,
    masters: L('Industrial design|التصميم الصناعي', 'Furniture design|تصميم الأثاث', 'Interaction design|تصميم التفاعل', 'Design for sustainability|التصميم من أجل الاستدامة'),
    phd: L('Circular design|التصميم الدائري', 'Craft & technology|الحرفة والتكنولوجيا'),
    scopus: '2209 Industrial and Manufacturing Engineering · 1213 Visual Arts and Performing Arts',
    careers: L('Product / industrial designer|مصمّم منتجات / مصمّم صناعي', 'Furniture designer|مصمّم أثاث', 'Design studios & manufacturers|استوديوهات التصميم والمصانع', 'Own design brand|علامة تصميم خاصة')
    , routes: L('Master in UX or engineering design|ماستر في تجربة المستخدم أو التصميم الهندسي')
  }
]);
})();
