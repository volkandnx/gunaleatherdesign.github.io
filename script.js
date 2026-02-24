document.addEventListener('DOMContentLoaded', () => {
    // Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '1rem 0';
        } else {
            header.style.background = 'rgba(18, 18, 18, 0.8)';
            header.style.padding = '1.5rem 0';
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.category-card, .product-card, .section-title, .legacy-content');
    scrollElements.forEach(el => {
        el.style.opacity = '0'; // Initial state for JS-based fade in
        observer.observe(el);
    });
});
