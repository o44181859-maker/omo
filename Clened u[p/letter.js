const envelope =
document.getElementById("envelope");

const typed =
document.getElementById("typedLetter");

const message =

`My dearest Princess,

Happy Girlfriend’s Day, my love.

I just wanted to remind you how much you mean to me. Thank you for always being there for me, for making me smile, and for bringing so much joy into my life. I genuinely appreciate you more than words can express.

I love being with you, talking to you, and making memories with you. You’re such an amazing person, and I’m so grateful to have you in my life. I want you to know that I truly love you, care about you, and see a future with you.

No matter what happens, I’ll always be here to support you and remind you how special you are. Thank you for being you.

I love you so much, Princess. Happy Girlfriend’s Day. ❤️

Forever yours,
❤️`;

let i = 0;

envelope.onclick = ()=>{

envelope.classList.add("open");

setTimeout(type,700);

};

function type(){

if(i < message.length){

typed.innerHTML += message.charAt(i);

i++;

setTimeout(type,35);

}

}function petals(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

Math.random()*6+5+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(petals,500);