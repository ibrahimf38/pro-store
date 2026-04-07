(function () {
    const carousel = document.getElementById('heroCarousel');
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoScrollInterval;

    if (!carousel || slideCount === 0) return;

    carousel.style.scrollBehavior = 'smooth';

    function goToSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }

        // Correction : scroll uniquement dans le carrousel, pas dans toute la page
        const targetSlide = slides[currentIndex];
        const scrollAmount = targetSlide.offsetLeft - carousel.offsetLeft;

        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function startAutoPlay() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(nextSlide, 1000); // Changé à 3 secondes
    }

    function stopAutoPlay() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    let scrollTimeout;
    carousel.addEventListener('scroll', function () {
        stopAutoPlay();

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let closestIndex = 0;
            let minDistance = Infinity;

            slides.forEach((slide, idx) => {
                const rect = slide.getBoundingClientRect();
                const carouselRect = carousel.getBoundingClientRect();
                const distance = Math.abs(rect.left - carouselRect.left);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = idx;
                }
            });

            currentIndex = closestIndex;
            startAutoPlay();
        }, 150);
    });

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();

    console.log('Carrousel démarré - défilement corrigé');
})();