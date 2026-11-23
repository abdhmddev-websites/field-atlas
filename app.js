/* Field Atlas — Phase 2 screens: home, faculty, major ladder, degree ladder, roadmap builder. */
(function () {
const { ladder, faculties } = window.ATLAS;
const $ = id => document.getElementById(id);
const { ic, go, ext_ } = window.ATLAS; /* Lucide icons, see icons.js */

/* ───────────── language ───────────── */
let lang = 'ar', langChosen = false;
try { const s = localStorage.getItem('fieldAtlasLocale'); if (s) { lang = s; langChosen = true; } } catch (e) {}
const AR_DIG = /[٠-٩]/g, RANGE = /(\d+(?:[.,]\d+)*)\s*([–-])\s*(\d+(?:[.,]\d+)*)/g;
/* Arabic UI: one digit system (Western, as used in Lebanese schools) and number ranges isolated so "3–4" never reads "4–3" */
const fixAr = s => lang !== 'ar' ? s : String(s).replace(AR_DIG, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/٬/g, ',').replace(RANGE, '\u2066$1$2$3\u2069');
const T = o => fixAr((o && (o[lang] || o.en)) || '');
const MONTHS = ['January|كانون الثاني', 'February|شباط', 'March|آذار', 'April|نيسان', 'May|أيار', 'June|حزيران', 'July|تموز', 'August|آب', 'September|أيلول', 'October|تشرين الأول', 'November|تشرين الثاني', 'December|كانون الأول'];
/* "2026-11" -> "November 2026" (a raw 2026-11 reads backwards inside Arabic text) */
const monthOf = s => { const [y, m] = String(s).split('-'); return MONTHS[m - 1] ? MONTHS[m - 1].split('|')[lang === 'ar' ? 1 : 0] + ' ' + y : s; };
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tx = o => esc(T(o));

const UI = {
  brand: ['Field Atlas', 'أطلس الاختصاصات'],
  navFac: ['Faculties', 'الكليات'], navLadder: ['Degree ladder', 'سلّم الشهادات'], navRoad: ['My roadmap', 'طريقي'],
  switchLang: ['العربية', 'English'],
  heroEyebrow: ['Universities, explained', 'الجامعة ببساطة'],
  heroTitle: ['Find your faculty.<br>Draw your road.', 'اكتشف كليتك.<br>وارسم طريقك.'],
  heroText: ['Open a faculty to see how it thinks, then go deeper: major, master, PhD and career — step by step.', 'افتح كلية لترى كيف يفكّر أهلها، ثم انزل خطوة خطوة: الاختصاص، فالماستر، فالدكتوراه، فالمهنة.'],
  search: ['Search a faculty or major…', 'ابحث عن كلية أو اختصاص…'],
  noResults: ['No match', 'لا نتائج'],
  ladderTitle: ['The ladder every student climbs', 'السلّم الذي يصعده كل طالب'],
  ladderMore: ['Read the full ladder', 'اقرأ السلّم كاملًا'],
  facTitle: ['Faculties', 'الكليات'], facCount: ['faculties', 'كلية'],
  majors: ['majors', 'اختصاص'], soon: ['details soon', 'التفاصيل قريبًا'],
  howThink: ['How this faculty thinks', 'كيف تفكّر هذه الكلية'],
  about: ['About the faculty', 'عن الكلية'], pathHere: ['The path here', 'المسار هنا'],
  schoolSubj: ['Strong school subjects help', 'مواد المدرسة المهمة'],
  majorsHere: ['Majors you can register for', 'الاختصاصات التي يمكنك التسجيل فيها'],
  open: ['Open', 'افتح'],
  whatStudy: ['What you study', 'ماذا تدرس'], school: ['School subjects', 'مواد المدرسة'],
  theLadder: ['The ladder', 'السلّم'],
  bachelor: ['Bachelor', 'الإجازة'], master: ['Master', 'الماستر'], phd: ['PhD', 'الدكتوراه'], career: ['Career', 'المهنة'],
  bachelorTxt: ['The foundations. You can already start working after it.', 'الأساسيات. يمكنك أن تبدأ العمل بعدها مباشرة.'],
  masterTxt: ['Choose one specialization and go deeper.', 'اختر اختصاصًا فرعيًا وتعمّق فيه.'],
  phdTxt: ['Research questions people are working on right now.', 'أسئلة بحثية يعمل عليها الباحثون الآن.'],
  careerTxt: ['Where graduates work.', 'أين يعمل الخرّيجون.'],
  routes: ['Other routes from here', 'طرق أخرى من هنا'],
  years: ['years', 'سنوات'], lmdLabel: ['LMD', 'النظام الفرنسي'], usLabel: ['American', 'النظام الأميركي'],
  research: ['Scopus research area', 'مجال البحث في Scopus'],
  buildMine: ['Build my roadmap from here', 'ابنِ طريقي من هنا'],
  backFac: ['Back to the faculty', 'العودة إلى الكلية'],
  outlineNote: ['Full details for this major (master, PhD, careers) are coming in the next update. You can still put it in your roadmap and write your own choices.', 'تفاصيل هذا الاختصاص الكاملة (الماستر والدكتوراه والمهن) ستُضاف قريبًا. يمكنك مع ذلك وضعه في طريقك وكتابة خياراتك بنفسك.'],
  ladderPageTitle: ['The degree ladder', 'سلّم الشهادات'],
  abbrTitle: ['What do the letters mean?', 'ماذا تعني هذه الأحرف؟'],
  abbrSub: ['B = Bachelor, M = Master. The other letters tell you the type of field.', 'B = بكالوريوس، M = ماستر. وباقي الأحرف تدلّ على نوع الاختصاص.'],
  ladderPageText: ['Every university follows a ladder. The names change between systems, but the idea is the same.', 'كل جامعة تتبع سلّمًا. الأسماء تختلف بين الأنظمة، لكن الفكرة واحدة.'],
  careful: ['Careful', 'انتبه'], technical: ['Technical route', 'المسار المهني'],
  rmTitle: ['Build my roadmap', 'ابنِ طريقي'],
  rmText: ['Choose step by step. Your card updates live as you choose — print it or save it as PDF at the end.', 'اختر خطوة خطوة. بطاقتك تتحدّث مباشرة مع كل اختيار — اطبعها أو احفظها PDF في النهاية.'],
  s0: ['Your name', 'اسمك'], namePh: ['Write your name', 'اكتب اسمك'],
  s1: ['Which faculty?', 'أيّ كلية؟'], faculty: ['Faculty', 'الكلية'], s2: ['Which major?', 'أيّ اختصاص؟'],
  s3: ['After the bachelor', 'بعد الإجازة'], s4: ['After the master', 'بعد الماستر'], s5: ['Your dream job', 'وظيفة أحلامك'],
  work: ['Start working directly', 'أبدأ العمل مباشرة'],
  ownMaster: ['Write the master you want', 'اكتب الماستر الذي تريده'],
  ownPhd: ['Write your research topic', 'اكتب موضوع بحثك'],
  ownCareer: ['Write the job you want', 'اكتب الوظيفة التي تريدها'],
  cardTitle: ['My roadmap', 'طريقي'], student: ['Student', 'الطالب'],
  notChosen: ['not chosen yet', 'لم يُختر بعد'], skipped: ['skipped — straight to work', 'تخطّيته — إلى العمل مباشرة'],
  thinkLike: ['How I need to think', 'كيف يجب أن أفكّر'],
  thisYear: ['Focus on this year at school', 'ركّز عليه هذه السنة في المدرسة'],
  print: ['Print / save PDF', 'اطبع / احفظ PDF'], reset: ['Start over', 'ابدأ من جديد'],
  moneyTitle: ['Costs & scholarships', 'الكلفة والمنح'],
  moneyText: ['How much studying costs in each country, and where to find help to pay. Ranges are rough — use them to compare, then check the university\'s own page.', 'كم تكلّف الدراسة في كل بلد، وأين تجد مساعدة على الدفع. الأرقام تقريبية — استعملها للمقارنة ثم تحقّق من صفحة الجامعة نفسها.'],
  costByCountry: ['Cost by country (per year)', 'الكلفة حسب البلد (سنويًا)'], tuition: ['Tuition', 'الأقساط'], living: ['Living', 'المعيشة'], aidT: ['Help', 'المساعدة'],
  scholT: ['Scholarships to know', 'منح يجب أن تعرفها'], moneyTips: ['Money tips', 'نصائح مالية'],
  moneyWarn: ['Fees and scholarship rules change every year — always check the official page.', 'الأقساط وشروط المنح تتغيّر كل سنة — تحقّق دائمًا من الصفحة الرسمية.'],
  moneyLink: ['Costs & scholarships', 'الكلفة والمنح'],
  wsTitle: ['My university plan', 'خطّتي الجامعية'], wsClass: ['Class', 'الصف'],
  wsText: ['A one-page worksheet to print for discussion, or for students without a laptop.', 'ورقة عمل من صفحة واحدة للطباعة، للنقاش أو للطلاب الذين ليس لديهم حاسوب.'],
  printWs: ['Print worksheet', 'اطبع ورقة العمل'],
  wsQ1: ['The big question that excites me', 'السؤال الكبير الذي يثير فضولي'], wsQ1h: ['e.g. "Why does the world work this way?" or "How can I build something that works?"', 'مثل: «لماذا يعمل العالم بهذه الطريقة؟» أو «كيف أبني شيئًا يعمل فعلًا؟»'],
  wsQ2: ['My interest code (3 letters)', 'رمز اهتماماتي (٣ أحرف)'],
  wsQ3: ['3 faculties I like — and why', '٣ كليات أحبها — ولماذا'], wsQ3h: ['One line each.', 'سطر لكل كلية.'],
  wsQ4: ['How people in my favourite faculty think', 'كيف يفكّر أهل كليتي المفضّلة'], wsQ4h: ['Am I like that? Give an example from my life.', 'هل أنا هكذا؟ أعطِ مثالًا من حياتي.'],
  wsQ5: ['My roadmap (Plan A)', 'طريقي (الخطة الأولى)'], wsWhat: ['What', 'ماذا'], wsWhere: ['Where (country / university)', 'أين (البلد / الجامعة)'],
  wsQ7: ['What I must prepare this year', 'ما يجب أن أحضّره هذه السنة'], wsQ7h: ['Subjects, exams, documents, activities.', 'مواد، امتحانات، مستندات، أنشطة.'],
  wsQ8: ['Questions for my family or counselor', 'أسئلة لأهلي أو للمرشد'], wsQ8h: ['Money, country, university, worries…', 'المال، البلد، الجامعة، المخاوف…'],
  wsFoot: ['Explore faculties, take the test and build your roadmap online.', 'استكشف الكليات وقم بالاختبار وابنِ طريقك على الموقع.'],
  footMoney: ['Costs & scholarships', 'الكلفة والمنح'], footWs: ['Printable worksheet', 'ورقة عمل للطباعة'],
  heroTitle2: ['Find your faculty.<br>Draw <span class="grad">your road.</span>', 'اكتشف كليتك.<br>وارسم <span class="grad">طريقك.</span>'],
  heroCta1: ['Take the personality test', 'ابدأ اختبار الشخصية'], heroCta2: ['Build my roadmap', 'ابنِ طريقي'],
  statsLabel: ['Field Atlas in numbers', 'الأطلس بالأرقام'],
  statFac: ['faculties', 'كلية'], statMaj: ['majors explained', 'اختصاصًا مشروحًا'], statCtry: ['study destinations', 'وجهات دراسة'], statQ: ['test questions', 'سؤالًا في الاختبار'],
  featTest: ['Personality test', 'اختبار الشخصية'], featTestTxt: ['60 questions → your 3-letter code and the majors that fit you.', '٦٠ سؤالًا ← رمزك من ٣ أحرف والاختصاصات التي تناسبك.'],
  featPrep: ['Prepare now', 'استعدّ الآن'], featPrepTxt: ['What to do each school year, exams, documents, costs.', 'ماذا تفعل في كل سنة، الامتحانات، المستندات، الكلفة.'],
  featRoad: ['My roadmap', 'طريقي'], featRoadTxt: ['Plan your road country by country, with a Plan B.', 'خطّط طريقك بلدًا بلدًا، مع خطة بديلة.'],
  featLesson: ['Present mode', 'وضع الحصة'], featLessonTxt: ['5 slides for the classroom projector.', '٥ شرائح لشاشة الصف.'],
  majorWord: ['Major', 'اختصاص'], resCount: ['{n} results', 'عدد النتائج: {n}'],
  lockHint: ['Choose the step above first.', 'اختر الخطوة السابقة أولًا.'], progressL: ['Questions answered', 'الأسئلة المُجاب عنها'],
  slideOf: ['Slide {n} of {t}', 'الشريحة {n} من {t}'], slidesNav: ['Slides', 'الشرائح'],
  firstFac: ['First faculty', 'الكلية الأولى'], secondFac: ['Second faculty', 'الكلية الثانية'],
  costLevel: ['Cost level {n} of 5', 'مستوى الكلفة {n} من ٥'], newTab: ['(opens in a new tab)', '(يفتح في تبويب جديد)'],
  motionOn: ['Motion on', 'الحركة مفعّلة'], motionOff: ['Motion off', 'الحركة متوقفة'], motionL: ['Animations', 'الحركة'],
  featTestGo: ['Start the test', 'ابدأ الاختبار'], featPrepGo: ['See the plan', 'افتح الخطة'], featRoadGo: ['Build it', 'ابنِه الآن'], featLessonGo: ['Start presenting', 'ابدأ العرض'],
  pauseStrip: ['Pause the strip', 'أوقف الشريط'], playStrip: ['Play the strip', 'شغّل الشريط'],
  resetAsk: ['Delete this roadmap and start again?', 'حذف هذا الطريق والبدء من جديد؟'],
  matchPct: ['{n}% match', 'تطابق {n}%'], openFac: ['Open the faculty', 'افتح الكلية'], seeCard: ['See my card', 'اعرض بطاقتي'],
  unanswered: ['Not answered yet', 'لم تُجب بعد'], profileT: ['Your profile', 'ملفّك'],
  planTitle: ['45-minute lesson plan', 'خطة الحصة (45 دقيقة)'],
  planText: ['A timed script for the pilot lesson: what to do and say in each part, what to watch, and a printable exit ticket to measure if it worked.', 'سيناريو موقّت لحصة التجربة: ماذا تفعل وتقول في كل جزء، وماذا تلاحظ، وبطاقة خروج للطباعة لقياس النجاح.'],
  planBefore: ['Before the lesson', 'قبل الحصة'], planWatch: ['What to watch during the pilot', 'ماذا تلاحظ أثناء التجربة'], planSuccess: ['It worked if…', 'نجحت الحصة إذا…'],
  planSay: ['Say', 'قل'], minutes: ['min', 'دقيقة'], openScreen: ['Open this screen', 'افتح هذه الشاشة'],
  exitTitle: ['Exit ticket', 'بطاقة الخروج'], printTickets: ['Print exit tickets', 'اطبع بطاقات الخروج'],
  navTest: ['Personality test', 'اختبار الشخصية'],
  testTitle: ['What kind of person are you at work?', 'أيّ نوع من الأشخاص أنت في العمل؟'],
  testText: ['60 short activities. For each one, say how often you have REALLY done it — at school, at home or in your free time. At the end you get your 3 strongest interest types, a profile, and faculties and majors worth exploring: a starting point for a conversation, not an answer.', '60 نشاطًا قصيرًا. لكل نشاط، قل كم مرة فعلته فعلًا — في المدرسة أو البيت أو وقت فراغك. في النهاية تحصل على أقوى ثلاثة أنماط اهتمام لديك، وملفّك، وكليات واختصاصات تستحق الاستكشاف: نقطة بداية للحوار، لا جوابًا نهائيًا.'],
  testHow: ['About 15 minutes · 6 pages of 10|Answer about what you have actually DONE — not what you think a doctor or an engineer would do|There are no right or wrong answers, and no type is better than another|Your answers are saved on this computer: you do not need to take the test again', 'نحو 15 دقيقة · 6 صفحات في كل منها 10|أجب عمّا فعلته فعلًا — لا عمّا تظنّ أن الطبيب أو المهندس سيفعله|لا توجد أجوبة صحيحة أو خاطئة، ولا نمط أفضل من غيره|تُحفظ إجاباتك على هذا الحاسوب: لا حاجة لإعادة الاختبار'],
  hexNote: ['The 6 interest types of Holland\'s model. Neighbours are similar; opposites are very different.', 'أنماط الاهتمام الستة في نموذج هولاند. المتجاورة متشابهة، والمتقابلة مختلفة جدًا.'],
  start: ['Start the test', 'ابدأ الاختبار'], resume: ['Continue', 'تابع'], restart: ['Start again', 'ابدأ من جديد'],
  restartAsk: ['Delete your answers and start again?', 'حذف إجاباتك والبدء من جديد؟'],
  seeResults: ['See my results', 'اعرض نتيجتي'], page: ['Page', 'صفحة'], back: ['Back', 'رجوع'],
  qPrompt: ['How often have you really done this?', 'كم مرة فعلت هذا فعلًا؟'],
  answerAll: ['Please answer all the activities on this page to continue.', 'يرجى الإجابة عن كل النشاطات في هذه الصفحة للمتابعة.'],
  results: ['Results', 'النتيجة'], yourCode: ['Your interest code', 'رمز اهتماماتك'],
  flatNote: ['Your profile is quite flat: you like many things a little. That\'s normal — try new experiences this year before deciding.', 'ملفّك متقارب: تحب أشياء كثيرة بقدر متشابه. هذا طبيعي — جرّب تجارب جديدة هذه السنة قبل أن تقرّر.'],
  clearNote: ['Your first type stands out clearly — a strong sign of what you enjoy.', 'نمطك الأول بارز بوضوح — وهذه إشارة قوية إلى ما تستمتع به.'],
  closeNote: ['Your top types are close: look for fields that combine them.', 'أنماطك الأولى متقاربة: ابحث عن اختصاصات تجمع بينها.'],
  oppNote: ['Your first two letters are opposites on the hexagon — you have varied interests; mixed fields can suit you well.', 'حرفاك الأوّلان متقابلان على الشكل السداسي — اهتماماتك متنوّعة، والاختصاصات المختلطة قد تناسبك جيدًا.'],
  topTypes: ['Your 3 strongest types', 'أنماطك الثلاثة الأقوى'], placesT: ['Where they work', 'أين يعملون'],
  discuss: ['Discussion questions', 'أسئلة للنقاش'],
  matchFac: ['Faculties worth exploring', 'كليات تستحق الاستكشاف'], matchMaj: ['Majors to explore', 'اختصاصات تستحق الاستكشاف'],
  buildFrom: ['Build my roadmap', 'ابنِ طريقي'],
  notDestiny: ['This test shows your interests today. It does not measure ability and does not decide your future. Use it with your grades, your values and a conversation with your teacher.', 'يُظهر هذا الاختبار اهتماماتك اليوم. لا يقيس القدرات ولا يقرّر مستقبلك. استخدمه مع علاماتك وقيمك وحوار مع أستاذك.'],
  teacherGuide: ['Teacher guide', 'دليل المعلّم'],
  guideTitle: ['How to run the test in class', 'كيف تدير الاختبار في الصف'],
  guideText: ['A 45-minute plan: explain first, let students answer, then discuss the results together.', 'خطة لـ ٤٥ دقيقة: اشرح أولًا، ثم دع الطلاب يجيبون، ثم ناقشوا النتائج معًا.'],
  gBefore: ['Before (10 min) — explain', 'قبل (١٠ د) — الشرح'], gDuring: ['During (15 min) — answer', 'أثناء (١٥ د) — الإجابة'],
  gAfter: ['After (20 min) — discuss', 'بعد (٢٠ د) — النقاش'], gRead: ['How to read a result', 'كيف تقرأ النتيجة'],
  sixTypes: ['The six types', 'الأنماط الستة'],
  typesTitle: ['The six interest types', 'أنماط الاهتمام الستة'],
  typesText: ['Read what each type enjoys, its strengths and the places where it works. Then read how to understand your own result.', 'اقرأ ما يستمتع به كل نمط ونقاط قوّته والأماكن التي يعمل فيها. ثم اقرأ كيف تفهم نتيجتك.'],
  facPageText: ['Each faculty starts from a big question. Open the ones your test result suggested, then compare two of them.', 'كل كلية تبدأ من سؤال كبير. افتح الكليات التي اقترحتها نتيجة اختبارك، ثم قارن بين اثنتين منها.'],
  myResult: ['My result', 'نتيجتي'],
  moreByLetter: ['More majors for each of your letters', 'اختصاصات أخرى لكل حرف من رمزك'],
  moreByLetterTxt: ['Majors whose code starts with, or strongly includes, each of your letters. Open any of them.', 'اختصاصات يبدأ رمزها بأحد أحرفك أو يتضمّنه بقوة. افتح أيًّا منها.'],
  teacherOnly: ['For the teacher', 'للأستاذ'], interestCode: ['Interest code', 'رمز الاهتمامات'],
  whereB: ['Where?', 'أين؟'], whereM: ['Master where?', 'الماستر أين؟'], whereP: ['PhD where?', 'الدكتوراه أين؟'], whereW: ['Work where?', 'العمل أين؟'],
  s6: ['Plan B', 'الخطة البديلة'], planB: ['Plan B', 'الخطة البديلة'],
  planBTxt: ['If plan A doesn\'t work out (grades, money, a place), what is your second road?', 'إذا لم تنجح الخطة الأولى (علامات، مال، مقعد)، ما طريقك الثاني؟'],
  ownPlanB: ['Write your own Plan B', 'اكتب خطتك البديلة بنفسك'],
  trackWhy: ['Your school track changes the "to prepare" list on your card.', 'مسارك المدرسي يغيّر لائحة «ما يجب تحضيره» على بطاقتك.'],
  toPrepare: ['To prepare', 'ما يجب تحضيره'],
  ckLbLb: ['Get the Lebanese Bac (official exams, or the Ministry certificate if exams are cancelled that year)', 'الحصول على الشهادة اللبنانية (الامتحانات الرسمية، أو إفادة الوزارة إذا أُلغيت الامتحانات في تلك السنة)'],
  ckLbUs: ['Get the equivalence of your American diploma from the Lebanese Ministry (SAT usually needed)', 'الحصول على معادلة شهادتك الأميركية من الوزارة اللبنانية (غالبًا مع SAT)'],
  ckLb: ['Check each Lebanese university\'s requirements and deadlines on Jameati', 'التحقّق من شروط كل جامعة لبنانية ومواعيدها على «جامعتي»'],
  ckGh: ['Apply online to Ghanaian universities; your diploma will be evaluated (GTEC)', 'التقديم عبر الإنترنت للجامعات الغانية؛ وستُقيَّم شهادتك (GTEC)'],
  ckUk: ['UCAS application + personal statement; IELTS if needed', 'طلب UCAS + خطاب شخصي؛ وIELTS عند الحاجة'],
  ckUkMed: ['UCAT test + interview for medicine / dentistry', 'اختبار UCAT ومقابلة للطب وطب الأسنان'],
  ckNa: ['SAT / ACT, essays, activities and recommendations (Common App)', 'SAT أو ACT، والمقالات والأنشطة ورسائل التوصية (Common App)'],
  ckNaGrad: ['Medicine / law start after a bachelor there — plan a pre-med or pre-law bachelor', 'الطب والحقوق يبدآن هناك بعد الإجازة — خطّط لإجازة تحضيرية'],
  ckEu: ['Learn the local language (French, German…) and apply via Campus France or each university', 'تعلّم اللغة المحلية (الفرنسية، الألمانية…) وقدّم عبر Campus France أو كل جامعة'],
  ckLater: ['Studying in another country later: plan the visa, language test and money early', 'الدراسة لاحقًا في بلد آخر: خطّط باكرًا للتأشيرة واختبار اللغة والمال'],
  scanReopen: ['Scan to reopen this card', 'امسح لإعادة فتح هذه البطاقة'], copyLink: ['Copy link', 'انسخ الرابط'], copied: ['Copied', 'تم النسخ'],
  whereStudy: ['Where will you study?', 'أين ستدرس؟'], studyIn: ['Studying this in', 'دراسة هذا في'],
  unisLook: ['Universities to look at', 'جامعات تستحق الاطّلاع'], unisNote: ['Examples, not a ranking.', 'أمثلة، وليست تصنيفًا.'],
  howGetIn: ['How to get in', 'كيف تدخل'], howApply: ['How to apply', 'كيف تقدّم'], ladderThere: ['The ladder there', 'السلّم هناك'],
  pathInC: ['The path in', 'المسار في'], lbShown: ['The ladder below shows the path in Lebanon.', 'السلّم أدناه يعرض المسار في لبنان.'],
  aroundWorld: ['Around the world', 'حول العالم'], aroundSub: ['Same idea everywhere, different years and rules.', 'الفكرة نفسها في كل مكان، لكن السنوات والقواعد تختلف.'],
  navLesson: ['Present', 'وضع الحصة'], navPrep: ['Prepare now', 'استعدّ الآن'],
  prepTitle: ['Prepare now for university', 'استعدّ الآن للجامعة'],
  prepText: ['What to do in each school year, which exams and documents you need, and what each faculty asks for. Choose your school track first.', 'ماذا تفعل في كل سنة دراسية، وأيّ امتحانات ومستندات تحتاج، وماذا تطلب كل كلية. اختر مسارك المدرسي أولًا.'],
  yourTrack: ['Your school track', 'مسارك المدرسي'],
  yearByYear: ['Year by year', 'سنة بعد سنة'], goal: ['Goal', 'الهدف'],
  examsT: ['Exams you may need', 'الامتحانات التي قد تحتاجها'], docsT: ['Documents to prepare', 'المستندات التي تحضّرها'],
  abroadT: ['Good to know', 'من المفيد أن تعرف'],
  skillsT: ['Skills to build now, whatever you choose', 'مهارات تبنيها الآن، مهما كان اختيارك'],
  reqT: ['What each faculty usually asks for', 'ماذا تطلب كل كلية عادةً'],
  reqSection: ['Bac section', 'فرع الثانوي'], reqCourses: ['Courses to take', 'مواد تختارها'], reqExtra: ['Also', 'أيضًا'],
  linksT: ['Official pages to check', 'صفحات رسمية للتحقّق'],
  continueBtn: ['Continue: step {n} · {name}', 'تابع: الخطوة {n} · {name}'], matchYou: ['Matches your test', 'يناسب نتيجتك'], othersHere: ['Also in this step', 'أيضًا في هذه الخطوة'],
  skip: ['Skip to the content', 'انتقل إلى المحتوى'], navMain: ['Lesson steps', 'خطوات الدرس'],
  checkedNote: ['General guidance written', 'إرشادات عامة كُتبت في'],
  checkedWarn: ['Rules change every year — always check the university\'s official page.', 'الشروط تتغيّر كل سنة — تحقّق دائمًا من الصفحة الرسمية للجامعة.'],
  toGetIn: ['To get in', 'للدخول'], seePrep: ['See the full "Prepare now" guide', 'افتح دليل «استعدّ الآن» كاملًا'],
  l1Title: ['What kind of problem do you love to solve?', 'ما نوع المشكلات التي تحب أن تحلّها؟'],
  l1Sub: ['Don\'t start with "What do I want to be?". Every faculty answers one big question. Which one makes you curious?', 'لا تبدأ بسؤال «ماذا أريد أن أصبح؟». كل كلية تجيب عن سؤال كبير واحد. أيّ سؤال يثير فضولك؟'],
  l2Sub: ['Five steps. You can stop and work after any of them.', 'خمس درجات. يمكنك التوقّف والعمل بعد أيّ واحدة منها.'],
  l3Title: ['Every path is different', 'لكل اختصاص طريقه'],
  l3Sub: ['Three real examples. Notice: an engineer can do a PhD, and a doctor\'s "MD" is a professional degree, not a research PhD.', 'ثلاثة أمثلة حقيقية. لاحظ: المهندس يستطيع أن يكمل الدكتوراه، وشهادة الطبيب MD شهادة مهنية لا دكتوراه بحثية.'],
  l4Title: ['Two ways of thinking', 'طريقتان في التفكير'],
  l5Title: ['Your turn: build your roadmap', 'دورك: ابنِ طريقك'],
  l5Steps: ['Scan the code or open the link|Write your name, choose a faculty and a major|Choose your master, PhD or job — then save your card as PDF', 'امسح الرمز أو افتح الرابط|اكتب اسمك واختر كلية واختصاصًا|اختر الماستر أو الدكتوراه أو الوظيفة — ثم احفظ بطاقتك PDF'],
  qrLocal: ['The QR code works once the site is online. On this computer, open:', 'رمز QR يعمل بعد نشر الموقع على الإنترنت. على هذا الحاسوب افتح:'],
  prev: ['Previous', 'السابق'], next: ['Next', 'التالي'], exit: ['Exit', 'خروج'], full: ['Full screen', 'ملء الشاشة'],
  keys: ['Arrow keys to move · F full screen · Esc exit', 'الأسهم للتنقّل · F ملء الشاشة · Esc للخروج'],
  compareTitle: ['Compare two faculties', 'قارن بين كليتين'], vs: ['vs', 'مقابل'],
  openCompare: ['Compare faculties', 'قارن بين الكليات'],
  footer: ['Field Atlas · a classroom guide to university faculties and degrees. Check local details with each university.', 'أطلس الاختصاصات · دليل صفّي للكليات والشهادات الجامعية. تحقّق من التفاصيل المحلية مع كل جامعة.']
};
Object.assign(UI, window.ATLAS.extUI || {});
const EXT = window.ATLAS.ext = window.ATLAS.ext || { routes: {}, after: [] };
const u = k => fixAr((UI[k] || [k, k])[lang === 'ar' ? 1 : 0]);
const mLabel = n => lang === 'ar' ? (n >= 3 && n <= 10 ? 'اختصاصات' : 'اختصاصًا') : (n === 1 ? 'major' : 'majors');

/* ───────────── lookups ───────────── */
const fac = id => faculties.find(f => f.id === id);
const maj = (f, id) => f && f.majors.find(m => m.id === id);
const accent = f => `--accent:${f.color}`;
const isFull = m => !!(m && m.masters);
/* stage label / text / years, with per-major overrides (e.g. Medicine: Residency instead of Master) */
const stg = (m, k) => (m && m.stages && m.stages[k]) || null;
const SN = (m, k) => stg(m, k) && stg(m, k).name ? T(stg(m, k).name) : u(k);
const STX = (m, k) => stg(m, k) && stg(m, k).txt ? T(stg(m, k).txt) : u(k + 'Txt');
const SY = (m, k, def) => (stg(m, k) && stg(m, k).years) || def;

/* ───────────── roadmap state ───────────── */
const RM_KEY = 'fieldAtlasRoadmap';
/* cB/cM/cP/cW = country of bachelor / master / PhD / work; planB = alternative route */
const RM0 = { name: '', fid: '', mid: '', master: '', masterOwn: '', after: '', phd: '', phdOwn: '', career: '', careerOwn: '', cB: '', cM: '', cP: '', cW: '', planB: '', planBOwn: '', code: '' };
const AFTER_MAJOR = { mid: '', master: '', masterOwn: '', after: '', phd: '', phdOwn: '', career: '', careerOwn: '', planB: '', planBOwn: '' };
let rm = { ...RM0 };
try { Object.assign(rm, JSON.parse(localStorage.getItem(RM_KEY) || '{}')); } catch (e) {}
const saveRm = () => { try { localStorage.setItem(RM_KEY, JSON.stringify(rm)); } catch (e) {} };

/* ───────────── views ───────────── */
/* hero illustration: the degree road draws itself, nodes pop in, faculty bubbles float */
function roadSvg() {
  const W = 520, H = 360, rtl = lang === 'ar';
  const pts = [[60, 300], [170, 230], [270, 250], [370, 150], [465, 70]].map(([x, y]) => [rtl ? W - x : x, y]);
  const d = 'M' + pts.map(p => p.join(' ')).join(' L');
  const curve = `M${pts[0][0]} ${pts[0][1]} ` + pts.slice(1).map((p, i) => { const a = pts[i]; const mx = (a[0] + p[0]) / 2; return `C${mx} ${a[1]} ${mx} ${p[1]} ${p[0]} ${p[1]}`; }).join(' ');
  const labels = ladder.levels.map(l => T(l.name).split(' / ')[0].split(' (')[0]);
  const bubbles = faculties.slice(0, 5).map((f, i) => { const bx = [80, 200, 330, 450, 130][i], by = [70, 40, 50, 230, 180][i]; return `<g class="bub" style="--d:${i * 0.35}s"><circle cx="${rtl ? W - bx : bx}" cy="${by}" r="20" fill="${f.color}"/>${ic(f.icon, { at: [(rtl ? W - bx : bx) - 11, by - 11, 22] })}</g>`; }).join('');
  return `<svg class="road" viewBox="0 0 ${W} ${H}" aria-hidden="true" focusable="false">
    <defs><linearGradient id="rg" x1="0" x2="1"><stop offset="0" stop-color="#5fd4a0"/><stop offset=".5" stop-color="#4fb8e8"/><stop offset="1" stop-color="#c9df90"/></linearGradient></defs>
    ${bubbles}
    <path d="${curve}" class="road-bed"/><path d="${curve}" class="road-line" pathLength="1"/>
    ${pts.map((p, i) => `<g class="node" style="--d:${0.35 + i * 0.22}s"><circle cx="${p[0]}" cy="${p[1]}" r="15"/><text x="${p[0]}" y="${p[1] + 5}" class="nn">${i + 1}</text><text x="${p[0]}" y="${p[1] + 38}" class="nl">${esc(labels[i])}</text></g>`).join('')}
  </svg>`;
}
/* the lesson path: drives the numbered menu, the home cards and the step bar (features.js) */
const PATH = [
  { k: ['test', 'types'], h: '#/test', n: 'navTest', d: 'g1' },
  { k: ['faculties', 'f', 'm', 'compare', 'reality', 'future'], h: '#/faculties', n: 'navFac', d: 'g2' },
  { k: ['decide'], h: '#/decide', n: 'navDecide', d: 'gDecide' },
  { k: ['roadmap'], h: '#/roadmap', n: 'navRoad', d: 'g3' },
  { k: ['prepare', 'skills', 'money'], h: '#/prepare', n: 'navPrep', d: 'g4' },
  { k: ['ladder'], h: '#/ladder', n: 'navLadder', d: 'g5' },
  { k: ['uni'], h: '#/uni', n: 'navUni', d: 'g6' }
];
const STATS = () => [[faculties.length, u('statFac')], [faculties.reduce((n, f) => n + f.majors.length, 0), u('statMaj')], [5, u('statCtry')], [60, u('statQ')]];
/* where the student should go next: the first unfinished step (steps 1-4 can be finished, 5-7 are for reading) */
function nextStep() { const d = window.ATLAS.stepDone || (() => false); const i = [0, 1, 2, 3].find(k => !d(k)); return i === undefined ? 4 : i; }
const started = () => answered() > 0 || [1, 2, 3].some(k => (window.ATLAS.stepDone || (() => false))(k));
function heroCta() {
  const i = nextStep();
  return started() ? `<a class="btn glow" href="${PATH[i].h}">${u('continueBtn').replace('{n}', i + 1).replace('{name}', u(PATH[i].n))} ${go()}</a>${testDone() ? `<a class="btn ghost-light" href="#/test/result">${u('myResult')}</a>` : `<a class="btn ghost-light" href="#/faculties">${u('navFac')}</a>`}`
    : `<a class="btn glow" href="#/test">${u('startBtn')} ${go()}</a><a class="btn ghost-light" href="#/faculties">${u('navFac')}</a>`;
}
function home() {
  const qs = faculties.map(f => `<span class="mq-item" style="--accent:${f.color}"><i>${ic(f.icon)}</i>${tx(f.question)}</span>`).join('');
  return `<section class="hero2 view" aria-labelledby="heroTitle">
    <div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
    <div class="hero2-in">
      <div class="hero2-copy"><div class="eyebrow light">${u('heroEyebrow')}</div>
        <h1 id="heroTitle">${u('heroTitle2')}</h1><p>${u('heroText')}</p>
        <div class="cta">${heroCta()}</div>
        <div class="search"><label for="q" class="sr">${u('search')}</label><input id="q" type="search" autocomplete="off" placeholder="${u('search')}" aria-controls="res" aria-describedby="resCount"><div class="results" id="res" hidden></div><p class="sr" aria-live="polite" id="resCount"></p></div>
      </div>
      <div class="hero2-art">${roadSvg()}</div>
    </div>
    <svg class="curve" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60 C 300 0 520 0 600 30 C 680 0 900 0 1200 60 Z"/></svg>
  </section>
  <div class="sec-head"><div><h2>${u('startTitle')}</h2><p class="muted" style="margin:4px 0 0;max-width:680px">${u('startText')}</p></div></div>
  ${window.ATLAS.homePages ? window.ATLAS.homePages() : ''}
  <div class="mq-wrap"><div class="marquee" aria-hidden="true"><div class="mq-track">${qs}${qs}</div></div><button type="button" class="mq-btn" id="mqBtn" aria-pressed="false">${u('pauseStrip')}</button></div>
  <ul class="stats" aria-label="${u('statsLabel')}">${STATS().map(([n, l]) => `<li><b><span aria-hidden="true" data-count="${n}">${n}</span><span class="sr">${n}</span></b><span>${l}</span></li>`).join('')}</ul>`;
}

function techRoute() {
  const R = ladder.tech; if (!R) return `<div class="warn"><b>${u('technical')}:</b> ${tx(ladder.technical)}</div>`;
  return `<section class="card tech-route" aria-labelledby="techH"><h2 class="h3" id="techH">${tx(R.title)}</h2><p class="muted" style="margin:4px 0 14px">${tx(R.intro)}</p>
    <ol class="tech-steps">${R.steps.map(st => `<li><span class="tech-code"><bdi dir="ltr">${esc(st.code)}</bdi></span><div><b>${tx(st.name)}</b>
      <p class="tech-meta"><span>${tx(st.when)}</span><span>${tx(st.years)}</span></p><p>${tx(st.what)}</p>${st.uni ? `<p class="tech-uni">${ic('door-open')} ${tx(st.uni)}</p>` : ''}</div></li>`).join('')}</ol>
    <p class="muted" style="margin:12px 0 0">${tx(R.note)}</p></section>`;
}

function facultiesView() {
  const best = testDone() ? faculties.map(f => [f.id, fit(f.riasec, pScores())]).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]) : [];
  return `<div class="crumbs"><a href="#/">${u('navHome')}</a><span>${u('facTitle')}</span></div>
  <section class="view phero" style="padding:16px 0 10px"><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${u('facTitle')}</h1><p class="muted" style="max-width:720px;font-size:16px;margin:0">${u('facPageText')}</p></section>
  <div class="fgrid">${faculties.map(f => `<a class="fcard" href="#/f/${f.id}" style="${accent(f)}">
      <span class="ico" aria-hidden="true">${ic(f.icon)}</span><h2 class="h3">${tx(f.name)}</h2><q>${tx(f.question)}</q>
      <span class="meta"><span>${f.majors.length} ${mLabel(f.majors.length)}</span>${best.includes(f.id) ? `<span class="match">${ic('check')} ${u('matchYou')}</span>` : ''}${f.status === 'full' ? '' : `<span class="soon">${u('soon')}</span>`}</span></a>`).join('')}</div>`;
}

function facultyView(f) {
  const facMore = `
  <div class="sec-head" style="margin-top:28px"><h2>${u('toGetIn')}</h2></div>
  <div class="fac-req">${trackSwitch()}${reqCard(f.id, true)}${countrySwitch()}${countryCard(f)}</div>`;
  return `<div class="crumbs"><a href="#/faculties">${u('facTitle')}</a><span>${tx(f.name)}</span></div>
  <section class="fhero view" style="${accent(f)}"><span class="bar"></span><span class="pmark" aria-hidden="true">${ic(f.icon)}</span>
    <div class="eyebrow" style="color:var(--sage)">${u('howThink')}</div><h1>${tx(f.name)}</h1><p class="q">${lang === 'ar' ? `«${tx(f.question)}»` : `“${tx(f.question)}”`}</p></section>
  <div class="fcols">
    <div class="card"><h2 class="h3">${u('howThink')}</h2><p>${tx(f.think)}</p><h2 class="h3" style="margin-top:14px">${u('schoolSubj')}</h2><div class="pills">${f.school.map(s => `<span class="pill">${tx(s)}</span>`).join('')}</div></div>
    <div class="card">${f.intro ? `<h2 class="h3">${u('about')}</h2><p>${tx(f.intro)}</p>` : ''}${f.ladderNote ? `<h2 class="h3">${u('pathHere')}</h2><p class="muted">${tx(f.ladderNote)}</p>` : `<h2 class="h3">${u('pathHere')}</h2><p class="muted">${ladder.systems.map(s => `${tx(s.name)}: ${s.steps.map(T).map(esc).join(lang === 'ar' ? ' ← ' : ' → ')}`).join('<br>')}</p>`}</div>
  </div>
  ${f.id === 'vocational' ? techRoute() : ''}
  <div class="sec-head"><h2>${u('majorsHere')}</h2><span class="muted">${f.majors.length} ${mLabel(f.majors.length)}</span></div>
  <div class="mgrid" style="${accent(f)}">${f.majors.map((m, i) => `<a class="mcard" href="#/m/${f.id}/${m.id}">
      <b>${tx(m.name)}</b>${m.one ? `<small>${tx(m.one)}</small>` : `<span class="soon" style="align-self:start">${u('soon')}</span>`}<span class="go">${u('open')} ${go()}</span></a>`).join('')}</div>${facMore}`;
}

function chips(arr) { return `<div class="pills">${(arr || []).map(x => `<span class="pill">${tx(x)}</span>`).join('')}</div>`; }

function majorView(f, m) {
  const head = `<div class="crumbs"><a href="#/faculties">${u('facTitle')}</a><span><a href="#/f/${f.id}">${tx(f.name)}</a></span><span>${tx(m.name)}</span></div>
  <div class="mhead view"><div><div class="eyebrow">${ic(f.icon)} ${tx(f.name)}</div><h1>${tx(m.name)}</h1>${m.one ? `<p class="one">${tx(m.one)}</p>` : ''}</div>
    ${window.ATLAS.decideBtn ? window.ATLAS.decideBtn(f, m) : ''}</div>`;
  if (!isFull(m)) {
    return `<div style="${accent(f)}">${head}<div class="think">${tx(f.think)}</div>
      <div class="outline-note">${u('outlineNote')}</div>
      <div class="cta"><a class="btn ghost" href="#/f/${f.id}">${u('backFac')}</a></div></div>`;
  }
  const b = m.bachelor;
  return `<div style="${accent(f)}">${head}
  <div class="think">${tx(m.think)}</div>
  <div class="fac-req">${countrySwitch()}${majorCountryBox(m)}</div>
  <div class="mlayout">
    <aside class="side">
      <div class="card"><h2 class="h3">${u('school')}</h2>${chips(m.school)}</div>
      <div class="card"><h2 class="h3">${u('whatStudy')}</h2><ul>${m.study.map(s => `<li>${tx(s)}</li>`).join('')}</ul></div>
      ${m.note ? `<div class="outline-note">${tx(m.note)}</div>` : ''}
    </aside>
    <div>
      <div class="steps">
        <div class="step"><span class="dot">1</span><div class="card"><h2 class="h3">${esc(SN(m, 'bachelor'))}${SN(m, 'bachelor').includes(b.deg) ? '' : ` <small>${esc(b.deg)}</small>`}</h2><p>${esc(STX(m, 'bachelor'))}</p>
          <div class="pills"><span class="pill">${u('usLabel')}: ${esc(b.deg)} · ${esc(fixAr(b.years))} ${u('years')}</span><span class="pill">${u('lmdLabel')}: ${esc(fixAr(b.lmd))}</span></div></div></div>
        <div class="step"><span class="dot">2</span><div class="card"><h2 class="h3">${esc(SN(m, 'master'))} <small>${stg(m, 'master') ? esc(fixAr(SY(m, 'master', ''))) + (SY(m, 'master', '') ? ' ' + u('years') : '') : 'MS / MEng / MA'}</small></h2><p>${esc(STX(m, 'master'))}</p>${chips(m.masters)}</div></div>
        <div class="step"><span class="dot">3</span><div class="card"><h2 class="h3">${esc(SN(m, 'phd'))}</h2><p>${esc(STX(m, 'phd'))}</p>${chips(m.phd)}<p class="muted scopus">${u('research')}: <span dir="ltr" lang="en">${esc(m.scopus)}</span></p></div></div>
        <div class="step"><span class="dot">4</span><div class="card"><h2 class="h3">${u('career')}</h2><p>${u('careerTxt')}</p>${chips(m.careers)}</div></div>
      </div>
      ${m.routes && m.routes.length ? `<div class="card" style="margin-top:16px"><h2 class="h3">${u('routes')}</h2><ul style="margin:0;padding-inline-start:18px">${m.routes.map(r => `<li>${tx(r)}</li>`).join('')}</ul></div>` : ''}
      ${window.ATLAS.insightBoxes ? window.ATLAS.insightBoxes(f, m) : ''}
      <div class="cta">${window.ATLAS.decideBtn ? window.ATLAS.decideBtn(f, m) : ''}<a class="btn ghost" href="#/f/${f.id}">${u('backFac')}</a></div>
    </div>
  </div></div>`;
}

function ladderView() {
  return `<div class="crumbs"><a href="#/">${u('navHome')}</a><span>${u('ladderPageTitle')}</span></div>
  <section class="view phero" style="padding:18px 0 0"><h1 style="font-size:clamp(28px,4vw,44px)">${u('ladderPageTitle')}</h1><p class="muted" style="font-size:16px;max-width:700px">${u('ladderPageText')}</p></section>
  <div class="steps" style="margin-top:20px">${ladder.levels.map((l, i) => `<div class="step"><span class="dot" style="background:var(--forest)">${i + 1}</span><div class="card"><h2 class="h3">${tx(l.name)}</h2><p>${tx(l.what)}</p></div></div>`).join('')}</div>
  <div class="lgrid">${ladder.systems.map(s => `<div class="card"><h3>${tx(s.name)}</h3><p class="muted" style="margin:4px 0 0">${tx(s.where)}</p><ol>${s.steps.map(x => `<li>${tx(x)}</li>`).join('')}</ol></div>`).join('')}</div>
  ${ladder.abbr ? `<section class="card abbr" aria-labelledby="abbrH"><h2 class="h3" id="abbrH">${u('abbrTitle')}</h2><p class="muted" style="margin:4px 0 12px">${u('abbrSub')}</p><dl class="abbr-list">${ladder.abbr.map(a => `<div><dt><bdi dir="ltr">${esc(a.code)}</bdi></dt><dd><b>${tx(a.name)}</b><span>${tx(a.what)}</span></dd></div>`).join('')}</dl></section>` : ''}
  ${techRoute()}
  <div class="warn"><b>${u('careful')}:</b> ${tx(ladder.professionalDoctorates)}</div>
  <div class="sec-head" style="margin-top:28px"><div><h2>${u('aroundWorld')}</h2><p class="muted" style="margin:4px 0 0">${u('aroundSub')}</p></div></div>
  ${countriesGrid()}`;
}

/* ───────────── roadmap builder ───────────── */
function choice(label, on, act, val, extra = '') {
  return `<button type="button" class="choice${on ? ' on' : ''}${extra}" aria-pressed="${!!on}" data-act="${act}" data-val="${esc(val)}">${label}</button>`;
}
function ownInput(act, val, ph) {
  return `<label class="fld"><span>${ph}</span><input type="text" data-own="${act}" id="own-${act}" value="${esc(val)}"></label>`;
}

function roadmapView() {
  const f = fac(rm.fid), m = maj(f, rm.mid), full = isFull(m);
  const step = (n, title, body, locked) => `<section class="card rstep${locked ? ' locked' : ''}" aria-labelledby="rs${n}"><h2 class="rs-h" id="rs${n}"><span class="num" aria-hidden="true">${n}</span>${title}</h2>${locked ? `<p class="lock-hint">${u('lockHint')}</p>` : body}</section>`;

  const s0 = `<label class="fld"><span>${u('namePh')}</span><input type="text" id="rmName" value="${esc(rm.name)}" maxlength="40" autocomplete="given-name"></label>`;
  const s1 = `<div class="choices">${faculties.map(x => choice(`<span class="sw" style="background:${x.color}"></span>${tx(x.name)}`, x.id === rm.fid, 'fid', x.id)).join('')}</div>`;
  const where = (key, label) => `<div class="where"><span>${label}</span>${C.order.map(k =>
    choice(`<span class="cc" aria-hidden="true">${C.countries[k].code}</span>${tx(C.countries[k].name)}`, rm[key] === k, 'ctry', key + ':' + k)).join('')}</div>`;
  const s2 = f ? `<div class="choices">${f.majors.map(x => choice(tx(x.name), x.id === rm.mid, 'mid', x.id)).join('')}</div>${m ? where('cB', u('whereB')) : ''}` : '';
  const s3 = m ? `<div class="choices">${(full ? m.masters : []).map(x => choice(tx(x), rm.master === x.en, 'master', x.en)).join('')}${choice(ic('corner-down-right', { dir: 1 }) + ' ' + u('work'), rm.after === 'work', 'work', '1', ' alt')}</div>${ownInput('masterOwn', rm.masterOwn, u('ownMaster'))}` : '';
  const hasMaster = !!(rm.master || rm.masterOwn) && rm.after !== 'work';
  const hasPhd = hasMaster && !!(rm.phd || rm.phdOwn) && rm.after !== 'masterWork';
  const s4 = hasMaster ? `<div class="choices">${(full ? m.phd : []).map(x => choice(tx(x), rm.phd === x.en, 'phd', x.en)).join('')}${choice(ic('corner-down-right', { dir: 1 }) + ' ' + u('work'), rm.after === 'masterWork', 'masterWork', '1', ' alt')}</div>${ownInput('phdOwn', rm.phdOwn, u('ownPhd'))}${hasPhd ? where('cP', u('whereP')) : ''}` : '';
  const s3full = s3 + (hasMaster ? where('cM', u('whereM')) : '');
  const s5 = m ? `<div class="choices">${(full ? m.careers : []).map(x => choice(tx(x), rm.career === x.en, 'career', x.en)).join('')}</div>${ownInput('careerOwn', rm.careerOwn, u('ownCareer'))}${where('cW', u('whereW'))}` : '';
  const s6 = m ? `<p class="muted" style="margin:0 0 10px">${u('planBTxt')}</p><div class="choices">${(m.routes || []).map(x => choice(tx(x), rm.planB === x.en, 'planB', x.en)).join('')}${f.majors.filter(x => x.id !== m.id).slice(0, 4).map(x => choice(ic('shuffle') + ' ' + tx(x.name), rm.planB === 'major:' + x.id, 'planB', 'major:' + x.id, ' alt')).join('')}</div>${ownInput('planBOwn', rm.planBOwn, u('ownPlanB'))}` : '';

  return `<section class="view phero" style="padding:22px 0 18px"><div class="eyebrow">${u('navRoad')}</div><h1 style="font-size:clamp(28px,4vw,42px);margin-top:6px">${u('rmTitle')}</h1><p class="muted" style="max-width:680px;margin:6px 0 0">${u('rmText')}</p></section>
  <div class="rm">
    <div class="builder">
      <button type="button" class="btn ghost jump-card" id="jumpCard">${u('seeCard')} ${ic('arrow-down')}</button>
      ${step(0, u('s0'), s0)}
      ${step(1, u('s1'), s1)}
      ${step(2, u('s2'), s2, !f)}
      ${step(3, u('s3'), s3full, !m)}
      ${step(4, u('s4'), s4, !hasMaster)}
      ${step(5, u('s5'), s5, !m)}
      ${step(6, u('s6'), s6, !m)}
      <div class="card rstep">${trackSwitch()}<p class="muted" style="margin:8px 0 0;font-size:13px">${u('trackWhy')}</p></div>
    </div>
    <div id="rmCard">${roadmapCard()}</div>
  </div>`;
}

function labelOf(list, en) { const x = (list || []).find(i => i.en === en); return x ? T(x) : en; }

/* what this student should prepare, from their track + faculty + where they want to study */
function prepList(f, m, r0) {
  const rr = r0 || rm;
  if (!f) return [];
  const k = curTrack(), r = P.req[f.id], out = [];
  if (r) out.push(k === 'lb' ? `${u('reqSection')}: ${T(r.lb)}` : `${u('reqCourses')}: ${r.us.map(T).join(', ')}`);
  if (r) out.push(T(r.extra));
  const med = m && ['medicine', 'dentistry', 'pharmacy', 'veterinary'].includes(m.id);
  const c = rr.cB || 'lb';
  if (c === 'lb') { out.push(u(k === 'us' ? 'ckLbUs' : 'ckLbLb')); out.push(u('ckLb')); }
  if (c === 'gh') out.push(u('ckGh'));
  if (c === 'uk') { out.push(u('ckUk')); if (med) out.push(u('ckUkMed')); }
  if (c === 'na') { out.push(u('ckNa')); if (med || (m && m.id === 'law')) out.push(u('ckNaGrad')); }
  if (c === 'eu') out.push(u('ckEu'));
  if ([rr.cM, rr.cP].some(x => x && x !== c)) out.push(u('ckLater'));
  return out;
}

/* share: the whole roadmap travels in the link's #fragment (never sent to a server) */
const b64e = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64d = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
const shareUrl = () => location.origin + location.pathname.replace(/index\.html$/, '') + '#/roadmap?d=' + b64e(JSON.stringify(rm));
function cardQr() {
  if (!rm.mid || !window.qrcode || isLocal()) return '';
  try { const q = window.qrcode(0, 'L'); q.addData(shareUrl()); q.make(); return `<div class="rqr">${q.createSvgTag(3, 2)}<span>${u('scanReopen')}</span></div>`; } catch (e) { return ''; }
}

function roadmapCard() {
  const f = fac(rm.fid), m = maj(f, rm.mid);
  const style = f ? accent(f) : '';
  const cc = k => k && C.countries[k] ? ` <span class="cc">${C.countries[k].code}</span>` : '';
  const node = (n, small, value, emptyText, ctry) => `<div class="rnode${value ? '' : ' empty'}"><i>${n}</i><div><small>${small}</small><b>${value ? esc(value) : emptyText}</b>${value ? cc(ctry) : ''}</div></div>`;
  const planBVal = rm.planBOwn || (rm.planB.startsWith('major:') ? T((maj(f, rm.planB.slice(6)) || {}).name) : (rm.planB && labelOf(m && m.routes, rm.planB)));
  const todo = prepList(f, m);
  const nc = u('notChosen');
  const masterVal = rm.after === 'work' ? '' : (rm.masterOwn || (rm.master && labelOf(m && m.masters, rm.master)));
  const phdVal = rm.after === 'masterWork' ? '' : (rm.phdOwn || (rm.phd && labelOf(m && m.phd, rm.phd)));
  const careerVal = rm.careerOwn || (rm.career && labelOf(m && m.careers, rm.career));
  const yrs = m && m.bachelor ? `<bdi dir="ltr">${esc(m.bachelor.deg)} · ${esc(m.bachelor.years)}</bdi> ${u('years')}` : u('bachelor');
  return `<div class="rcard" style="${style}">
    <div class="top-row"><span class="logo">${ic('route')} ${u('brand').toUpperCase()}</span></div>
    <h2>${esc(rm.name) || u('student')}</h2><div class="sub">${u('cardTitle')}${f ? ' · ' + tx(f.name) : ''}${rm.code && PZ.types[rm.code[0]] ? ` · ${u('interestCode')}: <b class="rcode">${esc(T(PZ.types[rm.code[0]].name))}</b> <bdi dir="ltr">(${esc(rm.code)})</bdi>` : ''}</div>
    <div class="rline">
      ${node(ic(f ? f.icon : 'school'), u('faculty'), f && T(f.name), nc)}
      ${node('1', yrs, m && T(m.name), nc, rm.cB)}
      ${node('2', SN(m, 'master') + ' · ' + fixAr(SY(m, 'master', '1–2')) + ' ' + u('years'), masterVal, rm.after === 'work' ? u('skipped') : nc, rm.cM)}
      ${node('3', SN(m, 'phd') + ' · ' + fixAr(SY(m, 'phd', '3–6')) + ' ' + u('years'), phdVal, (rm.after === 'work' || rm.after === 'masterWork') ? u('skipped') : nc, rm.cP)}
      ${node(ic('flag'), u('career'), careerVal, nc, rm.cW)}
    </div>
    ${planBVal ? `<div class="rthink planb"><b>${u('planB')}</b>${esc(planBVal)}</div>` : ''}
    ${f ? `<div class="rthink"><b>${u('thinkLike')}</b>${tx((m && m.think) || f.think)}</div>
    <div class="rthink"><b>${u('thisYear')}</b>${((m && m.school) || f.school).map(T).map(esc).join(' · ')}</div>` : ''}
    ${todo.length ? `<div class="rthink"><b>${u('toPrepare')} · ${tx(P.tracks[curTrack()].name)}</b><ul class="rtodo">${todo.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
    ${cardQr()}
    <p class="rstamp">${u('dataAsOf')} · ${esc(location.host || 'field-atlas')}</p>
    <div class="ractions"><button type="button" class="btn" style="background:var(--lime);color:var(--forest)" id="printBtn">${ic('printer')} ${u('print')}</button>${rm.mid ? `<button type="button" class="btn ghost" id="copyBtn">${ic('link')} ${u('copyLink')}</button><button type="button" class="btn ghost" id="parentBtn">${ic('users')} ${u('copyParent')}</button>` : ''}<button type="button" class="btn quiet" id="resetBtn">${ic('rotate-ccw')} ${u('reset')}</button></div><p class="sr" role="status" id="rmStatus"></p>
  </div>`;
}

function bindRoadmap() {
  const app = $('app');
  app.querySelectorAll('[data-act]').forEach(b => b.onclick = () => {
    const act = b.dataset.act, val = b.dataset.val;
    if (act === 'fid') { if (rm.fid !== val) Object.assign(rm, AFTER_MAJOR, { fid: val }); }
    else if (act === 'mid') { if (rm.mid !== val) Object.assign(rm, AFTER_MAJOR, { mid: val }); }
    else if (act === 'ctry') { const [key, k] = val.split(':'); rm[key] = rm[key] === k ? '' : k; }
    else if (act === 'planB') Object.assign(rm, { planB: rm.planB === val ? '' : val, planBOwn: '' });
    else if (act === 'master') Object.assign(rm, { master: val, masterOwn: '', after: rm.after === 'work' ? '' : rm.after });
    else if (act === 'work') Object.assign(rm, { after: rm.after === 'work' ? '' : 'work', master: '', masterOwn: '', phd: '', phdOwn: '' });
    else if (act === 'phd') Object.assign(rm, { phd: val, phdOwn: '', after: '' });
    else if (act === 'masterWork') Object.assign(rm, { after: rm.after === 'masterWork' ? '' : 'masterWork', phd: '', phdOwn: '' });
    else if (act === 'career') Object.assign(rm, { career: val, careerOwn: '' });
    saveRm(); rerender();
  });
  const refreshCard = () => { $('rmCard').innerHTML = roadmapCard(); bindCardButtons(); };
  $('rmName').oninput = e => { rm.name = e.target.value; saveRm(); refreshCard(); };
  app.querySelectorAll('[data-own]').forEach(inp => inp.oninput = () => {
    const k = inp.dataset.own; rm[k] = inp.value;
    if (k === 'masterOwn' && inp.value) { rm.master = ''; if (rm.after === 'work') rm.after = ''; }
    if (k === 'phdOwn' && inp.value) { rm.phd = ''; if (rm.after === 'masterWork') rm.after = ''; }
    if (k === 'careerOwn' && inp.value) rm.career = '';
    if (k === 'planBOwn' && inp.value) rm.planB = '';
    saveRm(); refreshCard();
  });
  // re-render on blur so the PhD step unlocks after typing a master
  app.querySelectorAll('[data-own]').forEach(inp => inp.onchange = () => { rerender(); });
  bindCardButtons();
}
function bindCardButtons() {
  $('printBtn').onclick = () => window.print();
  $('resetBtn').onclick = () => { if (!window.confirm(u('resetAsk'))) return; rm = { ...RM0 }; saveRm(); rerender(); };
  if ($('parentBtn')) $('parentBtn').onclick = () => {
    const url = shareUrl().replace('#/roadmap?d=', '#/parent?d='), b = $('parentBtn');
    const ok = () => { b.textContent = u('copied'); $('rmStatus').textContent = u('copied'); setTimeout(() => { if ($('parentBtn')) $('parentBtn').textContent = u('copyParent'); }, 2500); };
    try { navigator.clipboard.writeText(url).then(ok, () => window.prompt(u('copyParent'), url)); } catch (e) { window.prompt(u('copyParent'), url); }
  };
  if ($('copyBtn')) $('copyBtn').onclick = () => {
    const url = shareUrl(), done = () => { const b = $('copyBtn'); b.textContent = u('copied'); $('rmStatus').textContent = u('copied'); setTimeout(() => { if ($('copyBtn')) $('copyBtn').textContent = u('copyLink'); }, 2500); };
    try { navigator.clipboard.writeText(url).then(done, () => window.prompt(u('copyLink'), url)); } catch (e) { window.prompt(u('copyLink'), url); }
  };
}

/* ───────────── prepare now ───────────── */
const P = window.ATLAS.prepare;
let track = null;
try { track = localStorage.getItem('fieldAtlasTrack'); } catch (e) {}
const curTrack = () => (track === 'lb' || track === 'us') ? track : (lang === 'en' ? 'us' : 'lb');
function trackSwitch() {
  return `<div class="track-sw" role="group" aria-label="${u('yourTrack')}"><span>${u('yourTrack')}:</span>${['lb', 'us'].map(k =>
    `<button type="button" class="choice${curTrack() === k ? ' on' : ''}" aria-pressed="${curTrack() === k}" data-track="${k}">${tx(P.tracks[k].name)}</button>`).join('')}</div>`;
}
function reqCard(fid, withLink) {
  const r = P.req[fid]; if (!r) return '';
  const k = curTrack();
  return `<div class="card req-card"><h3>${u('toGetIn')} · ${tx(P.tracks[k].name)}</h3>
    ${k === 'lb' ? `<p><b>${u('reqSection')}:</b> ${tx(r.lb)}</p>` : `<p><b>${u('reqCourses')}:</b></p>${chips(r.us)}`}
    <p><b>${u('reqExtra')}:</b> ${tx(r.extra)}</p>
    ${withLink ? `<a class="go-link" href="#/prepare">${u('seePrep')} ${go()}</a>` : ''}</div>`;
}
function prepareView() {
  const k = curTrack(), tr = P.tracks[k];
  return `<div class="crumbs"><a href="#/">${u('navHome')}</a><span>${u('navPrep')}</span></div>
  <section class="view phero" style="padding:16px 0 10px"><div class="eyebrow">${u('navPrep')}</div>
    <h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${u('prepTitle')}</h1>
    <p class="muted" style="max-width:760px;font-size:16px;margin:0 0 16px">${u('prepText')}</p>${trackSwitch()}
    <p class="muted" style="margin:8px 0 0">${tx(tr.who)}</p></section>
  <div class="sec-head" style="margin-top:22px"><h2>${u('yearByYear')}</h2></div>
  <div class="years">${tr.years.map((y, i) => `<div class="card year"><span class="ynum" aria-hidden="true">${i + 1}</span><h3>${tx(y.grade)}</h3>
    <p class="ygoal"><b>${u('goal')}:</b> ${tx(y.goal)}</p><ul class="checks">${y.todo.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>`).join('')}</div>
  <div class="prep-2">
    <div class="card"><h3>${u('examsT')}</h3><ul class="checks">${tr.exams.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
    <div class="card"><h3>${u('docsT')}</h3><ul class="checks">${tr.docs.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
  </div>
  <div class="warn"><b>${u('abroadT')}:</b> ${tx(tr.abroad)}</div>
  ${P.dest ? `<div class="sec-head" style="margin-top:22px"><div><h2>${tx(P.dest.title)}</h2><p class="muted" style="margin:4px 0 0;max-width:760px">${tx(P.dest.intro)}</p></div></div>
  <div class="dest-grid">${P.dest.list.map(d => `<div class="card"><h3>${d.flag ? `<span class="cc" aria-hidden="true">${[...d.flag].map(c => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('')}</span> ` : ''}${tx(d.where)}</h3><ul class="checks">${d.tests.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>`).join('')}</div>
  <p class="muted">${tx(P.dest.note)}</p>` : ''}
  <a class="card money-cta" href="#/money"><b>${u('moneyTitle')}</b><span class="muted">${u('moneyText')}</span><span class="go-link">${u('moneyLink')} ${go()}</span></a>
  <div class="card" style="margin:16px 0"><h3>${u('skillsT')}</h3><ul class="checks two">${P.skills.map(x => `<li>${tx(x)}</li>`).join('')}</ul><a class="go-link" href="#/skills">${u('skTitle')} ${go()}</a></div>
  <div class="sec-head" style="margin-top:26px"><h2>${u('reqT')}</h2></div>
  <div class="req-grid">${faculties.map(f => { const r = P.req[f.id]; if (!r) return ''; return `<a class="card req-row" href="#/f/${f.id}" style="${accent(f)}">
    <span class="ico" aria-hidden="true">${ic(f.icon)}</span><div><b>${tx(f.name)}</b>
    <small>${k === 'lb' ? `${u('reqSection')}: ${tx(r.lb)}` : `${u('reqCourses')}: ${r.us.map(T).map(esc).join(' · ')}`}</small>
    <small class="muted">${tx(r.extra)}</small></div></a>`; }).join('')}</div>
  <div class="card" style="margin:18px 0"><h3>${u('linksT')}</h3><ul class="links">${P.links.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${tx(l.name)} ${ext_()}<span class="sr"> ${u('newTab')}</span></a></li>`).join('')}</ul>
    <p class="muted" style="margin:10px 0 0;font-size:13px">${u('checkedNote')} ${monthOf(P.checked)}. ${u('checkedWarn')}</p></div>`;
}
function bindTrack() {
  document.querySelectorAll('[data-track]').forEach(b => b.onclick = () => {
    track = b.dataset.track; try { localStorage.setItem('fieldAtlasTrack', track); } catch (e) {}
    rerender();
  });
}

/* ───────────── country layer ───────────── */
const C = window.ATLAS.countries;
let country = (window.ATLAS.school && window.ATLAS.school.defaultCountry) || 'lb';
try { const c = localStorage.getItem('fieldAtlasCountry'); if (C.countries[c]) country = c; } catch (e) {}
function countrySwitch() {
  return `<div class="track-sw ctry-sw" role="group" aria-label="${u('whereStudy')}"><span>${u('whereStudy')}</span>${C.order.map(k =>
    `<button type="button" class="choice${country === k ? ' on' : ''}" aria-pressed="${country === k}" data-country="${k}"><span class="cc" aria-hidden="true">${C.countries[k].code}</span>${tx(C.countries[k].name)}</button>`).join('')}</div>`;
}
function countryCard(f) {
  const c = C.countries[country], fi = C.facultyIn[f.id] || {}, unis = fi[country] || [], note = fi.notes && fi.notes[country];
  return `<div class="card ctry-card"><h3><span class="cc" aria-hidden="true">${c.code}</span> ${u('studyIn')}: ${tx(c.name)}</h3>
    ${note ? `<p>${tx(note)}</p>` : ''}
    <p class="muted"><b>${u('ladderThere')}:</b> ${c.steps.map(T).map(esc).join(lang === 'ar' ? ' ← ' : ' → ')}</p>
    ${unis.length ? `<p><b>${u('unisLook')}</b> <span class="muted">(${u('unisNote')})</span></p><div class="pills">${unis.map(n => n && n.en ? `<span class="pill">${tx(n)}</span>` : `<span class="pill" dir="ltr" lang="en">${esc(n)}</span>`).join('')}</div>` : ''}
    <p class="muted" style="margin-top:10px"><b>${u('howGetIn')}:</b> ${tx(c.entry)}</p>
    <a class="go-link" href="${c.link.url}" target="_blank" rel="noopener">${tx(c.link.name)} ${ext_()}<span class="sr"> ${u('newTab')}</span></a>
    <p class="muted checked">${u('checkedNote')} ${monthOf(C.checked)}. ${u('checkedWarn')}</p></div>`;
}
function majorCountryBox(m) {
  if (country === 'lb') return '';
  const c = C.countries[country], p = C.pathIn[m.id] && C.pathIn[m.id][country];
  return `<div class="card ctry-path"><h3><span class="cc" aria-hidden="true">${c.code}</span> ${u('pathInC')}: ${tx(c.name)}</h3>
    <p>${p ? tx(p) : c.steps.map(T).map(esc).join(lang === 'ar' ? ' ← ' : ' → ')}</p>
    <p class="muted" style="margin:0">${u('lbShown')}</p></div>`;
}
function countriesGrid() {
  return `<div class="ctry-grid">${C.order.map(k => { const c = C.countries[k]; return `<div class="card"><h3><span class="cc">${c.code}</span> ${tx(c.name)}</h3>
    <ol>${c.steps.map(s => `<li>${tx(s)}</li>`).join('')}</ol>
    <p class="muted"><b>${u('howGetIn')}:</b> ${tx(c.entry)}</p><p class="muted"><b>${u('howApply')}:</b> ${tx(c.apply)}</p>
    <a class="go-link" href="${c.link.url}" target="_blank" rel="noopener">${tx(c.link.name)} ${ext_()}<span class="sr"> ${u('newTab')}</span></a></div>`; }).join('')}</div>`;
}
function bindCountry() {
  document.querySelectorAll('[data-country]').forEach(b => b.onclick = () => {
    country = b.dataset.country; try { localStorage.setItem('fieldAtlasCountry', country); } catch (e) {}
    rerender();
  });
}

/* ───────────── personality (RIASEC interest) test ───────────── */
const PZ = window.ATLAS.personality;
const TK = 'fieldAtlasTest', PER_PAGE = 10, PAGES = PZ.items.length / PER_PAGE;
let test = { a: Array(PZ.items.length).fill(0) };
try { const s = JSON.parse(localStorage.getItem(TK) || 'null'); if (s && Array.isArray(s.a) && s.a.length === PZ.items.length) test = s; } catch (e) {}
const saveTest = () => { try { localStorage.setItem(TK, JSON.stringify(test)); } catch (e) {} };
const answered = () => test.a.filter(Boolean).length;
const testDone = () => answered() === PZ.items.length;
function pScores() {
  const s = {}; PZ.order.forEach(k => s[k] = 0);
  PZ.items.forEach((it, i) => { s[it.type] += test.a[i] || 0; });
  const pct = {}; PZ.order.forEach(k => pct[k] = Math.round((s[k] - 10) / 40 * 100)); // 10 items × 1..5 → 0..100
  return pct;
}
const pCode = pct => [...PZ.order].sort((a, b) => pct[b] - pct[a] || PZ.order.indexOf(a) - PZ.order.indexOf(b)).slice(0, 3).join('');
function fit(code, pct) { // how well a major's code (e.g. "IR") fits the student's profile, 0..100
  const w = [2, 1, 0.5]; let s = 0, d = 0;
  [...(code || '')].slice(0, 3).forEach((c, i) => { if (pct[c] != null) { s += w[i] * pct[c]; d += w[i]; } });
  return d ? Math.round(s / d) : 0;
}
function hexagon(pct, size = 300) {
  const cx = size / 2, cy = size / 2, R = size / 2 - 66;
  const pt = (i, r) => { const a = (-90 + i * 60) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const ring = f => PZ.order.map((_, i) => pt(i, R * f).map(n => n.toFixed(1)).join(',')).join(' ');
  const poly = pct ? PZ.order.map((k, i) => pt(i, R * Math.max(0.04, pct[k] / 100)).map(n => n.toFixed(1)).join(',')).join(' ') : '';
  const lbl = pct ? PZ.order.map(k => `${T(PZ.types[k].name)} ${pct[k]}%`).join(', ') : u('hexNote');
  return `<svg class="hex${pct ? ' hex-draw' : ''}" viewBox="-60 0 ${size + 120} ${size}" role="img" aria-label="${esc(lbl)}">
    ${[1, .75, .5, .25].map(f => `<polygon points="${ring(f)}" class="hex-ring"/>`).join('')}
    ${PZ.order.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="hex-ring"/>`; }).join('')}
    ${poly ? `<polygon points="${poly}" class="hex-me"/>` : ''}
    ${PZ.order.map((k, i) => { const [x, y] = pt(i, R + 22), [px, py] = pt(i, R + 50), side = Math.abs(x - cx) > 8, nx = side ? x : px, ny = side ? (y < cy ? y - 26 : y + 28) : py; return `<g><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="14" fill="${PZ.types[k].color}"/><text x="${x.toFixed(1)}" y="${(y + 4.5).toFixed(1)}" class="hex-l">${k}</text><text x="${nx.toFixed(1)}" y="${(ny + 5).toFixed(1)}" class="hex-n" text-anchor="middle">${esc(T(PZ.types[k].name))}</text></g>`; }).join('')}
  </svg>`;
}
function typeCard(k, open) {
  const ty = PZ.types[k];
  return `<div class="card type-card" style="--accent:${ty.color}"><h3><span class="tl">${k}</span>${tx(ty.name)} · <span class="muted">${tx(ty.nick)}</span></h3>
    <p>${tx(ty.about)}</p>${chips(ty.strengths)}<p class="muted" style="margin-top:8px"><b>${u('placesT')}:</b> ${tx(ty.places)}</p>
    <details${open ? ' open' : ''}><summary>${u('discuss')}</summary><ul>${ty.ask.map(q => `<li>${tx(q)}</li>`).join('')}</ul></details></div>`;
}
function testIntro() {
  const n = answered();
  return `<div class="crumbs"><a href="#/">${u('navHome')}</a><span>${u('navTest')}</span></div>
  <section class="view test-intro"><div><div class="eyebrow">RIASEC · Holland</div><h1>${u('testTitle')}</h1><p class="muted" style="font-size:16px">${u('testText')}</p>
    <ul class="checks">${u('testHow').split('|').map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    <div class="cta">${n === 0 ? `<a class="btn" href="#/test/q/1">${u('start')}</a>` : testDone() ? `<a class="btn" href="#/test/result">${u('seeResults')}</a>` : `<a class="btn" href="#/test/q/${Math.min(PAGES, Math.floor(n / PER_PAGE) + 1)}">${u('resume')} (${n}/${PZ.items.length})</a>`}
      ${n ? `<button type="button" class="btn ghost" id="restartBtn">${u('restart')}</button>` : ''}<a class="btn ghost" href="#/types">${u('typesTitle')}</a></div>
    <p class="muted teacher-link">${u('teacherOnly')}: <a href="#/class">${u('classTitle')}</a></p></div>
    <div class="test-hex">${hexagon(null)}<p class="muted">${u('hexNote')}</p></div></section>`;
}
function testPage(n) {
  const start = (n - 1) * PER_PAGE, list = PZ.items.slice(start, start + PER_PAGE);
  const done = answered();
  return `<section class="view test-page"><div class="test-top"><div><div class="eyebrow">${u('navTest')} · ${u('page')} <bdi>${n}/${PAGES}</bdi></div><h1>${u('qPrompt')}</h1></div>
    <div class="prog-wrap"><div class="prog" role="progressbar" aria-label="${u('progressL')}" aria-valuemin="0" aria-valuemax="${PZ.items.length}" aria-valuenow="${done}"><span style="transform:scaleX(${done / PZ.items.length})"></span></div><span class="prog-txt"><bdi>${done}/${PZ.items.length}</bdi></span></div></div>
    <ol class="qlist" start="${start + 1}">${list.map((it, j) => { const i = start + j; return `<li class="qrow${test.a[i] ? '' : ' todo'}" id="q${i}"><fieldset><legend>${tx(it.text)}<span class="miss-tag">${u('unanswered')}</span></legend>
      <div class="scale">${PZ.scale.map((s, v) => `<label class="sc${test.a[i] === v + 1 ? ' on' : ''}"><input type="radio" name="q${i}" value="${v + 1}" data-q="${i}"${test.a[i] === v + 1 ? ' checked' : ''}><b aria-hidden="true">${v + 1}</b><span>${tx(s)}</span></label>`).join('')}</div></fieldset></li>`; }).join('')}</ol>
    <p class="muted" id="needAll" role="alert" hidden>${u('answerAll')}</p>
    <div class="cta">${n > 1 ? `<a class="btn ghost" href="#/test/q/${n - 1}">${u('prev')}</a>` : `<a class="btn ghost" href="#/test">${u('back')}</a>`}
      <button type="button" class="btn" id="nextQ">${n < PAGES ? u('next') : u('seeResults')}</button></div></section>`;
}
function bindTestPage(n) {
  const start = (n - 1) * PER_PAGE;
  document.querySelectorAll('.sc input').forEach(inp => inp.onchange = () => {
    const i = +inp.dataset.q; test.a[i] = +inp.value; saveTest();
    const li = $('q' + i); li.classList.remove('todo', 'miss');
    li.querySelectorAll('.sc').forEach(x => { const on = x.contains(inp); x.classList.toggle('on', on); x.classList.toggle('pop', on); });
    const d = answered(), bar = document.querySelector('.prog');
    bar.firstElementChild.style.transform = `scaleX(${d / PZ.items.length})`; bar.setAttribute('aria-valuenow', d);
    document.querySelector('.prog-txt bdi').textContent = `${d}/${PZ.items.length}`;
  });
  $('nextQ').onclick = () => {
    const missing = PZ.items.slice(start, start + PER_PAGE).map((_, j) => start + j).filter(i => !test.a[i]);
    if (missing.length) { $('needAll').hidden = false; missing.forEach(i => $('q' + i).classList.add('miss')); $('q' + missing[0]).scrollIntoView({ block: 'center' }); $('q' + missing[0]).querySelector('input').focus({ preventScroll: true }); return; }
    location.hash = n < PAGES ? `#/test/q/${n + 1}` : '#/test/result';
  };
}
function testResult() {
  const pct = pScores(), code = pCode(pct), sorted = [...PZ.order].sort((a, b) => pct[b] - pct[a]);
  const range = pct[sorted[0]] - pct[sorted[5]], gap = pct[sorted[0]] - pct[sorted[1]];
  const opp = Math.abs(PZ.order.indexOf(code[0]) - PZ.order.indexOf(code[1])) === 3;
  const shape = range < 20 ? u('flatNote') : gap >= 15 ? u('clearNote') : u('closeNote');
  if (rm.code !== code) { rm.code = code; saveRm(); }
  const facs = faculties.map(f => ({ f, s: fit(f.riasec, pct) })).sort((a, b) => b.s - a.s).slice(0, 3);
  const majs = []; faculties.forEach(f => f.majors.forEach(m => majs.push({ f, m, s: fit(m.riasec, pct) })));
  majs.sort((a, b) => b.s - a.s);
  const top = majs.slice(0, 9);
  return `<div class="crumbs"><a href="#/test">${u('navTest')}</a><span>${u('results')}</span></div>
  <section class="view res-hero"><div class="aurora" aria-hidden="true"><i></i><i></i></div><div class="res-hero-in"><div>
    <div class="eyebrow light">${u('yourCode')} · <bdi dir="ltr">${code}</bdi></div>
    <h1 class="res-h1">${[...code].map((k, i) => `<span class="rt" style="--c:${PZ.types[k].color};--i:${i}">${tx(PZ.types[k].name)}</span>`).join('<span class="rt-sep" aria-hidden="true"> · </span>')}</h1>
    <p class="res-names">${[...code].map(k => tx(PZ.types[k].nick)).join(' · ')}</p>
    <p class="code-explain">${u('codeExplain')}</p>
    <div class="code" dir="ltr" aria-hidden="true">${[...code].map((k, i) => `<span style="background:${PZ.types[k].color};--i:${i}">${k}</span>`).join('')}</div></div>
    <div class="test-hex">${hexagon(pct)}</div></div></section>
  <section class="res-head">
    <div class="bars"><h2 class="h3">${u('profileT')}</h2>${sorted.map(k => `<div class="bar"><span class="bl">${k} · ${tx(PZ.types[k].name)}</span><span class="bt"><i style="width:${pct[k]}%;background:${PZ.types[k].color}"></i></span><b>${pct[k]}%</b></div>`).join('')}</div>
    <div class="warn" style="margin-top:14px">${shape}${opp ? ' ' + u('oppNote') : ''}</div></section>
  <div class="sec-head" style="margin-top:20px"><h2>${u('topTypes')}</h2></div>
  <div class="types3">${[...code].map((k, i) => typeCard(k, false)).join('')}</div>
  <div class="sec-head" style="margin-top:26px"><h2>${u('matchFac')}</h2></div>
  <div class="mgrid">${facs.map(({ f, s }) => `<a class="mcard" href="#/f/${f.id}" style="${accent(f)}"><span class="eyebrow">${ic(f.icon)} ${u('matchPct').replace('{n}', s)}</span><b>${tx(f.name)}</b><small>${tx(f.question)}</small><span class="go">${u('openFac')} ${go()}</span></a>`).join('')}</div>
  <div class="sec-head" style="margin-top:22px"><h2>${u('matchMaj')}</h2></div>
  <div class="mgrid">${top.map(({ f, m, s }) => `<div class="mcard" style="${accent(f)}"><span class="eyebrow">${ic(f.icon)} ${u('matchPct').replace('{n}', s)}</span><small class="muted">${tx(f.name)}</small><b>${tx(m.name)}</b><small>${tx(m.one)}</small>
    <span class="res-acts"><a class="go" href="#/m/${f.id}/${m.id}">${u('open')}</a>${window.ATLAS.decideBtn ? window.ATLAS.decideBtn(f, m, true) : ''}</span></div>`).join('')}</div>
  <div class="sec-head" style="margin-top:26px"><div><h2>${u('moreByLetter')}</h2><p class="muted" style="margin:4px 0 0">${u('moreByLetterTxt')}</p></div></div>
  <div class="by-letter">${[...code].map(k => { const shown = new Set(top.map(x => x.m.id)); const list = majs.filter(x => (x.m.riasec || '').slice(0, 2).includes(k) && !shown.has(x.m.id)).slice(0, 12);
    return `<div class="card" style="--accent:${PZ.types[k].color}"><h3><span class="tl">${k}</span>${tx(PZ.types[k].name)}</h3><ul class="by-list">${list.map(({ f, m }) => `<li><a href="#/m/${f.id}/${m.id}">${tx(m.name)}</a> <small class="muted">${tx(f.name)}</small></li>`).join('')}</ul></div>`; }).join('')}</div>
  <div class="warn" style="margin-top:18px"><b>${u('careful')}:</b> ${u('notDestiny')}</div>
  <div class="cta"><button type="button" class="btn ghost" id="printRes">${ic('printer')} ${u('print')}</button><a class="btn ghost" href="#/types">${u('typesTitle')}</a><button type="button" class="btn ghost" id="restartBtn">${u('restart')}</button></div>`;
}
function typesView() {
  const g = PZ.guide;
  return `<div class="crumbs"><a href="#/test">${u('navTest')}</a><span>${u('typesTitle')}</span></div>
  <section class="view test-intro"><div><div class="eyebrow">RIASEC · Holland</div><h1>${u('typesTitle')}</h1><p class="muted" style="font-size:16px">${u('typesText')}</p>
    <div class="cta">${testDone() ? `<a class="btn" href="#/test/result">${u('myResult')}</a>` : `<a class="btn" href="#/test">${u('navTest')}</a>`}</div></div>
    <div class="test-hex">${hexagon(null)}<p class="muted">${u('hexNote')}</p></div></section>
  <div class="card"><h2 class="h3">${u('gRead')}</h2><ul class="checks">${g.read.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
  <div class="sec-head" style="margin-top:24px"><h2>${u('sixTypes')}</h2></div>
  <div class="types3">${PZ.order.map(k => typeCard(k, true)).join('')}</div>`;
}
function bindTest() {
  if ($('restartBtn')) $('restartBtn').onclick = () => { if (window.confirm(u('restartAsk'))) { test = { a: Array(PZ.items.length).fill(0) }; saveTest(); location.hash = '#/test'; route(); } };
  if ($('printRes')) $('printRes').onclick = () => window.print();
}

/* ───────────── costs & scholarships ───────────── */
const MN = window.ATLAS.money;
function moneyView() {
  return `<div class="crumbs"><a href="#/prepare">${u('navPrep')}</a><span>${u('moneyTitle')}</span></div>
  <section class="view phero" style="padding:16px 0 8px"><div class="eyebrow">${u('navPrep')}</div><h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${u('moneyTitle')}</h1>
    <p class="muted" style="max-width:760px;font-size:16px;margin:0">${u('moneyText')}</p></section>
  <div class="sec-head" style="margin-top:20px"><h2>${u('costByCountry')}</h2></div>
  <div class="ctry-grid">${C.order.map(k => { const c = C.countries[k], m = MN.costs[k]; return `<div class="card cost-card"><h3><span class="cc">${c.code}</span> ${tx(c.name)} </h3><p class="lvl"><span class="lvl-bar" aria-hidden="true">${[1, 2, 3, 4, 5].map(i => `<i${i <= m.level ? ' class="on"' : ''}></i>`).join('')}</span> ${u('costLevel').replace('{n}', m.level)}</p>
    <p><b>${u('tuition')}:</b> ${tx(m.tuition)}</p><p><b>${u('living')}:</b> ${tx(m.living)}</p><p class="muted"><b>${u('aidT')}:</b> ${tx(m.aid)}</p></div>`; }).join('')}</div>
  <div class="sec-head" style="margin-top:24px"><h2>${u('scholT')}</h2></div>
  <div class="schol">${MN.scholarships.map(s => s.url ? `<a class="card schol-row" href="${s.url}" target="_blank" rel="noopener"><b dir="ltr">${esc(s.name)} ${ext_()}</b><span class="sr">${u('newTab')}</span><span class="pill">${tx(s.for)}</span><small>${tx(s.who)}</small></a>` : `<div class="card schol-row"><b>${tx(s.label)}</b><span class="pill">${tx(s.for)}</span><small>${tx(s.who)}</small></div>`).join('')}</div>
  <div class="card" style="margin:18px 0"><h3>${u('moneyTips')}</h3><ul class="checks two">${MN.tips.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
  <p class="muted checked">${u('checkedNote')} ${monthOf(MN.checked)}. ${u('moneyWarn')}</p>`;
}

/* ───────────── printable worksheet (for discussion or students without a laptop) ───────────── */
function worksheetView() {
  const line = n => `<span class="ws-line"></span>`.repeat(n);
  const box = (title, n, hint) => `<div class="ws-box"><h2>${title}</h2>${hint ? `<p class="muted">${hint}</p>` : ''}${line(n)}</div>`;
  return `<div class="no-print crumbs"><a href="#/test">${u('navTest')}</a><span>${u('wsTitle')}</span></div>
  <div class="no-print ws-actions"><p class="muted">${u('wsText')}</p><button type="button" class="btn" id="printWs">${ic('printer')} ${u('printWs')}</button></div>
  <article class="ws">
    <header class="ws-head"><span class="logo">${ic('route')} ${u('brand')}</span><h1>${u('wsTitle')}</h1>
      <div class="ws-name"><span>${u('s0')}:</span><span class="ws-line"></span><span>${u('wsClass')}:</span><span class="ws-line short"></span></div></header>
    <div class="ws-grid">
      ${box('1 · ' + u('wsQ1'), 2, u('wsQ1h'))}
      ${box('2 · ' + u('wsQ2'), 1, PZ.order.map(k => `${k} = ${T(PZ.types[k].name)}`).join(' · '))}
      ${box('3 · ' + u('wsQ3'), 3, u('wsQ3h'))}
      ${box('4 · ' + u('wsQ4'), 3, u('wsQ4h'))}
    </div>
    <div class="ws-box"><h2>5 · ${u('wsQ5')}</h2>
      <table class="ws-table"><tr><th></th><th>${u('wsWhat')}</th><th>${u('wsWhere')}</th></tr>
        ${[u('bachelor'), u('master'), u('phd'), u('career')].map(r => `<tr><td>${r}</td><td></td><td></td></tr>`).join('')}</table></div>
    <div class="ws-grid">
      ${box('6 · ' + u('planB'), 2, u('planBTxt'))}
      ${box('7 · ' + u('wsQ7'), 3, u('wsQ7h'))}
    </div>
    ${box('8 · ' + u('wsQ8'), 2, u('wsQ8h'))}
    <p class="ws-foot">${location.host || 'field-atlas'} · ${u('wsFoot')} · ${u('dataAsOf')}</p>
  </article>`;
}

/* ───────────── pilot lesson plan (teacher) ───────────── */
function planView() {
  const LS = window.ATLAS.lesson, ex = LS.exit;
  const ticket = `<div class="ticket"><b>${u('exitTitle')}</b><p>1. ${tx(ex.q1)}</p><span class="ws-line"></span><span class="ws-line"></span><p>2. ${tx(ex.q2)}</p><span class="ws-line"></span><p>3. ${tx(ex.q3)}</p><p>4. ${tx(ex.q4)}</p><span class="ws-line"></span><small class="t-stamp">${u('dataAsOf')}</small></div>`;
  return `<div class="crumbs no-print"><a href="#/lesson/1">${u('navLesson')}</a><span>${u('planTitle')}</span></div>
  <section class="view phero no-print" style="padding:16px 0 10px"><div class="eyebrow">${u('teacherGuide')}</div>
    <h1 style="font-size:clamp(28px,4vw,44px);margin:6px 0 8px">${u('planTitle')}</h1>
    <p class="muted" style="max-width:760px;font-size:16px;margin:0">${u('planText')}</p>
    <div class="cta"><a class="btn" href="#/lesson/1">${u('featLessonGo')}</a><button type="button" class="btn ghost" id="printTickets">${ic('printer')} ${u('printTickets')}</button></div></section>
  <div class="card no-print" style="margin:18px 0"><h2 class="h3">${u('planBefore')}</h2><ul class="checks">${LS.before.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
  <ol class="plan-steps no-print">${LS.steps.map(st => `<li class="card plan-step"><div class="plan-min"><bdi dir="ltr">${st.min}</bdi> ${u('minutes')}</div>
    <div><h2 class="h3">${tx(st.title)}</h2><ul>${st.do.map(x => `<li>${tx(x)}</li>`).join('')}</ul>
    <p class="plan-say"><b>${u('planSay')}:</b> ${tx(st.say)}</p>${st.route !== '#/plan' ? `<a class="go-link" href="${st.route}">${u('openScreen')} ${go()}</a>` : ''}</div></li>`).join('')}</ol>
  <div class="prep-2 no-print">
    <div class="card"><h2 class="h3">${u('planWatch')}</h2><ul class="checks">${LS.watch.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
    <div class="card"><h2 class="h3">${u('planSuccess')}</h2><ul class="checks">${LS.success.map(x => `<li>${tx(x)}</li>`).join('')}</ul></div>
  </div>
  <h2 class="no-print" style="margin:26px 0 10px">${u('exitTitle')}</h2>
  <div class="tickets">${ticket}${ticket}${ticket}${ticket}</div>`;
}

/* ───────────── compare ───────────── */
function compareCols(a, b) {
  const col = f => `<div class="card cmp-col" style="${accent(f)}">
    <div class="cmp-head"><span class="ico" aria-hidden="true">${ic(f.icon)}</span><h2>${tx(f.name)}</h2></div>
    <p class="cmp-q">${lang === 'ar' ? `«${tx(f.question)}»` : `“${tx(f.question)}”`}</p>
    <p>${tx(f.think)}</p>
    <h3>${u('schoolSubj')}</h3>${chips(f.school)}
    <h3>${u('majorsHere')} (${f.majors.length})</h3>
    <div class="pills">${f.majors.map(m => `<a class="pill" href="#/m/${f.id}/${m.id}">${tx(m.name)}</a>`).join('')}</div></div>`;
  return `<div class="cmp">${col(a)}<div class="cmp-vs">${u('vs')}</div>${col(b)}</div>`;
}
function compareView(a, b) {
  const sel = (id, cur, other) => `<select id="${id}" aria-label="${u(id === 'cmpA' ? 'firstFac' : 'secondFac')}">${faculties.map(f => `<option value="${f.id}"${f.id === cur.id ? ' selected' : ''}${f.id === other.id ? ' disabled' : ''}>${tx(f.name)}</option>`).join('')}</select>`;
  return `<div class="crumbs"><a href="#/faculties">${u('facTitle')}</a><span>${u('compareTitle')}</span></div>
  <section class="view phero" style="padding:16px 0 18px"><h1 style="font-size:clamp(28px,4vw,42px)">${u('compareTitle')}</h1>
    <div class="cmp-pick">${sel('cmpA', a, b)}<span>${u('vs')}</span>${sel('cmpB', b, a)}</div></section>
  ${compareCols(a, b)}`;
}
function bindCompare() {
  const go = e => {
    const id = e.target.id, h = `#/compare/${$('cmpA').value}/${$('cmpB').value}`;
    try { history.replaceState(null, '', h); } catch (er) {} lastHash = location.hash;
    route({ soft: true }); $(id).focus();
  };
  $('cmpA').onchange = go; $('cmpB').onchange = go;
}

/* ───────────── QR ───────────── */
const isLocal = () => location.protocol === 'file:' || /^(localhost|127\.|\[::1\]|0\.0\.0\.0)/.test(location.hostname);
const roadmapUrl = () => location.origin + location.pathname.replace(/index\.html$/, '') + '#/roadmap';
function qrBlock() {
  const url = roadmapUrl();
  let svg = '';
  try {
    if (window.qrcode && !isLocal()) { const q = window.qrcode(0, 'M'); q.addData(url); q.make(); svg = q.createSvgTag(8, 2); }
  } catch (e) { svg = ''; }
  return `<div class="qr">${svg ? `<div class="qr-img">${svg}</div>` : ''}
    ${!svg ? `<p class="muted">${u('qrLocal')}</p>` : ''}<a class="qr-url" href="#/roadmap" dir="ltr">${esc(url)}</a></div>`;
}

/* ───────────── lesson (present mode) ───────────── */
const SLIDES = 5;
function miniPath(fid, mid) {
  const f = fac(fid), m = maj(f, mid);
  if (!m) return '';
  const step = (k, val, yrs) => `<li><small>${esc(SN(m, k))}${yrs ? ' · ' + esc(fixAr(yrs)) + ' ' + u('years') : ''}</small><b>${tx(val)}</b></li>`;
  return `<div class="card mini" style="${accent(f)}"><div class="eyebrow">${ic(f.icon)} ${tx(f.name)}</div><h2>${tx(m.name)}</h2>
    <ol>${step('bachelor', m.name, m.bachelor.years)}${step('master', m.masters[0], SY(m, 'master', '1–2'))}${step('phd', m.phd[0], SY(m, 'phd', '3–6'))}
    <li><small>${u('career')}</small><b>${tx(m.careers[0])}</b></li></ol></div>`;
}
function lessonView(n) {
  let body;
  if (n === 1) body = `<div class="eyebrow">01</div><h1>${u('l1Title')}</h1><p class="slide-sub">${u('l1Sub')}</p>
    <div class="qgrid">${faculties.map(f => `<a class="qcard" href="#/f/${f.id}" style="${accent(f)}"><span class="ico" aria-hidden="true">${ic(f.icon)}</span><span>${tx(f.question)}</span></a>`).join('')}</div>`;
  else if (n === 2) body = `<div class="eyebrow">02</div><h1>${u('ladderTitle')}</h1><p class="slide-sub">${u('l2Sub')}</p>
    <div class="ladder-strip big">${ladder.levels.map((l, i) => `<div><span class="n">0${i + 1}</span><b>${tx(l.name)}</b><small>${tx(l.what)}</small></div>`).join('')}</div>
    <h2 style="margin:22px 0 4px">${u('aroundWorld')}</h2><p class="muted" style="margin:0 0 12px">${u('aroundSub')}</p>
    <div class="ctry-mini">${C.order.map(k => { const c = C.countries[k]; return `<div class="card"><h3><span class="cc">${c.code}</span> ${tx(c.name)}</h3><ol>${c.steps.map(s => `<li>${tx(s)}</li>`).join('')}</ol></div>`; }).join('')}</div>`;
  else if (n === 3) body = `<div class="eyebrow">03</div><h1>${u('l3Title')}</h1><p class="slide-sub">${u('l3Sub')}</p>
    <div class="minis">${miniPath('engineering', 'civil')}${miniPath('health', 'medicine')}${miniPath('computing', 'computer-science')}</div>`;
  else if (n === 4) body = `<div class="eyebrow">04</div><h1>${u('l4Title')}</h1>${compareCols(fac('science'), fac('engineering'))}
    <p style="margin-top:14px"><a class="btn ghost" href="#/compare/science/engineering">${u('openCompare')}</a></p>`;
  else body = `<div class="eyebrow">05</div><h1>${u('l5Title')}</h1>
    <div class="l5"><div><ol class="l5-steps">${u('l5Steps').split('|').map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      <p class="muted" style="margin-top:10px">${u('wsText')} <a href="#/worksheet">${u('footWs')}</a> · <a href="#/plan">${u('exitTitle')}</a></p></div>${qrBlock()}</div>`;
  const dots = Array.from({ length: SLIDES }, (_, i) => `<a href="#/lesson/${i + 1}" class="${i + 1 === n ? 'on' : ''}" aria-label="${u('slideOf').replace('{n}', i + 1).replace('{t}', SLIDES)}"${i + 1 === n ? ' aria-current="step"' : ''}><i></i></a>`).join('');
  return `<section class="slide view">${body}</section>
  <nav class="slide-nav" aria-label="${u('slidesNav')}">
    <a class="btn ghost" href="#/">${u('exit')}</a>
    <a class="btn ghost${n === 1 ? ' off' : ''}" href="#/lesson/${Math.max(1, n - 1)}"${n === 1 ? ' aria-disabled="true" tabindex="-1"' : ''}>${u('prev')}</a>
    <span class="dots">${dots}</span>
    <a class="btn${n === SLIDES ? ' off' : ''}" href="#/lesson/${Math.min(SLIDES, n + 1)}"${n === SLIDES ? ' aria-disabled="true" tabindex="-1"' : ''}>${u('next')}</a>
    <button type="button" class="btn ghost" id="fsBtn">${u('full')}</button>
    <span class="keys">${u('keys')}</span>
  </nav>`;
}
function toggleFull() {
  try { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); } catch (e) {}
}
document.addEventListener('keydown', e => {
  if (!location.hash.startsWith('#/lesson')) return;
  if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
  const n = +(location.hash.split('/')[2] || 1);
  const fwd = lang === 'ar' ? 'ArrowLeft' : 'ArrowRight', back = lang === 'ar' ? 'ArrowRight' : 'ArrowLeft';
  if ((e.key === fwd || e.key === 'PageDown' || e.key === ' ') && n < SLIDES) { e.preventDefault(); location.hash = `#/lesson/${n + 1}`; }
  else if ((e.key === back || e.key === 'PageUp') && n > 1) { e.preventDefault(); location.hash = `#/lesson/${n - 1}`; }
  else if (e.key === 'Escape' && !document.fullscreenElement) location.hash = '#/';
  else if (e.key === 'f' || e.key === 'F') toggleFull();
});

/* ───────────── search ───────────── */
function bindSearch() {
  const q = $('q'), res = $('res');
  if (!q) return;
  const items = [];
  faculties.forEach(f => { items.push({ href: `#/f/${f.id}`, name: f.name, kind: u('faculty'), ctx: null }); f.majors.forEach(m => items.push({ href: `#/m/${f.id}/${m.id}`, name: m.name, kind: u('majorWord'), ctx: f.name })); });
  const close = () => { res.hidden = true; };
  q.oninput = () => {
    const s = q.value.trim().toLowerCase();
    if (!s) { close(); $('resCount').textContent = ''; return; }
    const hits = items.filter(i => (i.name.en + ' ' + i.name.ar).toLowerCase().includes(s)).slice(0, 12);
    res.innerHTML = hits.length ? hits.map(h => `<a href="${h.href}"><b>${tx(h.name)}</b><span class="muted">${h.kind}${h.ctx ? ' · ' + tx(h.ctx) : ''}</span></a>`).join('') : `<p class="no-res">${u('noResults')}</p>`;
    res.hidden = false;
    $('resCount').textContent = u('resCount').replace('{n}', hits.length);
  };
  q.onkeydown = e => {
    const links = [...res.querySelectorAll('a')];
    if (e.key === 'Escape') { close(); }
    else if (e.key === 'ArrowDown' && links.length) { e.preventDefault(); links[0].focus(); }
  };
  res.onkeydown = e => {
    const links = [...res.querySelectorAll('a')], i = links.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && i < links.length - 1) { e.preventDefault(); links[i + 1].focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); (i > 0 ? links[i - 1] : q).focus(); }
    else if (e.key === 'Escape') { close(); q.focus(); }
  };
  document.addEventListener('click', e => { if (!e.target.closest('.search')) close(); });
}

let testPageN = 1;
const lastNodes = {};
/* ───────────── router ───────────── */
function route(opts = {}) {
  const [pathPart, query] = location.hash.replace(/^#\/?/, '').split('?');
  const parts = pathPart.split('/').filter(Boolean);
  /* a shared roadmap link (#/roadmap?d=…) restores that card, then cleans the address */
  const shared = query && new URLSearchParams(query).get('d');
  if (parts[0] === 'roadmap' && shared) {
    try { rm = { ...RM0, ...JSON.parse(b64d(shared)) }; saveRm(); } catch (e) {}
    try { history.replaceState(null, '', '#/roadmap'); } catch (e) {}
  }
  let html, page = 'home';
  if (parts[0] === 'f' && fac(parts[1])) { html = facultyView(fac(parts[1])); page = 'fac'; }
  else if (parts[0] === 'm' && maj(fac(parts[1]), parts[2])) { html = majorView(fac(parts[1]), maj(fac(parts[1]), parts[2])); page = 'fac'; }
  else if (parts[0] === 'faculties') { html = facultiesView(); page = 'fac'; }
  else if (parts[0] === 'types') { html = typesView(); page = 'test'; }
  else if (parts[0] === 'ladder') { html = ladderView(); page = 'ladder'; }
  else if (parts[0] === 'prepare') { html = prepareView(); page = 'prep'; }
  else if (parts[0] === 'money') { html = moneyView(); page = 'prep'; }
  else if (parts[0] === 'worksheet') { html = worksheetView(); page = 'ws'; }
  else if (parts[0] === 'plan') { html = planView(); page = 'plan'; }
  else if (parts[0] === 'test') {
    page = 'test';
    if (parts[1] === 'q') { const n = Math.min(PAGES, Math.max(1, +parts[2] || 1)); html = testPage(n); page = 'testq'; testPageN = n; }
    else if (parts[1] === 'result' && testDone()) html = testResult();
    else if (parts[1] === 'guide') html = typesView();
    else html = testIntro();
  }
  else if (parts[0] === 'lesson') { html = lessonView(Math.min(SLIDES, Math.max(1, +parts[1] || 1))); page = 'lesson'; }
  else if (parts[0] === 'compare') { html = compareView(fac(parts[1]) || fac('science'), fac(parts[2]) || fac('engineering')); page = 'compare'; }
  else if (parts[0] === 'roadmap') {
    if (parts[1] && fac(parts[1]) && parts[1] !== rm.fid) Object.assign(rm, AFTER_MAJOR, { fid: parts[1] });
    if (parts[2] && maj(fac(rm.fid), parts[2]) && parts[2] !== rm.mid) Object.assign(rm, AFTER_MAJOR, { mid: parts[2] });
    saveRm(); html = roadmapView(); page = 'road';
  }
  else if (EXT.routes[parts[0]]) { const r = EXT.routes[parts[0]]; html = r.view(parts, query); page = r.page || parts[0]; }
  else html = home();
  { const si = PATH.findIndex(p => p.k.includes(parts[0] || '-'));
    if (window.ATLAS.gate && si > 0) { const g = window.ATLAS.gate(si); if (g) { html = g; page = 'gate'; } } }
  $('app').innerHTML = html;
  $('app').classList.toggle('soft', !!opts.soft);
  const here = PATH.findIndex(p => p.k.includes(parts[0] || '-'));
  const SD = window.ATLAS.stepState || (() => '');
  $('nav').innerHTML = PATH.map((p, i) => { const s = SD(i); return `<a href="${p.h}" class="${i === here ? 'on' : ''} ${s}"${i === here ? ' aria-current="page"' : ''}><span class="nnum" aria-hidden="true">${s === 'done' ? ic('check') : s === 'locked' ? ic('lock') : i + 1}</span>${u(p.n)}${s ? `<span class="sr"> (${u(s === 'done' ? 'stDone' : 'stLocked')})</span>` : ''}</a>`; }).join('')
    + `<a href="#/teacher" class="nav-present${['teacher', 'plan', 'ws', 'class', 'lesson'].includes(page) ? ' on' : ''}"${['teacher', 'plan', 'ws', 'class', 'lesson'].includes(page) ? ' aria-current="page"' : ''}>${ic('presentation')} ${u('navTeacher')}</a>`;
  { const t = ['teacher', 'plan', 'ws', 'class', 'lesson'].includes(page), tl = $('teacherLink'); tl.classList.toggle('on', t); if (t) tl.setAttribute('aria-current', 'page'); else tl.removeAttribute('aria-current'); }
  document.body.classList.toggle('presenting', page === 'lesson');
  if (page === 'road') bindRoadmap();
  if (page === 'home') { bindSearch(); const mb = $('mqBtn'); mb.onclick = () => { const p = mb.getAttribute('aria-pressed') !== 'true'; mb.setAttribute('aria-pressed', String(p)); document.querySelector('.marquee').classList.toggle('paused', p); }; }
  if (page === 'road' && $('jumpCard')) $('jumpCard').onclick = () => { const h = document.querySelector('#rmCard h2'); h.setAttribute('tabindex', '-1'); $('rmCard').scrollIntoView({ behavior: 'auto', block: 'start' }); h.focus({ preventScroll: true }); };
  if (page === 'compare') bindCompare();
  if (page === 'prep' || page === 'fac' || page === 'road') bindTrack();
  if (page === 'fac') bindCountry();
  if (page === 'test') bindTest();
  if (page === 'ws') $('printWs').onclick = () => window.print();
  if (page === 'plan') $('printTickets').onclick = () => window.print();
  document.body.classList.toggle('plan-page', page === 'plan');
  document.body.classList.toggle('ws-page', page === 'ws');
  if (page === 'testq') bindTestPage(testPageN);
  if (page === 'lesson' && $('fsBtn')) $('fsBtn').onclick = toggleFull;
  if (page === 'road') document.querySelectorAll('.rnode').forEach((nd, i) => { const v = nd.textContent; if (lastNodes[i] !== undefined && lastNodes[i] !== v && !nd.classList.contains('empty')) nd.classList.add('pop'); lastNodes[i] = v; });
  if (EXT.routes[parts[0]] && EXT.routes[parts[0]].bind) EXT.routes[parts[0]].bind(parts, query);
  EXT.after.forEach(fn => { try { fn(page, parts, !!opts.soft); } catch (e) { console.error(e); } });
  const h1 = document.querySelector('#app h1');
  const num = page === 'testq' ? `${testPageN}/${PAGES} · ` : page === 'lesson' ? `${Math.min(SLIDES, Math.max(1, +parts[1] || 1))}/${SLIDES} · ` : page === 'gate' && here >= 0 ? u(PATH[here].n) + ' · ' : '';
  document.title = (h1 && page !== 'home' ? num + h1.textContent.trim() + ' · ' : '') + u('brand');
  initMotion(!!opts.soft);
}

/* re-render in place (chips, switches, fields) without losing keyboard focus or replaying the page entrance */
function rerender() {
  const a = document.activeElement, ds = (a && a.dataset) || {};
  const sel = ds.act ? `[data-act="${ds.act}"][data-val="${CSS.escape(ds.val || '')}"]` : ds.track ? `[data-track="${ds.track}"]` : ds.country ? `[data-country="${ds.country}"]` : (a && a.id) ? '#' + CSS.escape(a.id) : null;
  const y = window.scrollY; route({ soft: true }); window.scrollTo(0, y);
  const el = sel && document.querySelector(sel); if (el) el.focus({ preventScroll: true });
}

/* ───────────── motion system ─────────────
 * html[data-motion="reduce"] (OS setting or the header switch) stops movement but keeps short fades. */
let motionOff = false;
try { const m = localStorage.getItem('fieldAtlasMotion'); motionOff = m ? m === 'off' : matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
function applyMotion() {
  document.documentElement.dataset.motion = motionOff ? 'reduce' : 'full';
  const b = $('motionBtn'); if (b) { b.setAttribute('aria-pressed', String(!motionOff)); b.querySelector('span').textContent = u('motionL'); }
}
let revealObs = null;
const seenRoutes = new Set();
function initMotion(soft) {
  const els = [...document.querySelectorAll('#app .card, #app .fcard, #app .mcard, #app .qcard, #app .feat, #app .stats li, #app .ladder-strip > div, #app .step, #app .req-row, #app .schol-row, #app .type-card, #app .year, #app .bars, #app .ctry-mini .card')];
  const sib = new Map();
  const seen = seenRoutes.has(location.hash); seenRoutes.add(location.hash);
  els.filter(el => !el.parentElement.closest('.rv, .step')).forEach(el => { const p = el.parentElement, n = sib.get(p) || 0; sib.set(p, n + 1); el.style.setProperty('--i', Math.min(n, 5)); el.classList.add('rv'); });
  if (seen) soft = true;
  if (revealObs) revealObs.disconnect();
  if (soft || motionOff || !('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in', soft ? 'now' : 'x')); countUp(true); return; }
  revealObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => revealObs.observe(el));
  setTimeout(() => els.forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); }), 30);
  countUp(false);
}
function countUp(instant) {
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = +el.dataset.count; if (instant) { el.textContent = end; return; }
    const t0 = performance.now(), dur = 1100;
    const tick = now => { const k = Math.min(1, (now - t0) / dur); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
    el.textContent = 0; requestAnimationFrame(tick);
  });
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('brandName').textContent = u('brand'); window.ATLAS.fillIcons(document.querySelector('header')); $('teacherLink').lastElementChild.textContent = u('navTeacher');
  $('skip').textContent = u('skip'); $('nav').setAttribute('aria-label', u('navMain'));
  $('langBtn').textContent = u('switchLang');
  $('langBtn').setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
  applyMotion();
  $('foot').innerHTML = `<p>${u('footer')} ${u('checkedNote')} ${monthOf(C.checked)}.</p>`;
}
function setLang(l) {
  lang = l; langChosen = true;
  try { localStorage.setItem('fieldAtlasLocale', lang); } catch (e) {}
  applyLang(); seenRoutes.clear(); route(); const b = $('langBtn'); if (b) b.focus({ preventScroll: true });
}
/* the router owns the hash, so the skip link moves focus itself */
$('skip').onclick = e => { e.preventDefault(); const m = $('app'); m.setAttribute('tabindex', '-1'); m.focus(); m.scrollIntoView({ block: 'start' }); };
$('langBtn').onclick = () => setLang(lang === 'ar' ? 'en' : 'ar');

/* first visit: let every student pick their language (mixed Arabic / English classes) */
function langPicker() {
  const box = document.createElement('dialog');
  box.className = 'lang-pick';
  box.setAttribute('aria-labelledby', 'lpTitle');
  box.innerHTML = `<div class="lang-card"><span class="lp-icon" aria-hidden="true">${ic('route')}</span>
    <h2 id="lpTitle"><span dir="ltr" lang="en">Choose your language</span><br><span dir="rtl" lang="ar">اختر لغتك</span></h2>
    <div class="lp-btns"><button type="button" data-l="en" lang="en">English</button><button type="button" data-l="ar" lang="ar" dir="rtl">العربية</button></div>
    <p><span dir="ltr" lang="en">You can switch any time from the top bar.</span><br><span dir="rtl" lang="ar">يمكنك التبديل في أي وقت من الشريط العلوي.</span></p></div>`;
  const done = l => { setLang(l); box.close(); box.remove(); $('langBtn').focus(); };
  box.querySelectorAll('[data-l]').forEach(b => b.onclick = () => done(b.dataset.l));
  box.addEventListener('cancel', e => { e.preventDefault(); box.close(); box.remove(); seenRoutes.clear(); route(); });
  document.body.appendChild(box);
  if (box.showModal) box.showModal(); else box.setAttribute('open', '');
  box.querySelector('button').focus();
}
let lastHash = location.hash;
window.addEventListener('hashchange', () => {
  const prevSlide = +(lastHash.match(/lesson\/(\d)/) || [])[1] || 0, nextSlide = +(location.hash.match(/lesson\/(\d)/) || [])[1] || 0;
  document.documentElement.dataset.nav = nextSlide && prevSlide && nextSlide < prevSlide ? 'back' : 'fwd';
  route();
  if (location.hash !== lastHash) {
    window.scrollTo(0, 0);
    const h1 = document.querySelector('#app h1'); if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
  }
  lastHash = location.hash;
});
$('motionBtn').onclick = () => { motionOff = !motionOff; try { localStorage.setItem('fieldAtlasMotion', motionOff ? 'off' : 'on'); } catch (e) {} applyMotion(); seenRoutes.clear(); route(); };
window.ATLAS.h = { PATH, pScores, testDone, fit, u, tx, T, esc, chips, accent, fac, maj, isFull, hexagon, mLabel, fixAr, prepList, shareUrl, b64e, b64d, route, rerender, curTrack, labelOf, SN, SY,
  get rm() { return rm; }, get lang() { return lang; }, get country() { return country; }, get motionOff() { return motionOff; }, RM0, C, P, MN, PZ, faculties, ladder };
applyLang(); route();
if (!langChosen) langPicker();
})();
