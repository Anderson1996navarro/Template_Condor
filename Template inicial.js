document.getElementById('copiarBtn').addEventListener('click', function() {
    const textos = [
        `Referente: ${document.getElementById('referente').value}`,
        `Mail: ${document.getElementById('mail').value}`,
        `Tel: ${document.getElementById('tel').value}`,
        `Sap ID: ${document.getElementById('sapId').value}`,
        `Solicitud del cliente: ${document.getElementById('solicitudCliente').value}`,
        `Acción por parte del Owner: ${document.getElementById('accionOwner').value}`,
        `Issue: ${document.getElementById('issue').value}`,
        `¿Se adjunta al caso print del error?: ${document.getElementById('adjunto').value}`,
        `¿Hubo llamada con el cliente?: ${document.getElementById('llamadaCliente').value}`,
        `N1 pudo resolver el ISSUE?: ${document.getElementById('n1Resolvio').value}`
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

