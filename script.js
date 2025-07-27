// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('show');
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Sticky navigation background
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(7, 10, 15, 0.95)';
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.backgroundColor = 'var(--dark-header)';
        nav.style.boxShadow = 'none';
    }
});

// Initialize scroll position
window.addEventListener('load', function() {
    if (window.scrollY > 100) {
        document.querySelector('nav').style.backgroundColor = 'rgba(7, 10, 15, 0.95)';
        document.querySelector('nav').style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    }
});