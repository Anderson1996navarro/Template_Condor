document.getElementById('copiarBtn').addEventListener('click', function() {
    const textos = [
        `Cliente: ${document.getElementById('cliente').value}`,
        `URL: ${document.getElementById('url').value}`,
        `Sitio: ${document.getElementById('sitio').value}`,
        `Usuarios: ${document.getElementById('usuarios').value}`,
        `Stepps: ${document.getElementById('stepps').value}`,
        `Found Result: ${document.getElementById('foundResult').value}`,
        `Expect Result: ${document.getElementById('expectResult').value}`
    ];

    const textoCompleto = textos.join('\n\n');

    // Crear un textarea temporal para copiar el texto
    const tempInput = document.createElement('textarea');
    tempInput.value = textoCompleto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = 'Texto copiado al portapapeles!';
    mensaje.classList.remove('hidden');

    setTimeout(() => {
        mensaje.classList.add('hidden');
    }, 2000);
});
