const hugButton = document.getElementById("hugButton");
const hiddenMessage = document.getElementById("hiddenMessage");
const bear = document.getElementById("bear");

hugButton.addEventListener("click", () => {

    // Vibrate supported phones
    if ("vibrate" in navigator) {
        navigator.vibrate([200,100,200,100,300]);
    }

    // Teddy scales slightly
    bear.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.08)"},
        {transform:"scale(1)"}
    ],{
        duration:700
    });

    // Reveal message
    hiddenMessage.classList.remove("hidden");

    // Change button text
    hugButton.textContent = "❤️ Hug Delivered";

    hugButton.disabled = true;

    // Floating hearts
    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=Math.random()>0.5?"❤️":"💕";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.animationDuration=(5+Math.random()*4)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>heart.remove(),9000);
    }

    // Scroll to message
    hiddenMessage.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});