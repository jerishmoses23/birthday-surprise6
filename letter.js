const letter = `
My Dear Jency..❤️

Happy Birthday to the most beautiful person in my life. 🎂❤️

I don't know how to explain how much you mean to me. Every day with you is special, and every memory with you makes me smile.

Thank you for choosing me to share your beautiful life.

No matter how many people come or go, I'll always stay by your side and remind you how loved you are. 🫂❤️

On your special day, I wish you a life filled with laughter, strength, beautiful memories, and the kind of happiness that stays forever. ❤️

I'm sorry I couldn't afford a gift, but I hope this brings a smile to your face. ❤️

Always keep smiling because your smile is my favorite.

Once again...

Happy Birthday, My Shizuka. ❤️

I love you so much.

Forever Yours,
Jerish ❤️
`;
const letterBox = document.getElementById("letterTyping");

let index = 0;

function typeLetter() {

    if (index < letter.length) {

        letterBox.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    } else {

        document.querySelector(".continue-btn").style.opacity = "1";
        document.querySelector(".continue-btn").style.transform = "translateY(0)";

    }

}

window.onload = () => {

    document.querySelector(".continue-btn").style.opacity = "0";
    document.querySelector(".continue-btn").style.transform = "translateY(20px)";
    document.querySelector(".continue-btn").style.transition = "0.8s";

    typeLetter();

};