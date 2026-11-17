const photos=[...document.querySelectorAll(".photo")];

const lightbox=document.getElementById("lightbox");

const image=document.getElementById("lightboxImage");

const caption=document.getElementById("caption");

let current=0;

function show(index){

current=index;

const img=photos[index].querySelector("img");

image.src=img.src;

caption.textContent=

photos[index].dataset.caption;

lightbox.style.display="flex";

}

photos.forEach((photo,index)=>{

photo.onclick=()=>show(index);

});

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

}

document.getElementById("next").onclick=()=>{

show((current+1)%photos.length);

}

document.getElementById("prev").onclick=()=>{

show((current-1+photos.length)%photos.length);

}
let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

document.getElementById("next").click();

}

if(endX-startX>50){

document.getElementById("prev").click();

}

});
const heart=photo.querySelector(".like");

heart.classList.add("pop");

setTimeout(()=>{

heart.classList.remove("pop");

},600);