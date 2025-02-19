document.addEventListener('DOMContentLoaded', () => {
  const mobMenu = document.querySelector('.mob-menu');
  const btnCatalog = document.querySelector('.btn-link-menu');

  if (!btnCatalog) {
    console.error('Кнопка .btn-link-menu не знайдена!');
    return;
  }

  btnCatalog.addEventListener('click', event => {
    event.preventDefault();

    const targetSection = document.querySelector('#catalog');

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Секція #catalog не знайдена!');
    }

    if (mobMenu) {
      mobMenu.classList.remove('is-open');
    }
  });
});
