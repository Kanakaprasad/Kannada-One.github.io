// Update date and time dynamically
function updateDateTime() {
    const now = new Date();
    
    // Format date as DD-MM-YYYY
    const date = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${date}-${month}-${year}`;
    
    // Format time as HH:MM AM/PM
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    
    // Update elements
    document.getElementById('current-date').textContent = formattedDate;
    document.getElementById('current-time').textContent = formattedTime;
}

// Initialize and update every minute
updateDateTime();
setInterval(updateDateTime, 60000);

// Add hover effects to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.08)';
    });
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real implementation, you would redirect to search results
            // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
    }
});

// Add active state to navigation
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-menu li a').forEach(a => {
            a.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
    });
});
