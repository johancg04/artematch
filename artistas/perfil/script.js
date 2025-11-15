//botones
const btnGaleria = document.getElementById('btn-galería');
const btnReseñas = document.getElementById('btn-reseñas');
const btnSobremi = document.getElementById('btn-sobremi');

//secciones
const seccionGaleria = document.getElementById('seccion-galeria');
const seccionReseñas = document.getElementById('seccion-reseñas');
const seccionSobremi = document.getElementById('seccion-sobremi');

function mostrarSolo(id) {
    document.querySelectorAll('.seccion').forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "flex";
}

function activarBtn(id) {
    document.querySelectorAll('.boton').forEach(btn => btn.classList.remove('activo'));
    document.getElementById(id).classList.add('activo');
}

btnGaleria.addEventListener('click', () => {
    mostrarSolo('seccion-galeria');
    activarBtn('btn-galería');
});

btnReseñas.addEventListener('click', () => {
    mostrarSolo('seccion-reseñas');
    activarBtn('btn-reseñas');
});

btnSobremi.addEventListener('click', () => {
    mostrarSolo('seccion-sobremi');
    activarBtn('btn-sobremi');
})