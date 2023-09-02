// Función para mostrar la ventana emergente con información del ejercicio
function mostrarInformacion(titulo, descripcion, imagen) {
    const ventanaEmergente = document.getElementById("ventanaEmergente");
    const tituloEjercicio = document.getElementById("tituloEjercicio");
    const descripcionEjercicio = document.getElementById("descripcionEjercicio");
    const imagenEjercicio = document.getElementById("imagenEjercicio");

    tituloEjercicio.textContent = titulo;
    descripcionEjercicio.textContent = descripcion;
    imagenEjercicio.src = imagen;

    ventanaEmergente.style.display = "block";
}

// Función para cerrar la ventana emergente
function cerrarVentanaEmergente() {
    const ventanaEmergente = document.getElementById("ventanaEmergente");
    ventanaEmergente.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    const infoLink = document.getElementById("info-link");
    const infoButtons = document.querySelectorAll(".info-btn");

    infoButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Redirige a la página de información del ejercicio
//            window.location.href = infoLink.href;
        });
    });
});