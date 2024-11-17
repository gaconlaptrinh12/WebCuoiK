// Countdown Timer for Flash Sale
function startCountdown() {
  const countdownDate = new Date("May 1, 2024 23:59:59").getTime();
  const countdownElements = {
    days: document.querySelector(
      ".countdown .countdown-item:nth-child(1) .countdown-number"
    ),
    hours: document.querySelector(
      ".countdown .countdown-item:nth-child(2) .countdown-number"
    ),
    minutes: document.querySelector(
      ".countdown .countdown-item:nth-child(3) .countdown-number"
    ),
    seconds: document.querySelector(
      ".countdown .countdown-item:nth-child(4) .countdown-number"
    ),
  };

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerHTML = "Hết thời gian!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElements.days.textContent = days;
    countdownElements.hours.textContent = hours;
    countdownElements.minutes.textContent = minutes;
    countdownElements.seconds.textContent = seconds;
  }

  const timer = setInterval(updateCountdown, 1000);
}

// Testimonial Slider
function startTestimonialSlider() {
  let currentIndex = 0;
  const testimonials = document.querySelectorAll(
    ".testimonial-slider .testimonial-item"
  );
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
    });
  }

  document.querySelector(".control-right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  });

  document.querySelector(".control-left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
  });

  showTestimonial(currentIndex); // Show the first testimonial initially
}

// Initialize functions on window load
window.onload = function () {
  startCountdown();
  startTestimonialSlider();
};
