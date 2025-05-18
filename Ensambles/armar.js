// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  let marcaSeleccionada = '';
  let tamanoSeleccionado = '';
  let ramTipoSeleccionado = '';
  let seleccionTamanos = [];

  let procesadorSeleccionado = '';
  let motherboardSeleccionada = '';
  let almacenamientoSeleccionado = '';
  let ramSeleccionada = '';
  let gpuSeleccionada = '';
  let fuenteSeleccionada = '';
  let gabineteSeleccionado = '';
  let extraSeleccionado = '';

  function seleccionarMarca(marca) {
    marcaSeleccionada = marca.toLowerCase();
    document.getElementById('step1').classList.add('oculto');
    document.getElementById('step2').classList.remove('oculto');

    document.querySelectorAll('#step2 .cuadro2').forEach(cuadro => {
      cuadro.style.display = cuadro.classList.contains(marcaSeleccionada) ? 'block' : 'none';
    });
  }

  window.seleccionarMarca = seleccionarMarca;

  document.querySelectorAll('#step2 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      ramTipoSeleccionado = boton.dataset.ram || 'ddr5';
      const cuadro = boton.closest('.cuadro2');
      procesadorSeleccionado = cuadro.outerHTML;
      document.getElementById("step2").classList.add("oculto");
      document.getElementById("step3").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step3 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const texto = boton.parentElement.querySelector('b').textContent;
      tamanoSeleccionado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

      if (!seleccionTamanos.includes(tamanoSeleccionado)) {
        seleccionTamanos.push(tamanoSeleccionado);
      }

      document.getElementById("step3").classList.add("oculto");
      const paso4 = document.getElementById("step4");
      paso4.classList.remove("oculto");

      paso4.querySelectorAll('.cuadro2').forEach(cuadro => {
        const visible = cuadro.classList.contains(marcaSeleccionada) && cuadro.classList.contains(tamanoSeleccionado);
        cuadro.style.display = visible ? 'block' : 'none';
      });
    });
  });

  document.querySelectorAll('#step4 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      motherboardSeleccionada = cuadro.outerHTML;
      document.getElementById("step4").classList.add("oculto");
      document.getElementById("step5").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step5 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      almacenamientoSeleccionado = cuadro.outerHTML;
      document.getElementById("step5").classList.add("oculto");
      const paso6 = document.getElementById("step6");
      paso6.classList.remove("oculto");

      paso6.querySelectorAll('.cuadro2').forEach(cuadro => {
        const visible = cuadro.classList.contains(ramTipoSeleccionado);
        cuadro.style.display = visible ? 'block' : 'none';
      });
    });
  });

  document.querySelectorAll('#step6 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      ramSeleccionada = cuadro.outerHTML;
      document.getElementById("step6").classList.add("oculto");
      document.getElementById("step7").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step7 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      gpuSeleccionada = cuadro.outerHTML;
      document.getElementById("step7").classList.add("oculto");
      document.getElementById("step8").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step8 .boton').forEach(boton => {
  boton.addEventListener('click', () => {
    const cuadro = boton.closest('.cuadro2');
    extraSeleccionado = cuadro.outerHTML;

    const paso9 = document.getElementById("step9");
    paso9.classList.remove("oculto");
    document.getElementById("step8").classList.add("oculto");

    paso9.querySelectorAll('.cuadro2').forEach(cuadro => {
      const visible = seleccionTamanos.some(tam => cuadro.classList.contains(tam));
      cuadro.style.display = visible ? 'block' : 'none';
    });
  });
});

  document.querySelectorAll('#step9 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      gabineteSeleccionado = cuadro.outerHTML;
      document.getElementById("step9").classList.add("oculto");
      document.getElementById("step10").classList.remove("oculto");
    });
  });

 document.querySelectorAll('#step10 .boton').forEach(boton => {
  boton.addEventListener('click', () => {
    const cuadro = boton.closest('.cuadro2');
    fuenteSeleccionada = cuadro.outerHTML;

    document.getElementById("step10").classList.add("oculto");
    document.getElementById("step11").classList.remove("oculto");

    const resumen = document.getElementById("resumen-componentes");
    resumen.innerHTML = `
      ${procesadorSeleccionado}
      ${motherboardSeleccionada}
      ${almacenamientoSeleccionado}
      ${ramSeleccionada}
      ${gpuSeleccionada}
      ${gabineteSeleccionado}
      ${fuenteSeleccionada}
    `;

    // Reactivar toggle en resumen
    document.querySelectorAll('#step11 .arrow').forEach(arrow => {
      arrow.addEventListener('click', () => {
        const description = arrow.closest('label').querySelector('.description');
        description.classList.toggle('visible');
      });
    });
  });
});
});
