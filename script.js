let currentIndex = 0;// Define una variable para llevar el control del índice de la diapositiva actual que se está mostrando.

//Función que se llama cuando se hace clic en los botones de navegación para cambiar la diapositiva.
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    //Selecciona todas las diapositivas.
    slides[currentIndex].style.display = 'none';

    // Update current index
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Show new slide
    slides[currentIndex].style.display = 'block';
}

// Initialize slider by showing the first image
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });
});
	
