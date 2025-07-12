// Update date and time dynamically
function updateDateTime() {
    const now = new Date();
    document.getElementById('date').textContent = now.toLocaleDateString();
    document.getElementById('time').textContent = now.toLocaleTimeString();
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial call
updateDateTime();
