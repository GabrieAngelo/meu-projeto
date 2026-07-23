function abrirmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.toggle("open");
}

function fecharmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.remove("open");

}


const xre190 = document.querySelector("#xre190");

xre190.addEventListener("mouseenter", () => {
    const banner = document.querySelector(".banner");
    banner.classList.remove("teste");
    banner.classList.add("xre190");
});
xre190.addEventListener("mouseleave", () => {
    const banner = document.querySelector(".banner");
    banner.classList.add("teste");
    banner.classList.remove("xre190");

});

const xre300 = document.querySelector("#xre300")

xre300.addEventListener("mouseenter", () => {
    const banner = document.querySelector(".banner")
    banner.classList.remove("teste");
    banner.classList.add("xre300");

});
xre300.addEventListener("mouseleave", () => {
    const banner = document.querySelector(".banner")
    banner.classList.remove("xre300");
    banner.classList.add("teste");

});

const cb500x = document.querySelector("#cb500x")

cb500x.addEventListener("mouseenter", () => {
    const banner = document.querySelector(".banner")
    banner.classList.remove("teste");
    banner.classList.add("cb500x");
});
cb500x.addEventListener("mouseleave", () => {
    const banner = document.querySelector(".banner")
    banner.classList.remove("cb500x");
    banner.classList.add("teste");
});