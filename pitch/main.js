const techPrefixes = [
    "Monolito",
    "Cloud",
    "Data",
    "AI",
    "Crypto",
    "Serverless",
    "DevOps",
    "Kube",
    "Token",
    "Mainframe",
    "PHP",
    "Wordpress",
    "API",
    "CI",
    "Deploy",
    "Git",
    "Scrum",
    "Clave",
    "Front",
    "JS",
    "Cyber",
    "Quantum",
    "Blockchain",
    "Agile",
    "Micro",
    "Nano",
    "Smart",
    "Digital",
    "Virtual",
    "Meta",
    "Web3",
    "Edge",
    "IoT",
];

const argentineSuffixes = [
    "ify",
    "App",
    "Tech",
    "AR",
    "Plus",
    "Max",
    "Soft",
    "verse",
    "Go",
    "pe",
    "udo",
    "ear",
    "izar",
    "ocha",
    "ardo",
    "ucha",
    "ón",
    ".ar",
    "itor",
    ".ai",
    "ware",
    "bot",
    "ly",
    "ify",
    "ster",
    "ology",
    "ology",
    "gram",
    "net",
    "hub",
    "space",
    "works",
    "chain",
    "verse",
    "point",
    "link",
    "flow",
];

const argentineWords = [
    "Choreo",
    "Curro",
    "Chamuyo",
    "Quilombo",
    "Asado",
    "Birra",
    "Mate",
    "Bondi",
    "Laburo",
    "Pibe",
    "Verso",
    "Factura",
    "AFIP",
    "CUIL",
    "Impuesto",
    "Tango",
    "Token",
    "Churro",
    "Guita",
    "Milanesa",
    "Chipa",
    "Pochoclo",
    "Chimichurri",
    "Cumbia",
    "Fernet",
    "Birome"
    ];


// DOM elements
const generateBtn = document.getElementById('generate-btn');
const startupNameEl = document.getElementById('startup-name');
const timerDisplay = document.getElementById('timer-display');
const countdownNumber = document.getElementById('countdown-number');
const gameOverDisplay = document.getElementById('game-over');

// Game state
let gameState = 'ready'; // 'ready', 'pitching', 'finished'
let countdownInterval;
let currentStartupName = '';
let usedNames = new Set();

// Utility functions
const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const generateUniqueStartupName = () => {
    let attempts = 0;
    let name;

    do {
        const prefix = getRandomElement(techPrefixes);
        const suffix = getRandomElement([...argentineSuffixes, ...argentineWords]);

        name = `${prefix}${suffix}`;

        attempts++;

        // Prevent infinite loop
        if (attempts > 100) {
            usedNames.clear();
            break;
        }
    } while (usedNames.has(name));

    usedNames.add(name);
    return name;
};

const displayStartupName = (name) => {
    startupNameEl.innerHTML = `<p>${name}</p>`;
    startupNameEl.classList.add('active', 'fade-in');

    // Remove animation class after animation completes
    setTimeout(() => {
        startupNameEl.classList.remove('fade-in');
    }, 500);
};

const resetDisplay = () => {
    startupNameEl.innerHTML = '<p>- - - - -</p>';
    startupNameEl.classList.remove('active');
    timerDisplay.classList.add('hidden');
    gameOverDisplay.classList.add('hidden');
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generar Startup';
};

const startCountdown = () => {
    let timeLeft = 22;
    countdownNumber.textContent = timeLeft;
    timerDisplay.classList.remove('hidden');

    const timerCircle = document.querySelector('.timer-circle');
    timerCircle.classList.add('pulse');

    countdownInterval = setInterval(() => {
        timeLeft--;
        countdownNumber.textContent = timeLeft;

        // Add urgency animation in last 10 seconds
        if (timeLeft <= 10) {
            timerCircle.style.background = 'linear-gradient(45deg, #ff4757, #ff6b6b)';
        }

        // Add final countdown animation in last 5 seconds
        if (timeLeft <= 5) {
            timerCircle.classList.add('pulse');
            countdownNumber.style.color = '#ff4757';
        }

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 1000);
};

const endGame = () => {
    gameState = 'finished';
    timerDisplay.classList.add('hidden');
    gameOverDisplay.classList.remove('hidden');
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generar nueva startup';

    // Reset timer circle styles
    const timerCircle = document.querySelector('.timer-circle');
    timerCircle.classList.remove('pulse');
    timerCircle.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
    countdownNumber.style.color = '#ff6b6b';
};

const startGame = () => {
    if (gameState === 'ready' || gameState === 'finished') {
        // Reset everything
        resetDisplay();

        // Generate and display new startup name
        currentStartupName = generateUniqueStartupName();
        displayStartupName(currentStartupName);

        // Start countdown
        gameState = 'pitching';
        generateBtn.disabled = true;
        generateBtn.textContent = 'Pitching...';

        setTimeout(() => {
            startCountdown();
        }, 1000); // Wait 1 second before starting countdown
    }
};

// Event listeners
generateBtn.addEventListener('click', startGame);
