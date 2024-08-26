let slideIndex = 0;
showSlides(slideIndex);

// Función para avanzar o retroceder entre las diapositivas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar la diapositiva actual
function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    
    // Si el índice es mayor que la cantidad de diapositivas, vuelve a la primera
    if (n >= slides.length) {
        slideIndex = 0;
    }
    
    // Si el índice es menor que 0, muestra la última diapositiva
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Oculta todas las diapositivas
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    
    // Muestra la diapositiva actual
    slides[slideIndex].style.display = "block";
}
