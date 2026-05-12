/* ═══════════════════════════════════════
   1. LOCALISATION
═══════════════════════════════════════ */
const translations = {
    ru: {
        // nav
        "nav-start": "Старт", "nav-frontend": "Frontend",
        "nav-backend": "Backend", "nav-security": "Security",
        // home
        "hero-badge": "v1.0 — Введение",
        "hero-title": "Добро пожаловать в мир кода",
        "hero-desc": "Веб-разработка — это создание живых систем в браузере. Вы находитесь на сайте, который объясняет сам себя.",
        "card-html": "Это кости. Текст, кнопки и картинки, которые вы видите прямо сейчас.",
        "card-css": "Это кожа и одежда. Цвета, отступы и красивая темная тема этого сайта.",
        "card-js": "Это мышцы и мозг. Он меняет страницы без перезагрузки и запускает игры.",
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
        "demo-bg": "Фон",
        "demo-txt": "Текст",
        "demo-btn-text": "Я кнопка!",
        "resp-title": "📱 Адаптивность",
        "resp-desc": "Фронтенд должен хорошо выглядеть на любом экране. Для этого используют media queries в CSS и гибкие единицы (%, vw, rem).",
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
        "xss-demo-title": "⚠️ Демо: innerHTML vs textContent",
        "xss-demo-desc": "Введи HTML-теги и посмотри разницу между безопасным и небезопасным выводом",
        "xss-unsafe-label": "❌ Небезопасно (innerHTML)",
        "xss-safe-label":   "✅ Безопасно (textContent)",
        "pw-checker-title": "🔒 Проверь свой пароль",
        "pw-checker-desc": "Смотри, из каких критериев складывается надёжность пароля",
        "pw-placeholder": "Введи пароль...",
        // game
        "game-title": "Практика JS: Тетрис",
        "game-desc": "Эта игра написана на чистом JavaScript. Она демонстрирует работу с циклами, массивами и requestAnimationFrame.",
        "game-score": "Счёт", "game-top": "Топ Игроков", "game-play": "Играть",
        "ctrl-left": "влево", "ctrl-right": "вправо", "ctrl-down": "вниз", "ctrl-rotate": "поворот",
        "footer": "© 2026 Твой первый шаг в IT",
        "pts": "очков",
        // password strength labels
        "str-weak": "Слабый пароль",
        "str-fair": "Сойдёт",
        "str-good": "Хороший",
        "str-strong": "Надёжный!",
        // password check criteria
        "chk-len":  "8+ символов",
        "chk-up":   "Заглавная буква",
        "chk-num":  "Цифра",
        "chk-spec": "Спецсимвол"
    },
    en: {
        "nav-start": "Start", "nav-frontend": "Frontend",
        "nav-backend": "Backend", "nav-security": "Security",
        "hero-badge": "v1.0 — Introduction",
        "hero-title": "Welcome to the World of Code",
        "hero-desc": "Web development is about creating living systems in the browser. You are on a site that explains itself.",
        "card-html": "These are the bones. The text, buttons, and images you see right now.",
        "card-css": "This is skin and clothing. Colors, spacing, and the beautiful dark theme of this site.",
        "card-js": "These are muscles and brains. It changes pages without reloading and runs games.",
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
        "demo-bg": "Background",
        "demo-txt": "Text",
        "demo-btn-text": "I'm a button!",
        "resp-title": "📱 Responsiveness",
        "resp-desc": "Frontend must look great on any screen. Use media queries in CSS and flexible units (%, vw, rem).",
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
        "xss-demo-title": "⚠️ Demo: innerHTML vs textContent",
        "xss-demo-desc": "Type HTML tags and see the difference between safe and unsafe output",
        "xss-unsafe-label": "❌ Unsafe (innerHTML)",
        "xss-safe-label":   "✅ Safe (textContent)",
        "pw-checker-title": "🔒 Check Your Password",
        "pw-checker-desc": "See what criteria make a password strong",
        "pw-placeholder": "Enter a password...",
        "game-title": "JS Practice: Tetris",
        "game-desc": "This game is written in pure JavaScript. It demonstrates loops, arrays, and requestAnimationFrame.",
        "game-score": "Score", "game-top": "Leaderboard", "game-play": "Play",
        "ctrl-left": "left", "ctrl-right": "right", "ctrl-down": "down", "ctrl-rotate": "rotate",
        "footer": "© 2026 Your first step into IT",
        "pts": "pts",
        "str-weak": "Weak password",
        "str-fair": "Fair",
        "str-good": "Good",
        "str-strong": "Strong!",
        "chk-len":  "8+ characters",
        "chk-up":   "Uppercase letter",
        "chk-num":  "Number",
        "chk-spec": "Special character"
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

    // Update placeholder separately (innerText doesn't work on inputs)
    const pwInput = document.getElementById('pw-check');
    if (pwInput) pwInput.placeholder = translations[currentLang]['pw-placeholder'];

    document.getElementById('lang-toggle').innerText = currentLang === 'ru' ? 'EN' : 'RU';

    // Re-render leaderboard so pts word updates
    renderLeaderboard();

    // Re-run password checker UI if there's a value
    const pw = document.getElementById('pw-check');
    if (pw && pw.value) updateStrength(pw.value);
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
    document.querySelectorAll('.content-section').forEach(s => {
        s.classList.remove('active');
    });
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
   4. FRONTEND DEMO: live CSS colour picker
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

    bgPicker.addEventListener('input',  sync);
    txtPicker.addEventListener('input', sync);
    sync();
}

/* ═══════════════════════════════════════
   5. BACKEND DEMO: mock API call
═══════════════════════════════════════ */
function initApiDemo() {
    const btn = document.getElementById('api-run');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const codeEl = document.getElementById('api-code');
        codeEl.innerText = currentLang === 'ru'
            ? '// Отправляю запрос...'
            : '// Sending request...';

        setTimeout(() => {
            const mock = {
                id: 42,
                username: "bob_dev",
                email: "bob@example.com",
                role: "user",
                created_at: "2025-03-14",
                status: "active"
            };
            codeEl.innerText = JSON.stringify(mock, null, 2);
        }, 700);
    });
}

/* ═══════════════════════════════════════
   6. SECURITY DEMO: XSS visual comparison
═══════════════════════════════════════ */
function initXssDemo() {
    const input = document.getElementById('xss-input');
    if (!input) return;

    input.addEventListener('input', () => {
        const val = input.value;
        // Intentionally unsafe — shows HTML rendering (scripts won't execute via innerHTML)
        document.getElementById('xss-unsafe').innerHTML  = val;
        // Safe — shows raw text as-is
        document.getElementById('xss-safe').textContent  = val;
    });
}

/* ═══════════════════════════════════════
   7. SECURITY DEMO: password strength
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
    const bar   = document.getElementById('strength-bar');
    const label = document.getElementById('strength-label');
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

    // Criteria chips
    const criteria = [
        { key: 'chk-len',  pass: c.len  },
        { key: 'chk-up',   pass: c.up   },
        { key: 'chk-num',  pass: c.num  },
        { key: 'chk-spec', pass: c.spec }
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
   8. TETRIS
═══════════════════════════════════════ */
const canvas  = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

const PIECES = 'ILJOTSZ';
const COLORS = [
    null,
    '#3b82f6', // I — blue
    '#ef4444', // L — red
    '#10b981', // J — green
    '#f59e0b', // O — amber
    '#8b5cf6', // T — purple
    '#ec4899', // S — pink
    '#06b6d4'  // Z — cyan
];

// Piece definitions
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

// Arena: 12 wide × 24 tall (matches canvas 240×480 at scale 20)
const arena = createMatrix(12, 24);

const player = {
    pos:    { x: 0, y: 0 },
    matrix: null,
    score:  0
};

function createMatrix(w, h) {
    const m = [];
    while (h--) m.push(new Array(w).fill(0));
    return m;
}

// ── Collision detection ──────────────────
function collide(arena, player) {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; y++) {
        for (let x = 0; x < m[y].length; x++) {
            if (m[y][x] !== 0) {
                const ay = y + o.y;
                const ax = x + o.x;
                // Out of bounds (left, right, bottom) or occupied cell
                if (ax < 0 || ax >= arena[0].length || ay >= arena.length) return true;
                if (ay >= 0 && arena[ay][ax] !== 0) return true;
            }
        }
    }
    return false;
}

// ── Rotation ─────────────────────────────
function rotate(matrix, dir) {
    // Transpose
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < y; x++) {
            [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
        }
    }
    if (dir > 0) matrix.forEach(row => row.reverse());
    else         matrix.reverse();
}

function playerRotate(dir) {
    const savedX = player.pos.x;
    rotate(player.matrix, dir);

    // Wall-kick: try to shift piece until it fits or give up
    let offset = 1;
    while (collide(arena, player)) {
        player.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (Math.abs(offset) > player.matrix[0].length + 1) {
            // Can't fit — undo rotation
            rotate(player.matrix, -dir);
            player.pos.x = savedX;
            return;
        }
    }
}

// ── Merge & sweep ─────────────────────────
function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        });
    });
}

function arenaSweep() {
    let rowMultiplier = 1;
    for (let y = arena.length - 1; y > 0; y--) {
        if (arena[y].every(cell => cell !== 0)) {
            const cleared = arena.splice(y, 1)[0].fill(0);
            arena.unshift(cleared);
            y++; // re-check same row index after shift
            player.score += rowMultiplier * 10;
            rowMultiplier *= 2;
        }
    }
    updateScore();
}

// ── Player actions ────────────────────────
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
    player.pos.y = 0;
    player.pos.x = Math.floor(arena[0].length / 2) - Math.floor(player.matrix[0].length / 2);

    if (collide(arena, player)) {
        // Game over
        saveHighScore(player.score);
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
        gameRunning = false;
        document.getElementById('start-btn').innerText = translations[currentLang]['game-play'];
    }
}

// ── Drawing ───────────────────────────────
function draw() {
    // Clear
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(arena,         { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    if (!matrix) return;
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = COLORS[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
                // Inner highlight
                context.fillStyle = 'rgba(255,255,255,0.15)';
                context.fillRect(x + offset.x, y + offset.y, 1, 0.25);
            }
        });
    });
}

function updateScore() {
    document.getElementById('score').innerText = player.score;
}

// ── Game loop ─────────────────────────────
let dropCounter = 0;
let lastTime    = 0;
let gameRunning = false;
const DROP_INTERVAL = 1000; // ms per row

function update(time = 0) {
    if (!gameRunning) return;
    const delta = time - lastTime;
    lastTime = time;
    dropCounter += delta;
    if (dropCounter > DROP_INTERVAL) playerDrop();
    draw();
    requestAnimationFrame(update);
}

// ── Controls ──────────────────────────────
document.addEventListener('keydown', event => {
    // Don't intercept keys when user is typing in an input
    if (document.activeElement.tagName === 'INPUT') return;
    if (!gameRunning) return;

    switch (event.key) {
        case 'a': case 'A': case 'ArrowLeft':
            playerMoveX(-1);
            break;
        case 'd': case 'D': case 'ArrowRight':
            playerMoveX(1);
            break;
        case 's': case 'S': case 'ArrowDown':
            playerDrop();
            break;
        case 'w': case 'W': case 'f': case 'F': case 'ArrowUp':
            playerRotate(1);
            break;
    }

    // Prevent arrow keys from scrolling the page
    if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) {
        event.preventDefault();
    }
});

// ── Leaderboard ───────────────────────────
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
        list.innerHTML = `<li style="color:var(--text-muted);font-size:0.78rem">${
            currentLang === 'ru' ? 'Пока пусто' : 'Empty'
        }</li>`;
        return;
    }

    list.innerHTML = scores.map((s, i) => `
        <li>
            <span>${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '  '} ${s.score} ${pts}</span>
            <small>${s.date}</small>
        </li>
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
   INIT
═══════════════════════════════════════ */
updateLanguage();
initColorDemo();
initApiDemo();
initXssDemo();
initPasswordChecker();
renderLeaderboard();
