// ==================== COUNTDOWN TIMER ====================
const countdownElement = document.getElementById('countdownTimer');

function updateCountdown() {
    if (!countdownElement) return; // Bezpieczeństwo, jeśli element nie istnieje

    const countdownDate = new Date("November 9, 2024 22:00:00 GMT+1");
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "<strong>OFICJALNA PREMIERA GRY!</strong>";
        countdownElement.style.color = "#43B581";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Uruchom tylko jeśli element istnieje
let countdownInterval;
if (countdownElement) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}


// ==================== GALLERY ====================
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
    if (!mainImage) return;

    mainImage.classList.add('fade-out');

    setTimeout(() => {
        mainImage.src = src;
        mainImage.classList.remove('fade-out');
    }, 300);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(images[currentIndex]);
}

// Auto-slide co 5 sekund
let galleryInterval = setInterval(nextImage, 5000);

// Kliknięcie w miniaturkę resetuje timer auto-slide
document.querySelectorAll('.thumbnails img').forEach(thumb => {
    thumb.addEventListener('click', () => {
        clearInterval(galleryInterval);
        galleryInterval = setInterval(nextImage, 5000);
    });
});


// ==================== SUISEI IMAGE ROTATION ====================
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
    if (!suiseiImage) return;

    suiseiImage.classList.add('fade-out');

    setTimeout(() => {
        suiseiIndex = (suiseiIndex + 1) % suiseiImages.length;
        suiseiImage.src = suiseiImages[suiseiIndex];
        suiseiImage.classList.remove('fade-out');
    }, 400);
}

// Auto-rotation co 7 sekund
setInterval(nextSuiseiImage, 7000);
