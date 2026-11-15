/* Field Atlas — pilot lesson plan (council plan, Phase 1).
 * A timed 45-minute script for the teacher, what to watch during the pilot, and a printable exit ticket.
 */
(function () {
const { t, L } = window.ATLAS;

const steps = [
  { min: '0–5', title: t('Hook: what problems do you love to solve?', 'المدخل: ما المشكلات التي تحب أن تحلّها؟'), route: '#/lesson/1',
    do: L('Open Present mode, slide 1. Ask: "Don\'t tell me what you want to be — which question here makes you curious?"|افتح وضع الحصة، الشريحة 1. اسأل: «لا تقل لي ماذا تريد أن تصبح — أيّ سؤال هنا يثير فضولك؟»', 'Let 3–4 students answer out loud. Write their faculties on the board.|دع 3–4 طلاب يجيبون بصوت عالٍ. اكتب كلياتهم على اللوح.'),
    say: t('Every faculty answers one big question. Today you find yours — and the road to it.', 'كل كلية تجيب عن سؤال كبير واحد. اليوم ستجد سؤالك — والطريق إليه.') },
  { min: '5–12', title: t('The ladder and the world', 'السلّم والعالم'), route: '#/lesson/2',
    do: L('Slide 2: the 5 steps (school → bachelor → master → PhD → career). Stress: you can stop and work after any step.|الشريحة 2: الدرجات الخمس (مدرسة ← إجازة ← ماستر ← دكتوراه ← مهنة). أكّد: يمكنك التوقف والعمل بعد أيّ درجة.', 'Slide 3: three real paths. Point out that a doctor\'s MD is not a research PhD, and that engineers can do a PhD.|الشريحة 3: ثلاثة مسارات حقيقية. نبّه إلى أن MD الطبيب ليست دكتوراه بحثية، وأن المهندس يستطيع أن يكمل الدكتوراه.'),
    say: t('The idea is the same in every country; the years and rules change.', 'الفكرة واحدة في كل البلدان؛ السنوات والقواعد تختلف.') },
  { min: '12–27', title: t('Interest test as a conversation', 'اختبار الميول كحوار'), route: '#/test',
    do: L('Students open the site on laptops (QR on slide 5) and take the test alone, in silence (about 12 minutes).|يفتح الطلاب الموقع على الحواسيب (رمز QR في الشريحة 5) ويقومون بالاختبار فرديًا وبهدوء (نحو 12 دقيقة).', 'Say before they start: it shows what you would ENJOY, not what you are good at — and it does not decide your future.|قل قبل البدء: يُظهر ما ستستمتع به، لا ما تجيده — ولا يقرّر مستقبلك.', 'Group students by the first letter of their result and give each group one discussion question from the Teacher guide (3 minutes).|اجمع الطلاب حسب الحرف الأول من نتيجتهم وأعطِ كل مجموعة سؤال نقاش من دليل المعلّم (3 دقائق).'),
    say: t('Did anything surprise you? Do you agree with your result?', 'هل فاجأك شيء؟ هل توافق على نتيجتك؟') },
  { min: '27–40', title: t('Build my roadmap', 'ابنِ طريقي'), route: '#/roadmap',
    do: L('From the results page, each student opens "Build my roadmap" with one major they want to explore.|من صفحة النتيجة، يفتح كل طالب «ابنِ طريقي» مع اختصاص يريد استكشافه.', 'They choose a country for each step and a Plan B. Walk around and ask "why this country?"|يختارون بلدًا لكل خطوة وخطة بديلة. تجوّل واسأل «لماذا هذا البلد؟»', 'Students without a laptop fill in the printed worksheet instead.|الطلاب الذين ليس لديهم حاسوب يملؤون ورقة العمل المطبوعة.'),
    say: t('A plan is not a promise. A Plan B makes you stronger, not weaker.', 'الخطة ليست وعدًا. الخطة البديلة تجعلك أقوى لا أضعف.') },
  { min: '40–45', title: t('Exit ticket and share', 'بطاقة الخروج والمشاركة'), route: '#/plan',
    do: L('Each student writes the exit ticket (below) — 3 minutes, no names needed.|يكتب كل طالب بطاقة الخروج (أدناه) — 3 دقائق، من دون أسماء.', 'Students copy their roadmap link or save it as PDF to show their family.|ينسخ الطلاب رابط طريقهم أو يحفظونه PDF ليعرضوه على أهلهم.'),
    say: t('Show your roadmap at home this week and ask one adult what they think.', 'اعرض طريقك في البيت هذا الأسبوع واسأل شخصًا كبيرًا عن رأيه.') }
];

const before = L(
  'Do the fact check first — students should not see unchecked rules.|أنهِ تدقيق المعلومات أولًا — لا يجب أن يرى الطلاب قواعد غير مدقّقة.',
  'Test the site on one school laptop and the projector the day before (internet, sound off, Present mode, QR).|جرّب الموقع على حاسوب من المدرسة وعلى الشاشة قبل يوم (الإنترنت، الحركة، وضع الحصة، رمز QR).',
  'If the projector or laptops are slow, switch "Animations" off in the top bar.|إذا كانت الشاشة أو الحواسيب بطيئة، أوقف «الحركة» من الشريط العلوي.',
  'Print the exit tickets and 3–4 worksheets for students without a laptop.|اطبع بطاقات الخروج و3–4 أوراق عمل للطلاب الذين ليس لديهم حاسوب.',
  'For the pilot: 5–10 students, including at least one international (American-track, English) student.|للتجربة: 5–10 طلاب، بينهم طالب دولي واحد على الأقل (النظام الأميركي، بالإنجليزية).'
);

const watch = L(
  'Where did students stop, ask for help or look lost? (Which screen?)|أين توقّف الطلاب أو طلبوا المساعدة أو بدوا تائهين؟ (أيّ شاشة؟)',
  'Where did they get bored or start doing something else?|أين شعروا بالملل أو بدؤوا يفعلون شيئًا آخر؟',
  'Which words or terms did they not understand (SG, LMD, RIASEC, colloquium…)?|أيّ كلمات أو مصطلحات لم يفهموها (SG، LMD، RIASEC، الكولوكيوم…)؟',
  'Did anyone treat the test result as a final answer?|هل تعامل أحد مع نتيجة الاختبار كأنها جواب نهائي؟',
  'How long did the test really take? Did everyone finish the roadmap?|كم استغرق الاختبار فعلًا؟ هل أنهى الجميع الطريق؟',
  'Technical problems: slow pages, login, language, QR, printing.|مشاكل تقنية: صفحات بطيئة، اللغة، رمز QR، الطباعة.',
  'What did the international student find missing or confusing?|ماذا وجد الطالب الدولي ناقصًا أو مربكًا؟'
);

const exit = {
  q1: t('Name your next two concrete steps (this year).', 'اكتب خطوتين عمليتين تاليتين (هذه السنة).'),
  q2: t('Which faculty or major do you want to explore more?', 'أيّ كلية أو اختصاص تريد أن تستكشفه أكثر؟'),
  q3: t('How useful was today? (circle) 1  2  3  4  5', 'ما مدى فائدة حصة اليوم؟ (ضع دائرة) 1  2  3  4  5'),
  q4: t('One thing that confused you:', 'شيء واحد أربكك:')
};

const success = L(
  'At least 8 out of 10 students can write two concrete next steps.|8 من كل 10 طلاب على الأقل يستطيعون كتابة خطوتين عمليتين.',
  'Every student leaves with a roadmap (link, PDF or worksheet).|كل طالب يخرج بطريق (رابط أو PDF أو ورقة عمل).',
  'Average usefulness 4 or more out of 5.|معدّل الفائدة 4 من 5 أو أكثر.'
);

window.ATLAS.lesson = { steps, before, watch, exit, success };
})();
