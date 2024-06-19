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
  document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y el mensaje de éxito
    const formulario = document.getElementById('formulario');
    const mensajeExito = document.querySelector('.mensajeExito');

    // Ocultar el formulario y el mensaje de éxito inicialmente
    formulario.classList.add('oculto');
    mensajeExito.classList.add('oculto');

    // Obtener todos los enlaces con la clase 'btn'
    const enlacesCompra = document.querySelectorAll('.btn');

    // Asignar un evento clic a cada enlace
    enlacesCompra.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar la acción predeterminada de navegación

            // Mostrar el formulario para ingresar datos de compra
            formulario.classList.remove('oculto');

            // Ocultar el mensaje de éxito si está visible
            mensajeExito.classList.add('oculto');
        });
    });

    // Asignar evento clic al botón de enviar
    document.getElementById('enviarBtn').addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el envío por defecto del formulario

        // Simular el envío de datos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        // Aquí podrías enviar los datos a un servidor si lo necesitas

        // Ocultar el formulario
        formulario.classList.add('oculto');

        // Mostrar el mensaje de éxito
        mensajeExito.classList.remove('oculto');

        // Después de 10 segundos, ocultar el mensaje de éxito
        setTimeout(() => {
            mensajeExito.classList.add('oculto');
        }, 10000); // 10000 milisegundos = 10 segundos
    });
});
