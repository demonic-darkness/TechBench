// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  let marcaSeleccionada = '';
  let tamanoSeleccionado = '';
  let ramTipoSeleccionado = '';
  let seleccionTamanos = [];

  let procesadorSeleccionado = '', procesadorNombre = '', procesadorPrecio = '';
  let motherboardSeleccionada = '', motherboardNombre = '', motherboardPrecio = '';
  let almacenamientoSeleccionado = '', almacenamientoNombre = '', almacenamientoPrecio = '';
  let ramSeleccionada = '', ramNombre = '', ramPrecio = '';
  let gpuSeleccionada = '', gpuNombre = '', gpuPrecio = '';
  let fuenteSeleccionada = '', fuenteNombre = '', fuentePrecio = '';
  let gabineteSeleccionado = '', gabineteNombre = '', gabinetePrecio = '';
  let extraSeleccionado = '', extraNombre = '', extraPrecio = '';

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
      procesadorNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      procesadorPrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
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
      motherboardNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      motherboardPrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
      document.getElementById("step4").classList.add("oculto");
      document.getElementById("step5").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step5 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      almacenamientoSeleccionado = cuadro.outerHTML;
      almacenamientoNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      almacenamientoPrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
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
      ramNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      ramPrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
      document.getElementById("step6").classList.add("oculto");
      document.getElementById("step7").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step7 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      gpuSeleccionada = cuadro.outerHTML;
      gpuNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      gpuPrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
      document.getElementById("step7").classList.add("oculto");
      document.getElementById("step8").classList.remove("oculto");
    });
  });

  document.querySelectorAll('#step8 .boton').forEach(boton => {
    boton.addEventListener('click', () => {
      const cuadro = boton.closest('.cuadro2');
      extraSeleccionado = cuadro.outerHTML;
      extraNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      extraPrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
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
      gabineteNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
      gabinetePrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';
      document.getElementById("step9").classList.add("oculto");
      document.getElementById("step10").classList.remove("oculto");
    });
  });

document.querySelectorAll('#step10 .boton').forEach(boton => {
  boton.addEventListener('click', () => {
    const cuadro = boton.closest('.cuadro2');
    fuenteSeleccionada = cuadro.outerHTML;
    fuenteNombre = cuadro.querySelector('p.mini-titulo b')?.textContent.trim() || '';
    fuentePrecio = cuadro.querySelector('p:last-of-type b')?.textContent.trim() || '';

    document.getElementById("step10").classList.add("oculto");
    document.getElementById("step11").classList.remove("oculto");

    const resumen = document.getElementById("resumen-componentes");

    const cuadrosHTML = `
      <div class="ensamble-cuadro">
        ${procesadorSeleccionado}
        ${motherboardSeleccionada}
        ${almacenamientoSeleccionado}
        ${ramSeleccionada}
        ${gpuSeleccionada}
        ${extraSeleccionado}
        ${gabineteSeleccionado}
        ${fuenteSeleccionada}
      </div>
    `;

    const tablaHTML = `
      <div class="tabla-container">
        <table class="mi-tabla">
          <thead>
            <tr><th>Componente</th><th>Precio</th></tr>
          </thead>
          <tbody>
            <tr><td>${procesadorNombre}</td><td>${procesadorPrecio}</td></tr>
            <tr><td>${motherboardNombre}</td><td>${motherboardPrecio}</td></tr>
            <tr><td>${almacenamientoNombre}</td><td>${almacenamientoPrecio}</td></tr>
            <tr><td>${ramNombre}</td><td>${ramPrecio}</td></tr>
            <tr><td>${gpuNombre}</td><td>${gpuPrecio}</td></tr>
            <tr><td>${extraNombre}</td><td>${extraPrecio}</td></tr>
            <tr><td>${gabineteNombre}</td><td>${gabinetePrecio}</td></tr>
            <tr><td>${fuenteNombre}</td><td>${fuentePrecio}</td></tr>
          </tbody>
          <tfoot>
            <tr><td style="font-weight:bold;">Total</td><td id="totalPrecio" style="font-weight:bold;">-</td></tr>
          </tfoot>
        </table>
      </div>
    `;

    resumen.innerHTML = cuadrosHTML + tablaHTML;
    resumen.querySelectorAll('.cuadro2 .boton').forEach(btn => btn.remove());

    // Reactivar flechas de despliegue en el resumen
    resumen.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const description = arrow.closest('label')?.querySelector('.description');
      if (description) {
        description.classList.toggle('visible');
      }
    });
  });



    function extraerPrecio(texto) {
      const match = texto?.match(/\$([\d,.]+)/);
      return match ? parseFloat(match[1].replace(/,/g, '')) : 0;
    }

    const total = [
      procesadorPrecio, motherboardPrecio, almacenamientoPrecio,
      ramPrecio, gpuPrecio, extraPrecio, gabinetePrecio, fuentePrecio
    ].reduce((acc, p) => acc + extraerPrecio(p), 0);

    document.getElementById("totalPrecio").textContent = total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  });
});


  });
