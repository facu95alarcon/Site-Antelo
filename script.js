document.addEventListener('DOMContentLoaded', function() {
    fetch('counter.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('visitorCount').textContent = data;
        })
        .catch(error => console.error('Error al obtener el contador de visitas:', error));
});