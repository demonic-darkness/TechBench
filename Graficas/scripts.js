// Obtenemos el input donde el usuario escribirá su búsqueda
const busqueda = document.getElementById("busqueda");

// Obtenemos la lista donde se mostrarán las sugerencias (etiqueta <ul> o similar)
const listaSugerencias = document.getElementById("lista-sugerencias");

// Obtenemos todos los elementos que tienen la clase "mini-titulo"
// Estos son los textos que se usarán para buscar coincidencias
const elementosTexto = document.querySelectorAll(".mini-titulo");

// Añadimos un evento que se ejecuta cada vez que el usuario escribe en el input
busqueda.addEventListener("input", function () {
    // Convertimos el texto ingresado a minúsculas para una búsqueda sin distinción de mayúsculas/minúsculas
    const texto = busqueda.value.toLowerCase();

    // Limpiamos la lista de sugerencias anteriores
    listaSugerencias.innerHTML = "";

    // Ocultamos la lista de sugerencias por defecto
    listaSugerencias.style.display = "none";

    // Solo procedemos si el campo no está vacío (evita buscar por espacios)
    if (texto.trim() !== "") {
        let coincidencias = []; // Lista para guardar coincidencias

        // Recorremos todos los textos a buscar
        elementosTexto.forEach(el => {
            // Si el texto contiene la palabra buscada (ignorando mayúsculas/minúsculas)
            if (el.textContent.toLowerCase().includes(texto)) {
                // Agregamos el texto a las coincidencias
                coincidencias.push(el.textContent);
            }
        });

        // Si se encontraron coincidencias
        if (coincidencias.length > 0) {
            // Mostramos la lista de sugerencias
            listaSugerencias.style.display = "block";

            // Recorremos cada coincidencia encontrada
            coincidencias.forEach(nombre => {
                // Creamos un nuevo elemento <li> con el nombre de la coincidencia
                let li = document.createElement("li");
                li.textContent = nombre;

                // Le asignamos un evento para que, al hacer clic, resalte el cuadro correspondiente
                li.addEventListener("click", () => resaltarCuadro(nombre));

                // Agregamos el <li> a la lista de sugerencias
                listaSugerencias.appendChild(li);
            });
        }
    }
});

// Función que resalta el cuadro que contiene el texto seleccionado
function resaltarCuadro(texto) {
    // Buscamos el elemento cuyo texto contenga el valor seleccionado
    let elemento = Array.from(elementosTexto).find(el => el.textContent.includes(texto));

    if (elemento) {
        // Buscamos el contenedor más cercano con la clase "cuadro2"
        let cuadro = elemento.closest(".cuadro2");

        if (cuadro) {
            // Aplicamos una transición suave al cambiar el color de fondo
            cuadro.style.transition = "background-color 1.5s ease";

            // Cambiamos el color de fondo temporalmente
            cuadro.style.backgroundColor = "#fc7303";

            // Después de 3 segundos, volvemos al color original
            setTimeout(() => {
                cuadro.style.backgroundColor = "";
            }, 3000);
        }

        // Hacemos scroll suave para centrar el cuadro en la pantalla
        cuadro.scrollIntoView({ behavior: "smooth", block: "center" });

        // Colocamos el texto seleccionado en el input
        busqueda.value = texto;

        // Ocultamos la lista de sugerencias
        listaSugerencias.style.display = "none";
    }
}









// Mostrar botón al hacer scroll
window.addEventListener("scroll", function () {
    const btn = document.getElementById("btnArriba");
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
  
  // Volver al principio suavemente
  const btn = document.getElementById("btnArriba");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });







  // buscador.js
  const productos = [
    { nombre: "RTX 5090", url: "./Graficas/GraficasNvidia.html" },
    { nombre: "ryzen 9 9900X", url: "../Procesadores/ProcesadoresAMD.html" },
    { nombre: "MacBook Pro M1", url: "./productos/macbook-pro-m1.html" },
    { nombre: "HP Envy Ryzen 7", url: "./productos/hp-envy-ryzen7.html" },
    { nombre: "Lenovo Legion 5", url: "./productos/lenovo-legion-5.html" },
    { nombre: "Acer Predator Helios", url: "./productos/acer-predator-helios.html" },
    { nombre: "Razer Blade 15", url: "./productos/razer-blade-15.html" },
    { nombre: "MSI GE76 Raider", url: "./productos/msi-ge76-raider.html" },
    { nombre: "Surface Laptop Studio", url: "./productos/surface-laptop-studio.html" }
  ];
  
  const input = document.getElementById("busqueda");
  const lista = document.getElementById("lista-sugerencias");
  const resultado = document.getElementById("resultado");
  
  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    lista.innerHTML = "";
  
    if (!query) {
      lista.style.display = "none";
      return;
    }
  
    const sugerencias = productos.filter(producto => producto.nombre.toLowerCase().includes(query));
  
    sugerencias.forEach(producto => {
      const li = document.createElement("li");
      li.textContent = producto.nombre;
  
      li.addEventListener("click", () => {
        const elementosTexto = document.querySelectorAll(".cuadro2 *");
        const coincidencia = Array.from(elementosTexto).find(el => el.textContent.includes(producto.nombre));
  
        if (coincidencia) {
          resaltarCuadro(producto.nombre);
        } else {
          localStorage.setItem("resaltarTexto", producto.nombre);
          window.location.href = producto.url;
        }
      });
  
      lista.appendChild(li);
    });
  
    lista.style.display = sugerencias.length > 0 ? "block" : "none";
  });
  
  function resaltarCuadro(texto) {
    const elementosTexto = document.querySelectorAll(".cuadro2 *");
    const elemento = Array.from(elementosTexto).find(el => el.textContent.includes(texto));
  
    if (elemento) {
      const cuadro = elemento.closest(".cuadro2");
      if (cuadro) {
        cuadro.style.transition = "background-color 1.5s ease";
        cuadro.style.backgroundColor = "#fc7303";
        setTimeout(() => {
          cuadro.style.backgroundColor = "";
        }, 3000);
        cuadro.scrollIntoView({ behavior: "smooth", block: "center" });
        input.value = texto;
        lista.style.display = "none";
      }
    }
  }
  
  // Ejecutar al cargar si venimos de otra página
  document.addEventListener("DOMContentLoaded", () => {
    const textoGuardado = localStorage.getItem("resaltarTexto");
    if (textoGuardado) {
      resaltarCuadro(textoGuardado);
      localStorage.removeItem("resaltarTexto");
    }
  });