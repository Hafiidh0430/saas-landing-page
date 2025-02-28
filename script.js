window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".testimonials-swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // Small screens (mobile): 1 slide
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      // Medium screens (tablet): 2 slides
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Large screens (desktop): 3 slides
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
});
