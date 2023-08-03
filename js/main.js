 $(document).ready(function() {
  $('a').on('click', function(event) {
    event.preventDefault();
    const targetId = $(this).attr('href'); 
    const $targetElement = $(targetId);
    if ($targetElement.length) {
      const headerOffset = 100; 
      const elementPosition = $targetElement.offset().top;
      const offsetPosition = elementPosition - headerOffset;
      $('html, body').animate({
        scrollTop: offsetPosition 
      }, 1000); 
    }
  });
});
  // Обработчик события "click" для элемента с классом "burger" (выпадающее меню)
  $(".burger").click(function() {
    $(".header_intro_inner").toggleClass("open");
    $(".burger").toggleClass("active");
    $("body").toggleClass("hold");
  });

  // Обработчик события "click" для элементов с классом "logo" внутри хедера
  $(".header_intro_inner a").click(function() {
    $(".header_intro_inner").removeClass("open");
    $(".burger").removeClass("active");
    $("body").removeClass("hold");
  });

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
