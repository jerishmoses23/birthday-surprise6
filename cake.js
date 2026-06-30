const flames = document.querySelectorAll(".flame");
const blowBtn = document.getElementById("blowBtn");
const wish = document.getElementById("wishMessage");

blowBtn.addEventListener("click", () => {

    // Turn off candles
    flames.forEach(flame => {
        flame.style.display = "none";
    });

    // Change button text
    blowBtn.innerHTML = "🎉 Candles Blown!";

    // Birthday message
    wish.innerHTML = "✨ Make A Wish... ❤️";
    wish.style.opacity = "1";

    // Small celebration effect
    document.body.style.animation = "flash 0.8s";

    // Go to final page
    setTimeout(() => {

        window.location.href = "final.html";

    }, 5000);

});