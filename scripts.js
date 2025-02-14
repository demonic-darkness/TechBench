function filtrarLista() {
    const filtro = document.getElementById('filtroBusqueda').value.toLowerCase();
    const items = document.querySelectorAll('#lista li');

    items.forEach(function(item) {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(filtro)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Escuchar el evento "input" para filtrar mientras se escribe
document.getElementById('filtroBusqueda').addEventListener('input', filtrarLista);

// Escuchar el evento "keydown" para filtrar al presionar "Enter"
document.getElementById('filtroBusqueda').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        filtrarLista();
    }
});