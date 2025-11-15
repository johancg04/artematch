//Botones
const btnDescubrir = document.getElementById('btn-descubrir');
const btnMisComunidades = document.getElementById('btn-miscomunidades');
const btnTendencias = document.getElementById('btn-tendencias');

const seccionDescubrir = document.getElementById('seccion-descubrir');
const seccionMisComunidades = document.getElementById('seccion-miscomunidades');
const seccionTendencias = document.getElementById('seccion-tendencias');

function mostrarSolo(id) {
    document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function activarBtn(id) {
    document.querySelectorAll('.layout-boton').forEach(btn => btn.classList.remove('activo'));
    document.getElementById(id).classList.add('activo');
}

btnDescubrir.addEventListener('click', () => {
    mostrarSolo('seccion-descubrir');
    activarBtn('btn-descubrir');
})

btnMisComunidades.addEventListener('click', () => {
    mostrarSolo('seccion-miscomunidades');
    activarBtn('btn-miscomunidades');
})

btnTendencias.addEventListener('click', () => {
    mostrarSolo('seccion-tendencias');
    activarBtn('btn-tendencias');
})