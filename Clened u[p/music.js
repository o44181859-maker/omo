const audio=document.getElementById("audio");

const play=document.getElementById("play");

const progress=document.getElementById("progress");

const volume=document.getElementById("volume");

const record=document.querySelector(".record");

const needle=document.querySelector(".needle");

const current=document.getElementById("current");

const duration=document.getElementById("duration");

play.onclick=()=>{

if(audio.paused){

audio.play();

record.classList.add("playing");

needle.classList.add("playing");

play.innerHTML='<i class="fa-solid fa-pause"></i>';

}else{

audio.pause();

record.classList.remove("playing");

needle.classList.remove("playing");

play.innerHTML='<i class="fa-solid fa-play"></i>';

}

};

audio.addEventListener("loadedmetadata",()=>{

duration.textContent=format(audio.duration);

});

audio.addEventListener("timeupdate",()=>{

progress.value=

(audio.currentTime/audio.duration)*100;

current.textContent=format(audio.currentTime);

});

progress.oninput=()=>{

audio.currentTime=

(progress.value/100)*audio.duration;

};

volume.oninput=()=>{

audio.volume=volume.value;

};

function format(time){

const m=Math.floor(time/60);

const s=Math.floor(time%60);

return `${m}:${s<10?"0":""}${s}`;

}