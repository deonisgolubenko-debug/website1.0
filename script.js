/* ═══════════════════════════════════════
   1. LOCALISATION
═══════════════════════════════════════ */
const translations = {
    ru: {
        // nav
        "nav-start": "Старт", "nav-frontend": "Frontend",
        "nav-backend": "Backend", "nav-security": "Security",
        // home
        "hero-badge": "v2.0 — Погружение",
        "hero-title": "Добро пожаловать в мир кода",
        "hero-desc": "Веб-разработка — это создание живых систем в браузере. Вы находитесь на сайте, который объясняет сам себя.",
        "stat-sites": "сайтов в мире",
        "stat-devs":  "разработчиков",
        "stat-salary":"ЗП / год (США)",
        "stat-possible":"возможностей",
        "card-html": "Это кости. Текст, кнопки и картинки, которые вы видите прямо сейчас.",
        "card-css": "Это кожа и одежда. Цвета, отступы и красивая темная тема этого сайта.",
        "card-js": "Это мышцы и мозг. Он меняет страницы без перезагрузки и запускает игры.",
        // roadmap
        "roadmap-title": "🗺 Путь веб-разработчика",
        "roadmap-subtitle": "Ты здесь → двигайся дальше по каждому разделу",
        "rm-html": "Структура", "rm-css": "Стили", "rm-js": "Логика",
        "rm-react": "Фреймворк", "rm-node": "Backend",
        "rm-db": "База данных", "rm-deploy": "Публикация",
        // quiz
        "quiz-title": "🧠 Быстрый тест",
        "quiz-subtitle": "3 вопроса — проверь базовое понимание",
        "quiz-check": "Проверить",
        "quiz-retry": "Пройти снова",
        // frontend
        "front-title": "Frontend: Лицо продукта",
        "front-desc": "Фронтенд-разработчик заботится о пользователе. Его задача — чтобы интерфейс был удобным на телефонах и быстрым на компьютерах.",
        "front-quote": '"Интерфейс — это как шутка. Если вам приходится его объяснять, значит, он не так уж хорош."',
        "lesson-html-title": "HTML — Структура",
        "lesson-html-desc": "Теги создают элементы — строительные блоки страницы",
        "lesson-css-title": "CSS — Стиль",
        "lesson-css-desc": "Правила делают элементы красивыми и адаптивными",
        "lesson-js-title": "JS — Логика",
        "lesson-js-desc": "События и DOM — основа любой интерактивности",
        "demo-title": "🎨 Попробуй: CSS в реальном времени",
        "demo-desc": "Измени цвета — посмотри, как CSS мгновенно меняет кнопку",
        "demo-bg": "Фон", "demo-txt": "Текст", "demo-btn-text": "Я кнопка!",
        // box model
        "box-title": "📦 CSS Box Model — интерактивно",
        "box-desc": "Наведи на слой коробки — узнай, что он делает",
        "bm-content-lbl": "content",
        "bm-hint": "← Наведи на любой слой",
        // responsive
        "resp-title": "📱 Адаптивность",
        "resp-desc": "Фронтенд должен хорошо выглядеть на любом экране. Для этого используют media queries в CSS и гибкие единицы (%, vw, rem).",
        // frameworks
        "fw-title": "⚛️ Популярные фреймворки",
        "fw-desc": "После JavaScript — переход на фреймворк. Они ускоряют создание сложных интерфейсов",
        "fw-react-pct": "~42% рынка", "fw-vue-pct": "~19% рынка", "fw-svelte-pct": "Растёт 🚀",
        "fw-react-desc": "Создан Facebook. Самый популярный. Идеален для SPA и Next.js / React Native.",
        "fw-vue-desc": "Лёгкий старт. Хорош для небольших и средних проектов. Популярен в Азии.",
        "fw-svelte-desc": "Компилируется в чистый JS без виртуального DOM. Меньше кода — больше скорости.",
        // backend
        "back-title": "Backend: Сердце и Логика",
        "back-desc": "Здесь живут базы данных, серверы и алгоритмы. Когда вы логинитесь на сайт, Backend проверяет ваш пароль в «цифровом архиве».",
        "flow-title": "Как работает запрос?",
        "flow-browser": "Браузер",   "flow-browser-desc": "Отправляет запрос",
        "flow-server":  "Сервер",    "flow-server-desc":  "Обрабатывает логику",
        "flow-db":      "База данных","flow-db-desc":      "Хранит данные",
        "flow-resp":    "Ответ",     "flow-resp-desc":    "JSON / HTML",
        "api-title": "Что такое API?",
        "api-desc": "API — контракт между клиентом и сервером. Вы запрашиваете данные по URL — сервер отвечает JSON-ом.",
        "api-run": "▶ Отправить запрос",
        "api-placeholder": "// Нажми кнопку, чтобы увидеть ответ сервера",
        // auth
        "auth-title": "🔑 Аутентификация: сессии vs JWT",
        "auth-desc": "Как сервер узнаёт, кто ты после логина? Два главных подхода:",
        "auth-sess-title": "Сессии + Cookie",
        "auth-s1": "Логин → сервер создаёт сессию в БД",
        "auth-s2": "Браузер получает session_id в cookie",
        "auth-s3": "Каждый запрос → сервер ищет сессию в БД",
        "auth-s4": "Данные хранятся на сервере",
        "auth-s-note": "✓ Просто отозвать доступ",
        "auth-j1": "Логин → сервер подписывает токен",
        "auth-j2": "Браузер хранит токен в localStorage",
        "auth-j3": "Каждый запрос: Authorization: Bearer <jwt>",
        "auth-j4": "Сервер проверяет подпись — без обращения к БД",
        "auth-j-note": "⚡ Масштабируется лучше",
        // node
        "node-title": "⚡ Node.js — Backend на JavaScript",
        "node-desc": "Node.js позволяет писать сервер на том же языке, что и браузер. Вот простой REST API с Express:",
        // db
        "db-title": "База данных: таблица users",
        "db-desc": "Данные хранятся как в таблице — строками и столбцами. SQL-запросы их читают и изменяют.",
        "db-col-role": "роль",
        // security
        "sec-title": "Security: Цифровая крепость",
        "sec-desc": "Безопасность — это не только сложные пароли, но и защита от взлома данных, шифрование и бдительность разработчика.",
        "tip-https": "Шифрует трафик между браузером и сервером. Без него данные видны всем в сети.",
        "tip-xss": "Атака внедрением скриптов. Никогда не вставляй данные пользователя напрямую в HTML.",
        "tip-pw-title": "Пароли",
        "tip-pw-desc": "Хранятся только как хеши (bcrypt, argon2). Никогда — в открытом виде.",
        "tip-sql": "Используй параметризованные запросы. Никогда не собирай SQL из строк.",
        "tip-cors": "Cross-Origin Resource Sharing. Сервер явно разрешает запросы с нужных доменов через заголовки.",
        "tip-csrf": "Межсайтовая подделка запроса. Используй CSRF-токены и флаг SameSite для cookie.",
        "tip-rate-title": "Rate Limiting",
        "tip-rate": "Ограничивай число запросов с одного IP. Защищает от брутфорса и DoS-атак.",
        "tip-2fa": "Двухфакторная аутентификация. Даже при утечке пароля злоумышленник не войдёт без кода.",
        // threat simulator
        "threat-title": "🎯 Симулятор атак",
        "threat-desc": "Выбери тип атаки — посмотри как она работает и как защититься",
        // xss demo
        "xss-demo-title": "⚠️ Демо: innerHTML vs textContent",
        "xss-demo-desc": "Введи HTML-теги и посмотри разницу между безопасным и небезопасным выводом",
        "xss-unsafe-label": "❌ Небезопасно (innerHTML)",
        "xss-safe-label":   "✅ Безопасно (textContent)",
        // password checker
        "pw-checker-title": "🔒 Проверь свой пароль",
        "pw-checker-desc": "Смотри, из каких критериев складывается надёжность пароля",
        "pw-placeholder": "Введи пароль...",
        // games
        "games-title": "🎮 Практика JS: Игры",
        "games-desc": "Обе игры написаны на чистом JavaScript — никаких библиотек!",
        "tab-tetris": "Тетрис",
        "tab-platformer": "∞ Платформер",
        "game-desc": "Демонстрирует циклы, массивы и requestAnimationFrame.",
        "plat-desc": "Демонстрирует физику, коллизии и бесконечную генерацию уровней на лету.",
        "game-score": "Счёт", "game-top": "Топ Игроков", "game-play": "Играть",
        "ctrl-left": "влево", "ctrl-right": "вправо", "ctrl-down": "вниз", "ctrl-rotate": "поворот",
        "plat-score-lbl": "Счёт", "plat-top": "Рекорды",
        "plat-ctrl-jump": "прыжок", "plat-ctrl-jump2": "тоже прыжок",
        "plat-double": "↕↕ Двойной прыжок!",
        "footer": "© 2026 Твой первый шаг в IT",
        "pts": "очков",
        "str-weak": "Слабый пароль", "str-fair": "Сойдёт", "str-good": "Хороший", "str-strong": "Надёжный!",
        "chk-len": "8+ символов", "chk-up": "Заглавная буква", "chk-num": "Цифра", "chk-spec": "Спецсимвол"
    },
    en: {
        "nav-start": "Start", "nav-frontend": "Frontend",
        "nav-backend": "Backend", "nav-security": "Security",
        "hero-badge": "v2.0 — Deep Dive",
        "hero-title": "Welcome to the World of Code",
        "hero-desc": "Web development is about creating living systems in the browser. You are on a site that explains itself.",
        "stat-sites": "websites worldwide",
        "stat-devs":  "developers",
        "stat-salary":"avg salary/yr (US)",
        "stat-possible":"possibilities",
        "card-html": "These are the bones. The text, buttons, and images you see right now.",
        "card-css": "This is skin and clothing. Colors, spacing, and the beautiful dark theme of this site.",
        "card-js": "These are muscles and brains. It changes pages without reloading and runs games.",
        "roadmap-title": "🗺 Web Developer Roadmap",
        "roadmap-subtitle": "You are here → explore each section of this site",
        "rm-html": "Structure", "rm-css": "Styles", "rm-js": "Logic",
        "rm-react": "Framework", "rm-node": "Backend",
        "rm-db": "Database", "rm-deploy": "Publishing",
        "quiz-title": "🧠 Quick Quiz",
        "quiz-subtitle": "3 questions — check your basic understanding",
        "quiz-check": "Check Answers",
        "quiz-retry": "Try Again",
        "front-title": "Frontend: The Face of the Product",
        "front-desc": "The frontend developer cares about the user. Their task is to make the interface mobile-friendly and fast.",
        "front-quote": '"User interface is like a joke. If you have to explain it, it\'s not that good."',
        "lesson-html-title": "HTML — Structure",
        "lesson-html-desc": "Tags create elements — the building blocks of a page",
        "lesson-css-title": "CSS — Style",
        "lesson-css-desc": "Rules make elements beautiful and responsive",
        "lesson-js-title": "JS — Logic",
        "lesson-js-desc": "Events and DOM — the foundation of all interactivity",
        "demo-title": "🎨 Try It: CSS in Real Time",
        "demo-desc": "Change colors — see how CSS instantly updates the button",
        "demo-bg": "Background", "demo-txt": "Text", "demo-btn-text": "I'm a button!",
        "box-title": "📦 CSS Box Model — Interactive",
        "box-desc": "Hover over a layer to learn what it does",
        "bm-content-lbl": "content",
        "bm-hint": "← Hover any layer",
        "resp-title": "📱 Responsiveness",
        "resp-desc": "Frontend must look great on any screen. Use media queries in CSS and flexible units (%, vw, rem).",
        "fw-title": "⚛️ Popular Frameworks",
        "fw-desc": "After JavaScript — move to a framework. They speed up building complex UIs",
        "fw-react-pct": "~42% market share", "fw-vue-pct": "~19% market share", "fw-svelte-pct": "Growing 🚀",
        "fw-react-desc": "Created by Facebook. Most popular. Great for SPAs and ecosystems like Next.js / React Native.",
        "fw-vue-desc": "Easy to start. Great for small and medium projects. Very popular in Asia.",
        "fw-svelte-desc": "Compiles to pure JS with no virtual DOM. Less code, more speed. The future of frontend.",
        "back-title": "Backend: Heart and Logic",
        "back-desc": "This is where databases, servers, and algorithms live. When you log in, Backend checks your password in a 'digital archive'.",
        "flow-title": "How does a request work?",
        "flow-browser": "Browser",   "flow-browser-desc": "Sends a request",
        "flow-server":  "Server",    "flow-server-desc":  "Processes logic",
        "flow-db":      "Database",  "flow-db-desc":      "Stores data",
        "flow-resp":    "Response",  "flow-resp-desc":    "JSON / HTML",
        "api-title": "What is an API?",
        "api-desc": "An API is a contract between client and server. You request data by URL — the server responds with JSON.",
        "api-run": "▶ Send Request",
        "api-placeholder": "// Click the button to see the server response",
        "auth-title": "🔑 Authentication: Sessions vs JWT",
        "auth-desc": "How does the server know who you are after login? Two main approaches:",
        "auth-sess-title": "Sessions + Cookie",
        "auth-s1": "Login → server creates a session in DB",
        "auth-s2": "Browser gets session_id in cookie",
        "auth-s3": "Every request → server looks up session in DB",
        "auth-s4": "Data is stored on the server",
        "auth-s-note": "✓ Easy to revoke access",
        "auth-j1": "Login → server signs a token",
        "auth-j2": "Browser stores token in localStorage",
        "auth-j3": "Every request: Authorization: Bearer <jwt>",
        "auth-j4": "Server verifies signature — no DB lookup needed",
        "auth-j-note": "⚡ Scales better",
        "node-title": "⚡ Node.js — Backend in JavaScript",
        "node-desc": "Node.js lets you write a server in the same language as the browser. Here's a simple REST API with Express:",
        "db-title": "Database: users table",
        "db-desc": "Data is stored like a spreadsheet — in rows and columns. SQL queries read and modify it.",
        "db-col-role": "role",
        "sec-title": "Security: Digital Fortress",
        "sec-desc": "Security is not just complex passwords, but protection against data breaches, encryption, and developer vigilance.",
        "tip-https": "Encrypts traffic between browser and server. Without it, data is visible to everyone on the network.",
        "tip-xss": "Script injection attack. Never insert user data directly into HTML.",
        "tip-pw-title": "Passwords",
        "tip-pw-desc": "Stored only as hashes (bcrypt, argon2). Never in plain text.",
        "tip-sql": "Use parameterized queries. Never build SQL from strings.",
        "tip-cors": "Cross-Origin Resource Sharing. The server explicitly allows requests from trusted domains via headers.",
        "tip-csrf": "Cross-Site Request Forgery. Use CSRF tokens and the SameSite flag for cookies.",
        "tip-rate-title": "Rate Limiting",
        "tip-rate": "Limit the number of requests from one IP. Protects against brute-force and DoS attacks.",
        "tip-2fa": "Two-factor authentication. Even if a password leaks, attackers can't log in without the code.",
        "threat-title": "🎯 Attack Simulator",
        "threat-desc": "Select an attack type to see how it works and how to defend against it",
        "xss-demo-title": "⚠️ Demo: innerHTML vs textContent",
        "xss-demo-desc": "Type HTML tags and see the difference between safe and unsafe output",
        "xss-unsafe-label": "❌ Unsafe (innerHTML)",
        "xss-safe-label":   "✅ Safe (textContent)",
        "pw-checker-title": "🔒 Check Your Password",
        "pw-checker-desc": "See what criteria make a password strong",
        "pw-placeholder": "Enter a password...",
        "games-title": "🎮 JS Practice: Games",
        "games-desc": "Both games are written in pure JavaScript — no libraries!",
        "tab-tetris": "Tetris",
        "tab-platformer": "∞ Platformer",
        "game-desc": "Demonstrates loops, arrays, and requestAnimationFrame.",
        "plat-desc": "Demonstrates physics, collision, and infinite level generation on the fly.",
        "game-score": "Score", "game-top": "Leaderboard", "game-play": "Play",
        "ctrl-left": "left", "ctrl-right": "right", "ctrl-down": "down", "ctrl-rotate": "rotate",
        "plat-score-lbl": "Score", "plat-top": "Records",
        "plat-ctrl-jump": "jump", "plat-ctrl-jump2": "also jump",
        "plat-double": "↕↕ Double jump!",
        "footer": "© 2026 Your first step into IT",
        "pts": "pts",
        "str-weak": "Weak password", "str-fair": "Fair", "str-good": "Good", "str-strong": "Strong!",
        "chk-len": "8+ characters", "chk-up": "Uppercase letter", "chk-num": "Number", "chk-spec": "Special character"
    }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key] !== undefined) {
            el.innerText = translations[currentLang][key];
        }
    });
    const pwInput = document.getElementById('pw-check');
    if (pwInput) pwInput.placeholder = translations[currentLang]['pw-placeholder'];
    document.getElementById('lang-toggle').innerText = currentLang === 'ru' ? 'EN' : 'RU';
    renderLeaderboard();
    renderPlatLeaderboard();
    const pw = document.getElementById('pw-check');
    if (pw && pw.value) updateStrength(pw.value);
    initQuiz();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
});

/* ═══════════════════════════════════════
   2. NAVIGATION
═══════════════════════════════════════ */
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════
   3. THEME TOGGLE
═══════════════════════════════════════ */
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

/* ═══════════════════════════════════════
   4. QUIZ
═══════════════════════════════════════ */
const quizData = {
    ru: [
        {
            q: 'Какой тег создаёт заголовок первого уровня?',
            opts: ['&lt;p&gt;', '&lt;h1&gt;', '&lt;div&gt;', '&lt;title&gt;'],
            ans: 1
        },
        {
            q: 'Какое CSS-свойство задаёт цвет текста?',
            opts: ['background', 'font-size', 'border', 'color'],
            ans: 3
        },
        {
            q: 'Что такое API?',
            opts: [
                'Язык программирования',
                'База данных',
                'Контракт между клиентом и сервером',
                'Протокол безопасности'
            ],
            ans: 2
        }
    ],
    en: [
        {
            q: 'Which tag creates a first-level heading?',
            opts: ['&lt;p&gt;', '&lt;h1&gt;', '&lt;div&gt;', '&lt;title&gt;'],
            ans: 1
        },
        {
            q: 'Which CSS property sets text color?',
            opts: ['background', 'font-size', 'border', 'color'],
            ans: 3
        },
        {
            q: 'What is an API?',
            opts: [
                'A programming language',
                'A database',
                'A contract between client and server',
                'A security protocol'
            ],
            ans: 2
        }
    ]
};

let quizSelections = {};

function initQuiz() {
    quizSelections = {};
    const container = document.getElementById('quiz-container');
    const result    = document.getElementById('quiz-result');
    const retryBtn  = document.getElementById('quiz-retry');
    const checkBtn  = document.getElementById('quiz-btn');
    if (!container) return;

    const data = quizData[currentLang];
    result.style.display = 'none';
    retryBtn.style.display = 'none';
    checkBtn.style.display = 'inline-block';

    container.innerHTML = data.map((item, qi) => `
        <div class="quiz-question">
            <p>${qi + 1}. ${item.q}</p>
            <div class="quiz-options">
                ${item.opts.map((opt, oi) => `
                    <button class="quiz-option" onclick="selectOption(${qi},${oi})" id="qo-${qi}-${oi}">
                        <span>${String.fromCharCode(65 + oi)}.</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function selectOption(qi, oi) {
    const data = quizData[currentLang];
    // deselect siblings
    for (let i = 0; i < data[qi].opts.length; i++) {
        const btn = document.getElementById(`qo-${qi}-${i}`);
        if (btn) btn.classList.remove('selected');
    }
    const chosen = document.getElementById(`qo-${qi}-${oi}`);
    if (chosen) chosen.classList.add('selected');
    quizSelections[qi] = oi;
}

function submitQuiz() {
    const data    = quizData[currentLang];
    const result  = document.getElementById('quiz-result');
    const retryBtn= document.getElementById('quiz-retry');
    const checkBtn= document.getElementById('quiz-btn');

    let correct = 0;
    data.forEach((item, qi) => {
        for (let oi = 0; oi < item.opts.length; oi++) {
            const btn = document.getElementById(`qo-${qi}-${oi}`);
            if (!btn) continue;
            btn.classList.remove('selected', 'correct', 'wrong');
            btn.disabled = true;
            if (oi === item.ans) {
                btn.classList.add('correct');
            } else if (quizSelections[qi] === oi) {
                btn.classList.add('wrong');
            }
        }
        if (quizSelections[qi] === item.ans) correct++;
    });

    const total = data.length;
    result.style.display = 'block';
    retryBtn.style.display = 'inline-block';
    checkBtn.style.display = 'none';

    const msgs = {
        ru: [
            `❌ ${correct}/${total} — Попробуй ещё раз, ты разберёшься!`,
            `✅ ${correct}/${total} — Хороший старт, читай дальше!`,
            `🎉 ${correct}/${total} — Отлично! Ты уже кое-что знаешь!`
        ],
        en: [
            `❌ ${correct}/${total} — Give it another try, you'll get it!`,
            `✅ ${correct}/${total} — Good start, keep reading!`,
            `🎉 ${correct}/${total} — Excellent! You already know some things!`
        ]
    };

    const msgArr = msgs[currentLang];
    const cls = correct === 0 ? 'bad' : correct < total ? 'ok' : 'good';
    result.className = `quiz-result ${cls}`;
    result.innerText = correct === 0 ? msgArr[0] : correct < total ? msgArr[1] : msgArr[2];
}

/* ═══════════════════════════════════════
   5. FRONTEND DEMO: live CSS colour picker
═══════════════════════════════════════ */
function initColorDemo() {
    const bgPicker  = document.getElementById('bg-color');
    const txtPicker = document.getElementById('text-color');
    const demoBtn   = document.getElementById('demo-btn');
    if (!bgPicker || !demoBtn) return;
    function sync() {
        demoBtn.style.background = bgPicker.value;
        demoBtn.style.color      = txtPicker.value;
        demoBtn.style.boxShadow  = `0 4px 16px ${bgPicker.value}55`;
    }
    bgPicker.addEventListener('input', sync);
    txtPicker.addEventListener('input', sync);
    sync();
}

/* ═══════════════════════════════════════
   6. BOX MODEL DEMO
═══════════════════════════════════════ */
function initBoxModel() {
    const info = document.getElementById('bm-info');
    if (!info) return;

    const layers = {
        'bm-margin': {
            ru: '🟡 margin — внешний отступ. Расстояние между элементом и его соседями. Прозрачный.',
            en: '🟡 margin — outer spacing. Distance between this element and its neighbors. Transparent.'
        },
        'bm-border': {
            ru: '🔴 border — рамка. Видимая граница элемента. Можно задать толщину, стиль и цвет.',
            en: '🔴 border — the visible edge of the element. You can set thickness, style, and color.'
        },
        'bm-padding': {
            ru: '🟢 padding — внутренний отступ. Пространство между контентом и рамкой. Наследует фон.',
            en: '🟢 padding — inner spacing. Space between the content and the border. Inherits background.'
        },
        'bm-content': {
            ru: '🔵 content — сам контент: текст, изображение. width и height задают его размер.',
            en: '🔵 content — the actual content: text, image. width and height control its size.'
        }
    };

    Object.keys(layers).forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('mouseenter', () => {
            info.innerHTML = `<code>${id.replace('bm-', '')}</code> — ${layers[id][currentLang]}`;
        });
        el.addEventListener('mouseleave', () => {
            info.innerHTML = `<span>${translations[currentLang]['bm-hint'] || '← Hover any layer'}</span>`;
        });
    });
}

/* ═══════════════════════════════════════
   7. BACKEND DEMO: mock API call
═══════════════════════════════════════ */
function initApiDemo() {
    const btn = document.getElementById('api-run');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const codeEl = document.getElementById('api-code');
        codeEl.innerText = currentLang === 'ru' ? '// Отправляю запрос...' : '// Sending request...';
        setTimeout(() => {
            const mock = {
                id: 42, username: "bob_dev", email: "bob@example.com",
                role: "user", created_at: "2025-03-14", status: "active"
            };
            codeEl.innerText = JSON.stringify(mock, null, 2);
        }, 700);
    });
}

/* ═══════════════════════════════════════
   8. THREAT SIMULATOR
═══════════════════════════════════════ */
const threatData = {
    xss: {
        ru: {
            desc: 'Злоумышленник вводит в поле ввода вредоносный HTML/JS-код, который выполняется в браузере жертвы.',
            attack: `// Поле для имени пользователя
<input value="alert('XSS!')">

// Сервер без санитизации
response.html = '<div>' + userInput + '</div>';
// → браузер выполнит скрипт!`,
            defense: `// Защита: textContent вместо innerHTML
element.textContent = userInput;

// Или санитизация на сервере
const safe = DOMPurify.sanitize(userInput);

// CSP заголовок запрещает inline-скрипты
Content-Security-Policy: script-src 'self'`
        },
        en: {
            desc: 'An attacker injects malicious HTML/JS code into an input field, which executes in the victim\'s browser.',
            attack: `// Username input field
<input value="alert('XSS!')">

// Server without sanitization
response.html = '<div>' + userInput + '</div>';
// → browser will execute the script!`,
            defense: `// Defense: use textContent instead of innerHTML
element.textContent = userInput;

// Or sanitize on the server
const safe = DOMPurify.sanitize(userInput);

// CSP header blocks inline scripts
Content-Security-Policy: script-src 'self'`
        }
    },
    sqli: {
        ru: {
            desc: 'Атака на базу данных через подстановку SQL-кода в поле ввода. Может раскрыть или уничтожить все данные.',
            attack: `// Небезопасный SQL (конкатенация строк)
const query = "SELECT * FROM users WHERE
  username = '" + userInput + "'";

// Ввод: ' OR 1=1 --
// Итоговый SQL: SELECT * FROM users
// WHERE username = '' OR 1=1 --'
// → возвращает ВСЕ записи!`,
            defense: `// Защита: параметризованные запросы
const query = "SELECT * FROM users
  WHERE username = $1";
db.query(query, [userInput]);

// ORM тоже защищает
User.findOne({ where: { username: input } });`
        },
        en: {
            desc: 'An attack on the database via injecting SQL code into an input field. Can expose or destroy all data.',
            attack: `// Unsafe SQL (string concatenation)
const query = "SELECT * FROM users WHERE
  username = '" + userInput + "'";

// Input: ' OR 1=1 --
// Resulting SQL: SELECT * FROM users
// WHERE username = '' OR 1=1 --'
// → returns ALL records!`,
            defense: `// Defense: parameterized queries
const query = "SELECT * FROM users
  WHERE username = $1";
db.query(query, [userInput]);

// ORM also protects you
User.findOne({ where: { username: input } });`
        }
    },
    csrf: {
        ru: {
            desc: 'Злоумышленник заставляет браузер жертвы отправить запрос от её имени на доверенный сайт.',
            attack: `<!-- Вредоносная страница evil.com -->
<img src="https://bank.com/transfer
  ?to=hacker&amount=10000">

<!-- Браузер автоматически добавит
 cookie сессии → перевод выполнится! -->`,
            defense: `// Защита 1: CSRF-токен в форме
<input type="hidden"
  name="csrf" value="a9f3k2...">

// Защита 2: SameSite cookie
Set-Cookie: session=...; SameSite=Strict

// Защита 3: проверка Origin/Referer
if (req.headers.origin !== 'https://mysite.com')
  return res.status(403).send('Forbidden');`
        },
        en: {
            desc: 'The attacker tricks the victim\'s browser into sending a request on their behalf to a trusted site.',
            attack: `<!-- Malicious page on evil.com -->
<img src="https://bank.com/transfer
  ?to=hacker&amount=10000">

<!-- Browser automatically adds the
 session cookie → transfer goes through! -->`,
            defense: `// Defense 1: CSRF token in form
<input type="hidden"
  name="csrf" value="a9f3k2...">

// Defense 2: SameSite cookie flag
Set-Cookie: session=...; SameSite=Strict

// Defense 3: check Origin/Referer header
if (req.headers.origin !== 'https://mysite.com')
  return res.status(403).send('Forbidden');`
        }
    },
    brute: {
        ru: {
            desc: 'Автоматический перебор паролей. Простые пароли взламываются за секунды.',
            attack: `// Атакующий скрипт
const passwords = ['123456','qwerty',
  'password','admin','iloveyou'...];

for (const pw of passwords) {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ login, pw })
  });
  if (res.ok) return pw; // 🎯 Взломан!
}`,
            defense: `// Защита 1: ограничение попыток
if (attempts > 5) {
  return res.status(429)
    .json({ error: 'Too many attempts' });
}

// Защита 2: временная блокировка
await lockAccount(userId, '15min');

// Защита 3: 2FA после логина
const otp = await sendSMS(user.phone);

// Защита 4: сильный хеш паролей
const hash = await bcrypt.hash(pw, 12);`
        },
        en: {
            desc: 'Automated password guessing. Simple passwords can be cracked in seconds.',
            attack: `// Attacker script
const passwords = ['123456','qwerty',
  'password','admin','iloveyou'...];

for (const pw of passwords) {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ login, pw })
  });
  if (res.ok) return pw; // 🎯 Cracked!
}`,
            defense: `// Defense 1: rate limiting attempts
if (attempts > 5) {
  return res.status(429)
    .json({ error: 'Too many attempts' });
}

// Defense 2: temporary lockout
await lockAccount(userId, '15min');

// Defense 3: 2FA after login
const otp = await sendSMS(user.phone);

// Defense 4: strong password hashing
const hash = await bcrypt.hash(pw, 12);`
        }
    }
};

function showThreat(type) {
    document.querySelectorAll('.threat-tab').forEach(t => t.classList.remove('active'));
    const clicked = [...document.querySelectorAll('.threat-tab')].find(t => t.onclick.toString().includes(`'${type}'`));
    if (clicked) clicked.classList.add('active');

    const d    = threatData[type][currentLang];
    const atk  = currentLang === 'ru' ? '⚔️ Как атакуют' : '⚔️ How they attack';
    const def  = currentLang === 'ru' ? '🛡️ Защита'      : '🛡️ Defense';

    document.getElementById('threat-content').innerHTML = `
        <p class="threat-desc">${d.desc}</p>
        <div class="threat-grid">
            <div class="threat-box">
                <div class="threat-box-label threat-box-label--bad">${atk}</div>
                <pre><code>${d.attack}</code></pre>
            </div>
            <div class="threat-box">
                <div class="threat-box-label threat-box-label--good">${def}</div>
                <pre><code>${d.defense}</code></pre>
            </div>
        </div>
    `;
}

/* ═══════════════════════════════════════
   9. SECURITY DEMO: XSS
═══════════════════════════════════════ */
function initXssDemo() {
    const input = document.getElementById('xss-input');
    if (!input) return;
    input.addEventListener('input', () => {
        const val = input.value;
        document.getElementById('xss-unsafe').innerHTML  = val;
        document.getElementById('xss-safe').textContent  = val;
    });
}

/* ═══════════════════════════════════════
   10. PASSWORD STRENGTH
═══════════════════════════════════════ */
function checkPasswordStrength(pw) {
    return {
        len:  pw.length >= 8,
        up:   /[A-Z]/.test(pw),
        num:  /[0-9]/.test(pw),
        spec: /[^A-Za-z0-9]/.test(pw)
    };
}

function updateStrength(pw) {
    const bar    = document.getElementById('strength-bar');
    const label  = document.getElementById('strength-label');
    const checks = document.getElementById('strength-checks');
    if (!bar) return;
    const c = checkPasswordStrength(pw);
    const score = [c.len, c.up, c.num, c.spec].filter(Boolean).length;
    const colors = ['', '#ef4444', '#f59e0b', '#3b82f6', '#10b981'];
    const widths = [0, 25, 50, 75, 100];
    const lblKeys = ['', 'str-weak', 'str-fair', 'str-good', 'str-strong'];
    bar.style.width      = pw ? widths[score] + '%' : '0%';
    bar.style.background = colors[score] || 'transparent';
    label.innerText      = pw ? translations[currentLang][lblKeys[score]] : '';
    const criteria = [
        { key: 'chk-len', pass: c.len }, { key: 'chk-up',  pass: c.up  },
        { key: 'chk-num', pass: c.num }, { key: 'chk-spec', pass: c.spec }
    ];
    checks.innerHTML = criteria.map(cr => `
        <span class="check-item ${cr.pass ? 'pass' : 'fail'}">
            ${cr.pass ? '✓' : '○'} ${translations[currentLang][cr.key]}
        </span>
    `).join('');
}

function initPasswordChecker() {
    const pwInput = document.getElementById('pw-check');
    if (!pwInput) return;
    pwInput.addEventListener('input', () => updateStrength(pwInput.value));
}

/* ═══════════════════════════════════════
   11. GAME TABS
═══════════════════════════════════════ */
function switchGame(game) {
    document.querySelectorAll('.game-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
    const btn = document.querySelector(`.game-tab-btn[data-game="${game}"]`);
    if (btn) btn.classList.add('active');
    const panel = document.getElementById(`game-${game}`);
    if (panel) panel.classList.add('active');
    if (game === 'platformer') platDrawIdle();
}

/* ═══════════════════════════════════════
   12. TETRIS
═══════════════════════════════════════ */
const canvas  = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

const PIECES = 'ILJOTSZ';
const COLORS = [null,'#3b82f6','#ef4444','#10b981','#f59e0b','#8b5cf6','#ec4899','#06b6d4'];

function createPiece(type) {
    switch (type) {
        case 'I': return [[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0]];
        case 'L': return [[0,0,3],[3,3,3],[0,0,0]];
        case 'J': return [[4,0,0],[4,4,4],[0,0,0]];
        case 'O': return [[2,2],[2,2]];
        case 'T': return [[0,0,0],[1,1,1],[0,1,0]];
        case 'S': return [[0,6,6],[6,6,0],[0,0,0]];
        case 'Z': return [[7,7,0],[0,7,7],[0,0,0]];
    }
}

const arena = createMatrix(12, 24);
const player = { pos: { x: 0, y: 0 }, matrix: null, score: 0 };

function createMatrix(w, h) {
    const m = [];
    while (h--) m.push(new Array(w).fill(0));
    return m;
}

function collide(arena, player) {
    const m = player.matrix, o = player.pos;
    for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
            if (m[y][x] !== 0) {
                const ay = y + o.y, ax = x + o.x;
                if (ax < 0 || ax >= arena[0].length || ay >= arena.length) return true;
                if (ay >= 0 && arena[ay][ax] !== 0) return true;
            }
        }
    }
    return false;
}

function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; y++)
        for (let x = 0; x < y; x++)
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    if (dir > 0) matrix.forEach(row => row.reverse());
    else         matrix.reverse();
}

function playerRotate(dir) {
    const savedX = player.pos.x;
    rotate(player.matrix, dir);
    let offset = 1;
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (Math.abs(offset) > player.matrix[0].length + 1) {
            rotate(player.matrix, -dir);
            player.pos.x = savedX;
            return;
        }
    }
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) arena[y + player.pos.y][x + player.pos.x] = value;
        });
    });
}

function arenaSweep() {
    let rowMultiplier = 1;
    for (let y = arena.length - 1; y > 0; y--) {
        if (arena[y].every(cell => cell !== 0)) {
            const cleared = arena.splice(y, 1)[0].fill(0);
            arena.unshift(cleared);
            y++;
            player.score += rowMultiplier * 10;
            rowMultiplier *= 2;
        }
    }
    updateScore();
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
    }
    dropCounter = 0;
}

function playerMoveX(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) player.pos.x -= dir;
}

function playerReset() {
    const type = PIECES[Math.floor(Math.random() * PIECES.length)];
    player.matrix = createPiece(type);
    player.pos.y  = 0;
    player.pos.x  = Math.floor(arena[0].length / 2) - Math.floor(player.matrix[0].length / 2);
    if (collide(arena, player)) {
        saveHighScore(player.score);
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
        gameRunning = false;
        document.getElementById('start-btn').innerText = translations[currentLang]['game-play'];
    }
}

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(arena, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    if (!matrix) return;
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = COLORS[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
                context.fillStyle = 'rgba(255,255,255,0.15)';
                context.fillRect(x + offset.x, y + offset.y, 1, 0.25);
            }
        });
    });
}

function updateScore() { document.getElementById('score').innerText = player.score; }

let dropCounter = 0, lastTime = 0, gameRunning = false;
const DROP_INTERVAL = 1000;

function update(time = 0) {
    if (!gameRunning) return;
    const delta = time - lastTime;
    lastTime = time;
    dropCounter += delta;
    if (dropCounter > DROP_INTERVAL) playerDrop();
    draw();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', event => {
    if (document.activeElement.tagName === 'INPUT') return;
    if (gameRunning) {
        switch (event.key) {
            case 'a': case 'A': case 'ArrowLeft':  playerMoveX(-1); break;
            case 'd': case 'D': case 'ArrowRight': playerMoveX(1);  break;
            case 's': case 'S': case 'ArrowDown':  playerDrop();    break;
            case 'w': case 'W': case 'f': case 'F': case 'ArrowUp': playerRotate(1); break;
        }
        if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) event.preventDefault();
    }
    // Platformer jump
    if (['ArrowUp', ' ', 'w', 'W'].includes(event.key) && platRunning) {
        platJump();
        if (event.key === ' ') event.preventDefault();
    }
});

function saveHighScore(score) {
    if (score === 0) return;
    const scores = JSON.parse(localStorage.getItem('tetris-top') || '[]');
    scores.push({ date: new Date().toLocaleDateString(), score });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('tetris-top', JSON.stringify(scores.slice(0, 5)));
    renderLeaderboard();
}

function renderLeaderboard() {
    const list   = document.getElementById('high-scores');
    const scores = JSON.parse(localStorage.getItem('tetris-top') || '[]');
    const pts    = translations[currentLang]['pts'];
    if (scores.length === 0) {
        list.innerHTML = `<li style="color:var(--text-muted);font-size:0.78rem">${currentLang === 'ru' ? 'Пока пусто' : 'Empty'}</li>`;
        return;
    }
    list.innerHTML = scores.map((s, i) => `
        <li><span>${i===0?'🥇':i===1?'🥈':i===2?'🥉':'  '} ${s.score} ${pts}</span><small>${s.date}</small></li>
    `).join('');
}

document.getElementById('start-btn').addEventListener('click', () => {
    if (!gameRunning) {
        gameRunning = true;
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
        playerReset();
        lastTime = 0;
        dropCounter = 0;
        update();
    }
});

/* ═══════════════════════════════════════
   13. PLATFORMER (∞ Runner)
═══════════════════════════════════════ */
const platCanvas = document.getElementById('platformer');
const platCtx    = platCanvas.getContext('2d');
const PW = 480, PH = 280;
const GROUND_Y   = PH - 52; // y of ground-level platforms
const GRAVITY    = 0.52;
const JUMP_V     = -11.5;

const HERO = {
    x: 80, y: 0, w: 22, h: 28,
    vy: 0, jumps: 0, maxJumps: 2
};

let platRunning   = false;
let platScore     = 0;
let platSpeed     = 2.6;
let platFrame     = 0;
let platforms     = [];
let coins         = [];
let spikes        = [];
let platAnimId    = null;
let platScoreEl   = null;

// Pre-computed star positions
const STARS = Array.from({ length: 40 }, (_, i) => ({
    x: (i * 127) % PW,
    y: (i * 73)  % (PH * 0.65),
    r: i % 3 === 0 ? 1.5 : 1
}));

function platReset() {
    HERO.y    = GROUND_Y - HERO.h;
    HERO.vy   = 0;
    HERO.jumps= 0;
    platScore = 0;
    platSpeed = 2.6;
    platFrame = 0;
    platforms = [{ x: 0, y: GROUND_Y, w: PW + 80, h: 16 }];
    coins     = [];
    spikes    = [];
    if (platScoreEl) platScoreEl.innerText = '0';
}

function platGenerate() {
    const last = platforms[platforms.length - 1];
    if (!last || last.x + last.w >= PW + 160) return;

    const gap = 55 + Math.random() * 90;
    // three height levels: ground, mid, high
    const levels = [GROUND_Y, GROUND_Y - 58, GROUND_Y - 110];
    const platY  = levels[Math.floor(Math.random() * levels.length)];
    const platW  = 90 + Math.random() * 130;
    const platX  = last.x + last.w + gap;

    platforms.push({ x: platX, y: platY, w: platW, h: 16 });

    // Coin on platform (45% chance)
    if (Math.random() < 0.45) {
        coins.push({ x: platX + platW * 0.5, y: platY - 20, r: 7, collected: false, bounce: 0 });
    }

    // Spikes after warm-up (platFrame > 350)
    if (platFrame > 350 && Math.random() < 0.3) {
        const sx = platX + 14 + Math.random() * Math.max(0, platW - 40);
        spikes.push({ x: sx, y: platY - 14, w: 16, h: 14 });
    }
}

function platJump() {
    if (!platRunning) return;
    if (HERO.jumps < HERO.maxJumps) {
        HERO.vy = JUMP_V;
        HERO.jumps++;
    }
}

function platUpdate() {
    if (!platRunning) return;
    platFrame++;

    // Speed ramp: +0.3 every 5 seconds
    platSpeed = 2.6 + Math.floor(platFrame / 300) * 0.35;
    platSpeed = Math.min(platSpeed, 8);

    // Scroll world
    platforms.forEach(p => p.x -= platSpeed);
    coins.forEach(c    => { c.x -= platSpeed; c.bounce = (c.bounce + 0.08) % (Math.PI * 2); });
    spikes.forEach(s   => s.x -= platSpeed);

    // Cleanup off-screen
    platforms = platforms.filter(p => p.x + p.w > -10);
    coins     = coins.filter(c    => !c.collected && c.x > -20);
    spikes    = spikes.filter(s   => s.x > -20);

    // Generate new chunks
    platGenerate();

    // Physics
    HERO.vy += GRAVITY;
    HERO.y  += HERO.vy;

    // Platform collision
    let onGround = false;
    for (const p of platforms) {
        if (HERO.x + HERO.w > p.x + 3 && HERO.x < p.x + p.w - 3 &&
            HERO.y + HERO.h >= p.y && HERO.y + HERO.h <= p.y + p.h + Math.abs(HERO.vy) + 2 &&
            HERO.vy >= 0) {
            HERO.y     = p.y - HERO.h;
            HERO.vy    = 0;
            HERO.jumps = 0;
            onGround   = true;
        }
    }

    // Spike collision
    for (const s of spikes) {
        if (HERO.x + HERO.w > s.x + 2 && HERO.x < s.x + s.w - 2 && HERO.y + HERO.h > s.y + 4) {
            platDie(); return;
        }
    }

    // Coin collection
    for (const c of coins) {
        if (!c.collected &&
            Math.abs(HERO.x + HERO.w / 2 - c.x) < HERO.w / 2 + c.r &&
            Math.abs(HERO.y + HERO.h / 2 - c.y) < HERO.h / 2 + c.r) {
            c.collected = true;
            platScore  += 50;
        }
    }

    // Fall death
    if (HERO.y > PH + 60) { platDie(); return; }

    // Score (distance)
    platScore += platSpeed * 0.04;
    if (platScoreEl) platScoreEl.innerText = Math.floor(platScore);

    platDraw();
    platAnimId = requestAnimationFrame(platUpdate);
}

function platDie() {
    platRunning = false;
    cancelAnimationFrame(platAnimId);

    // Save high score
    const sc = Math.floor(platScore);
    if (sc > 0) {
        const arr = JSON.parse(localStorage.getItem('plat-top') || '[]');
        arr.push({ date: new Date().toLocaleDateString(), score: sc });
        arr.sort((a, b) => b.score - a.score);
        localStorage.setItem('plat-top', JSON.stringify(arr.slice(0, 5)));
        renderPlatLeaderboard();
    }

    // Death overlay
    platCtx.fillStyle = 'rgba(0,0,0,0.62)';
    platCtx.fillRect(0, 0, PW, PH);
    platCtx.textAlign = 'center';
    platCtx.fillStyle = '#ef4444';
    platCtx.font = 'bold 26px Manrope, sans-serif';
    platCtx.fillText('GAME OVER', PW / 2, PH / 2 - 18);
    platCtx.fillStyle = 'rgba(255,255,255,0.9)';
    platCtx.font = '14px JetBrains Mono, monospace';
    platCtx.fillText(`Score: ${Math.floor(platScore)}`, PW / 2, PH / 2 + 12);
    platCtx.textAlign = 'left';

    const btn = document.getElementById('plat-start-btn');
    if (btn) btn.innerText = translations[currentLang]['game-play'];
}

function platDraw() {
    // Sky gradient
    const sky = platCtx.createLinearGradient(0, 0, 0, PH);
    sky.addColorStop(0, '#080c18');
    sky.addColorStop(1, '#101c34');
    platCtx.fillStyle = sky;
    platCtx.fillRect(0, 0, PW, PH);

    // Parallax stars
    STARS.forEach(s => {
        const sx = ((s.x - platFrame * 0.18) % PW + PW) % PW;
        platCtx.beginPath();
        platCtx.arc(sx, s.y, s.r, 0, Math.PI * 2);
        platCtx.fillStyle = 'rgba(255,255,255,0.55)';
        platCtx.fill();
    });

    // Distant ground glow
    platCtx.fillStyle = 'rgba(16,185,129,0.04)';
    platCtx.fillRect(0, GROUND_Y - 2, PW, PH - GROUND_Y + 2);

    // Platforms
    platforms.forEach(p => {
        // Top grass strip
        const pg = platCtx.createLinearGradient(0, p.y, 0, p.y + 4);
        pg.addColorStop(0, '#22d3a0');
        pg.addColorStop(1, '#10b981');
        platCtx.fillStyle = pg;
        platCtx.fillRect(p.x, p.y, p.w, 4);
        // Body
        platCtx.fillStyle = '#064e3b';
        platCtx.fillRect(p.x, p.y + 4, p.w, p.h - 4);
        // Edge highlight
        platCtx.fillStyle = 'rgba(255,255,255,0.06)';
        platCtx.fillRect(p.x, p.y + 4, p.w, 1);
    });

    // Coins (bouncing)
    coins.forEach(c => {
        if (c.collected) return;
        const bounce = Math.sin(c.bounce) * 3;
        // Glow
        const grd = platCtx.createRadialGradient(c.x, c.y + bounce, 0, c.x, c.y + bounce, c.r + 4);
        grd.addColorStop(0, 'rgba(251,191,36,0.4)');
        grd.addColorStop(1, 'rgba(251,191,36,0)');
        platCtx.beginPath();
        platCtx.arc(c.x, c.y + bounce, c.r + 4, 0, Math.PI * 2);
        platCtx.fillStyle = grd;
        platCtx.fill();
        // Coin body
        platCtx.beginPath();
        platCtx.arc(c.x, c.y + bounce, c.r, 0, Math.PI * 2);
        platCtx.fillStyle = '#fbbf24';
        platCtx.fill();
        // Shine
        platCtx.beginPath();
        platCtx.arc(c.x - 2, c.y + bounce - 2, 2.5, 0, Math.PI * 2);
        platCtx.fillStyle = 'rgba(255,255,255,0.5)';
        platCtx.fill();
    });

    // Spikes
    spikes.forEach(s => {
        platCtx.beginPath();
        platCtx.moveTo(s.x,             s.y + s.h);
        platCtx.lineTo(s.x + s.w / 2,  s.y);
        platCtx.lineTo(s.x + s.w,      s.y + s.h);
        platCtx.closePath();
        platCtx.fillStyle = '#ef4444';
        platCtx.fill();
        platCtx.strokeStyle = '#b91c1c';
        platCtx.lineWidth = 0.5;
        platCtx.stroke();
    });

    // Hero body
    const heroGrad = platCtx.createLinearGradient(HERO.x, HERO.y, HERO.x, HERO.y + HERO.h);
    heroGrad.addColorStop(0, '#60a5fa');
    heroGrad.addColorStop(1, '#2563eb');
    platCtx.fillStyle = heroGrad;
    platCtx.beginPath();
    platCtx.roundRect(HERO.x, HERO.y, HERO.w, HERO.h, 4);
    platCtx.fill();

    // Hero eye
    platCtx.fillStyle = 'white';
    platCtx.beginPath();
    platCtx.ellipse(HERO.x + HERO.w - 7, HERO.y + 9, 4, 4, 0, 0, Math.PI * 2);
    platCtx.fill();
    platCtx.fillStyle = '#1e3a5f';
    platCtx.beginPath();
    platCtx.arc(HERO.x + HERO.w - 6, HERO.y + 10, 2, 0, Math.PI * 2);
    platCtx.fill();

    // Hero legs (running animation)
    const legSwing = Math.sin(platFrame * 0.35) * 4;
    platCtx.fillStyle = '#1d4ed8';
    platCtx.fillRect(HERO.x + 3,          HERO.y + HERO.h,     5, 4 + legSwing);
    platCtx.fillRect(HERO.x + HERO.w - 8, HERO.y + HERO.h, 5, 4 - legSwing);

    // Jump indicator (when in air)
    if (HERO.jumps > 0) {
        const jumpStr = HERO.jumps === 1 ? '↑' : '↑↑';
        platCtx.fillStyle = 'rgba(96,165,250,0.8)';
        platCtx.font = 'bold 10px JetBrains Mono, monospace';
        platCtx.fillText(jumpStr, HERO.x + HERO.w / 2 - 6, HERO.y - 4);
    }

    // HUD
    platCtx.fillStyle = 'rgba(255,255,255,0.88)';
    platCtx.font = 'bold 13px JetBrains Mono, monospace';
    platCtx.fillText(Math.floor(platScore), 10, 22);

    // Speed indicator
    platCtx.fillStyle = 'rgba(96,165,250,0.7)';
    platCtx.font = '10px JetBrains Mono, monospace';
    platCtx.fillText(`×${platSpeed.toFixed(1)}`, 10, 38);
}

function platDrawIdle() {
    const sky = platCtx.createLinearGradient(0, 0, 0, PH);
    sky.addColorStop(0, '#080c18');
    sky.addColorStop(1, '#101c34');
    platCtx.fillStyle = sky;
    platCtx.fillRect(0, 0, PW, PH);

    STARS.forEach(s => {
        platCtx.beginPath();
        platCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        platCtx.fillStyle = 'rgba(255,255,255,0.5)';
        platCtx.fill();
    });

    // Ground platform preview
    platCtx.fillStyle = '#10b981';
    platCtx.fillRect(0, GROUND_Y, PW, 4);
    platCtx.fillStyle = '#064e3b';
    platCtx.fillRect(0, GROUND_Y + 4, PW, 12);

    // Hero preview
    platCtx.fillStyle = '#3b82f6';
    platCtx.beginPath();
    platCtx.roundRect(HERO.x, GROUND_Y - HERO.h, HERO.w, HERO.h, 4);
    platCtx.fill();

    platCtx.textAlign = 'center';
    platCtx.fillStyle = '#3b82f6';
    platCtx.font = 'bold 20px Manrope, sans-serif';
    platCtx.fillText(currentLang === 'ru' ? '∞ ПЛАТФОРМЕР' : '∞ PLATFORMER', PW / 2, PH / 2 - 28);
    platCtx.fillStyle = 'rgba(255,255,255,0.55)';
    platCtx.font = '12px JetBrains Mono, monospace';
    platCtx.fillText(currentLang === 'ru' ? 'Нажми «Играть» для старта' : 'Press "Play" to start', PW / 2, PH / 2 - 4);
    platCtx.fillText(currentLang === 'ru' ? 'SPACE / ↑ / W — прыжок • двойной прыжок!' : 'SPACE / ↑ / W — jump • double jump!', PW / 2, PH / 2 + 18);
    platCtx.textAlign = 'left';
}

function renderPlatLeaderboard() {
    const list   = document.getElementById('plat-high-scores');
    if (!list) return;
    const scores = JSON.parse(localStorage.getItem('plat-top') || '[]');
    const pts    = translations[currentLang]['pts'];
    if (scores.length === 0) {
        list.innerHTML = `<li style="color:var(--text-muted);font-size:0.78rem">${currentLang === 'ru' ? 'Пока пусто' : 'Empty'}</li>`;
        return;
    }
    list.innerHTML = scores.map((s, i) => `
        <li><span>${i===0?'🥇':i===1?'🥈':i===2?'🥉':'  '} ${s.score} ${pts}</span><small>${s.date}</small></li>
    `).join('');
}

document.getElementById('plat-start-btn').addEventListener('click', () => {
    if (!platRunning) {
        platRunning = true;
        platReset();
        platAnimId = requestAnimationFrame(platUpdate);
    }
});

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
platScoreEl = document.getElementById('plat-score');
platDrawIdle();

updateLanguage();
initColorDemo();
initBoxModel();
initApiDemo();
initXssDemo();
initPasswordChecker();
initQuiz();
renderLeaderboard();
renderPlatLeaderboard();
showThreat('xss');
