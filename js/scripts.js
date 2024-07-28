document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });

    // Funcionalidad del carrusel
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

// JavaScript para el modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.video-item iframe').forEach(function (video) {
        video.addEventListener('click', function (event) {
            event.preventDefault();
            videoFrame.src = video.src;
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        videoFrame.src = '';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            videoFrame.src = '';
        }
    });
});

// JavaScript para la validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formResponse.textContent = 'Mensaje enviado exitosamente!';
            formResponse.style.color = 'green';
        } else {
            formResponse.textContent = 'Por favor, complete todos los campos.';
            formResponse.style.color = 'red';
        }
    });
});

