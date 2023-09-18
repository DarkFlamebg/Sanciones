/*Aun por arreglar la barra de busqueda */
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const sanciones = document.querySelectorAll('.sancion');
    let firstMatchedSancion = null;

    if (searchTerm === '') {
        // Si la búsqueda está vacía, mostrar todas las sanciones
        sanciones.forEach((sancion) => {
            sancion.style.display = 'block';
        });
    } else {
        // Si hay un término de búsqueda, ocultar sanciones que no coincidan
        sanciones.forEach((sancion) => {
            const sancionText = sancion.textContent.toLowerCase();
            if (sancionText.includes(searchTerm)) {
                sancion.style.display = 'block';
                if (!firstMatchedSancion) {
                    firstMatchedSancion = sancion;
                }
            } else {
                sancion.style.display = 'none';
            }
        });
    }

    // Desplazar la página hasta el primer elemento coincidente
    if (firstMatchedSancion) {
        firstMatchedSancion.scrollIntoView({ behavior: 'smooth' });
    }
});








//Muestra el año acutal
const yearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
if (yearElement) {
    yearElement.textContent = currentYear.toString();
}
