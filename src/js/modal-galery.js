// modal-catalog.js

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
    images: ['branchlet-card.webp'],
  },
  earrings: {
    title: 'Сережки',
    price: 'Price',
    images: [
      'earrings-1.webp',
      'earrings-2.webp',
      'earrings-3.webp',
      'earrings-4.webp',
      'earrings-5.webp',
      'earrings-6.webp',
      'earrings-7.webp',
      'earrings-8.webp',
      'earrings-9.webp',
      'earrings-10.webp',
      'earrings-card.webp',
    ],
  },
  hoops: {
    title: 'Обручі',
    price: 'Price',
    images: [
      'hoops-card.webp',
      'hoops-1.webp',
      'hoops-2.webp',
      'hoops-3.webp',
      'hoops-4.webp',
      'hoops-5.webp',
      'hoops-6.webp',
      'hoops-7.webp',
      'hoops-8.webp',
    ],
  },
  necklaces: {
    title: 'Намиста',
    price: 'Price',
    images: [
      'necklaces-card.webp',
      'necklaces-1.webp',
      'necklaces-2.webp',
      'necklaces-3.webp',
      'necklaces-4.webp',
      'necklaces-5.webp',
      'necklaces-6.webp',
      'necklaces-7.webp',
      'necklaces-8.webp',
      'necklaces-9.webp',
      'necklaces-10.webp',
      'necklaces-12.webp',
      'necklaces-13.webp',
      'necklaces-14.webp',
      'necklaces-15.webp',
      'necklaces-16.webp',
      'necklaces-17.webp',
    ],
  },
  combs: {
    title: 'Гребінці',
    price: 'Price',
    images: ['combs-card.webp'],
  },
  pins: {
    title: 'Шпильки',
    price: 'Price',
    images: [
      'pins-card.webp',
      'pins-1.webp',
      'pins-2.webp',
      'pins-3.webp',
      'pins-4.webp',
      'pins-5.webp',
      'pins-6.webp',
      'pins-7.webp',
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
        <img src="/img/${img}" alt="${product.title}" class="modal-img"/>
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
