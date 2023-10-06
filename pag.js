// Obtenemos los botones por su ID
const personalButton = document.getElementById("personal");
const empresaButton = document.getElementById("empresa");
const cuerphButton = document.getElementById("cuerpoh");
const cuborButton = document.getElementById("cubor");

// Funciones para redirigir a las páginas web correspondientes al hacer clic en los botones
personalButton.addEventListener("click", function() {
    window.location.href = "https://sebas-cyberg.github.io/personal.github.io/";
});

empresaButton.addEventListener("click", function() {
    window.location.href = "https://sebas-cyberg.github.io/empresaa.github.io/";
});

cuerphButton.addEventListener("click", function() {
    window.location.href = "https://sebas-cyberg.github.io/digestivo.github.io/";
});

cuborButton.addEventListener("click", function() {
    window.location.href = "https://sebas-cyberg.github.io/cuboo.github.io/";
});
