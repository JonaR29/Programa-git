const slides = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);

// Cambiar a la siguiente imagen cada 3 segundos en bucle
setInterval(nextSlide, 3000);
