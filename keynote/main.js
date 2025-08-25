const titleFormats = [
    "The Future of {topic}: {adjective} {noun}",
    "{verb} {noun}: {adjective} {topic}",
    "Keynote: {adjective} {topic} for {noun}",
    "Panel: {topic} and {noun}",
    "Spotlight on {adjective} {topic}",
    "How to {verb} {topic}",
    "{adjective} {topic}: {noun} Insights",
    "{topic} in the Age of {noun}",
    "{verb} the {adjective} {topic}",
    "{topic} {year}: {adjective} {noun}",
    "{adjective} {noun}: {verb} {topic}",
    "{topic} for {adjective} {noun}",
    "{verb} {topic}: {noun} Revolution"
];

const topics = [
    "AI",
    "Quantum Computing",
    "Cloud",
    "Data Science",
    "Cybersecurity",
    "Digital Transformation",
    "Innovation",
    "Leadership",
    "Sustainability",
    "Diversity & Inclusion",
    "Edge Computing",
    "Web3",
    "Open Source",
    "Automation",
    "Resilience",
    "Ethics",
    "Human-Centered Design",
    "Collaboration",
    "Growth",
    "Creativity",
    "Trust",
    "Empowerment",
    "Strategy",
    "Change",
    "Opportunity",
    "Progress",
    "Community",
    "Talent",
    "Purpose",
    "Impact",
    "Future",
    "Mindset",
    // Added technology topics
    "Blockchain",
    "Internet of Things",
    "Machine Learning",
    "Robotics",
    "Virtual Reality",
    "Augmented Reality",
    "5G",
    "Big Data",
    "DevOps",
    "Digital Twins",
    "Smart Cities",
    "Fintech",
    "HealthTech",
    "EdTech",
    "Green Tech",
    "Bioinformatics",
    "Cloud Native",
    "Digital Ethics",
    "Privacy",
    "Digital Inclusion",
    // Added philanthropy topics
    "Social Impact",
    "Nonprofits",
    "Charity",
    "Volunteering",
    "Corporate Social Responsibility",
    "Giving",
    "Social Innovation",
    "Impact Investing",
    "Community Development",
    "Education Access",
    "Healthcare Access",
    "Environmental Stewardship",
    "Global Citizenship",
    "Humanitarian Aid",
    "Social Entrepreneurship"
];

const adjectives = [
    "Transformative",
    "Inclusive",
    "Global",
    "Intelligent",
    "Adaptive",
    "Autonomous",
    "Ethical",
    "Disruptive",
    "Resilient",
    "Sustainable",
    "Creative",
    "Empowering",
    "Innovative",
    "Smart",
    "Digital",
    "NextGen",
    "Visionary",
    "Open",
    "Human",
    "Secure",
    "Agile",
    "Strategic",
    "Collaborative",
    "Future-ready",
    "Breakthrough",
    "Elevated"
];

const nouns = [
    // English nouns
    "Leadership",
    "Transformation",
    "Innovation",
    "Resilience",
    "Empowerment",
    "Diversity",
    "Inclusion",
    "Sustainability",
    "Growth",
    "Collaboration",
    "Strategy",
    "Vision",
    "Change",
    "Opportunity",
    "Challenge",
    "Success",
    "Progress",
    "Evolution",
    "Breakthrough",
    "Synergy",
    "Community",
    "Talent",
    "Purpose",
    "Impact",
    "Ethics",
    "Trust",
    "Creativity",
    "Inspiration",
    "Mindset",
    "Experience",
    "Journey",
    "Revolution",
    "Wave",
    "Shift",
    "Sprint",
    "Lab",
    "Track",
    "Series",
    "Pulse",
    // Spanish (Argentine) nouns
    "Liderazgo",
    "Transformación",
    "Innovación",
    "Resiliencia",
    "Empoderamiento",
    "Diversidad",
    "Inclusión",
    "Sustentabilidad",
    "Crecimiento",
    "Colaboración",
    "Estrategia",
    "Visión",
    "Cambio",
    "Oportunidad",
    "Desafío",
    "Éxito",
    "Progreso",
    "Evolución",
    "Avance",
    "Sinergia",
    "Comunidad",
    "Talento",
    "Propósito",
    "Impacto",
    "Ética",
    "Confianza",
    "Creatividad",
    "Inspiración",
    "Mentalidad",
    "Experiencia",
    "Recorrido",
    "Revolución",
    "Ola",
    "Cambio",
    "Sprint",
    "Laboratorio",
    "Pista",
    "Serie",
    "Pulso"
];

const verbs = [
    // English verbs
    "Empowering",
    "Transforming",
    "Reinventing",
    "Scaling",
    "Connecting",
    "Securing",
    "Adapting",
    "Elevating",
    "Disrupting",
    "Innovating",
    "Leading",
    "Building",
    "Creating",
    "Unlocking",
    "Driving",
    "Enabling",
    "Fostering",
    "Accelerating",
    "Redefining",
    "Designing",
    "Navigating",
    "Orchestrating",
    "Inspiring",
    "Motivating",
    "Facilitating",
    "Optimizing",
    "Empathizing",
    "Collaborating",
    "Integrating",
    "Simplifying",
    "Expanding",
    "Enhancing",
    "Supporting",
    "Guiding",
    "Challenging",
    "Shaping",
    "Sustaining",
    "Bridging",
    "Exploring",
    "Adopting",
    "Leveraging",
    "Championing",
    "Cultivating",
    "Pioneering",
    "Revolutionizing",
    "Modernizing",
    "Personalizing",
    "Customizing",
    "Analyzing",
    "Measuring",
    "Connecting",
    // Spanish (Argentine) verbs
    "Empoderando",
    "Transformando",
    "Reinventando",
    "Escalando",
    "Conectando",
    "Asegurando",
    "Adaptando",
    "Elevando",
    "Disrumpiendo",
    "Innovando",
    "Liderando",
    "Construyendo",
    "Creando",
    "Desbloqueando",
    "Impulsando",
    "Habilitando",
    "Fomentando",
    "Acelerando",
    "Redefiniendo",
    "Diseñando",
    "Navegando",
    "Orquestando",
    "Inspirando",
    "Motivando",
    "Facilitando",
    "Optimizando",
    "Empatizando",
    "Colaborando",
    "Integrando",
    "Simplificando",
    "Expandiendo",
    "Mejorando",
    "Apoyando",
    "Guiando",
    "Desafiando",
    "Formando",
    "Sosteniendo",
    "Uniendo",
    "Explorando",
    "Adoptando",
    "Aprovechando",
    "Promoviendo",
    "Cultivando",
    "Pionereando",
    "Revolucionando",
    "Modernizando",
    "Personalizando",
    "Customizando",
    "Analizando",
    "Midiendo"
];

const years = ["2025", "2026", "2027", "2030", "2035", "2040"];

// DOM elements
const generateBtn = document.getElementById('generate-btn');
const startupNameEl = document.getElementById('keynote-name');
const timerDisplay = document.getElementById('timer-display');
const countdownNumber = document.getElementById('countdown-number');
const gameOverDisplay = document.getElementById('game-over');

// Game state
let gameState = 'ready'; // 'ready', 'pitching', 'finished'
let countdownInterval;
let currentStartupName = '';
let usedNames = new Set();

// Utility functions

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

function fillFormat(format) {
    return format
        .replace(/{topic}/g, getRandomElement(topics))
        .replace(/{adjective}/g, getRandomElement(adjectives))
        .replace(/{noun}/g, getRandomElement(nouns))
        .replace(/{verb}/g, getRandomElement(verbs))
        .replace(/{year}/g, getRandomElement(years));
}

const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const generateUniqueKeynoteTitle = () => {
    let attempts = 0;
    let title;
    do {
        const format = getRandomElement(titleFormats);
        title = fillFormat(format);
        attempts++;
        if (attempts > 100) {
            usedNames.clear();
            break;
        }
    } while (usedNames.has(title));
    usedNames.add(title);
    return title;
};

const displayKeynoteTitle = (title) => {
    startupNameEl.innerHTML = `<p>${title}</p>`;
    startupNameEl.classList.add('active', 'fade-in');
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
    generateBtn.textContent = 'Generar Título';
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
        resetDisplay();
        currentStartupName = generateUniqueKeynoteTitle();
        displayKeynoteTitle(currentStartupName);
        gameState = 'pitching';
        generateBtn.disabled = true;
        generateBtn.textContent = 'Pitching...';
        setTimeout(() => {
            startCountdown();
        }, 1000);
    }
};

// Event listeners
generateBtn.addEventListener('click', startGame);
