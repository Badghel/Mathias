
let active = document.getElementById("active");
let menu = document.getElementById("menu");
let atras = document.getElementById("atras");
let links = document.querySelectorAll(".menu__link");
active.addEventListener("click",()=>{
    menu.style.display="unset";
    active.classList.add("disable")
})
atras.addEventListener("click",()=>{
    menu.style.display="none";
    active.classList.remove("disable");
})

for(i=0;i< links.length;i++){
    links[i].addEventListener("click",()=>{
        menu.style.display="none";
        active.classList.remove("disable");
    })
};

