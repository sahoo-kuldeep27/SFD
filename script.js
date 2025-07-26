document.addEventListener('DOMContentLoaded', () => {
    function createConfetti() {
        const confettiCount = 50;
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            const startX = Math.random() * window.innerWidth;
            const startY = -Math.random() * 200;

            confetti.style.left = `${startX}px`;
            confetti.style.top = `${startY}px`;

            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;

            confetti.style.animationDuration = `${Math.random() * 3 + 3}s`;
            confetti.style.animationDelay = `${Math.random() * 0.8}s`;

            document.body.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    setTimeout(createConfetti, 2000);
    setInterval(createConfetti, 800);
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing Confetti Code
    function createConfetti() {
        const confettiCount = 50;
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            const startX = Math.random() * window.innerWidth;
            const startY = -Math.random() * 200;

            confetti.style.left = `${startX}px`;
            confetti.style.top = `${startY}px`;

            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;

            confetti.style.animationDuration = `${Math.random() * 3 + 3}s`;
            confetti.style.animationDelay = `${Math.random() * 0.8}s`;

            document.body.appendChild(confetti);

            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    setTimeout(createConfetti, 2000);
    setInterval(createConfetti, 800);

    // 🎵 Music Button Functionality
    const music = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playMusicBtn");

    playBtn.addEventListener("click", () => {
        music.play();
        playBtn.innerText = "🎵 Music Playing";
        playBtn.disabled = true;
    });
});

// 🎈 Balloon Floating Animation
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    // Random color
    const colors = ['#ff4d4d', '#ff66cc', '#66ff66', '#66ccff', '#ffff66', '#ffa64d'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random left position
    balloon.style.left = `${Math.random() * 100}%`;

    // Random animation duration and delay
    balloon.style.animationDuration = `${6 + Math.random() * 4}s`;

    document.getElementById("balloonContainer").appendChild(balloon);

    // Remove after animation
    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

// Create balloons at interval
setInterval(createBalloon, 600);

// 💖 Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fly");

    // Random left position
    heart.style.left = `${Math.random() * 100}%`;

    // Optional: Different shades of pink/red
    const colors = ['#ff99cc', '#ff4d88', '#ff6666', '#ff3399'];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty('--heart-color', heart.style.backgroundColor);

    document.getElementById("heartContainer").appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Create hearts at interval
setInterval(createHeart, 1000);

// 📸 Slideshow Script
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Auto change every 4s
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

