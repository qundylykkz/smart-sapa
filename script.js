// SMART SAPA: Бастауыш білім сапасының цифрлық картасы — Негізгі JavaScript логикасы

const STORAGE_KEY = 'smart_sapa_platform_data_v1';

// Бастапқы демо деректер базасы (1-4 сыныптар)
const defaultPlatformData = {
  currentGrade: 3,
  grades: {
    1: {
      title: '1-сынып буыны (Әліппе және Цифрлық сауаттылық бастамасы)',
      quality: 78,
      growth: '+9%',
      supportCount: 8,
      totalStudents: 84,
      starsCollected: 420,
      classes: [
        { name: '1А сыныбы', teacher: 'Айгүл Серікқызы', quality: 84, status: 'green', students: 28, support: 2, topSkill: 'Буындап оқу және дыбыстық талдау' },
        { name: '1Ә сыныбы', teacher: 'Меруерт Қанатқызы', quality: 77, status: 'yellow', students: 28, support: 3, topSkill: '10 көлемінде қосу және азайту' },
        { name: '1Б сыныбы', teacher: 'Гүлнұр Талғатқызы', quality: 73, status: 'yellow', students: 28, support: 3, topSkill: 'Көркем жазу каллиграфиясы' }
      ],
      diagnostics: [
        { id: 'd101', skill: 'Дыбыстық талдау және буындап оқу', subject: 'Әліппе / Ана тілі', level: 'green', mastery: 86, statusText: 'Тақырыпты толық меңгерген', actionText: 'Дамыту: Шығармашылық ертегі құрастыру', studentsCount: 72, details: 'Оқушылар дауысты және дауыссыз дыбыстарды ажыратады, сөздерді буынға дұрыс бөледі. Келесі қадам: шағын мәтіндерді мәнерлеп оқуға баулу.' },
        { id: 'd102', skill: 'Сөйлемді тыныс белгісімен көшіріп жазу', subject: 'Ана тілі', level: 'yellow', mastery: 74, statusText: 'Аздап бекітуді талап етеді', actionText: 'Жаттығу: Графикалық диктант', studentsCount: 9, details: 'Бас әріп пен сөйлем соңындағы нүктені қоюда кейбір оқушылар шатасады. Күнделікті 5 минуттық каллиграфиялық сергіту ұсынылады.' },
        { id: 'd103', skill: 'Ондықтан аттап қосу және азайту (20 көлемінде)', subject: 'Математика', level: 'red', mastery: 62, statusText: 'Қиындық бар (Қолдау қажет)', actionText: 'Жеке жоспар: Сандық сәулемен жұмыс', studentsCount: 8, details: 'Санды құрамы бойынша жіктеп, 10-ға дейін толықтыру тәсілін визуалды текшелермен және сандық сәуле арқылы қайта пысықтау қажет.' }
      ]
    },
    2: {
      title: '2-сынып буыны (Оқу техникасы мен логикалық ойлауды бекіту)',
      quality: 76,
      growth: '+7%',
      supportCount: 10,
      totalStudents: 90,
      starsCollected: 515,
      classes: [
        { name: '2А сыныбы', teacher: 'Жанар Әбдірахманқызы', quality: 83, status: 'green', students: 30, support: 2, topSkill: 'Мәтінді түсініп оқу жылдамдығы' },
        { name: '2Ә сыныбы', teacher: 'Сәуле Бақытқызы', quality: 76, status: 'yellow', students: 30, support: 3, topSkill: '100 көлеміндегі ауызша есептеу' },
        { name: '2Б сыныбы', teacher: 'Динара Нұрланқызы', quality: 69, status: 'red', students: 30, support: 5, topSkill: 'Құрама есептердің шартын құру' }
      ],
      diagnostics: [
        { id: 'd201', skill: 'Сөз таптарын (зат есім, етістік, сын есім) ажырату', subject: 'Қазақ тілі', level: 'green', mastery: 84, statusText: 'Тақырыпты толық меңгерген', actionText: 'Дамыту: Интерактивті сөздік ойындар', studentsCount: 75, details: 'Сұрақ қою арқылы сөз таптарын еркін табады. Деңгейлік шығармашылық тапсырмалар беріледі.' },
        { id: 'd202', skill: 'Мәтіннің бөліктерін (басы, негізгі бөлім, соңы) анықтау', subject: 'Әдебиеттік оқу', level: 'yellow', mastery: 73, statusText: 'Аздап бекітуді талап етеді', actionText: 'Жаттығу: Сюжеттік суреттер реті', studentsCount: 12, details: 'Мәтін жоспарын құруда тірек сөздерді табу жаттығуларын жүйелеу керек.' },
        { id: 'd203', skill: 'Екі амалмен шығарылатын мәтіндік есептер', subject: 'Математика', level: 'red', mastery: 64, statusText: 'Қиындық бар (Қолдау қажет)', actionText: 'Жеке жоспар: Сызба-модельдеу әдісі', studentsCount: 10, details: 'Аралық сұрақты қою және есептің қысқаша шартын сызбаға түсіру бойынша жеке карточкалармен жұмыс жүргізіледі.' }
      ]
    },
    3: {
      title: '3-сынып буыны (Негізгі пәндік құзыреттіліктер мен функционалдық сауаттылық)',
      quality: 74,
      growth: '+8%',
      supportCount: 11,
      totalStudents: 88,
      starsCollected: 640,
      classes: [
        { name: '3А сыныбы', teacher: 'Әсел Мұратқызы', quality: 82, status: 'green', students: 30, support: 2, topSkill: 'Оқылым және функционалдық талдау' },
        { name: '3Ә сыныбы', teacher: 'Ботагөз Ерланқызы', quality: 74, status: 'yellow', students: 29, support: 4, topSkill: 'Мәтінді түсіну және негізгі ой' },
        { name: '3Б сыныбы', teacher: 'Қарлығаш Сәбитқызы', quality: 66, status: 'red', students: 29, support: 5, topSkill: 'Көбейту кестесі мен мәтіндік есеп' }
      ],
      diagnostics: [
        { id: 'd301', skill: 'Оқылым (Мәнерлеп және шапшаң оқу нормасы)', subject: 'Әдебиеттік оқу', level: 'green', mastery: 85, statusText: 'Тақырыпты толық меңгерген', actionText: 'Дамыту: Зерттеушілік оқылым және эссе', studentsCount: 74, details: 'Оқушылар минутына 70-85 сөзді түсініп оқиды, интонация мен логикалық екпінді сақтайды.' },
        { id: 'd302', skill: 'Мәтінді түсіну (Негізгі ой мен детальді ақпаратты табу)', subject: 'Қазақ тілі / Оқу сауаттылығы', level: 'yellow', mastery: 74, statusText: 'Аздап бекітуді талап етеді', actionText: 'Жаттығу: «Сұрақтар түймедағы» әдісі', studentsCount: 14, details: 'Астарлы ақпаратты табу мен автор көзқарасын анықтауда қосымша жетекші сұрақтар қажет.' },
        { id: 'd303', skill: 'Есеп шығару (Кестелік көбейту/бөлу және шамалар арасындағы тәуелділік)', subject: 'Математика', level: 'red', mastery: 63, statusText: 'Қиындық бар (Қолдау қажет)', actionText: 'Жеке жоспар: Геймификацияланған тренажер', studentsCount: 11, details: 'Бағасы, саны, құны немесе жылдамдық, уақыт, қашықтық формулаларын қолдануда жеке қолдау маршруты іске қосылды.' },
        { id: 'd304', skill: 'Табиғат құбылыстары мен себеп-салдарлық байланысты түсіндіру', subject: 'Жаратылыстану', level: 'green', mastery: 81, statusText: 'Тақырыпты толық меңгерген', actionText: 'Дамыту: Шағын STEM тәжірибелер', studentsCount: 71, details: 'Эксперимент нәтижесін қорытындылап, кестеге толтыра алады.' }
      ]
    },
    4: {
      title: '4-сынып буыны (Орта буынға бейімделу және ББЖМ дайындық)',
      quality: 79,
      growth: '+10%',
      supportCount: 7,
      totalStudents: 92,
      starsCollected: 790,
      classes: [
        { name: '4А сыныбы', teacher: 'Ләззат Қайратқызы', quality: 86, status: 'green', students: 31, support: 1, topSkill: 'Логикалық математика және PISA/TIMSS тапсырмалары' },
        { name: '4Ә сыныбы', teacher: 'Роза Берікқызы', quality: 78, status: 'yellow', students: 31, support: 3, topSkill: 'Күрделі теңдеулер мен геометриялық аудан' },
        { name: '4Б сыныбы', teacher: 'Алтынай Серікбайқызы', quality: 73, status: 'yellow', students: 30, support: 3, topSkill: 'Құрмалас сөйлем және эссе жазу' }
      ],
      diagnostics: [
        { id: 'd401', skill: 'Көп таңбалы сандармен арифметикалық амалдар', subject: 'Математика', level: 'green', mastery: 87, statusText: 'Тақырыпты толық меңгерген', actionText: 'Дамыту: Олимпиадалық логикалық есептер', studentsCount: 80, details: 'Бағандап көбейту және бөлу алгоритмін қатесіз орындайды.' },
        { id: 'd402', skill: 'Периметр мен ауданға берілген құрама геометриялық есептер', subject: 'Математика', level: 'yellow', mastery: 75, statusText: 'Аздап бекітуді талап етеді', actionText: 'Жаттығу: Торкөз бетіндегі модельдеу', studentsCount: 10, details: 'Өлшем бірліктерін (см², дм², м²) түрлендіруде жаттығу жұмыстары жүргізілуде.' },
        { id: 'd403', skill: 'Мәтіндерді салыстырмалы талдау (ББЖМ форматы)', subject: 'Оқу сауаттылығы', level: 'red', mastery: 67, statusText: 'Қиындық бар (Қолдау қажет)', actionText: 'Жеке жоспар: Диаграмма мен мәтін интеграциясы', studentsCount: 7, details: 'Кесте мен инфографикадағы деректі мәтінмен сәйкестендіру дағдысына арналған апталық практикум.' }
      ]
    }
  },
  learningGaps: [
    {
      id: 'gap1',
      title: 'Мәтіннің негізгі ойын және тірек сөздерін табу',
      subject: 'Әдебиеттік оқу / Оқу сауаттылығы',
      gradeRange: '2–4 сыныптар',
      frequency: 'Жиі кездесетін (32% оқушыда)',
      difficultyReason: 'Оқушылар мәтінді механикалық түрде оқып шыққанымен, абзацтағы басты идеяны қосалқы детальдардан ажыратуда қиналады.',
      interactiveTask: '«Түртіп алу және 3 сөйлем» әдісі: Мәтінді оқып, әр бөліктен 1 жасыл (басты кейіпкер), 1 сары (іс-әрекет), 1 көк (қорытынды ой) сөзді белгілеп, мақалмен түйіндеу.',
      methodTip: 'Мұғалімге ұсыныс: «Стоп-кадр» тәсілімен оқыту — әр абзацтан соң оқушыға «Автор бізге не айтқысы келді?» деген бір сұрақ қою.'
    },
    {
      id: 'gap2',
      title: 'Екі және үш амалмен шығарылатын мәтіндік есептер',
      subject: 'Математика',
      gradeRange: '2–3 сыныптар',
      frequency: 'Жоғары (38% оқушыда)',
      difficultyReason: 'Есептің шартын толық елестете алмау, бірінші амалда нені табу керектігін (аралық белгісізді) анықтай алмау.',
      interactiveTask: '«Дүкенші және Сатып алушы» рөлдік-визуалды симуляциясы: Сызбадағы бос ұяшықтарды толтырып, есептің шешу ағашын (1-амал -> 2-амал) құрастыру.',
      methodTip: 'Мұғалімге ұсыныс: Есепті сандарсыз оқып, алдымен тек сұрақтар тізбегін құрғызу («Нені білеміз? Нені табу керек?»).'
    },
    {
      id: 'gap3',
      title: 'Көбейту және бөлу кестесін жылдам қолдану (6, 7, 8, 9 сандары)',
      subject: 'Математика',
      gradeRange: '3-сынып',
      frequency: 'Орташа-жоғары (29% оқушыда)',
      difficultyReason: 'Кестені мағынасыз жаттау салдарынан кері амалда (бөлуде) және қалдықпен бөлуде кідіріс пайда болады.',
      interactiveTask: '«Пифагор жұлдызды лабиринті»: Көбейту жұптарын геометриялық тіктөртбұрыш ауданы ретінде бояу және флэш-картамен 60 секундтық спринт.',
      methodTip: 'Мұғалімге ұсыныс: Коммутативтілік қасиетті (7×8 = 8×7) және саусақпен/9-ға көбейту лайфхактарын көрнекі плакатпен беру.'
    },
    {
      id: 'gap4',
      title: 'Дыбыстық-әріптік талдау және дауыссыз дыбыс емлесі (у, и, й, ң)',
      subject: 'Қазақ тілі / Сауат ашу',
      gradeRange: '1–2 сыныптар',
      frequency: 'Орташа (24% оқушыда)',
      difficultyReason: 'Айтылуы мен жазылуында ерекшелігі бар сөздерде дыбыс саны мен әріп санын шатастыру.',
      interactiveTask: '«Дыбыстық бағдаршам» конструкторы: Сөздегі дауысты дыбысты қызыл, ұяңды сары, қатаңды көк текшемен жинау.',
      methodTip: 'Мұғалімге ұсыныс: Артикуляциялық айнамен жұмыс және буындық лото ойындарын сабақ басында 4 минут қолдану.'
    },
    {
      id: 'gap5',
      title: 'Шамалар арасындағы тәуелділік (Жылдамдық, Уақыт, Қашықтық)',
      subject: 'Математика',
      gradeRange: '3–4 сыныптар',
      frequency: 'Жиі кездесетін (31% оқушыда)',
      difficultyReason: 'Формулаларды өмірлік жағдаятпен байланыстырмау және өлшем бірліктерін (км/сағ, м/мин) шатастыру.',
      interactiveTask: '«Зымыран саяхаты» интерактивті сызбасы: Қозғалыс бағытын көрсеткімен белгілеп, сиқырлы үшбұрыш (S = v × t) арқылы белгісізді табу.',
      methodTip: 'Мұғалімге ұсыныс: Дене шынықтыру сабағымен кіріктіріп, оқушылардың өз жүру уақыты мен қашықтығын өлшету.'
    },
    {
      id: 'gap6',
      title: 'Сөз құрамына талдау (Түбір мен қосымша реті)',
      subject: 'Қазақ тілі',
      gradeRange: '3–4 сыныптар',
      frequency: 'Орташа (22% оқушыда)',
      difficultyReason: 'Жұрнақ пен жалғаудың қызметін (сөз тудырушы және сөз түрлендіруші) ажыратудағы қиындық.',
      interactiveTask: '«Сөз пойызы» ойыны: Түбір сөз вагонына мағына өзгертетін жұрнақ пен сөз байланыстыратын жалғау вагондарын дұрыс тіркеу.',
      methodTip: 'Мұғалімге ұсыныс: Түбірлес сөздер ұясын жасату арқылы жұрнақтың жаңа ұғым жасайтынын дәлелдеу.'
    }
  ],
  students: [
    {
      id: 'st1',
      name: 'Арман Асқарұлы',
      grade: '3А сынып',
      avatar: '🚀',
      stars: 145,
      mentorNote: 'Арман соңғы 4 аптада мәтіндік есептерді сызбамен шығаруда +18% өсім көрсетті! Жеке қолдау бағдарламасы оң нәтиже беруде.',
      supportStatus: 'Оң динамика (Сарыдан -> Жасылға өтуде)',
      skills: [
        { name: 'Оқылым және мәнерлеп оқу', before: 68, after: 86 },
        { name: 'Мәтінді түсіну және талдау', before: 60, after: 79 },
        { name: 'Екі амалмен есеп шығару', before: 52, after: 74 },
        { name: 'Көбейту және бөлу кестесі', before: 58, after: 82 },
        { name: 'Жазбаша сауаттылық (Диктант)', before: 64, after: 80 }
      ],
      badges: [
        { icon: '🏆', title: 'Математика шебері', desc: 'Көбейту кестесін 100% меңгерді', earned: true },
        { icon: '🦸‍♂️', title: 'Оқымысты суперқаһарман', desc: 'Аптасына 3 ертегі талдады', earned: true },
        { icon: '🌟', title: 'Алтын Қалам', desc: 'Қатесіз 5 шығармашылық жұмыс', earned: true },
        { icon: '🔬', title: 'Жас Зерттеуші', desc: 'Жаратылыстану жобасының жеңімпазы', earned: false }
      ]
    },
    {
      id: 'st2',
      name: 'Айару Нұржанқызы',
      grade: '3Ә сынып',
      avatar: '🦄',
      stars: 162,
      mentorNote: 'Айару оқылым мен шығармашылық эссе жазуда өте жоғары нәтиже көрсетеді. Логикалық есептер бойынша қосымша деңгейлік тапсырмалар берілді.',
      supportStatus: 'Тұрақты жоғары (Дамыту траекториясы)',
      skills: [
        { name: 'Оқылым және мәнерлеп оқу', before: 78, after: 94 },
        { name: 'Мәтінді түсіну және талдау', before: 74, after: 90 },
        { name: 'Екі амалмен есеп шығару', before: 62, after: 78 },
        { name: 'Көбейту және бөлу кестесі', before: 70, after: 85 },
        { name: 'Жазбаша сауаттылық (Диктант)', before: 80, after: 92 }
      ],
      badges: [
        { icon: '🦸‍♀️', title: 'Оқымысты суперқаһарман', desc: 'Мектептің үздік оқырманы', earned: true },
        { icon: '🌟', title: 'Алтын Қалам', desc: 'Үздік эссе авторы', earned: true },
        { icon: '🏆', title: 'Математика шебері', desc: 'Логикалық марафон белсендісі', earned: true },
        { icon: '🔬', title: 'Жас Зерттеуші', desc: 'Эко-жоба авторы', earned: true }
      ]
    },
    {
      id: 'st3',
      name: 'Ерасыл Болатұлы',
      grade: '3Б сынып',
      avatar: '🦖',
      stars: 98,
      mentorNote: 'Ерасылмен «Білім бағдаршамы» аясында аптасына 2 рет жеке қолдау сабағы өтілуде. Көбейту кестесі мен мәтін мазмұнын айтуда +15% ілгерілеу бар.',
      supportStatus: 'Белсенді жеке қолдау (Қызылдан -> Сарыға өтті)',
      skills: [
        { name: 'Оқылым және мәнерлеп оқу', before: 54, after: 71 },
        { name: 'Мәтінді түсіну және талдау', before: 49, after: 68 },
        { name: 'Екі амалмен есеп шығару', before: 45, after: 64 },
        { name: 'Көбейту және бөлу кестесі', before: 50, after: 72 },
        { name: 'Жазбаша сауаттылық (Диктант)', before: 52, after: 67 }
      ],
      badges: [
        { icon: '🏆', title: 'Математика шебері', desc: 'Көбейту спринтінде +22% өсім', earned: true },
        { icon: '🦸‍♂️', title: 'Оқымысты суперқаһарман', desc: 'Оқу жылдамдығын арттырды', earned: true },
        { icon: '🌟', title: 'Алтын Қалам', desc: 'Каллиграфия марафонында', earned: false },
        { icon: '🔬', title: 'Жас Зерттеуші', desc: 'Алғашқы зертханалық тәжірибе', earned: false }
      ]
    }
  ]
};

let appState = loadState();
let currentTrafficFilter = 'all';
let selectedStudentId = appState.students[0].id;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn('LocalStorage оқу қатесі:', e);
  }
  return JSON.parse(JSON.stringify(defaultPlatformData));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.warn('LocalStorage сақтау қатесі:', e);
  }
}

// Навигациялық бөлімдерді ауыстыру
function switchSection(sectionId) {
  document.querySelectorAll('.section-view').forEach(sec => {
    sec.classList.remove('active');
  });
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === sectionId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Сынып буынын ауыстыру (1-4 сынып)
function selectGrade(gradeNum) {
  appState.currentGrade = Number(gradeNum);
  saveState();

  document.querySelectorAll('.grade-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.grade) === appState.currentGrade);
  });

  renderDashboard();
  renderMonitoringSection();
  renderTrafficLightSection();
  showToast(`📚 ${gradeNum}-сынып буынының деректері жүктелді!`);
}

// 1. БАСТЫ БЕТ (DASHBOARD) РЕНДЕРІ
function renderDashboard() {
  const g = appState.grades[appState.currentGrade];
  if (!g) return;

  document.getElementById('currentGradeTitle').textContent = g.title;
  document.getElementById('kpiQuality').textContent = `${g.quality}%`;
  document.getElementById('kpiGrowth').textContent = g.growth;
  document.getElementById('kpiSupport').textContent = `${g.supportCount} оқушы`;
  document.getElementById('kpiStars').textContent = `${g.starsCollected} ⭐`;

  const classGrid = document.getElementById('dashboardClassGrid');
  classGrid.innerHTML = g.classes.map(cls => {
    const pillClass = cls.status === 'green' ? 'pill-green' : cls.status === 'yellow' ? 'pill-yellow' : 'pill-red';
    const fillClass = cls.status === 'green' ? 'fill-green' : cls.status === 'yellow' ? 'fill-yellow' : 'fill-red';
    const statusLabel = cls.status === 'green' ? '🟢 Жоғары деңгей' : cls.status === 'yellow' ? '🟡 Орташа (Тұрақты)' : '🔴 Қолдау қажет';

    return `
      <div class="class-card" onclick="openClassModal('${cls.name}', '${cls.teacher}', ${cls.quality}, ${cls.students}, ${cls.support}, '${cls.topSkill}')">
        <div class="class-card-top">
          <div class="class-badge">🏫 ${cls.name}</div>
          <span class="traffic-pill ${pillClass}">${statusLabel}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <span style="font-size:0.85rem; font-weight:700; color:var(--text-muted);">Білім сапасы:</span>
          <span style="font-size:1.65rem; font-weight:800; color:var(--text-dark);">${cls.quality}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill ${fillClass}" style="width: ${cls.quality}%"></div>
        </div>
        <p style="font-size:0.82rem; font-weight:600; color:var(--teal-accent); margin: 8px 0;">
          🎯 Басым дағды: ${cls.topSkill}
        </p>
        <div class="class-meta">
          <span>👩‍🏫 ${cls.teacher}</span>
          <span>👧👦 ${cls.students} оқушы (Қолдауда: ${cls.support})</span>
        </div>
      </div>
    `;
  }).join('');

  // Басты беттегі қысқаша бағдаршам превьюі
  const quickDiag = document.getElementById('dashboardQuickTraffic');
  if (quickDiag) {
    quickDiag.innerHTML = g.diagnostics.map(d => renderDiagnosticCardHTML(d)).join('');
  }
}

// 2. 1-4 СЫНЫПТАР МОНИТОРИНГІ БӨЛІМІ
function renderMonitoringSection() {
  const tbody = document.getElementById('allGradesComparisonBody');
  if (!tbody) return;

  const rows = Object.keys(appState.grades).map(gradeKey => {
    const gr = appState.grades[gradeKey];
    const avgClass = gr.classes.map(c => `${c.name} (${c.quality}%)`).join(' • ');
    return `
      <tr>
        <td><strong style="color:var(--primary-blue); font-size:0.95rem;">${gradeKey}-сыныптар</strong></td>
        <td>${gr.totalStudents} оқушы</td>
        <td><span class="traffic-pill ${gr.quality >= 78 ? 'pill-green' : 'pill-yellow'}">${gr.quality}%</span></td>
        <td style="color:#048A65; font-weight:800;">${gr.growth}</td>
        <td><span class="traffic-pill pill-red">${gr.supportCount} оқушы</span></td>
        <td style="font-size:0.82rem;">${avgClass}</td>
        <td>
          <button class="btn btn-outline" style="padding:6px 12px; font-size:0.78rem;" onclick="selectGrade(${gradeKey}); switchSection('sec-dashboard');">
            Көру →
          </button>
        </td>
      </tr>
    `;
  }).join('');

  tbody.innerHTML = rows;
}

// 3. БІЛІМ БАҒДАРШАМЫ МОДУЛІ
function renderDiagnosticCardHTML(d) {
  const levelClass = `level-${d.level}`;
  const pillClass = d.level === 'green' ? 'pill-green' : d.level === 'yellow' ? 'pill-yellow' : 'pill-red';
  const emoji = d.level === 'green' ? '🟢 Жасыл (Жоғары)' : d.level === 'yellow' ? '🟡 Сары (Орташа)' : '🔴 Қызыл (Қолдау қажет)';
  const fillClass = d.level === 'green' ? 'fill-green' : d.level === 'yellow' ? 'fill-yellow' : 'fill-red';

  return `
    <div class="diag-card ${levelClass}">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:10px;">
          <span class="traffic-pill ${pillClass}">${emoji}</span>
          <span style="font-size:0.78rem; font-weight:700; color:var(--text-muted);">${d.subject}</span>
        </div>
        <h3 style="font-size:1.05rem; font-weight:800; margin-bottom:6px;">${d.skill}</h3>
        <p style="font-size:0.83rem; color:var(--text-muted); font-weight:600; margin-bottom:10px;">
          Статус: <strong>${d.statusText}</strong> (${d.studentsCount} оқушы)
        </p>
        <div class="progress-track">
          <div class="progress-fill ${fillClass}" style="width:${d.mastery}%"></div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:0.78rem; font-weight:700;">
          <span>Меңгеру деңгейі:</span>
          <span>${d.mastery}%</span>
        </div>
      </div>
      <div class="diag-action-box">
        <div style="font-size:0.8rem; font-weight:700; color:var(--text-dark);">
          ⚡ ${d.actionText}
        </div>
        <button class="btn btn-outline" style="padding:7px 12px; font-size:0.76rem;" onclick="openDiagnosticModal('${d.id}')">
          Картасы
        </button>
      </div>
    </div>
  `;
}

function renderTrafficLightSection() {
  const g = appState.grades[appState.currentGrade];
  const container = document.getElementById('trafficDiagnosticGrid');
  if (!container || !g) return;

  const filtered = currentTrafficFilter === 'all'
    ? g.diagnostics
    : g.diagnostics.filter(item => item.level === currentTrafficFilter);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="mgmt-card" style="grid-column:1/-1; text-align:center;">Бұл фильтр бойынша дағдылар табылмады.</div>`;
    return;
  }

  container.innerHTML = filtered.map(d => renderDiagnosticCardHTML(d)).join('');
}

function filterTraffic(level) {
  currentTrafficFilter = level;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.level === level);
  });
  renderTrafficLightSection();
}

// 4. ОҚУ ОЛҚЫЛЫҚТАРЫНЫҢ НАВИГАТОРЫ
function renderGapsSection() {
  const container = document.getElementById('learningGapsContainer');
  if (!container) return;

  container.innerHTML = appState.learningGaps.map(gap => `
    <div class="gap-card">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span class="gap-subject-tag">📘 ${gap.subject}</span>
        <span class="traffic-pill pill-red">📌 ${gap.gradeRange}</span>
      </div>
      <h3 style="font-size:1.1rem; font-weight:800; margin:6px 0 8px;">${gap.title}</h3>
      <p style="font-size:0.82rem; color:var(--coral-red); font-weight:700; margin-bottom:8px;">
        📊 Кездесу жиілігі: ${gap.frequency}
      </p>
      <p style="font-size:0.84rem; color:var(--text-muted); font-weight:600;">
        <strong>Себебі:</strong> ${gap.difficultyReason}
      </p>
      <div class="gap-task-box">
        <strong>🎮 Адаптивті интерактивті тапсырма:</strong><br/>
        ${gap.interactiveTask}
      </div>
      <p style="font-size:0.82rem; font-weight:600; color:var(--teal-accent); margin-bottom:14px;">
        💡 ${gap.methodTip}
      </p>
      <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="openGapExerciseModal('${gap.id}')">
        🎯 Тапсырманы сыныпта қолдану (Интерактивті тренажер)
      </button>
    </div>
  `).join('');
}

// 5. ӨСУ ТРАЕКТОРИЯСЫ (ОҚУШЫНЫҢ ЖЕКЕ ПАСПОРТЫ)
function renderStudentPassport() {
  const selector = document.getElementById('studentSelectDropdown');
  if (selector) {
    selector.innerHTML = appState.students.map(st => `
      <option value="${st.id}" ${st.id === selectedStudentId ? 'selected' : ''}>
        ${st.avatar} ${st.name} (${st.grade})
      </option>
    `).join('');
  }

  const student = appState.students.find(s => s.id === selectedStudentId) || appState.students[0];
  if (!student) return;

  document.getElementById('passportAvatar').textContent = student.avatar;
  document.getElementById('passportName').textContent = student.name;
  document.getElementById('passportGrade').textContent = student.grade;
  document.getElementById('passportStars').textContent = `${student.stars} Жұлдызша`;
  document.getElementById('passportSupportStatus').textContent = student.supportStatus;
  document.getElementById('passportMentorNote').textContent = student.mentorNote;

  const badgesEl = document.getElementById('passportBadgesGrid');
  badgesEl.innerHTML = student.badges.map(b => `
    <div class="badge-item ${b.earned ? 'earned' : ''}">
      <div style="font-size:1.6rem; margin-bottom:4px;">${b.icon}</div>
      <div>${b.title}</div>
      <div style="font-size:0.7rem; font-weight:600; opacity:0.85; margin-top:3px;">${b.desc}</div>
    </div>
  `).join('');

  const skillsEl = document.getElementById('passportSkillsCompare');
  skillsEl.innerHTML = student.skills.map(sk => {
    const diff = sk.after - sk.before;
    return `
      <div class="skill-compare-row">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:0.92rem;">${sk.name}</strong>
          <span class="traffic-pill pill-green">Өсім: +${diff}% 🚀</span>
        </div>
        <div class="dual-bars">
          <div class="bar-line">
            <span class="bar-tag">Бастапқы: ${sk.before}%</span>
            <div class="progress-track" style="margin:0; flex:1; height:10px;">
              <div class="progress-fill fill-yellow" style="width:${sk.before}%"></div>
            </div>
          </div>
          <div class="bar-line">
            <span class="bar-tag" style="color:var(--teal-accent);">Қазіргі: ${sk.after}%</span>
            <div class="progress-track" style="margin:0; flex:1; height:12px;">
              <div class="progress-fill fill-green" style="width:${sk.after}%"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function onStudentChange(studentId) {
  selectedStudentId = studentId;
  renderStudentPassport();
}

function awardStarToCurrentStudent() {
  const student = appState.students.find(s => s.id === selectedStudentId);
  if (!student) return;
  student.stars += 5;
  appState.grades[appState.currentGrade].starsCollected += 5;
  saveState();
  renderStudentPassport();
  renderDashboard();
  showToast(`🌟 ${student.name} +5 «Жұлдызды Академия» ұпайымен марапатталды!`);
}

// 6. МОДАЛЬДЫ ТЕРЕЗЕЛЕР МЕН ЖАҢА ОҚУШЫ ҚОСУ
function openDiagnosticModal(diagId) {
  const g = appState.grades[appState.currentGrade];
  const d = g.diagnostics.find(item => item.id === diagId);
  if (!d) return;

  const modalContent = document.getElementById('dynamicModalBody');
  modalContent.innerHTML = `
    <span class="traffic-pill ${d.level === 'green' ? 'pill-green' : d.level === 'yellow' ? 'pill-yellow' : 'pill-red'}">
      ${d.subject} • Меңгеру: ${d.mastery}%
    </span>
    <h2 style="margin:12px 0 8px; font-size:1.3rem; font-weight:800;">${d.skill}</h2>
    <p style="font-size:0.9rem; color:var(--text-muted); font-weight:600; margin-bottom:16px;">
      ${d.details}
    </p>
    <div style="background:var(--bg-main); padding:16px; border-radius:16px; margin-bottom:16px;">
      <h4 style="font-size:0.92rem; margin-bottom:8px;">📋 Жеке қолдау және түзету алгоритмі:</h4>
      <ul style="padding-left:20px; font-size:0.86rem; font-weight:600; display:flex; flex-direction:column; gap:6px;">
        <li><strong>1-қадам (Диагностика):</strong> Қате жіберілген нақты микро-дағдыны анықтау (${d.studentsCount} оқушы қамтылған).</li>
        <li><strong>2-қадам (Әрекет):</strong> ${d.actionText}.</li>
        <li><strong>3-қадам (Мониторинг):</strong> Апта соңында 5 тапсырмадан тұратын экспресс-чек жүргізу.</li>
      </ul>
    </div>
    <div style="display:flex; justify-content:flex-end; gap:10px;">
      <button class="btn btn-primary" onclick="closeModal(); showToast('✅ Әдістемелік карта мұғалім портфолиосына сақталды!');">
        📥 Жоспарды жүктеу / Қолдану
      </button>
    </div>
  `;
  document.getElementById('appModal').classList.add('open');
}

function openClassModal(name, teacher, quality, students, support, topSkill) {
  const modalContent = document.getElementById('dynamicModalBody');
  modalContent.innerHTML = `
    <span class="traffic-pill pill-green">🏫 Сынып паспорты</span>
    <h2 style="margin:10px 0 6px; font-size:1.35rem; font-weight:800;">${name} — Толық аналитика</h2>
    <p style="font-size:0.88rem; color:var(--text-muted); font-weight:600; margin-bottom:16px;">
      Сынып жетекшісі: <strong>${teacher}</strong> | Оқушы саны: <strong>${students}</strong>
    </p>
    <div class="kpi-grid" style="grid-template-columns:1fr 1fr; margin-bottom:16px;">
      <div style="background:var(--primary-blue-light); padding:14px; border-radius:14px;">
        <div style="font-size:0.78rem; font-weight:700;">Білім сапасы</div>
        <div style="font-size:1.6rem; font-weight:800; color:var(--primary-blue);">${quality}%</div>
      </div>
      <div style="background:var(--coral-red-light); padding:14px; border-radius:14px;">
        <div style="font-size:0.78rem; font-weight:700;">Жеке қолдауда</div>
        <div style="font-size:1.6rem; font-weight:800; color:var(--coral-red);">${support} оқушы</div>
      </div>
    </div>
    <p style="font-size:0.88rem; font-weight:600; margin-bottom:16px;">
      🎯 <strong>Үздік қалыптасқан дағды:</strong> ${topSkill}<br/>
      💡 <strong>Әдістемелік ұсыныс:</strong> Қолдауды қажет ететін ${support} оқушыға «Оқу олқылықтарының навигаторы» модулінен апталық микро-тапсырмалар бекітілген.
    </p>
    <button class="btn btn-primary" onclick="closeModal(); switchSection('sec-passport');">
      🚀 Оқушылардың өсу траекториясына өту
    </button>
  `;
  document.getElementById('appModal').classList.add('open');
}

function openGapExerciseModal(gapId) {
  const gap = appState.learningGaps.find(g => g.id === gapId);
  if (!gap) return;

  const modalContent = document.getElementById('dynamicModalBody');
  modalContent.innerHTML = `
    <span class="gap-subject-tag">${gap.subject}</span>
    <h2 style="font-size:1.25rem; font-weight:800; margin-bottom:10px;">🎮 Интерактивті тапсырма: ${gap.title}</h2>
    <div class="gap-task-box" style="font-size:0.92rem;">
      ${gap.interactiveTask}
    </div>
    <p style="font-size:0.86rem; font-weight:600; color:var(--text-muted); margin-bottom:16px;">
      ${gap.methodTip}
    </p>
    <div style="background:var(--bright-green-light); padding:14px; border-radius:14px; margin-bottom:16px; font-size:0.85rem; font-weight:700; color:#055A43;">
      ✨ Күтілетін нәтиже: 2 апталық жүйелі қолданудан кейін оқушылардың тақырыпты меңгеру көрсеткіші орта есеппен +14%-ға артады.
    </div>
    <button class="btn btn-primary" onclick="closeModal(); showToast('🎯 Интерактивті тапсырма сынып журналына белгіленді!');">
      ✅ Сабақ жоспарына қосу
    </button>
  `;
  document.getElementById('appModal').classList.add('open');
}

function openAddStudentModal() {
  const modalContent = document.getElementById('dynamicModalBody');
  modalContent.innerHTML = `
    <h2 style="font-size:1.3rem; font-weight:800; margin-bottom:6px;">➕ Жаңа оқушы және диагностика қосу</h2>
    <p style="font-size:0.84rem; color:var(--text-muted); font-weight:600; margin-bottom:16px;">
      Енгізілген деректер браузер жадында (localStorage) автоматты түрде сақталады.
    </p>
    <form onsubmit="handleAddStudentSubmit(event)">
      <div class="form-group">
        <label>Оқушының аты-жөні:</label>
        <input type="text" id="newStudentName" class="form-control" placeholder="Мысалы: Кәусар Маратқызы" required />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div class="form-group">
          <label>Сыныбы:</label>
          <select id="newStudentGrade" class="form-control">
            <option value="1А сынып">1А сынып</option>
            <option value="2А сынып">2А сынып</option>
            <option value="3А сынып" selected>3А сынып</option>
            <option value="3Ә сынып">3Ә сынып</option>
            <option value="4А сынып">4А сынып</option>
          </select>
        </div>
        <div class="form-group">
          <label>Аватар белгісі:</label>
          <select id="newStudentAvatar" class="form-control">
            <option value="🚀">🚀 Ғарышкер</option>
            <option value="🦁">🦁 Батыл Арыстан</option>
            <option value="🦉">🦉 Дана Үкі</option>
            <option value="🌟">🌟 Жұлдызша</option>
          </select>
        </div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div class="form-group">
          <label>Бастапқы көрсеткіші (%):</label>
          <input type="number" id="newStudentBefore" class="form-control" value="58" min="20" max="95" required />
        </div>
        <div class="form-group">
          <label>Қазіргі нәтижесі (%):</label>
          <input type="number" id="newStudentAfter" class="form-control" value="81" min="25" max="100" required />
        </div>
      </div>
      <div class="form-group">
        <label>Жеке қолдау қорытындысы (Мұғалім пікірі):</label>
        <input type="text" id="newStudentNote" class="form-control" value="Жеке қолдау картасы бойынша оқылым мен математикадан жоғары серпін көрсетті!" required />
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:18px;">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Болдырмау</button>
        <button type="submit" class="btn btn-primary">💾 Сақтау және Паспорт ашу</button>
      </div>
    </form>
  `;
  document.getElementById('appModal').classList.add('open');
}

function handleAddStudentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('newStudentName').value.trim();
  const grade = document.getElementById('newStudentGrade').value;
  const avatar = document.getElementById('newStudentAvatar').value;
  const before = Number(document.getElementById('newStudentBefore').value);
  const after = Number(document.getElementById('newStudentAfter').value);
  const note = document.getElementById('newStudentNote').value.trim();

  const newId = 'st_' + Date.now();
  const newStudent = {
    id: newId,
    name,
    grade,
    avatar,
    stars: 120,
    mentorNote: note,
    supportStatus: 'Жаңа диагностика (Оң серпін +' + Math.max(0, after - before) + '%)',
    skills: [
      { name: 'Оқылым және мәнерлеп оқу', before, after },
      { name: 'Мәтінді түсіну және талдау', before: Math.max(30, before - 4), after: Math.min(100, after - 2) },
      { name: 'Екі амалмен есеп шығару', before: Math.max(30, before - 6), after: Math.min(100, after - 3) },
      { name: 'Көбейту және бөлу кестесі', before: Math.max(35, before - 2), after: Math.min(100, after) }
    ],
    badges: [
      { icon: '🏆', title: 'Математика шебері', desc: 'Жеке жоспарды орындады', earned: true },
      { icon: '🦸‍♂️', title: 'Оқымысты суперқаһарман', desc: 'Оқылым нормасын асырды', earned: true },
      { icon: '🌟', title: 'Алтын Қалам', desc: 'Сауатты жазу шебері', earned: after >= 80 },
      { icon: '🔬', title: 'Жас Зерттеуші', desc: 'Жобалық жұмыс', earned: false }
    ]
  };

  appState.students.unshift(newStudent);
  selectedStudentId = newId;
  saveState();
  closeModal();
  renderStudentPassport();
  switchSection('sec-passport');
  showToast(`🎉 ${name} «Өсу траекториясы» базасына сәтті қосылды!`);
}

function closeModal() {
  document.getElementById('appModal').classList.remove('open');
}

// ДЕМО ПРЕЗЕНТАЦИЯ РЕЖИМІ (ҚАЗЫЛАР АЛҚАСЫНА АРНАЛҒАН)
function triggerJuryDemoMode() {
  showToast('✨ Қазылар алқасына арналған Демо-таныстырылым режимі іске қосылды!');
  const g = appState.grades[appState.currentGrade];
  if (g && g.quality < 88) {
    g.quality += 2;
    g.starsCollected += 25;
  }
  renderDashboard();
  renderMonitoringSection();
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEY);
  appState = JSON.parse(JSON.stringify(defaultPlatformData));
  selectedStudentId = appState.students[0].id;
  selectGrade(3);
  renderGapsSection();
  renderStudentPassport();
  showToast('🔄 Бастапқы демо деректер қалпына келтірілді!');
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Бет жүктелгенде барлық модульдерді іске қосу
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderMonitoringSection();
  renderTrafficLightSection();
  renderGapsSection();
  renderStudentPassport();
});
