const pages = document.querySelectorAll(".page");

let current = 0;

function showPage(index){

pages.forEach(page=>{

page.classList.remove("active");

});

pages[index].classList.add("active");

}

showPage(current);

document.getElementById("nextBtn").onclick=()=>{

if(current<pages.length-1){

current++;

showPage(current);

}else{

window.location.href="qr.html";

}

}

document.getElementById("prevBtn").onclick=()=>{

if(current>0){

current--;

showPage(current);

}

}