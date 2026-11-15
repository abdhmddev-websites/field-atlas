/* Field Atlas — costs & scholarships (Phase 6).
 * Rough yearly ranges in US dollars, for orientation only; fees change every year and differ for
 * nationals and international students. Always check the official page. Written 2026-11.
 */
(function () {
const { t, L } = window.ATLAS;

const costs = {
  lb: { tuition: t('Lebanese University: very low (symbolic fees; higher for non-Lebanese). Private universities: about $6,000–$25,000+ a year (medicine more).', 'الجامعة اللبنانية: منخفضة جدًا (رسوم رمزية؛ وأعلى لغير اللبنانيين). الجامعات الخاصة: من نحو ٦٬٠٠٠ إلى ٢٥٬٠٠٠ دولار سنويًا أو أكثر (الطب أكثر).'),
        living: t('Lower if you live with family; rent in Beirut can be high.', 'أقل إذا سكنت مع العائلة؛ والإيجارات في بيروت قد تكون مرتفعة.'),
        aid: t('Most private universities offer need-based financial aid and merit scholarships — ask early.', 'معظم الجامعات الخاصة تقدّم مساعدات مالية حسب الحاجة ومنحًا للتفوّق — اسأل باكرًا.'), level: 2 },
  gh: { tuition: t('Public universities: a few thousand dollars a year for international students (much less for Ghanaians). Private (e.g. Ashesi): higher.', 'الجامعات الرسمية: بضعة آلاف من الدولارات سنويًا للطلاب الأجانب (وأقل بكثير للغانيين). الخاصة (مثل Ashesi): أعلى.'),
        living: t('You already live in Ghana — a big saving.', 'أنت تعيش أصلًا في غانا — وهذا توفير كبير.'),
        aid: t('Ashesi and others give financial aid; the Mastercard Foundation Scholars Program covers some African students.', 'Ashesi وغيرها تقدّم مساعدات مالية؛ وبرنامج Mastercard Foundation يغطّي بعض الطلاب الأفارقة.'), level: 1 },
  uk: { tuition: t('International students: about £20,000–£40,000 a year (medicine can be £45,000+).', 'الطلاب الأجانب: نحو ٢٠٬٠٠٠–٤٠٬٠٠٠ جنيه سنويًا (الطب قد يتجاوز ٤٥٬٠٠٠).'),
        living: t('About £12,000–£18,000 a year (London more).', 'نحو ١٢٬٠٠٠–١٨٬٠٠٠ جنيه سنويًا (لندن أكثر).'),
        aid: t('Few full scholarships for bachelors; more for masters (Chevening, Commonwealth).', 'منح كاملة قليلة للإجازة؛ وأكثر للماستر (Chevening، Commonwealth).'), level: 4 },
  na: { tuition: t('US: about $25,000–$60,000+ a year. Canada: about CAD 30,000–60,000 for international students.', 'الولايات المتحدة: من نحو ٢٥٬٠٠٠ إلى ٦٠٬٠٠٠ دولار سنويًا أو أكثر. كندا: نحو ٣٠٬٠٠٠–٦٠٬٠٠٠ دولار كندي للطلاب الأجانب.'),
        living: t('About $12,000–$25,000 a year.', 'نحو ١٢٬٠٠٠–٢٥٬٠٠٠ دولار سنويًا.'),
        aid: t('Some US universities give generous need-based aid even to international students — apply early and use their cost calculators.', 'بعض الجامعات الأميركية تقدّم مساعدات سخية حسب الحاجة حتى للطلاب الأجانب — قدّم باكرًا واستعمل حاسبات الكلفة لديها.'), level: 5 },
  eu: { tuition: t('France public universities, since 2026-27: about €2,895 a year (licence) and €3,941 (master) for non-EU students, with limited exemptions. Germany: mostly no tuition, only a small semester fee (Baden-Württemberg charges non-EU students).', 'الجامعات الرسمية في فرنسا منذ 2026-2027: نحو 2,895 يورو سنويًا (إجازة) و3,941 يورو (ماستر) لغير الأوروبيين، مع إعفاءات محدودة. ألمانيا: غالبًا بلا أقساط، فقط رسم فصلي صغير (ولاية بادن-فورتمبرغ تفرض رسومًا على غير الأوروبيين).'),
        living: t('About €10,000–€14,000 a year; Germany asks for proof of money (blocked account) for the visa.', 'نحو ١٠٬٠٠٠–١٤٬٠٠٠ يورو سنويًا؛ وألمانيا تطلب إثبات المال (حساب مجمّد) للتأشيرة.'),
        aid: t('Eiffel (France), DAAD (Germany) and Erasmus Mundus (Europe) — mostly for masters and PhDs.', 'Eiffel (فرنسا) وDAAD (ألمانيا) وErasmus Mundus (أوروبا) — غالبًا للماستر والدكتوراه.'), level: 2 }
};

const scholarships = [
  { name: 'University financial aid & merit scholarships', label: t('University financial aid & merit scholarships', 'المساعدات المالية ومنح التفوّق في الجامعات'), for: t('Bachelor · every country', 'الإجازة · كل البلدان'), who: t('Ask each university: need-based aid, merit scholarships, work-study.', 'اسأل كل جامعة: مساعدات حسب الحاجة، منح للتفوّق، عمل أثناء الدراسة.'), url: null },
  { name: 'Mastercard Foundation Scholars Program', for: t('Bachelor & master · Africa and partners', 'الإجازة والماستر · أفريقيا والجامعات الشريكة'), who: t('For young Africans with financial need (e.g. at Ashesi, KNUST, UCC). Check if your nationality is eligible.', 'للشباب الأفارقة المحتاجين ماليًا (مثل Ashesi وKNUST وUCC). تحقّق إن كانت جنسيتك مؤهّلة.'), url: 'https://mastercardfdn.org/en/what-we-do/our-programs/mastercard-foundation-scholars-program/' },
  { name: 'Chevening Scholarships', for: t('Master · UK', 'الماستر · المملكة المتحدة'), who: t('Fully funded one-year master. Needs a bachelor and work experience. Lebanon and Ghana are eligible countries.', 'ماستر سنة ممول بالكامل. يتطلّب إجازة وخبرة عمل. لبنان وغانا من الدول المؤهّلة.'), url: 'https://www.chevening.org' },
  { name: 'Commonwealth Scholarships', for: t('Master & PhD · UK', 'الماستر والدكتوراه · المملكة المتحدة'), who: t('For citizens of Commonwealth countries such as Ghana.', 'لمواطني دول الكومنولث مثل غانا.'), url: 'https://cscuk.fcdo.gov.uk' },
  { name: 'Fulbright Foreign Student Program', for: t('Master & PhD · US', 'الماستر والدكتوراه · الولايات المتحدة'), who: t('Run in each country by the US embassy / commission.', 'تديره في كل بلد السفارة الأميركية أو لجنة فولبرايت.'), url: 'https://foreign.fulbrightonline.org' },
  { name: 'DAAD', for: t('Master & PhD · Germany', 'الماستر والدكتوراه · ألمانيا'), who: t('Many scholarships; some English-taught masters.', 'منح كثيرة؛ وبعض برامج الماستر بالإنجليزية.'), url: 'https://www.daad.de/en/' },
  { name: 'Eiffel Excellence Scholarship', for: t('Master & PhD · France', 'الماستر والدكتوراه · فرنسا'), who: t('The French university applies for you — ask the program.', 'الجامعة الفرنسية تقدّم الطلب عنك — اسأل البرنامج.'), url: 'https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence' },
  { name: 'Erasmus Mundus Joint Masters', for: t('Master · Europe', 'الماستر · أوروبا'), who: t('Study in 2–3 European countries; full scholarships open to the whole world.', 'ادرس في ٢–٣ بلدان أوروبية؛ منح كاملة مفتوحة للعالم كله.'), url: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en' }
];

const tips = L(
  'Start a year before you apply: most scholarship deadlines are 9–12 months before the start.|ابدأ قبل سنة من التقديم: معظم مواعيد المنح قبل ٩–١٢ شهرًا من بدء الدراسة.',
  'Strong grades matter most for merit scholarships — every year counts.|العلامات القوية هي الأهم لمنح التفوّق — كل سنة تُحتسب.',
  'Need-based aid asks for family income documents — prepare them with your parents.|المساعدات حسب الحاجة تطلب مستندات دخل العائلة — حضّرها مع أهلك.',
  'Compare the TOTAL cost: tuition + housing + food + travel + visa.|قارن الكلفة الكاملة: القسط + السكن + الطعام + السفر + التأشيرة.',
  'A cheaper bachelor (Lebanon, Ghana) and a scholarship master abroad is a smart, common route.|إجازة أقل كلفة (لبنان أو غانا) ثم ماستر بمنحة في الخارج طريق ذكي وشائع.',
  'Never pay an "agent" to guarantee a scholarship — real scholarships are free to apply.|لا تدفع أبدًا لـ«وسيط» يضمن لك منحة — المنح الحقيقية مجانية التقديم.'
);

window.ATLAS.money = { costs, scholarships, tips, checked: '2026-11' };
})();
