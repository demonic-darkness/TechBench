function seleccionarMarca(marca) {
    document.getElementById('step1').classList.add('oculto');
    const paso2 = document.getElementById('step2');
    paso2.classList.remove('oculto');

    // Ocultar procesadores no relacionados
    paso2.querySelectorAll('.cuadro2').forEach(cuadro => {
        cuadro.style.display = cuadro.classList.contains(marca.toLowerCase()) ? 'block' : 'none';
    });
}

