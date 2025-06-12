// JavaScript para futuras interações - inicialização
console.log('Merlin&Morgana - Crônicas Cósmicas carregado.');

// Função para criar um efeito de rolagem suave ao clicar em links de navegação
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Função para destacar uma coluna ao passar o mouse
function highlightColumnOnHover() {
  const columns = document.querySelectorAll('.column');
  columns.forEach(column => {
    column.addEventListener('mouseover', () => {
      column.style.transform = 'translateY(-5px)';
      column.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    column.addEventListener('mouseout', () => {
      column.style.transform = 'translateY(0)';
      column.style.boxShadow = '0 3px 18px rgba(11, 26, 63, 0.10), 0 1.5px 7px rgba(50,50,90,0.05)';
    });
  });
}

// Função para adicionar lazy loading em todas as imagens
function enableLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(image => {
    image.addEventListener('load', () => {
      image.classList.add('loaded');
    });
  });
}

// Inicialização das funções após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript inicializado.');
  smoothScroll();
  highlightColumnOnHover();
  enableLazyLoading();
});
