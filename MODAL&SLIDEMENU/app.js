const button = document.getElementById("clickMe");
const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("xClose");
const transparent = document.getElementById("cover");
const box = document.getElementById("whiteBox");
const body = document.getElementById("body");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("closeMenu");
const outsideMenu = document.getElementById("outsideMenu");

button.addEventListener("click", () =>{
    button.style.zIndex = 3;
    transparent.style.display = "block";
    box.style.display = "block";
    body.style.overflow = "hidden";
})

closeButton.addEventListener("click", (e) =>{
    e.stopPropagation;
    button.style.zIndex = 6;
    transparent.style.display = "none";
    box.style.display = "none";
    body.style.overflow = "visible";
})

transparent.addEventListener("click", () =>{
    button.style.zIndex = 6;
    transparent.style.display = "none";
    box.style.display = "none";
    body.style.overflow = "visible";
})

hamburger.addEventListener("click", () =>{
    menu.style.transform = "translateX(0%)";
    hamburger.style.display = "none";
    transparent.style.display = "block";
})

closeMenu.addEventListener("click", () =>{
    menu.style.transform = "translateX(100%)";
    hamburger.style.display = "block";
    transparent.style.display = "none";
})

transparent.addEventListener("click", () =>{
    menu.style.transform = "translateX(100%)";
    hamburger.style.display = "block";
    transparent.style.display = "none";
})
