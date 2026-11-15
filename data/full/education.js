/* Full content: Education */
(function () {
const { t, L, fill } = window.ATLAS;
const ba3 = { deg: 'BA', years: '3', lmd: 'Licence · 3' };

fill('education', {
  intro: t('The Faculty of Education (Faculty of Pedagogy at the Lebanese University) prepares teachers, school leaders and learning specialists — for every age from nursery to adults.',
           'تُعدّ كلية التربية (كلية التربية في الجامعة اللبنانية) المعلّمين والمديرين التربويين واختصاصيي التعلّم — لكل الأعمار من الحضانة حتى الكبار.'),
  ladderNote: t('Two ways to become a teacher: a 3-year education Licence/BA, or a Licence in your subject (math, Arabic, biology…) plus a one-year teaching diploma. A master opens school leadership, special education and training roles; a PhD leads to university teaching and education research.',
                'طريقان لتصبح معلّمًا: إجازة في التربية مدّتها ٣ سنوات، أو إجازة في مادتك (رياضيات، عربي، علوم حياة…) مع دبلوم تعليم لسنة واحدة. الماستر يفتح الإدارة المدرسية والتربية المختصة والتدريب؛ والدكتوراه تقود إلى التعليم الجامعي والبحث التربوي.')
}, [
  {
    id: 'early-childhood', name: t('Early childhood education', 'تربية الطفولة المبكرة'),
    one: t('Teaching and caring for children from birth to about age 6.', 'تعليم الأطفال ورعايتهم من الولادة حتى نحو السادسة.'),
    think: t('"How does this child learn best — through play, story or movement?" You are warm, creative and endlessly patient.', '«كيف يتعلّم هذا الطفل أفضل — باللعب أو القصة أو الحركة؟» أنت دافئ ومبدع وصبور جدًا.'),
    school: L('Languages|اللغات', 'Art & music|الفنون والموسيقى', 'Biology|علوم الحياة'),
    study: L('Child development|نموّ الطفل', 'Learning through play|التعلّم باللعب', 'Early literacy & numeracy|القراءة والحساب المبكر', 'Classroom management|إدارة الصف', 'Teaching practice in nurseries|تدريب عملي في الحضانات'),
    riasec: 'SA', bachelor: ba3,
    masters: L('Early childhood education|تربية الطفولة المبكرة', 'Special education|التربية المختصة', 'Curriculum design|تصميم المناهج'),
    phd: L('Play-based learning|التعلّم القائم على اللعب', 'Early language development|النموّ اللغوي المبكر', 'Children in crisis settings|الأطفال في أوضاع الأزمات'),
    scopus: '3304 Education',
    careers: L('Kindergarten teacher|معلّم روضة', 'Nursery director|مدير حضانة', 'Early-learning program officer (NGOs)|مسؤول برامج الطفولة المبكرة (المنظمات)', 'Children\'s content creator|صانع محتوى للأطفال')
    , routes: L('Master in special education|ماستر في التربية المختصة')
  },
  {
    id: 'elementary', name: t('Elementary education', 'التعليم الابتدائي'),
    one: t('Teaching the basics — reading, writing, math, science — to children aged 6–12.', 'تعليم الأساسيات — القراءة والكتابة والحساب والعلوم — للأطفال من ٦ إلى ١٢ سنة.'),
    think: t('"How can I explain this in a way every child in the class will get?" You love children and explaining.', '«كيف أشرح هذا بطريقة يفهمها كل طفل في الصف؟» تحب الأطفال والشرح.'),
    school: L('Languages|اللغات', 'Mathematics|الرياضيات', 'Sciences|العلوم'),
    study: L('Teaching reading & writing|تعليم القراءة والكتابة', 'Teaching math & science|تعليم الرياضيات والعلوم', 'Child psychology|علم نفس الطفل', 'Assessment|التقييم', 'School internships|تدريب في المدارس'),
    riasec: 'SA', bachelor: ba3,
    masters: L('Curriculum & instruction|المناهج وطرائق التدريس', 'Literacy education|تعليم القراءة والكتابة', 'Math education|تعليم الرياضيات', 'Educational technology|تكنولوجيا التعليم'),
    phd: L('Learning difficulties|صعوبات التعلّم', 'Multilingual classrooms|الصفوف متعدّدة اللغات', 'Teacher education|إعداد المعلّمين'),
    scopus: '3304 Education',
    careers: L('Elementary school teacher|معلّم في المرحلة الابتدائية', 'Subject coordinator|منسّق مادة', 'Tutor|مدرّس خصوصي', 'Curriculum developer|مطوّر مناهج')
    , routes: L('Master in educational leadership → principal|ماستر في الإدارة التربوية ← مدير مدرسة')
  },
  {
    id: 'secondary', name: t('Secondary teaching (by subject)', 'التعليم الثانوي (حسب المادة)'),
    one: t('Teaching one subject — like math, physics, Arabic or history — to teenagers.', 'تعليم مادة واحدة — كالرياضيات أو الفيزياء أو العربية أو التاريخ — للمراهقين.'),
    think: t('"How do I make my subject alive for a 16-year-old?" You love your subject and want to share it.', '«كيف أجعل مادتي حيّة لطالب في السادسة عشرة؟» تحب مادتك وتريد مشاركتها.'),
    school: L('The subject you want to teach (strong)|المادة التي تريد تعليمها (مستوى قوي)', 'Languages|اللغات'),
    study: L('Your subject at university level|مادتك بمستوى جامعي', 'Teaching methods for your subject|طرائق تدريس مادتك', 'Adolescent psychology|علم نفس المراهق', 'Assessment & exams|التقييم والامتحانات', 'Teaching practice|التدريب العملي'),
    riasec: 'SI', bachelor: { deg: 'BA / BS + Teaching diploma', years: '3 + 1', lmd: 'Licence + Diplôme · 4' },
    masters: L('Subject didactics (e.g. math education)|تعليمية المادة (مثل تعليم الرياضيات)', 'Educational leadership|الإدارة التربوية', 'Educational technology|تكنولوجيا التعليم', 'Assessment & measurement|القياس والتقويم'),
    phd: L('Science & math education|تعليم العلوم والرياضيات', 'Exam systems|أنظمة الامتحانات', 'Student motivation|دافعية الطلاب'),
    scopus: '3304 Education',
    careers: L('Secondary school teacher (public or private)|أستاذ ثانوي (رسمي أو خاص)', 'Head of department|رئيس قسم', 'Exam & curriculum committees|لجان الامتحانات والمناهج', 'Private tutoring & online courses|الدروس الخصوصية والدورات عبر الإنترنت'),
    routes: L('Public schools: Civil Service Board / Faculty of Pedagogy entrance exams|المدارس الرسمية: مباريات مجلس الخدمة المدنية / كلية التربية')
  },
  {
    id: 'special-education', name: t('Special education', 'التربية المختصة'),
    one: t('Teaching students with learning difficulties, autism, or physical and sensory disabilities.', 'تعليم الطلاب ذوي صعوبات التعلّم أو التوحّد أو الإعاقات الجسدية والحسية.'),
    think: t('"What does this student need to succeed, and how do I adapt?" You are patient, creative and believe every child can learn.', '«ماذا يحتاج هذا الطالب لينجح، وكيف أتكيّف معه؟» أنت صبور ومبدع وتؤمن أن كل طفل يستطيع التعلّم.'),
    school: L('Languages|اللغات', 'Biology|علوم الحياة', 'Psychology basics|أساسيات علم النفس'),
    study: L('Learning difficulties (dyslexia…)|صعوبات التعلّم (عسر القراءة…)', 'Autism spectrum|طيف التوحّد', 'Individual education plans|الخطط التربوية الفردية', 'Inclusive education|التعليم الدامج', 'Assessment & diagnosis|التقييم والتشخيص'),
    riasec: 'SA', bachelor: ba3,
    masters: L('Special education|التربية المختصة', 'Inclusive education|التعليم الدامج', 'Applied behavior analysis|تحليل السلوك التطبيقي', 'Learning disabilities|صعوبات التعلّم'),
    phd: L('Inclusion policy|سياسات الدمج', 'Assistive technology|التكنولوجيا المساعدة', 'Autism interventions|تدخّلات التوحّد'),
    scopus: '3304 Education',
    careers: L('Special educator (schools)|مربٍّ مختص (المدارس)', 'Learning-support coordinator|منسّق دعم التعلّم', 'Specialized centers|المراكز المتخصّصة', 'Shadow teacher|معلّم مرافق'),
    routes: L('Master in psychology or speech therapy|ماستر في علم النفس أو تقويم النطق')
  },
  {
    id: 'educational-technology', name: t('Educational technology', 'تكنولوجيا التعليم'),
    one: t('Designing digital learning: online courses, apps, videos and e-learning platforms.', 'تصميم التعلّم الرقمي: الدورات عبر الإنترنت والتطبيقات والفيديوهات ومنصّات التعليم الإلكتروني.'),
    think: t('"How can technology make this easier to learn — not just more fancy?" You like teaching, design and tech.', '«كيف تجعل التكنولوجيا هذا أسهل في التعلّم — لا مجرّد أجمل؟» تحب التعليم والتصميم والتكنولوجيا.'),
    school: L('Computer basics|أساسيات الحاسوب', 'Languages|اللغات', 'Art|الفنون'),
    study: L('Instructional design|التصميم التعليمي', 'E-learning platforms (LMS)|منصّات التعلّم الإلكتروني', 'Multimedia production|إنتاج الوسائط المتعددة', 'Learning theories|نظريات التعلّم', 'Online assessment|التقييم عبر الإنترنت'),
    riasec: 'AI', bachelor: ba3,
    masters: L('Instructional design|التصميم التعليمي', 'Educational technology|تكنولوجيا التعليم', 'Learning analytics|تحليلات التعلّم', 'AI in education|الذكاء الاصطناعي في التعليم'),
    phd: L('AI tutors|المعلّمون الآليون', 'Online learning|التعلّم عن بُعد', 'Games for learning|الألعاب التعليمية'),
    scopus: '3304 Education · 1706 Computer Science Applications',
    careers: L('Instructional designer|مصمّم تعليمي', 'E-learning developer|مطوّر تعلّم إلكتروني', 'EdTech companies|شركات تكنولوجيا التعليم', 'School technology coordinator|منسّق التكنولوجيا في المدرسة')
    , routes: L('Master in UX design|ماستر في تصميم تجربة المستخدم')
  },
  {
    id: 'educational-leadership', name: t('Educational leadership', 'الإدارة التربوية'),
    one: t('Leading schools: managing teachers, budgets, quality and school culture.', 'قيادة المدارس: إدارة المعلّمين والميزانيات والجودة والثقافة المدرسية.'),
    think: t('"How do I make this whole school better for every student and teacher?" You like leading people and planning.', '«كيف أجعل المدرسة كلها أفضل لكل طالب ومعلّم؟» تحب قيادة الناس والتخطيط.'),
    school: L('Languages|اللغات', 'Economics|الاقتصاد'),
    study: L('School management|إدارة المدرسة', 'Education policy|السياسات التربوية', 'Supervision & teacher development|الإشراف وتطوير المعلّمين', 'School finance|مالية المدرسة', 'Quality & accreditation|الجودة والاعتماد'),
    riasec: 'ES', bachelor: { deg: 'Usually a master', years: '—', lmd: 'Master' },
    masters: L('Educational leadership|الإدارة التربوية', 'Education policy|السياسات التربوية', 'Higher education management|إدارة التعليم العالي'),
    phd: L('School improvement|تحسين المدارس', 'Education in emergencies|التعليم في حالات الطوارئ', 'Leadership & equity|القيادة والإنصاف'),
    scopus: '3304 Education',
    careers: L('School principal|مدير مدرسة', 'Academic coordinator|منسّق أكاديمي', 'Ministry of Education|وزارة التربية', 'Education program manager (UNICEF, NGOs)|مدير برامج تعليمية (اليونيسف والمنظمات)'),
    routes: L('Teach first (several years), then this master|علّم أولًا (عدة سنوات) ثم ادرس هذا الماستر'),
    note: t('Mostly studied as a master by experienced teachers.', 'يُدرَس غالبًا كماستر من قبل معلّمين ذوي خبرة.')
  },
  {
    id: 'physical-education', name: t('Physical education & sport', 'التربية البدنية والرياضة'),
    one: t('Teaching sport and healthy movement, and training athletes.', 'تعليم الرياضة والحركة الصحية وتدريب الرياضيين.'),
    think: t('"How do I get everyone moving and improving — not just the best players?" You are active, motivating and like teamwork.', '«كيف أجعل الجميع يتحرّكون ويتحسّنون — لا أفضل اللاعبين فقط؟» أنت نشيط ومحفّز وتحب العمل الجماعي.'),
    school: L('Sport|الرياضة', 'Biology|علوم الحياة'),
    study: L('Exercise physiology|فيزيولوجيا الجهد', 'Sports training methods|طرائق التدريب الرياضي', 'Teaching PE|تدريس التربية البدنية', 'First aid & injury prevention|الإسعافات الأولية والوقاية من الإصابات', 'Team sports & athletics|الألعاب الجماعية وألعاب القوى'),
    riasec: 'RS', bachelor: ba3,
    masters: L('Sports science|علوم الرياضة', 'Coaching|التدريب الرياضي', 'Sports management|الإدارة الرياضية', 'Adapted physical activity|النشاط البدني المكيّف'),
    phd: L('Youth fitness|لياقة الشباب', 'Sports performance|الأداء الرياضي', 'Physical activity & health|النشاط البدني والصحة'),
    scopus: '3612 Physical Therapy, Sports Therapy and Rehabilitation · 3304 Education',
    careers: L('PE teacher|أستاذ تربية بدنية', 'Coach|مدرّب رياضي', 'Fitness trainer|مدرّب لياقة', 'Sports club manager|مدير نادٍ رياضي')
    , routes: L('Master in physiotherapy or nutrition|ماستر في العلاج الفيزيائي أو التغذية')
  }
]);
})();
