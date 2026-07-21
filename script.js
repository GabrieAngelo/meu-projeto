function abrirmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.toggle("open");
}

function fecharmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.remove("open");

}

function xre190() {
    const banner = document.querySelector(".banner");
    banner.classList.remove("teste");
    banner.classList.add("xre190");
}