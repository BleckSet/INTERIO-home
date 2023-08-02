

$(document).ready(function() {
  $(".accordion-button").on("click", function() {
    var clickedAccordion = $(this);
    if (!clickedAccordion.hasClass('active')) {
      $(".accordion-button").removeClass('active');
      $(".accordion-content").slideUp();
    }
    clickedAccordion.toggleClass('active');
    var content = clickedAccordion.siblings(".accordion-content");
    content.slideToggle();
  });
});



gsap.registerPlugin(ScrollTrigger);

const fadeElements = document.querySelectorAll('.appearance');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5 // Порог пересечения 0.5 означает, что элемент считается видимым, если видно 50% его области
});

fadeElements.forEach((fadeElement) => {
  observer.observe(fadeElement);
});
