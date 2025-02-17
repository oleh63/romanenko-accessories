document.addEventListener('DOMContentLoaded', () => {
  const mobMenu = document.querySelector('.mob-menu');
  const btnCatalog = document.querySelector('.btn-link-catalog');

  btnCatalog.addEventListener('click', event => {
    event.preventDefault();
    // Прокручуємо до секції з id "catalog"
    const targetSection = document.querySelector('#catalog');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Закриваємо мобільне меню, видаляючи клас "is-open"
    mobMenu.classList.remove('is-open');
  });
});
