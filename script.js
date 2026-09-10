
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const icon = menuToggle.querySelector('i');

    // --- 1. Mobile Menu Toggle ---
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('mobile-open');
        
        // Swap out the FontAwesome icon between bars and an 'X'
        if (navbar.classList.contains('mobile-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // --- 2. Smart Scroll (Auto-hide Navbar) ---
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        // Prevent auto-hiding if the user has the mobile menu open
        if (navbar.classList.contains('mobile-open')) return;

        // Hide if scrolling down past 100px, show if scrolling back up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollY = window.scrollY;
    });

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    let slideInterval;

    const showSlide = (index) => {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add to current
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    };

    // Auto-cycle logic
    const startAutoCycle = () => {
        slideInterval = setInterval(nextSlide, 5000); // 5 seconds per slide
    };

    const stopAutoCycle = () => {
        clearInterval(slideInterval);
    };

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        stopAutoCycle();
        nextSlide();
        startAutoCycle();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoCycle();
        prevSlide();
        startAutoCycle();
    });

    // Dot navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAutoCycle();
            currentIndex = i;
            showSlide(currentIndex);
            startAutoCycle();
        });
    });

    // Initialize
    startAutoCycle();
    
});