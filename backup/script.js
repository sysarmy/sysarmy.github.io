// Elements
const progressBar = document.getElementById('progressBar');
const itemsRemaining = document.getElementById('itemsRemaining');
const transferSpeed = document.getElementById('transferSpeed');
const timeRemaining = document.getElementById('timeRemaining');
const pauseBtn = document.getElementById('pauseBtn');
const cancelBtn = document.getElementById('cancelBtn');
const detailsBtn = document.getElementById('detailsBtn');
const details = document.getElementById('details');
const canvas = document.getElementById('transferGraph');
const ctx = canvas.getContext('2d');

// Target date: March 31, 2025, 00:00 ART
const targetDate = new Date('2025-03-31T00:00:00-03:00').getTime();
//const targetDate = new Date().getTime() + 300000;
const startDate = new Date().getTime();
const totalSeconds = (targetDate - startDate) / 1000; // Total seconds from now to target

// Simulation variables
let isPaused = false;
let speedData = [];
const maxDataPoints = 20;

// Calculate seconds remaining and update UI
function updateTransfer() {
    if (isPaused) return;

    const now = new Date().getTime();
    const secondsLeft = Math.max(0, (targetDate - now) / 1000);
    const secondsElapsed = totalSeconds - secondsLeft;
    const progress = (secondsElapsed / totalSeconds) * 100;

    // Progress bar
    progressBar.style.width = `${progress}%`;

    // Items remaining (representing seconds)
    itemsRemaining.textContent = `Items remaining: ${Math.floor(secondsLeft).toLocaleString()}`;

    // Time remaining
    const days = Math.floor(secondsLeft / (24 * 3600));
    const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = Math.floor(secondsLeft % 60);
    timeRemaining.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Dynamic speed (fluctuates between 10-15 MB/s)
    const speed = 10 + Math.random() * 5;
    transferSpeed.textContent = `Speed: ${speed.toFixed(1)} MB/s`;
    speedData.push(speed);
    if (speedData.length > maxDataPoints) speedData.shift();

    // Update details
    details.querySelector('p:last-child').textContent = `Items copied: ${Math.floor(secondsElapsed).toLocaleString()} of ${Math.floor(totalSeconds).toLocaleString()}`;

    // Check if finished
    if (secondsLeft <= 0) {
        itemsRemaining.textContent = 'Items remaining: 0';
        timeRemaining.textContent = 'Finished';
        progressBar.style.width = '100%';
        pauseBtn.disabled = true;
        cancelBtn.disabled = true;
        clearInterval(updateInterval);
    }

    // Update graph
    drawGraph();
}

// Dynamic graph drawing
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = '#28a745';
    ctx.lineWidth = 2;

    if (speedData.length < 2) return;

    const step = canvas.width / (maxDataPoints - 1);
    const maxSpeed = 15;
    let x = 0;

    ctx.moveTo(0, canvas.height - (speedData[0] / maxSpeed) * canvas.height);
    for (let i = 1; i < speedData.length; i++) {
        x += step;
        const y = canvas.height - (speedData[i] / maxSpeed) * canvas.height;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

// Start simulation
const updateInterval = setInterval(updateTransfer, 1000); // Update every second

// Button functionality
pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
});

cancelBtn.addEventListener('click', () => {
    alert('Copy operation canceled. #nohaybackup');
    clearInterval(updateInterval);
    itemsRemaining.textContent = 'Items remaining: 0';
    timeRemaining.textContent = 'Canceled';
    progressBar.style.width = '100%';
    pauseBtn.disabled = true;
    cancelBtn.disabled = true;
});

detailsBtn.addEventListener('click', () => {
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        detailsBtn.textContent = 'Fewer details';
    } else {
        details.style.display = 'none';
        detailsBtn.textContent = 'More details';
    }
});