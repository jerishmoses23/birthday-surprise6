const message = `The website may have ended...

But...

My surprise hasn't. ❤️

There's one final gift
waiting just for you...`;

const text = document.getElementById("qrMessage");

let i = 0;

function typeWriter(){

if(i < message.length){

if(message.charAt(i) == "\n"){

text.innerHTML += "<br>";

}else{

text.innerHTML += message.charAt(i);

}

i++;

setTimeout(typeWriter,45);

}

}

typeWriter();