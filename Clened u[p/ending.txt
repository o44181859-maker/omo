// Typing animation

const title = document.getElementById("title");
const message = document.getElementById("message");

const titleText = "Every Ending Is A New Beginning ❤️";

const bodyText =
"Before you go, there's one last thing I want you to know...";

let t = 0;

function typeTitle(){

    if(t < titleText.length){

        title.innerHTML += titleText.charAt(t);

        t++;

        setTimeout(typeTitle,70);

    }else{

        typeMessage();

    }

}

let m = 0;

function typeMessage(){

    if(m < bodyText.length){

        message.innerHTML += bodyText.charAt(m);

        m++;

        setTimeout(typeMessage,35);

    }

}

typeTitle();


// ⭐ Star Background

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    document.body.appendChild(star);

}


// ❤️ Replace with your anniversary date
const startDate = new Date("2026-06-18T18:30:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/86400000);

    const hours = Math.floor(diff/3600000)%24;

    const minutes = Math.floor(diff/60000)%60;

    const seconds = Math.floor(diff/1000)%60;

    document.getElementById("days").textContent=days;
    document.getElementById("hours").textContent=hours;
    document.getElementById("minutes").textContent=minutes;
    document.getElementById("seconds").textContent=seconds;

}

updateCounter();
setInterval(updateCounter,1000);


// Final Surprise

document.getElementById("surpriseButton").onclick=()=>{

    document.getElementById("finalMessage")
    .classList.remove("hidden");

    confetti({

        particleCount:350,

        spread:180,

        origin:{y:.6}

    });

    setTimeout(()=>{

        confetti({

            particleCount:250,

            angle:60,

            origin:{x:0}

        });

        confetti({

            particleCount:250,

            angle:120,

            origin:{x:1}

        });

    },500);

};