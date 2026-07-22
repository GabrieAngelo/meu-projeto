function abrirmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.toggle("open");
}

function fecharmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.remove("open");

}


const motos = document.querySelector(".motos");

motos.addEventListener("mouseenter", () => {
    const banner = document.querySelector(".banner");
    banner.classList.remove("teste");
    banner.classList.add("xre190");
});
motos.addEventListener("mouseleave", () => {
    const banner = document.querySelector(".banner");
    banner.classList.remove("xre190");
    banner.classList.add("teste");

});

const xre300 = document.querySelector("#xre300")

xre300.addEventListener("mouseenter", () => {
    const banner = document.querySelector("banner")
    banner.classList.remove("teste");
    banner.classList.add("xre300");

});
xre300.addEventListener("mouseleave", () => {
    const banner = document.querySelector("banner")
    banner.classList.remove("xre300");
    banner.classList.add("teste");

});