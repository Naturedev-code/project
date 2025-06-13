// Timer functionality
function updateTimer() {
    const startDate = new Date('2022-06-30T00:00:00');
    const currentDate = new Date();
    const diff = currentDate - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    updateElement('years', years);
    updateElement('months', months);
    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element && element.textContent !== value.toString()) {
        element.textContent = value;
        element.parentElement.classList.add('pulse');
        setTimeout(() => element.parentElement.classList.remove('pulse'), 500);
    }
}

// Funny messages
const messages = [
    "GU 💖",
    "CHASMIS 🕶️",
    "HYEAA 😡",
    "NABOL😒 ",
    "JA JA JA ",
    "My Cutie! 🌹",
    "Love You! ❤️",
    "Best Friends! 💫"
];

function showMessage() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const elem = document.createElement('div');
    elem.className = 'message';
    elem.textContent = message;
    
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    
    elem.style.left = `${x}px`;
    elem.style.top = `${y}px`;
    elem.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    
    document.querySelector('.messages-container').appendChild(elem);
    setTimeout(() => elem.remove(), 3000);
}

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animation = 'float-up 4s linear forwards';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    
    document.querySelector('.heart-gallery').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

// Music player
const musicToggle = document.getElementById('musicToggle');
let audio = new Audio('your-song.mp3'); // Add your song file here
audio.loop = true;

musicToggle.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicToggle.querySelector('.music-text').textContent = 'Pause Music';
    } else {
        audio.pause();
        musicToggle.querySelector('.music-text').textContent = 'Play Music';
    }
});

// Initialize everything
setInterval(updateTimer, 1000);
setInterval(showMessage, 3000);
setInterval(createHeart, 300);
updateTimer();

// Add touch events for mobile
document.addEventListener('touchstart', () => {
    createHeart();
    showMessage();
});