const productos = [
  { nombre: "RTX 5090", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 5080", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 5070 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 5070", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 4090", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 4080", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 4070", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 4070 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 4060 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 4060", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3090", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3090 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3080", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3080 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3070", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3070 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3060 ", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 3050", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 2080", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 2080 Ti", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "RTX 2080 Super", url: "../Graficas/GraficasNvidia.html" },
  { nombre: "ryzen 9 9950X", url: "../Procesadores/ProcesadoresAMD.html" },
  { nombre: "ryzen 9 7950X3D", url: "../Procesadores/ProcesadoresAMD.html" },
];

const input = document.getElementById("busqueda");
const lista = document.getElementById("lista-sugerencias");

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ") // <--- remueve múltiples espacios
    .trim();
}

function resaltarCuadro(texto) {
  const textoNormalizado = normalizarTexto(texto);
  const elementosTexto = document.querySelectorAll(".mini-titulo");

  const elemento = Array.from(elementosTexto).find(el =>
    normalizarTexto(el.textContent).includes(textoNormalizado)
  );

  if (elemento) {
    const cuadro = elemento.closest(".cuadro2");
    if (cuadro) {
      cuadro.style.transition = "background-color 1.5s ease";
      cuadro.style.backgroundColor = "#fc7303";
      setTimeout(() => {
        cuadro.style.backgroundColor = "";
      }, 3000);
      cuadro.scrollIntoView({ behavior: "smooth", block: "center" });
      if (input) input.value = texto;
      if (lista) lista.style.display = "none";
    }
    return true;
  }
  return false;
}

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  lista.innerHTML = "";

  if (!query.trim()) {
    lista.style.display = "none";
    return;
  }

  const sugerencias = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(query)
  );

  sugerencias.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = producto.nombre;

    li.addEventListener("click", () => {
      const encontrado = resaltarCuadro(producto.nombre);
      if (!encontrado) {
        localStorage.setItem("resaltarTexto", producto.nombre);
        window.location.href = producto.url;
      }
    });

    lista.appendChild(li);
  });

  lista.style.display = sugerencias.length > 0 ? "block" : "none";
});

// Reintento al cargar la página de destino
document.addEventListener("DOMContentLoaded", () => {
  const textoGuardado = localStorage.getItem("resaltarTexto");

  if (textoGuardado) {
    let intentos = 0;

    const intentarResaltar = () => {
      const ok = resaltarCuadro(textoGuardado);
      intentos++;

      if (!ok && intentos < 10) {
        setTimeout(intentarResaltar, 300);
      } else {
        localStorage.removeItem("resaltarTexto");
      }
    };

    intentarResaltar();
  }
});














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