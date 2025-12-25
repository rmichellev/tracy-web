document.getElementById("year").textContent = new Date().getFullYear();

const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function updateCarousel() {
    const offset = -currentSlide * 100;
    track.style.transform = 'translateX(' + offset + '%)';
}

function showNext() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function showPrev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

setInterval(showNext, 6000);

// ===== BARRA PROMOCIONAL DESPUÉS DE 5 SEGUNDOS =====
const promoBar = document.getElementById('promoBar');
const promoClose = document.getElementById('promoClose');

if (promoBar) {
    // Mostrar a los 5 segundos
    setTimeout(() => {
        promoBar.classList.add('promo-bar-visible');
    }, 5000);

    // Cerrar al hacer clic en la X
    if (promoClose) {
        promoClose.addEventListener('click', () => {
            promoBar.classList.remove('promo-bar-visible');
        });
    }

    // (Opcional) ocultar cuando envían el formulario
    const promoForm = promoBar.querySelector('form');
    if (promoForm) {
        promoForm.addEventListener('submit', () => {
            // aquí en el futuro puedes conectar con backend / servicio de email
            promoBar.classList.remove('promo-bar-visible');
        });
    }
}
