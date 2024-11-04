document.getElementById('copiarBtn').addEventListener('click', function() {
    const textos = [
        `Estimado(a): ${document.getElementById('cliente').value}`,
        `Damos por finalizada su solicitud.`,
        `Estará recibiendo una breve encuesta evaluando la atención recibida.`,
        `Su opinión será utilizada para asegurar que continuemos satisfaciendo sus necesidades. La escala de satisfacción va del 1 al 10, siendo`,
        `·9 y 10 “Muy satisfecho”`,
        `·8 “Regular”`,
        `·Del 7 al 1 “No satisfecho”`,
        `·No se olvide que además nos puede indicar si su solicitud se resolvió al primer contacto.`,
        `Agradecemos su confianza y esperamos poder servirle en el futuro.`,
        `Nombre del Atendinte: ${document.getElementById('Nombre del Atendinte').value}`
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
