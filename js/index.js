document.querySelector("#pop>img").addEventListener("click", () => {
    document.getElementById("pop").style.bottom = "-100%";
});

document.querySelector("#hamburger-menu").addEventListener("click", () => {
    document.querySelector("#mobile-head>nav").style.left = "0%";
});

document.querySelector("main").addEventListener("click", () => {
    document.querySelector("#mobile-head>nav").style.left = "-100%";
});

document.querySelector("#exit-mobile").addEventListener("click", () => {
    document.querySelector("#mobile-head>nav").style.left = "-100%";
});

const header = document.getElementById("head");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        header.classList.add("head-scroll-up");
    }
    else{
        header.classList.remove("head-scroll-up");
    }
})