document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel elements
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let slideInterval;

    // Function to change the active slide
    function goToSlide(index) {
        // Handle looping around the ends
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Remove the 'active' class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add the 'active' class to the current slide and dot
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // Functions for next and previous
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Event Listeners for the buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval(); // Reset the timer when user interacts manually
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Event Listeners for the dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
    });

    // Auto-cycle functionality
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Cycles every 5 seconds (5000ms)
    }

    // Resets the timer so it doesn't instantly cycle right after a user clicks
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Start the automatic cycle when the page loads
    startInterval();
});