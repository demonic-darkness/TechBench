let marcaSeleccionada = '';
let tamanoSeleccionado = '';

function seleccionarMarca(marca) {
    marcaSeleccionada = marca.toLowerCase();
    document.getElementById('step1').classList.add('oculto');
    const paso2 = document.getElementById('step2');
    paso2.classList.remove('oculto');

    paso2.querySelectorAll('.cuadro2').forEach(cuadro => {
        cuadro.style.display = cuadro.classList.contains(marcaSeleccionada) ? 'block' : 'none';
    });
}

document.querySelectorAll('#step2 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
        document.getElementById("step2").classList.add("oculto");
        document.getElementById("step3").classList.remove("oculto");
    });
});

document.querySelectorAll('#step3 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
        // Leer el tamaño de motherboard desde el texto
        const texto = boton.parentElement.querySelector('b').textContent;
        tamanoSeleccionado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

        document.getElementById("step3").classList.add("oculto");

        const paso4 = document.getElementById("step4");
        paso4.classList.remove("oculto");

        paso4.querySelectorAll('.cuadro2').forEach(cuadro => {
            const visible = cuadro.classList.contains(marcaSeleccionada) && cuadro.classList.contains(tamanoSeleccionado);
            cuadro.style.display = visible ? 'block' : 'none';
        });
    });
});