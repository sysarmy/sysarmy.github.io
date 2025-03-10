
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

document.addEventListener('DOMContentLoaded', () => {
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
