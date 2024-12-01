const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const mobMenu = document.querySelector('.mob-menu');

modalBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
});

document.addEventListener('click', (event) => {
    if (!mobMenu.contains(event.target) && !modalBtn.contains(event.target)) {
        mobMenu.classList.remove('is-open');
    }
});