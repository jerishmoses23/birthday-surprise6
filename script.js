function login(){

let name=document.getElementById("name").value.trim();

let password=document.getElementById("password").value.trim();

if(name.toLowerCase()=="jency" && password=="0123"){

window.location.href="intro.html";

}else{

document.getElementById("error").innerHTML="❌ Wrong name or secret code ❤️";

}

}
// ---------- TYPEWRITER EFFECT ----------

const message = `Today isn't just another day...

It's the day my favourite person
came into this world..

A little something 
I Made Just too See You Smile...❤️`;

const typeElement = document.getElementById("typewriter");

if(typeElement){

let i = 0;

function type(){

    if(i < message.length){

        if(message.charAt(i) === "\n"){

            typeElement.innerHTML += "<br>";

        }else{

            typeElement.innerHTML += message.charAt(i);

        }

        i++;

        setTimeout(type,45);

    }

}

type();

}
/* ==========================
      ENVELOPE TYPEWRITER
========================== */

const envelopeText = 


`Some words...

Straight from my heart...

only for you,
Shizuka ❤️`;

const typing = document.getElementById("typing");

if (typing) {

    let i = 0;

    function typeLetter() {

        if (i < envelopeText.length) {

            if (envelopeText.charAt(i) == "\n") {

                typing.innerHTML += "<br>";

            } else {

                typing.innerHTML += envelopeText.charAt(i);

            }

            i++;

            setTimeout(typeLetter, 60);

        }

    }

    typeLetter();

}


/* ==========================
      OPEN ENVELOPE
========================== */

const openBtn = document.getElementById("openBtn");

const envelope = document.querySelector(".envelope");

if(openBtn){

openBtn.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

window.location.href="love-letter.html";

},1800);

});

}
const music = document.getElementById("bgMusic");

if (music) {

    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    document.addEventListener("click", () => {
        music.play().catch(() => {});
    }, { once: true });

    setInterval(() => {
        localStorage.setItem("musicTime", music.currentTime);
    }, 500);
}