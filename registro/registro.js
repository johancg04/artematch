document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login');
    const registroSection = document.getElementById('registro');

    // Botones dentro del login
    const btnLogin = document.getElementById('btn-login');
    const btnRegistro = document.getElementById('btn-registro');

    // Botones dentro del registro
    const btnLogin2 = document.getElementById('btn-login-2');
    const btnRegistro2 = document.getElementById('btn-registro-2');

    // Función para ir al registro
    function irARegistro() {
        loginSection.classList.remove('activa');
        registroSection.classList.add('activa');
        btnLogin.classList.remove('activo');
        btnRegistro.classList.add('activo');
    }

    // Función para ir al login
    function irALogin() {
        registroSection.classList.remove('activa');
        loginSection.classList.add('activa');
        btnRegistro.classList.remove('activo');
        btnLogin.classList.add('activo');
    }

    // Eventos
    btnRegistro.addEventListener('click', irARegistro);
    btnLogin2.addEventListener('click', irALogin);
});
