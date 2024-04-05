// Función para cerrar el modal
function closeModal() {
    document.getElementById("myModal_historia").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    // Función para abrir el modal y mostrar la información del JSON
    function openModal(titulo, historia) {
        document.getElementById("modalTitle_historia").innerText = titulo; // Mostrar el título en el modal
        document.getElementById("modalContent_historia").innerHTML = historia;
        document.getElementById("myModal_historia").style.display = "block";
    }

    // Event listeners para los botones
    document.getElementById("expresionismoBtnHistoria").addEventListener("click", function() {
        fetch('assets/data/historia.json')
            .then(response => response.json())
            .then(data => {
                const expresionismo = data.find(item => item.vanguardia === 'expresionismo');
                openModal(expresionismo.vanguardia, expresionismo.historia);
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    });

    document.getElementById("surrealismoBtnHistoria").addEventListener("click", function() {
        fetch('assets/data/historia.json')
            .then(response => response.json())
            .then(data => {
                const surrealismo = data.find(item => item.vanguardia === 'surrealismo');
                openModal(surrealismo.vanguardia, surrealismo.historia);
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    });

    document.getElementById("cubismoBtnHistoria").addEventListener("click", function() {
        fetch('assets/data/historia.json')
            .then(response => response.json())
            .then(data => {
                const cubismo = data.find(item => item.vanguardia === 'cubismo');
                openModal(cubismo.vanguardia, cubismo.historia);
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    });

    document.getElementById("impresionismoBtnHistoria").addEventListener("click", function() {
        fetch('assets/data/historia.json')
            .then(response => response.json())
            .then(data => {
                const impresionismo = data.find(item => item.vanguardia === 'impresionismo');
                openModal(impresionismo.vanguardia, impresionismo.historia);
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    });
});
