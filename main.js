// Adicione este script no final do seu documento HTML
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões indicadores do carousel
  const carouselButtons = document.querySelectorAll(
    ".flex.w-full.justify-center.gap-2.py-2 a"
  );

  // Adiciona um event listener para cada botão
  carouselButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Previne o comportamento padrão (rolagem da página)
      e.preventDefault();

      // Obtém o id do slide alvo a partir do atributo href
      const targetId = this.getAttribute("href");

      // Encontra o elemento alvo
      const targetElement = document.querySelector(targetId);

      // Se o elemento existir, mostra ele no carousel sem rolar a página
      if (targetElement) {
        // Você pode usar qualquer lógica adicional específica do carousel aqui, se necessário

        // Exemplo: se o carousel tiver uma classe ou atributo para o slide ativo
        document.querySelectorAll(".carousel-item").forEach((item) => {
          item.classList.remove("active"); // Remove classes ativas, se existirem
        });

        targetElement.classList.add("active"); // Adiciona classe ativa ao alvo

        // Alternativa: usando scrollIntoView com comportamento suave, mas configurado para não rolar a página
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    });
  });
});
