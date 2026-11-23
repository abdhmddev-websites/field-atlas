/* Field Atlas — "How university works": credits, semesters, GPA, falling behind and re-sits.
 * Typical figures only: every university publishes its own rules (catalogue). Fact register id U1.
 * Every visible string is bilingual: t('English', 'العربية'), L('en|ar', ...).
 */
(function () {
const t = (en, ar) => ({ en, ar });
const L = (...xs) => xs.map(s => { const [en, ar] = s.split('|'); return { en, ar }; });

window.ATLAS.uni = {
  title: t('How university works', 'كيف تعمل الجامعة'),
  intro: t('Before choosing a major, understand how a university year runs: credits, semesters, the GPA, and what happens when you fail a course. The numbers below are typical; each university publishes its own rules in its catalogue.',
           'قبل أن تختار اختصاصك، افهم كيف تسير السنة الجامعية: الأرصدة (الكريدت)، والفصول (السيمستر)، والمعدّل (GPA)، وماذا يحدث إذا رسبت في مادة. الأرقام أدناه تقريبية؛ كل جامعة تنشر قوانينها في دليلها (الكاتالوغ).'),

  /* 1. what is a credit */
  creditTitle: t('1. What is a credit?', '1. ما هو الكريدت؟'),
  credit: [
    { sys: t('American system (AUB, LAU, NDU…, and the US)', 'النظام الأميركي (AUB وLAU وNDU… والولايات المتحدة)'),
      pts: L('1 credit = about 1 hour of class per week, for the whole semester (about 15 weeks).|كريدت واحد = نحو ساعة صف في الأسبوع، طوال السيمستر (نحو 15 أسبوعًا).',
             'Most courses are 3 credits (3 hours a week). A lab is often 1 credit; some science courses are 4.|معظم المواد 3 كريدت (3 ساعات في الأسبوع). المختبر غالبًا كريدت واحد، وبعض مواد العلوم 4.',
             'For each hour in class, count about 2 hours of study at home.|مقابل كل ساعة في الصف، احسب نحو ساعتين من الدرس في البيت.',
             'Full-time = at least 12 credits a semester, usually up to 18 (5–6 courses). At LAU, students with a GPA of 3.00 or more may take up to 21.|الدوام الكامل = 12 كريدت على الأقل في السيمستر، وعادةً حتى 18 (5–6 مواد). في LAU، يمكن لمن معدّله 3.00 وما فوق أن يأخذ حتى 21.') },
    { sys: t('LMD system (Lebanese University, USJ…, and Europe)', 'نظام LMD (الجامعة اللبنانية وUSJ… وأوروبا)'),
      pts: L('Credits count your total work (class + study + projects): 1 credit ≈ 25–30 hours of work.|الكريدت يحسب كل عملك (صف + دراسة + مشاريع): كريدت واحد ≈ 25–30 ساعة عمل.',
             'One semester = 30 credits, one year = 60 credits.|السيمستر = 30 كريدت، والسنة = 60 كريدت.',
             'So one course can be bigger: 2, 4, 6 or even 8 credits, depending on how much work it needs.|لذلك قد تكون المادة الواحدة أكبر: 2 أو 4 أو 6 أو حتى 8 كريدت، حسب حجم العمل فيها.',
             'That is why an LMD course of "6 credits" is not twice as hard as an American course of "3 credits": the units are different.|لهذا فإن مادة LMD من «6 كريدت» ليست أصعب مرّتين من مادة أميركية من «3 كريدت»: الوحدة مختلفة.') }
  ],

  /* 2. how many credits for a degree */
  degTitle: t('2. How many credits for a degree?', '2. كم كريدت تحتاج الشهادة؟'),
  degHead: [t('Degree', 'الشهادة'), t('Credits per semester', 'كريدت في السيمستر'), t('Semesters', 'عدد السيمسترات'), t('Total credits', 'مجموع الكريدت'), t('Years', 'السنوات')],
  deg: [
    { d: t('Bachelor in the US', 'بكالوريوس في الولايات المتحدة'), how: t('Freshman → Sophomore → Junior → Senior', 'Freshman ← Sophomore ← Junior ← Senior'), sem: '≈ 15', n: '8', tot: '≈ 120', y: '4' },
    { d: t('American-style bachelor in Lebanon, with the Lebanese Bac', 'بكالوريوس أميركي في لبنان مع الشهادة اللبنانية'), how: t('You start at Sophomore (LAU: at least 92 credits)', 'تبدأ من سنة Sophomore (LAU: 92 كريدت على الأقل)'), sem: '≈ 15', n: '6', tot: '90–100', y: '3' },
    { d: t('The same bachelor with an American high-school diploma', 'البكالوريوس نفسه مع شهادة ثانوية أميركية'), how: t('Freshman year (≈ 30) + the bachelor (≈ 92) = ≈ 122 (LAU: at least 122)', 'سنة Freshman (≈ 30) + البكالوريوس (≈ 92) = ≈ 122 (LAU: 122 على الأقل)'), sem: '≈ 15', n: '8', tot: '≈ 122', y: '4' },
    { d: t('Licence (LMD bachelor, e.g. Lebanese University)', 'الإجازة بنظام LMD (مثل الجامعة اللبنانية)'), how: t('S1 → S6', 'من S1 إلى S6'), sem: '30', n: '6', tot: '180', y: '3' },
    { d: t('Master (LMD)', 'الماستر (LMD)'), how: t('After the Licence: M1 + M2', 'بعد الإجازة: M1 + M2'), sem: '30', n: '4', tot: '120', y: '2' },
    { d: t('Master (American-style)', 'الماستر (النظام الأميركي)'), how: t('After the bachelor; often with a thesis or a project', 'بعد البكالوريوس؛ غالبًا مع رسالة أو مشروع'), sem: '9–12', n: '2–4', tot: '30–36', y: '1–2' }
  ],
  unitsTitle: t('Why 120 credits in one master and 30–36 in the other?', 'لماذا 120 كريدت في ماستر و30–36 في آخر؟'),
  units: t('Not because one is four times longer: both take about 2 years. An LMD credit counts all your work (class + study), so a year = 60. An American credit counts class hours, so a full year ≈ 30. Compare years, not credit numbers.',
           'ليس لأن أحدهما أطول بأربع مرات: كلاهما نحو سنتين. كريدت LMD يحسب كل عملك (صف + دراسة)، فالسنة = 60. والكريدت الأميركي يحسب ساعات الصف، فالسنة الكاملة ≈ 30. قارن السنوات، لا أرقام الكريدت.'),
  loadTitle: t('How many credits can a student take each semester?', 'كم كريدت يحقّ للطالب أن يأخذ في كل سيمستر؟'),
  load: L('American system: at least 12 to be full-time; most students take about 15 (5 courses).|النظام الأميركي: 12 على الأقل ليكون دوامًا كاملًا؛ ومعظم الطلاب يأخذون نحو 15 (5 مواد).',
          'Maximum usually 18. At LAU, up to 21 with a GPA of 3.00 or more; 13 at most on probation.|الحدّ الأقصى عادةً 18. في LAU حتى 21 لمن معدّله 3.00 وما فوق؛ و13 كحدّ أقصى عند الإنذار.',
          'Summer: up to 9 (3 courses) at LAU.|الصيف: حتى 9 (3 مواد) في LAU.',
          'LMD system: the programme fixes about 30 credits per semester.|نظام LMD: البرنامج يحدّد نحو 30 كريدت في السيمستر.'),
  freshTitle: t('What is the Freshman year?', 'ما هي سنة الـ Freshman؟'),
  fresh: t('In the US, the 4 years have names: Freshman (1st), Sophomore (2nd), Junior (3rd), Senior (4th). In Lebanon, American-style universities usually let Lebanese Bac holders start directly at Sophomore. Students with an American high-school diploma (and some other foreign diplomas) usually do the Freshman year first: about 30 credits of general courses (English, math, sciences, humanities).',
           'في الولايات المتحدة للسنوات الأربع أسماء: Freshman (الأولى)، Sophomore (الثانية)، Junior (الثالثة)، Senior (الرابعة). في لبنان، الجامعات ذات النظام الأميركي تسمح عادةً لحاملي الشهادة اللبنانية بالبدء مباشرة من سنة Sophomore. أمّا من يحمل شهادة ثانوية أميركية (وبعض الشهادات الأجنبية الأخرى) فيبدأ عادةً بسنة Freshman: نحو 30 كريدت من مواد عامة (إنجليزية، رياضيات، علوم، إنسانيات).'),

  /* 3. semesters */
  semTitle: t('3. The year: 3 semesters', '3. السنة: 3 فصول (سيمستر)'),
  semText: t('A semester is one half of the main university year. You register for new courses each semester, and you get grades at its end.',
             'السيمستر هو نصف السنة الجامعية الأساسية. تسجّل موادًا جديدة كل سيمستر، وتحصل على علاماتك في آخره.'),
  sem: [
    { name: t('Fall', 'الخريف (Fall)'), when: t('Late Aug / Sept → Dec / Jan', 'آخر آب / أيلول ← كانون الأول / كانون الثاني'), what: t('Main semester, about 15 weeks + final exams (LAU Fall 2026: finals 8–18 Dec).', 'سيمستر أساسي، نحو 15 أسبوعًا + الامتحانات النهائية (LAU خريف 2026: الامتحانات 8–18 كانون الأول).') },
    { name: t('Spring', 'الربيع (Spring)'), when: t('Jan / Feb → May / June', 'كانون الثاني / شباط ← أيار / حزيران'), what: t('Main semester, same length as Fall.', 'سيمستر أساسي، بطول الخريف نفسه.') },
    { name: t('Summer', 'الصيف (Summer)'), when: t('June → Aug', 'حزيران ← آب'), what: t('Short and optional (about 6–8 weeks). At LAU, 9 credits at most (3 courses). Used to catch up or to move faster.', 'قصير واختياري (نحو 6–8 أسابيع). في LAU، 9 كريدت كحدّ أقصى (3 مواد). يُستعمَل للّحاق أو للتقدّم أسرع.') }
  ],
  semLmd: t('The Lebanese University has 2 semesters a year, about 15 weeks each (the Licence = S1 to S6), and a second exam session for failed courses.',
            'للجامعة اللبنانية سيمستران في السنة، نحو 15 أسبوعًا لكل منهما (الإجازة = من S1 إلى S6)، ودورة امتحانات ثانية للمواد التي رسبت فيها.'),
  weekTitle: t('A normal week with 15 credits', 'أسبوع عادي مع 15 كريدت'),
  week: t('5 courses × 3 hours = 15 hours in class + about 30 hours of study, homework and projects = a full-time job.',
          '5 مواد × 3 ساعات = 15 ساعة في الصف + نحو 30 ساعة دراسة وفروض ومشاريع = دوام عمل كامل.'),

  /* 4. GPA */
  gpaTitle: t('4. The GPA (grade point average)', '4. المعدّل GPA'),
  gpaText: t('In the American system each letter grade has points. Your GPA is the average of these points, weighted by credits: a 4-credit course counts more than a 1-credit lab. The usual scale goes from 0 to 4.0.',
             'في النظام الأميركي لكل علامة حرفية نقاط. المعدّل GPA هو متوسّط هذه النقاط، موزونًا بالكريدت: المادة ذات 4 كريدت تُحسب أكثر من مختبر بكريدت واحد. السلّم المعتاد من 0 إلى 4.0.'),
  scale: [['A', '4.0'], ['A−', '3.67'], ['B+', '3.33'], ['B', '3.0'], ['B−', '2.67'], ['C+', '2.33'], ['C', '2.0'], ['C−', '1.67'], ['D+', '1.33'], ['D', '1.0'], ['F', '0']],
  formula: t('GPA = (points × credits of each course, added together) ÷ (all credits)', 'المعدّل = (نقاط كل مادة × كريدتها، مجموعةً) ÷ (مجموع الكريدت)'),
  example: t('Example: A in a 3-credit course (4 × 3 = 12) + B in a 4-credit course (3 × 4 = 12) + C in a 3-credit course (2 × 3 = 6) → 30 ÷ 10 credits = GPA 3.0.',
             'مثال: A في مادة من 3 كريدت (4 × 3 = 12) + B في مادة من 4 كريدت (3 × 4 = 12) + C في مادة من 3 كريدت (2 × 3 = 6) ← 30 ÷ 10 كريدت = معدّل 3.0.'),
  gpaNotes: L('Semester GPA = only this semester. Cumulative GPA = all your semesters together.|معدّل السيمستر = هذا السيمستر فقط. المعدّل التراكمي = كل السيمسترات معًا.',
              'A high semester GPA → honour lists (at LAU: Honor List from 3.20, Distinguished List from 3.50). Cumulative GPA below 2.00 → academic probation (a warning).|معدّل سيمستر مرتفع ← لوائح الشرف (في LAU: Honor List من 3.20، وDistinguished List من 3.50). معدّل تراكمي تحت 2.00 ← إنذار أكاديمي (probation).',
              'Not every university uses letters: some give marks out of 100. At the Lebanese University the mark and the pass line depend on the faculty (e.g. 50/100 in Law).|ليست كل الجامعات تستعمل الأحرف: بعضها يضع العلامات على 100. في الجامعة اللبنانية تختلف العلامة وحدّ النجاح بحسب الكلية (مثلًا 50/100 في الحقوق).'),
  calcTitle: t('Try it: GPA calculator', 'جرّب: حاسبة المعدّل'),
  calcCourse: t('Course', 'المادة'), calcCredits: t('Credits', 'الكريدت'), calcGrade: t('Grade', 'العلامة'),
  calcAdd: t('Add a course', 'أضف مادة'), calcRemove: t('Remove', 'احذف'), calcResult: t('Your GPA', 'معدّلك'), calcTotal: t('Total credits', 'مجموع الكريدت'),

  /* 5. falling behind, re-sits, catching up */
  lateTitle: t('5. Falling behind, re-sits and catching up', '5. التأخّر والملحق واللحاق'),
  late: [
    { sys: t('American system', 'النظام الأميركي'),
      pts: L('If you fail (F), there is usually no re-sit exam: you take the whole course again in a later semester or in summer. At LAU only the latest grade counts in your GPA.|إذا رسبت (F)، لا يوجد عادةً ملحق: تعيد المادة كاملة في سيمستر لاحق أو في الصيف. في LAU تُحسب العلامة الأخيرة فقط في معدّلك.',
             'Some courses need another one first (a prerequisite). Failing one can push the next course, and sometimes your graduation, by a semester.|بعض المواد تتطلّب مادة قبلها (prerequisite). الرسوب في واحدة قد يؤخّر المادة التالية، وأحيانًا تخرّجك، سيمسترًا كاملًا.',
             'You can withdraw from a course before a deadline (at LAU: until week 10) and get a W: no F, but no credits either.|يمكنك الانسحاب من مادة قبل موعد محدّد (في LAU: حتى الأسبوع العاشر) فتحصل على W: لا رسوب، لكن لا كريدت أيضًا.',
             'Cumulative GPA under 2.00 → probation: fewer courses allowed (LAU: 13 credits at most); if it continues for two semesters, you can be suspended.|معدّل تراكمي تحت 2.00 ← إنذار: يُسمح لك بمواد أقل (LAU: 13 كريدت كحدّ أقصى)؛ وإذا استمر سيمسترين، قد تُوقَف عن الدراسة.') },
    { sys: t('LMD system (e.g. Lebanese University)', 'نظام LMD (مثل الجامعة اللبنانية)'),
      pts: L('If you fail a course in the first session, you sit it again in the second session (the re-sit, called "mulhaq" in Lebanon), usually in June–July. Your continuous-assessment mark is kept.|إذا رسبت في مادة في الدورة الأولى، تقدّمها مجددًا في الدورة الثانية (الملحق)، غالبًا في حزيران–تموز. وتبقى علامة التقييم المستمر لك.',
             'Credits you pass stay yours: you do not repeat them.|الكريدت التي تنجح فيها تبقى لك: لا تعيدها.',
             'Depending on the faculty, you may move to the next year while owing a few credits, but you must pass them later.|بحسب الكلية، قد تنتقل إلى السنة التالية وعليك بعض الكريدت، لكن يجب أن تنجح فيها لاحقًا.',
             'Too many missing credits → you repeat the year. Each faculty has its own internal rules: check them.|إذا نقصك عدد كبير من الكريدت ← تعيد السنة. لكل كلية نظامها الداخلي: راجعه.') }
  ],
  catchTitle: t('How students catch up', 'كيف يلحق الطلاب'),
  catch: L('Summer courses.|مواد الصيف.', 'A heavier semester (more credits), if your GPA allows it and your advisor agrees.|سيمستر أثقل (كريدت أكثر)، إذا سمح معدّلك ووافق مرشدك.',
           'Meet your academic advisor every semester and plan the order of your courses.|قابل مرشدك الأكاديمي كل سيمستر وخطّط ترتيب موادك.',
           'Changing major late can cost credits: choose with care, and early.|تغيير الاختصاص متأخرًا قد يُضيّع كريدت: اختر بعناية، وباكرًا.'),

  /* 6. words */
  wordsTitle: t('6. Words you will hear', '6. كلمات ستسمعها'),
  wordsSub: t('Your studies', 'دراستك'),
  words: [
    ['Major', t('Your main field (e.g. Computer Science).', 'اختصاصك الأساسي (مثل علوم الحاسوب).')],
    ['Minor', t('A second, smaller field (about 15–18 credits).', 'اختصاص ثانٍ أصغر (نحو 15–18 كريدت).')],
    ['Core / General education', t('Courses every student takes: English, Arabic, math, humanities…', 'مواد يأخذها كل طالب: إنجليزية، عربية، رياضيات، إنسانيات…')],
    ['Elective', t('A course you choose freely from a list.', 'مادة تختارها بحرية من لائحة.')],
    ['Prerequisite', t('A course you must pass before another one.', 'مادة يجب أن تنجح فيها قبل مادة أخرى.')],
    ['Syllabus', t('The plan of a course: topics, exams, how you are graded.', 'خطة المادة: المواضيع والامتحانات وطريقة التقييم.')],
    ['Add / Drop', t('The first days of a semester, when you can change your courses.', 'الأيام الأولى من السيمستر، حين يمكنك تغيير موادك.')],
    ['Transcript', t('The official list of all your courses and grades.', 'اللائحة الرسمية لكل موادك وعلاماتك.')],
    ['Internship', t('Work experience in a company during your studies, often in summer.', 'خبرة عمل في شركة خلال دراستك، غالبًا في الصيف.')]
  ],
  peopleTitle: t('People at university', 'أشخاص في الجامعة'),
  people: [
    ['President', t('Leads the whole university.', 'يرأس الجامعة كلها.')],
    ['Provost', t('Leads everything academic: programmes, teachers, quality.', 'مسؤول عن كل ما هو أكاديمي: البرامج والأساتذة والجودة.')],
    ['Dean', t('Head of a faculty or school (e.g. the Dean of Engineering).', 'رئيس كلية (مثل عميد كلية الهندسة).')],
    ['Chairperson', t('Head of a department inside a faculty (e.g. the Computer Science department).', 'رئيس قسم داخل الكلية (مثل قسم علوم الحاسوب).')],
    ['Professor / Instructor', t('Teaches your courses; professors also do research.', 'يدرّسك المواد؛ والأستاذ الجامعي يقوم بالأبحاث أيضًا.')],
    ['Teaching assistant (TA)', t('Often a master or PhD student who helps in labs and tutorials.', 'غالبًا طالب ماستر أو دكتوراه يساعد في المختبرات وحصص التمارين.')],
    ['Academic advisor', t('The teacher who helps you plan your courses every semester.', 'الأستاذ الذي يساعدك في تخطيط موادك كل سيمستر.')],
    ['Registrar', t('The office that registers your courses and issues transcripts.', 'المكتب الذي يسجّل موادك ويصدر كشوف العلامات.')],
    ['Dean of Students', t('Looks after student life: clubs, activities, behaviour, support.', 'يهتمّ بحياة الطلاب: الأندية والنشاطات والسلوك والدعم.')]
  ],
  placesTitle: t('Places and offices you can use', 'أماكن ومكاتب يمكنك استعمالها'),
  places: [
    ['Admissions Office', t('Where you apply and ask questions before you enter.', 'حيث تقدّم طلبك وتطرح أسئلتك قبل الدخول.')],
    ['Financial Aid Office', t('Scholarships, discounts and student jobs.', 'المنح والحسومات وفرص العمل للطلاب.')],
    ['Career Center', t('Help with your CV, internships and finding a job.', 'مساعدة في سيرتك الذاتية والتدريب وإيجاد عمل.')],
    ['Counseling Center', t('Free, private support when you feel stressed or lost.', 'دعم مجاني وسرّي حين تشعر بالضغط أو الضياع.')],
    ['Library', t('Books, databases (like Scopus) and quiet study rooms.', 'كتب وقواعد بيانات (مثل Scopus) وغرف دراسة هادئة.')],
    ['Writing / Learning Center', t('Tutors who help you with essays, math or study skills.', 'مدرّسون يساعدونك في المقالات أو الرياضيات أو مهارات الدراسة.')],
    ['Health Center', t('A clinic on campus for students.', 'عيادة داخل الحرم للطلاب.')],
    ['Clubs & societies', t('Student groups: sports, debate, robotics, volunteering…', 'مجموعات طلابية: رياضة، مناظرات، روبوتات، تطوّع…')]
  ]
};
})();
