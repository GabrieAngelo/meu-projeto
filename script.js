function abrirmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.toggle("open");
}

function fecharmenu() {
    const menu = document.getElementById("menubar");
    menu.classList.remove("open");
}


const botao = document.querySelector(".botao");
botao.addEventListener("click", clicar)

function clicar() {
    alert("você clicou no botão");
}