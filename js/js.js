
let active = document.getElementById("active");
let menu = document.getElementById("menu");
let atras = document.getElementById("atras");
active.addEventListener("click",()=>{
    menu.style.display="unset";
    active.classList.add("disable")
})
atras.addEventListener("click",()=>{
    menu.style.display="none";
    active.classList.remove("disable");
})