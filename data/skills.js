/* Field Atlas — skills page data: types of skills, each skill (where to build it, where you use it),
 * and school / life activities that build them. Every string: 'English|العربية'.
 */
(function () {
const sp = s => { const [en, ar] = s.split('|'); return { en, ar }; };
const Ls = (...xs) => xs.map(sp);

const types = [
  { id: 'tech', icon: 'hammer', color: '#c0703c', name: sp('Technical (hard) skills|المهارات التقنية (الصلبة)'), what: sp('Knowledge and abilities for a specific task. You can learn them in class or a course, and test them.|معرفة وقدرات لمهمة محدّدة. تتعلّمها في الصف أو في دورة، ويمكن اختبارها.'), note: sp('Some are "job-specific": medical rules for nurses, building codes for engineers. You learn those at university and at work.|بعضها «خاص بالمهنة»: قوانين طبية للممرّضين، قوانين البناء للمهندسين. تتعلّمها في الجامعة والعمل.') },
  { id: 'digital', icon: 'monitor-smartphone', color: '#3d6c9e', name: sp('Digital skills|المهارات الرقمية'), what: sp('Using technology well and safely: computers, software, the internet, AI tools.|استعمال التكنولوجيا جيدًا وبأمان: الحاسوب والبرامج والإنترنت وأدوات الذكاء الاصطناعي.') },
  { id: 'people', icon: 'handshake', color: '#4f8a8b', name: sp('People (soft) skills|مهارات التعامل مع الناس (الناعمة)'), what: sp('How you work with others: talking, listening, leading, helping a team.|كيف تعمل مع الآخرين: التحدّث والإصغاء والقيادة ومساعدة الفريق.') },
  { id: 'thinking', icon: 'brain', color: '#5b4a7a', name: sp('Thinking (cognitive) skills|مهارات التفكير (الذهنية)'), what: sp('How your mind works on a problem: analysing, deciding, creating new ideas.|كيف يعمل عقلك على مشكلة: التحليل واتخاذ القرار وابتكار الأفكار.') },
  { id: 'self', icon: 'calendar-check', color: '#8c6d2e', name: sp('Self-management (life) skills|مهارات إدارة الذات (الحياتية)'), what: sp('How you manage yourself: time, stress, effort and change.|كيف تدير نفسك: الوقت والضغط والجهد والتغيير.') },
  { id: 'lang', icon: 'languages', color: '#a0577e', name: sp('Language skills|المهارات اللغوية'), what: sp('Reading, writing and speaking well in Arabic, English, French or another language.|القراءة والكتابة والتحدّث جيدًا بالعربية أو الإنجليزية أو الفرنسية أو لغة أخرى.') }
];

const S = (id, type, name, what, get, use) => ({ id, type, name: sp(name), what: sp(what), get: Ls(...get), use: Ls(...use) });
const skills = [
  /* technical */
  S('numeracy', 'tech', 'Maths & working with numbers|الرياضيات والتعامل مع الأرقام', 'Calculating, estimating and reading graphs and tables.|الحساب والتقدير وقراءة الرسوم البيانية والجداول.',
    ['Maths and physics classes|حصص الرياضيات والفيزياء', 'Maths olympiads and competitions|أولمبياد ومسابقات الرياضيات', 'Managing pocket money or a club budget|إدارة مصروفك أو ميزانية نادٍ'],
    ['Engineering, business, sciences, computing|الهندسة والأعمال والعلوم والحوسبة', 'Budgets and data in any job|الميزانيات والبيانات في أيّ عمل']),
  S('lab', 'tech', 'Practical & lab work|العمل التطبيقي والمخبري', 'Following a method safely, measuring precisely, using tools.|اتّباع طريقة بأمان، والقياس بدقّة، واستعمال الأدوات.',
    ['Science labs at school|مختبرات العلوم في المدرسة', 'Science fair projects|مشاريع معرض العلوم', 'Repairing and building things at home|التصليح والبناء في البيت'],
    ['Medicine, pharmacy, chemistry, engineering|الطب والصيدلة والكيمياء والهندسة', 'Technical and vocational routes|المسارات المهنية والتقنية']),
  /* digital */
  S('coding', 'digital', 'Coding basics|أساسيات البرمجة', 'Giving step-by-step instructions to a computer (Scratch, Python, web).|إعطاء الحاسوب تعليمات خطوة بخطوة (Scratch وPython والويب).',
    ['ICT / computer classes|حصص المعلوماتية', 'Free courses: Code.org, Khan Academy, CS50|دورات مجانية: Code.org وKhan Academy وCS50', 'Robotics club|نادي الروبوتات'],
    ['Computing and engineering majors|اختصاصات الحوسبة والهندسة', 'Data work in science, business and health|العمل مع البيانات في العلوم والأعمال والصحة']),
  S('office', 'digital', 'Office tools & spreadsheets|أدوات المكتب والجداول', 'Writing documents, making slides, organising data in Excel or Google Sheets.|كتابة المستندات، صنع العروض، تنظيم البيانات في Excel أو Google Sheets.',
    ['School projects and presentations|مشاريع وعروض المدرسة', 'Keeping records for a club or team|تسجيل معلومات لنادٍ أو فريق', 'Free tutorials online|دروس مجانية على الإنترنت'],
    ['Every university course: reports and presentations|كل مواد الجامعة: التقارير والعروض', 'Almost every office job|تقريبًا كل وظيفة مكتبية']),
  S('design', 'digital', 'Digital design & media|التصميم والإعلام الرقمي', 'Making posters, videos and simple graphics (Canva, CapCut, Figma).|صنع ملصقات وفيديوهات ورسوم بسيطة (Canva وCapCut وFigma).',
    ['School newspaper or social page|صحيفة المدرسة أو صفحتها', 'Event posters for clubs|ملصقات نشاطات النوادي', 'Your own creative projects|مشاريعك الإبداعية الخاصة'],
    ['Design, media and marketing majors|اختصاصات التصميم والإعلام والتسويق', 'Presenting any project well|عرض أيّ مشروع بشكل جيد']),
  S('ai', 'digital', 'Using AI tools responsibly|استعمال أدوات الذكاء الاصطناعي بمسؤولية', 'Asking good questions, checking answers, never copying without understanding.|طرح أسئلة جيدة، والتحقّق من الأجوبة، وعدم النسخ من دون فهم.',
    ['Class activities about AI|نشاطات صفية عن الذكاء الاصطناعي', 'Checking AI answers against a book or source|التحقّق من أجوبة الذكاء الاصطناعي من كتاب أو مصدر'],
    ['Research and studying at university|البحث والدراسة في الجامعة', 'Most future jobs|معظم وظائف المستقبل']),
  /* people */
  S('communication', 'people', 'Communication|التواصل', 'Explaining clearly, listening well, writing a clear message.|الشرح بوضوح، والإصغاء جيدًا، وكتابة رسالة واضحة.',
    ['Class discussions and presentations|نقاشات الصف والعروض', 'Debate club or Model UN|نادي المناظرات أو نموذج الأمم المتحدة', 'Explaining lessons to classmates|شرح الدروس للزملاء'],
    ['Group projects and presentations at university|المشاريع الجماعية والعروض في الجامعة', 'Interviews, meetings, every job|المقابلات والاجتماعات وكل وظيفة']),
  S('teamwork', 'people', 'Teamwork|العمل الجماعي', 'Sharing tasks, respecting others, helping the team finish.|توزيع المهام واحترام الآخرين ومساعدة الفريق على الإنجاز.',
    ['Team sports|الرياضات الجماعية', 'Scouts|الكشّافة', 'Group projects in class|المشاريع الجماعية في الصف'],
    ['Group work and labs at university|العمل الجماعي والمختبرات في الجامعة', 'Hospitals, engineering sites, companies|المستشفيات وورش الهندسة والشركات']),
  S('leadership', 'people', 'Leadership|القيادة', 'Guiding a group, taking responsibility, motivating others.|توجيه مجموعة، وتحمّل المسؤولية، وتحفيز الآخرين.',
    ['Scouts (patrol leader)|الكشّافة (قائد الطليعة)', 'Student council or class representative|مجلس الطلاب أو ممثّل الصف', 'Team captain|قائد الفريق', 'Organising a school event|تنظيم نشاط مدرسي'],
    ['Leading group work at university|قيادة العمل الجماعي في الجامعة', 'Student clubs, then managing teams at work|النوادي الطلابية ثم إدارة الفرق في العمل']),
  S('empathy', 'people', 'Empathy & care|التعاطف والرعاية', 'Understanding how others feel and responding kindly.|فهم مشاعر الآخرين والتجاوب معهم بلطف.',
    ['Volunteering (children, elderly, refugees)|التطوّع (أطفال، مسنّون، لاجئون)', 'Peer support and buddy programmes|برامج دعم الزملاء والمرافقة'],
    ['Health, education, psychology, social work|الصحة والتعليم وعلم النفس والعمل الاجتماعي', 'Working with clients and patients|العمل مع الزبائن والمرضى']),
  S('conflict', 'people', 'Solving disagreements|حلّ الخلافات', 'Calming a conflict, finding a fair solution, negotiating.|تهدئة الخلاف وإيجاد حلّ عادل والتفاوض.',
    ['Helping friends after an argument|مساعدة الأصدقاء بعد خلاف', 'Student council and team roles|مجلس الطلاب وأدوار الفريق', 'Debate and Model UN|المناظرات ونموذج الأمم المتحدة'],
    ['Team projects that go wrong|المشاريع الجماعية حين تتعثّر', 'Law, management, diplomacy|الحقوق والإدارة والدبلوماسية']),
  S('speaking', 'people', 'Public speaking|التحدّث أمام الجمهور', 'Presenting to a group with confidence and a clear plan.|التقديم أمام مجموعة بثقة وخطة واضحة.',
    ['School assemblies and presentations|الطابور المدرسي والعروض', 'Debate club, Model UN, theatre|نادي المناظرات، نموذج الأمم المتحدة، المسرح'],
    ['Presentations in every university course|العروض في كل مواد الجامعة', 'Interviews, teaching, law, business|المقابلات والتعليم والحقوق والأعمال']),
  /* thinking */
  S('critical', 'thinking', 'Critical thinking|التفكير النقدي', 'Checking if information is true, comparing sources, giving reasons.|التحقّق من صحّة المعلومة، ومقارنة المصادر، وإعطاء الأسباب.',
    ['History and philosophy lessons|دروس التاريخ والفلسفة', 'Debate club|نادي المناظرات', 'Checking news before sharing it|التحقّق من الأخبار قبل مشاركتها'],
    ['Essays and research at university|المقالات والأبحاث في الجامعة', 'Medicine, law, journalism, science|الطب والحقوق والصحافة والعلوم']),
  S('problem', 'thinking', 'Problem solving|حلّ المشكلات', 'Breaking a problem into steps and trying solutions until one works.|تقسيم المشكلة إلى خطوات وتجربة حلول حتى ينجح أحدها.',
    ['Maths and science problems|مسائل الرياضيات والعلوم', 'Robotics and coding clubs|نوادي الروبوتات والبرمجة', 'Puzzles, chess, strategy games|الألغاز والشطرنج وألعاب الاستراتيجية'],
    ['Engineering, computing, medicine|الهندسة والحوسبة والطب', 'Any job where things break|أيّ عمل تتعطّل فيه الأشياء']),
  S('creativity', 'thinking', 'Creativity|الإبداع', 'Finding new ideas and new ways to do things.|إيجاد أفكار جديدة وطرق جديدة لأداء الأشياء.',
    ['Art, music, writing, theatre|الفن والموسيقى والكتابة والمسرح', 'Science fair and inventions|معرض العلوم والاختراعات', 'Designing a club event|تصميم نشاط لنادٍ'],
    ['Design, architecture, media, marketing|التصميم والعمارة والإعلام والتسويق', 'New solutions in any field|حلول جديدة في أيّ مجال']),
  S('research', 'thinking', 'Research skills|مهارات البحث', 'Finding reliable sources, taking notes, citing where information comes from.|إيجاد مصادر موثوقة، وتدوين الملاحظات، وذكر مصدر المعلومة.',
    ['School research projects|مشاريع البحث المدرسية', 'Library and online databases|المكتبة وقواعد البيانات على الإنترنت', 'Model UN preparation|التحضير لنموذج الأمم المتحدة'],
    ['Every university essay and project|كل مقال ومشروع في الجامعة', 'Master, PhD and research jobs|الماستر والدكتوراه ووظائف البحث']),
  /* self-management */
  S('time', 'self', 'Time management|إدارة الوقت', 'Planning your week, starting early, meeting deadlines.|تخطيط أسبوعك، والبدء باكرًا، والالتزام بالمواعيد.',
    ['A study timetable|جدول للدراسة', 'Balancing sport, clubs and school|الموازنة بين الرياضة والنوادي والمدرسة', 'Part-time or summer work|العمل الجزئي أو الصيفي'],
    ['University: 5 courses and many deadlines at once|الجامعة: 5 مواد ومواعيد كثيرة معًا', 'Every job|كل وظيفة']),
  S('organisation', 'self', 'Organisation|التنظيم', 'Keeping your files, tasks and things in order.|إبقاء ملفاتك ومهامك وأغراضك مرتّبة.',
    ['Your own notes and files|ملاحظاتك وملفاتك', 'Organising a trip or an event|تنظيم رحلة أو نشاط', 'Being treasurer or secretary of a club|أن تكون أمين صندوق أو أمين سرّ نادٍ'],
    ['Studying at university|الدراسة في الجامعة', 'Office work, health, engineering projects|العمل المكتبي والصحة والمشاريع الهندسية']),
  S('resilience', 'self', 'Resilience|المرونة النفسية والصمود', 'Coming back after a bad grade or a failure, and trying again.|النهوض بعد علامة سيئة أو فشل، والمحاولة من جديد.',
    ['Sports and competitions (losing and trying again)|الرياضة والمسابقات (الخسارة والمحاولة مجددًا)', 'Scouts camps and challenges|مخيّمات الكشّافة وتحدّياتها', 'Learning an instrument|تعلّم آلة موسيقية'],
    ['Hard first year at university|السنة الجامعية الأولى الصعبة', 'Medicine, engineering, any long path|الطب والهندسة وأيّ طريق طويل']),
  S('adaptability', 'self', 'Adaptability|القدرة على التكيّف', 'Adjusting to new places, people and rules.|التأقلم مع أماكن وأشخاص وقواعد جديدة.',
    ['Moving countries or schools (you already did it in Ghana!)|الانتقال بين البلدان أو المدارس (وقد فعلت ذلك في غانا!)', 'Exchange trips and camps|رحلات التبادل والمخيّمات', 'Working with new teams|العمل مع فرق جديدة'],
    ['Studying abroad|الدراسة في الخارج', 'A job market that keeps changing|سوق عمل يتغيّر باستمرار']),
  /* languages */
  S('english', 'lang', 'English|اللغة الإنجليزية', 'Reading, writing and speaking English at an academic level.|القراءة والكتابة والتحدّث بالإنجليزية بمستوى أكاديمي.',
    ['English classes and reading books|حصص الإنجليزية وقراءة الكتب', 'Watching and listening without subtitles|المشاهدة والاستماع بلا ترجمة', 'IELTS / TOEFL preparation|التحضير لـ IELTS أو TOEFL'],
    ['AUB, LAU and most universities abroad|AUB وLAU ومعظم جامعات الخارج', 'Science, tech and business everywhere|العلوم والتكنولوجيا والأعمال في كل مكان']),
  S('french', 'lang', 'French|اللغة الفرنسية', 'Using French for study and work.|استعمال الفرنسية للدراسة والعمل.',
    ['French classes|حصص الفرنسية', 'DELF exams|امتحانات DELF', 'French books, films and podcasts|كتب وأفلام وبودكاست بالفرنسية'],
    ['USJ, the Lebanese University, France, Canada (Québec)|USJ والجامعة اللبنانية وفرنسا وكندا (كيبيك)', 'Law and medicine in Lebanon|الحقوق والطب في لبنان']),
  S('arabic', 'lang', 'Arabic writing|الكتابة بالعربية', 'Writing clear, correct Arabic for official and professional use.|كتابة عربية واضحة وصحيحة للاستعمال الرسمي والمهني.',
    ['Arabic classes|حصص العربية', 'Writing articles for the school newspaper|كتابة مقالات لصحيفة المدرسة'],
    ['Law, media, education, government in Lebanon|الحقوق والإعلام والتعليم والدولة في لبنان', 'Translation|الترجمة'])
];

/* activities → skills they build */
const A = (icon, name, ids) => ({ icon, name: sp(name), ids });
const activities = [
  A('tent', 'Scouts|الكشّافة', ['leadership', 'teamwork', 'resilience', 'organisation', 'adaptability']),
  A('volleyball', 'Team sports|الرياضات الجماعية', ['teamwork', 'resilience', 'time', 'leadership']),
  A('mic', 'Debate club / Model UN|نادي المناظرات / نموذج الأمم المتحدة', ['speaking', 'critical', 'research', 'communication', 'conflict']),
  A('bot', 'Robotics / coding club|نادي الروبوتات / البرمجة', ['coding', 'problem', 'teamwork', 'creativity']),
  A('heart', 'Volunteering|التطوّع', ['empathy', 'communication', 'teamwork', 'adaptability']),
  A('vote', 'Student council|مجلس الطلاب', ['leadership', 'conflict', 'speaking', 'organisation']),
  A('newspaper', 'School newspaper / media|صحيفة المدرسة / الإعلام', ['design', 'communication', 'arabic', 'english', 'research']),
  A('drama', 'Art, music, theatre|الفن والموسيقى والمسرح', ['creativity', 'resilience', 'speaking']),
  A('microscope', 'Science fair|معرض العلوم', ['lab', 'research', 'problem', 'creativity']),
  A('briefcase', 'Part-time or summer job|عمل جزئي أو صيفي', ['time', 'communication', 'organisation', 'numeracy']),
  A('globe', 'Free online courses|دورات مجانية على الإنترنت', ['coding', 'office', 'ai', 'english']),
  A('library', 'Tutoring classmates|مساعدة الزملاء في الدروس', ['communication', 'empathy', 'speaking'])
];

window.ATLAS.skills = { types, skills, activities };
})();
