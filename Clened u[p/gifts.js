const gifts=document.querySelectorAll(".gift-box");

gifts.forEach(gift=>{

gift.addEventListener("click",()=>{

gift.classList.add("gift-open");

const rect=gift.getBoundingClientRect();

explodeHearts(

rect.left+rect.width/2,

rect.top+rect.height/2

);

setTimeout(()=>{

window.location.href=

gift.dataset.page;

},900);

});

});