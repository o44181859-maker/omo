// Remove loading screen

window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loading-screen").style.display="none";

},1800);

});

// Open Gift Menu

const start=document.getElementById("startButton");

const hero=document.querySelector(".hero");

const menu=document.getElementById("giftMenu");

start.addEventListener("click",()=>{

hero.style.display="none";

menu.classList.remove("hidden");

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

});
const title =
document.getElementById("typingTitle");

const message =
"Made With Love ❤️";

let index = 0;

function typeTitle(){

if(index < message.length){

title.innerHTML +=
message.charAt(index);

index++;

setTimeout(typeTitle,120);

}

}

window.onload = () => {

setTimeout(()=>{

document.querySelector(".loading-screen").style.display="none";

typeTitle();

},1800);

};
new Typed("#typingTitle",{

strings:[
"For My Princess ❤️",
"I Made Something Special ❤️"
],

typeSpeed:70,

backSpeed:40,

loop:true

});

new Typed("#typingSubtitle",{

strings:[

"Every click reveals another little piece of my heart.",

"I hope this makes you smile.",

"You mean the world to me."

],

typeSpeed:40,

backSpeed:25,

loop:true

});