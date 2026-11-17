/* ===============================
Floating Hearts
=============================== */

const heartContainer =
document.querySelector(".floating-hearts");

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(Math.random()*18+18)+"px";

heart.style.animationDuration=
(Math.random()*5+6)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,450);

/* ===============================
Sparkles
=============================== */

for(let i=0;i<40;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=
Math.random()*100+"vw";

sparkle.style.top=
Math.random()*100+"vh";

sparkle.style.animationDelay=
Math.random()*3+"s";

document.body.appendChild(sparkle);

}
function explodeHearts(x,y){

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.fontSize=

Math.random()*18+18+"px";

heart.style.pointerEvents="none";

heart.style.transition="1.4s";

document.body.appendChild(heart);

const angle=Math.random()*360;

const distance=Math.random()*180+80;

const dx=Math.cos(angle*Math.PI/180)*distance;

const dy=Math.sin(angle*Math.PI/180)*distance;

requestAnimationFrame(()=>{

heart.style.transform=

`translate(${dx}px,${dy}px) scale(0)`;

heart.style.opacity=0;

});

setTimeout(()=>heart.remove(),1500);

}

}
