
// Force https
if (location.protocol != 'https:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}

const commands = [
    'man sysarmy',
    'systemctl status community',
    './encuesta-de-sueldos.py',
    'curl tienda.sysarmy.com'
];

let currentCommand = 0;
const commandInput = document.querySelector('.command-input');

function typeCommand(command, index = 0) {
    if (index <= command.length) {
        commandInput.value = command.substring(0, index);
        setTimeout(() => typeCommand(command, index + 1), 100);
    } else {
        setTimeout(() => {
            commandInput.value = '';
            currentCommand = (currentCommand + 1) % commands.length;
            typeCommand(commands[currentCommand]);
        }, 2000);
    }
}

const backgroundImages = [
    'https://secure.meetupstatic.com/photos/event/3/7/3/a/highres_522614138.webp',
    'https://secure.meetupstatic.com/photos/event/5/5/9/4/highres_515481908.webp',
    'https://secure.meetupstatic.com/photos/event/3/c/4/6/highres_514395430.webp',
    'https://secure.meetupstatic.com/photos/event/8/2/e/e/highres_509973518.webp'
];

const heroBackgrounds = document.querySelectorAll('.hero-background');
let currentBgIndex = 0;
let activeBg = 0;

function changeBackground() {
    const nextBg = (activeBg + 1) % 2;
    heroBackgrounds[nextBg].style.backgroundImage = `url(${backgroundImages[currentBgIndex]})`;

    heroBackgrounds[activeBg].classList.remove('active');
    heroBackgrounds[nextBg].classList.add('active');

    activeBg = nextBg;
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
}

const FLOATING_PROMOS = [
    { png: 'server-adminbirras.png', href: 'https://sysar.my/birras' },
    { png: 'server-sueldos.png', href: 'https://openqube.io/sueldos' },
    { png: 'server-adminfest.png', href: 'https://adminfest.com' },
    // { png: 'server-nerdearla.png', href: 'https://tickets.nerdearla.com?utm_source=sysarmy' },
];

function floatingPromoSrc(png) {
    if (png.startsWith('http://') || png.startsWith('https://') || png.startsWith('/')) {
        return png;
    }
    return `images/${png}`;
}

const nerdearlaImages = [
    'https://resizer.glanacion.com/resizer/v2/nerdearla-es-un-evento-de-dos-dias-virtual-y-OCCNB6BJZREDPEPG4C4SV4HRPM.jpg?auth=3bab0c22ca5e3330b3ad1a40be621d9eb9e0f26708956f71f8a3707c72cc1206&width=1200&quality=70&smart=false&height=801',
    'https://nerdear.la/static/img/n24ar2.jpg',
];

const nerdearlaBackgrounds = document.querySelectorAll('.nerdearla-bg');
let currentNerdealaBgIndex = 0;
let activeNerdealaBg = 0;

function changeNerdearlaBackground() {
    const nextBg = (activeNerdealaBg + 1) % 2;
    nerdearlaBackgrounds[nextBg].style.backgroundImage = `url(${nerdearlaImages[currentNerdealaBgIndex]})`;

    nerdearlaBackgrounds[activeNerdealaBg].classList.remove('active');
    nerdearlaBackgrounds[nextBg].classList.add('active');

    activeNerdealaBg = nextBg;
    currentNerdealaBgIndex = (currentNerdealaBgIndex + 1) % nerdearlaImages.length;
}

// Last Friday of a given month (month is 0-indexed)
function lastFridayOfMonth(year, month) {
    const date = new Date(year, month + 1, 0); // last day of month
    const offset = (date.getDay() - 5 + 7) % 7; // days back to Friday (5)
    date.setDate(date.getDate() - offset);
    return date;
}

// Show the AdminFest banner during July (from July 1st, hidden after August 1st),
// displaying the automatically-calculated last Friday of July (Día del SysAdmin).
function setupAdminfestBanner() {
    const banner = document.getElementById('adminfest-banner');
    const dateEl = document.getElementById('adminfest-date');
    if (!banner || !dateEl) return;

    const now = new Date();
    if (now.getMonth() !== 6) return; // 6 = July

    const sysadminDay = lastFridayOfMonth(now.getFullYear(), 6);
    const locale = (document.documentElement.lang || 'es').toLowerCase().startsWith('en') ? 'en-US' : 'es-AR';
    const formatted = sysadminDay.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });
    dateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);

    banner.style.display = 'flex';

    // Offset the fixed header and page content so the banner doesn't overlap.
    const header = document.querySelector('.terminal-header');
    const applyOffset = () => {
        const h = banner.offsetHeight;
        document.body.style.paddingTop = h + 'px';
        if (header) header.style.top = h + 'px';
    };
    applyOffset();
    window.addEventListener('resize', applyOffset);
}

document.addEventListener('DOMContentLoaded', () => {
    setupAdminfestBanner();

    const promoLink = document.getElementById('floating-promo');
    const promoImg = document.getElementById('floating-promo-img');
    if (promoLink && promoImg && FLOATING_PROMOS.length > 0) {
        const pick = FLOATING_PROMOS[Math.floor(Math.random() * FLOATING_PROMOS.length)];
        promoLink.href = pick.href;
        promoImg.src = floatingPromoSrc(pick.png);
    }

    typeCommand(commands[0]);

    heroBackgrounds[0].style.backgroundImage = `url(${backgroundImages[0]})`;
    heroBackgrounds[0].classList.add('active');
    setInterval(changeBackground, 5000);

    nerdearlaBackgrounds[0].style.backgroundImage = `url(${nerdearlaImages[0]})`;
    nerdearlaBackgrounds[0].classList.add('active');
    setInterval(changeNerdearlaBackground, 5000);

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

});
