// modal-catalog.js
import branchletcard from '../img/branchletcard.webp';
// Отримуємо елементи DOM
const catalogList = document.querySelector('.list-catalog');
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalClose = document.getElementById('modal-close');

// Об'єкт з даними про продукти
const productData = {
  branchlet: {
    title: 'Гілочки',
    price: 'Price',
    images: [branchletcard],
  },
  earrings: {
    title: 'Сережки',
    price: 'Price',
    images: [
      'earrings1.webp',
      'earrings2.webp',
      'earrings3.webp',
      'earrings4.webp',
      'earrings5.webp',
      'earrings6.webp',
      'earrings7.webp',
      'earrings8.webp',
      'earrings9.webp',
      'earrings10.webp',
      'earringscard.webp',
    ],
  },
  hoops: {
    title: 'Обручі',
    price: 'Price',
    images: [
      'hoopscard.webp',
      'hoops1.webp',
      'hoops2.webp',
      'hoops3.webp',
      'hoops4.webp',
      'hoops5.webp',
      'hoops6.webp',
      'hoops7.webp',
      'hoops8.webp',
    ],
  },
  necklaces: {
    title: 'Намиста',
    price: 'Price',
    images: [
      'necklacescard.webp',
      'necklaces1.webp',
      'necklaces2.webp',
      'necklaces3.webp',
      'necklaces4.webp',
      'necklaces5.webp',
      'necklaces6.webp',
      'necklaces7.webp',
      'necklaces8.webp',
      'necklaces9.webp',
      'necklaces10.webp',
      'necklaces12.webp',
      'necklaces13.webp',
      'necklaces14.webp',
      'necklaces15.webp',
      'necklaces16.webp',
      'necklaces17.webp',
    ],
  },
  combs: {
    title: 'Гребінці',
    price: 'Price',
    images: ['combscard.webp'],
  },
  pins: {
    title: 'Шпильки',
    price: 'Price',
    images: [
      'pinscard.webp',
      'pins1.webp',
      'pins2.webp',
      'pins3.webp',
      'pins4.webp',
      'pins5.webp',
      'pins6.webp',
      'pins7.webp',
    ],
  },
};

// Слухаємо клік на контейнері каталогу (делегування подій)
catalogList.addEventListener('click', event => {
  const item = event.target.closest('.item-catalog');
  if (!item) return;

  const type = item.dataset.type;
  const product = productData[type];

  if (!product) return;

  modalTitle.textContent = product.title;
  modalGallery.innerHTML = product.images
    .map(
      img => `
      <li class="modal-item">
        <img src="${img}" alt="${product.title}" class="modal-img"/>
        <p class="modal-price">${product.price}</p>
      </li>
    `
    )
    .join('');

  modal.classList.add('open');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});
