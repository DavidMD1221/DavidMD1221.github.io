
$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3, // Número de imágenes visibles a la vez
        slidesToScroll: 1, // Número de imágenes para avanzar
        autoplay: true, // Reproducción automática
        autoplaySpeed: 2000, // Velocidad de reproducción automática en milisegundos
        dots: true, // Muestra los indicadores de puntos
        infinite: true, // Bucle infinito
        responsive: [
            {
                breakpoint: 768, // Cambios en la configuración para pantallas pequeñas
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, // Cambios en la configuración para pantallas aún más pequeñas
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

menuBtn.addEventListener('click', function() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    if (window.scrollY > 50) { // Cambia 50 por la altura del menú si es diferente
        menu.style.backgroundColor = '#222'; // Cambia el color del menú al hacer scroll
    } else {
        menu.style.backgroundColor = '#333'; // Restaura el color original del menú
    }
});
document.getElementById("formulario-comentario").addEventListener("submit", function(event){
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Obtener los valores de nombre y mensaje
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;
    
    // Crear un nuevo elemento para el comentario
    var nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = "<strong>" + nombre + ":</strong> " + mensaje;
    
    // Agregar el nuevo comentario a la lista de comentarios
    document.getElementById("comentarios").appendChild(nuevoComentario);
    
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
  });
