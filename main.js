document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for carousel indicators without page jump
  const carouselButtons = document.querySelectorAll('a[href^="#item"]');

  carouselButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    });
  });

  // Automatic Gallery Transition
  const gallery = document.getElementById('gallery-carousel');
  if (gallery) {
    let isAutoScrolling = true;

    // Pausa a rolagem ao passar o mouse para melhor UX
    gallery.addEventListener('mouseenter', () => { isAutoScrolling = false; });
    gallery.addEventListener('mouseleave', () => { isAutoScrolling = true; });

    // Otimização: Pausa o intervalo se a galeria não estiver visível na tela
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isAutoScrolling = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    observer.observe(gallery);

    const autoScroll = () => {
      if (!isAutoScrolling) return;
      
      const items = gallery.querySelectorAll('.carousel-item');
      if (items.length === 0) return;

      const itemWidth = items[0].offsetWidth;
      const isAtEnd = gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth - 10;

      if (isAtEnd) {
        gallery.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        gallery.scrollTo({ left: gallery.scrollLeft + itemWidth, behavior: 'smooth' });
      }
    };

    setInterval(autoScroll, 2000);
  }
});
