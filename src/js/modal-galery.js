// modal-catalog.js
import branchletcard from '../img/branchletcard.webp';

import earringscard from '../img/earringscard.webp';
import earrings1 from '../img/earrings1.webp';
import earrings2 from '../img/earrings2.webp';
import earrings3 from '../img/earrings3.webp';
import earrings4 from '../img/earrings4.webp';
import earrings5 from '../img/earrings5.webp';
import earrings6 from '../img/earrings6.webp';
import earrings7 from '../img/earrings7.webp';
import earrings8 from '../img/earrings8.webp';
import earrings9 from '../img/earrings9.webp';
import earrings10 from '../img/earrings10.webp';

import hoopscard from '../img/hoopscard.webp';
import hoops1 from '../img/hoops1.webp';
import hoops2 from '../img/hoops2.webp';
import hoops3 from '../img/hoops3.webp';
import hoops4 from '../img/hoops4.webp';
import hoops5 from '../img/hoops5.webp';
import hoops6 from '../img/hoops6.webp';
import hoops7 from '../img/hoops7.webp';
import hoops8 from '../img/hoops8.webp';

import necklacescard from '../img/necklacescard.webp';
import necklaces1 from '../img/necklaces1.webp';
import necklaces2 from '../img/necklaces2.webp';
import necklaces3 from '../img/necklaces3.webp';
import necklaces4 from '../img/necklaces4.webp';
import necklaces5 from '../img/necklaces5.webp';
import necklaces6 from '../img/necklaces6.webp';
import necklaces7 from '../img/necklaces7.webp';
import necklaces8 from '../img/necklaces8.webp';
import necklaces9 from '../img/necklaces9.webp';
import necklaces10 from '../img/necklaces10.webp';
import necklaces11 from '../img/necklaces11.webp';
import necklaces12 from '../img/necklaces12.webp';
import necklaces13 from '../img/necklaces13.webp';
import necklaces14 from '../img/necklaces14.webp';
import necklaces15 from '../img/necklaces15.webp';
import necklaces17 from '../img/necklaces17.webp';
import necklaces16 from '../img/necklaces16.webp';

import combscard from '../img/combscard.webp';

import pinscard from '../img/pinscard.webp';
import pins1 from '../img/pins1.webp';
import pins2 from '../img/pins2.webp';
import pins3 from '../img/pins3.webp';
import pins4 from '../img/pins4.webp';
import pins5 from '../img/pins5.webp';
import pins6 from '../img/pins6.webp';
import pins7 from '../img/pins7.webp';

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
      earrings1,
      earrings2,
      earrings3,
      earrings4,
      earrings5,
      earrings6,
      earrings7,
      earrings8,
      earrings9,
      earrings10,
      earringscard,
    ],
  },
  hoops: {
    title: 'Обручі',
    price: 'Price',
    images: [
      hoopscard,
      hoops1,
      hoops2,
      hoops3,
      hoops4,
      hoops5,
      hoops6,
      hoops7,
      hoops8,
    ],
  },
  necklaces: {
    title: 'Намиста',
    price: 'Price',
    images: [
      necklacescard,
      necklaces1,
      necklaces2,
      necklaces3,
      necklaces4,
      necklaces5,
      necklaces6,
      necklaces7,
      necklaces8,
      necklaces9,
      necklaces10,
      necklaces11,
      necklaces12,
      necklaces13,
      necklaces14,
      necklaces15,
      necklaces16,
      necklaces17,
    ],
  },
  combs: {
    title: 'Гребінці',
    price: 'Price',
    images: [combscard],
  },
  pins: {
    title: 'Шпильки',
    price: 'Price',
    images: [pinscard, pins1, pins2, pins3, pins4, pins5, pins6, pins7],
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
