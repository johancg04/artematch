const btnParaTi = document.getElementById("btnParaTi");
const btnTendencias = document.getElementById("btnTendencias");
const btnFavoritos = document.getElementById("btnFavoritos");

const btnRestablecer = document.getElementById("btnRestablecer");

const msgFavoritos = document.getElementById("msgFavoritos");
const msgParaTi = document.getElementById("msgParaTi");
const msgTendencias = document.getElementById("msgTendencias");

msgParaTi.style.display = "block";
btnRestablecer.style.display = "block"

btnParaTi.addEventListener("click", () => {
    msgParaTi.style.display = "block";
    btnRestablecer.style.display = "Block";
    msgTendencias.style.display = "none";
    msgFavoritos.style.display = "none";
});

btnTendencias.addEventListener("click", () => {
    msgTendencias.style.display = "Block";
    msgParaTi.style.display = "none";
    btnRestablecer.style.display = "none";
    msgFavoritos.style.display = "none";
});

btnFavoritos.addEventListener("click", () => {
    msgFavoritos.style.display = "Block";
    msgParaTi.style.display = "none";
    msgTendencias.style.display = "none";
    btnRestablecer.style.display = "none";
});
