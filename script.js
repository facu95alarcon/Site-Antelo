document.addEventListener('DOMContentLoaded', function() {
    // Inicializa el contador
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitorCount').textContent = visitorCount;
});