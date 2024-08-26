document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    const prevButton = document.querySelector('button.prev');
    const nextButton = document.querySelector('button.next');

    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slider.clientWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Opcional: Auto-slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); // Cambia de slide cada 3 segundos
});
