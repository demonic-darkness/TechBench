document.addEventListener("DOMContentLoaded", () => {
  let marcaSeleccionada = '';
  let tamanoSeleccionado = '';
  let ramTipoSeleccionado = '';

  function seleccionarMarca(marca) {
    marcaSeleccionada = marca.toLowerCase();
    document.getElementById('step1').classList.add('oculto');
    const paso2 = document.getElementById('step2');
    paso2.classList.remove('oculto');

    paso2.querySelectorAll('.cuadro2').forEach(cuadro => {
      cuadro.style.display = cuadro.classList.contains(marcaSeleccionada) ? 'block' : 'none';
    });
  }

  window.seleccionarMarca = seleccionarMarca; // Exponer función global

  document.querySelectorAll('#step2 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      ramTipoSeleccionado = boton.dataset.ram || 'ddr5';
      document.getElementById("step2").classList.add("oculto");
      document.getElementById("step3").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step3 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
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

  document.querySelectorAll('#step4 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      document.getElementById("step4").classList.add("oculto");
      document.getElementById("step5").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step5 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      document.getElementById("step5").classList.add("oculto");
      const paso6 = document.getElementById("step6");
      paso6.classList.remove("oculto");

      console.log("RAM seleccionada:", ramTipoSeleccionado);

      paso6.querySelectorAll('.cuadro2').forEach(cuadro => {
        const visible = cuadro.classList.contains(ramTipoSeleccionado);
        cuadro.style.display = visible ? 'block' : 'none';
      });
    });
  });
});