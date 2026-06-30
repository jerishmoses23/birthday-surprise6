// ===============================
// MEMORY GALLERY
// ===============================

const photos = [
    "images/jerish1.jpg",
    "images/photo2.jpg",
    "images/jerish2.jpg",
    "images/jerish4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg"
];

const captions = [
    "Every beautiful journey begins with a single moment. ❤️",
    "Every smile of yours makes my day brighter. ✨",
    "My favourite place will always be beside you. 💖",
    "Every memory with you is a treasure. 🌸",
    "Thank you for making life so beautiful. 💕",
    "Together, every ordinary day becomes special. 🥰",
    "Your smile is my favourite view. 🌹",
    "No matter where we go, you're my home. ❤️",
    "Every picture tells our beautiful story. 📸",
    "These are only a few memories... the best ones are yet to come. 💖"
];

let current = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");

function showSlide() {

    slide.classList.remove("fade");

    setTimeout(() => {

        slide.src = photos[current];
        caption.innerHTML = captions[current];
        counter.innerHTML = `${current + 1} / ${photos.length}`;

        slide.classList.add("fade");

    }, 100);

}

function nextSlide() {

    current++;

    if (current >= photos.length) {

        window.location.href = "cake.html";
        return;

    }

    showSlide();

}

function prevSlide() {

    current--;

    if (current < 0) {

        current = 0;

    }

    showSlide();

}

// First Slide
showSlide();

// Auto Slide
setInterval(nextSlide, 5000);