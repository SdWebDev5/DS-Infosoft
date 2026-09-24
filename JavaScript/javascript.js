document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".banner-slider .slide");
  let currentSlide = 0;
  const slideInterval = 4000; // Time per slide in milliseconds (4 seconds)

  function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove("active");
    
    // Move to the next slide index, looping back to 0 at the end
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to the new slide
    slides[currentSlide].classList.add("active");
  }

  // Only start the interval if there are slides present
  if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
  }
});
