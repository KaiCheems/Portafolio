document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const formMsg = document.getElementById('form-msg');
    // validaciones
    if (nombre === '' || email === '' || mensaje === '') {
        formMsg.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    if (!validateEmail(email)) {
        formMsg.textContent = 'Por favor, ingresa un email válido.';
        return;
    }

    formMsg.style.color = 'green';
    formMsg.textContent = '¡Mensaje enviado con éxito!';

    // Resetear formulario después de envío
    document.getElementById('contacto-form').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


  
