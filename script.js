document.getElementById('openGift').addEventListener('click', function() {
    console.log('El botón ha sido clicado'); // Mensaje para verificar el click
    const flowers = document.getElementById('flowers');
    const message = document.getElementById('message');

    flowers.classList.remove('hidden');
    flowers.style.opacity = '1';

    // Mostrar el mensaje
    message.classList.remove('hidden');
    message.style.opacity = '1';

    // Crear césped
    const grass = document.createElement('div');
    grass.classList.add('grass');
    document.body.appendChild(grass);
});
