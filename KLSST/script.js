// Countdown Timer JavaScript
const countdownElement = document.getElementById('countdownTimer');
const countdownDate = new Date("November 9, 2024 22:00:00 GMT+1"); // Adjust to Polish time (CET)

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "OFICJALNA PREMIERA GRY!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);

// JavaScript for Gallery
let currentIndex = 0;
const images = [
    'sources/gallery/img1.webp',
    'sources/gallery/img2.webp',
    'sources/gallery/img3.webp',
    'sources/gallery/img4.webp',
    'sources/gallery/img5.webp'
];
const mainImage = document.getElementById('mainImage');

function changeImage(src) {
    mainImage.classList.add('fade-out'); // Apply fade-out effect

    setTimeout(() => {
        mainImage.src = src;
        mainImage.classList.remove('fade-out'); // Remove fade-out and allow fade-in
    }, 300); // Timeout now matches the 0.3s transition duration
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(images[currentIndex]);
}

setInterval(nextImage, 5000);

// JavaScript for Suisei Image rotation
let suiseiIndex = 0;
const suiseiImages = [
    'sources/suisei0.webp',
    'sources/suisei1.webp',
    'sources/suisei2.webp',
    'sources/suisei3.webp',
    'sources/suisei4.webp'
];
const suiseiImage = document.getElementById('suiseiImage');

function nextSuiseiImage() {
    suiseiImage.classList.add('fade-out');

    setTimeout(() => {
        suiseiIndex = (suiseiIndex + 1) % suiseiImages.length;
        suiseiImage.src = suiseiImages[suiseiIndex];
        suiseiImage.classList.remove('fade-out');
    }, 500); // Matches the 0.3s transition duration
}

setInterval(nextSuiseiImage, 7000);