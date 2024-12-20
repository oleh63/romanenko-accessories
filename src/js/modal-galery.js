const catalogList = document.querySelector('.list-catalog');
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalClose = document.getElementById('modal-close');
const basePath = import.meta.env.BASE_URL;

const productData = {
  branchlet: {
    title: 'Гілочки',
    images: ['branchlet-card.webp'],
  },
  earrings: {
    title: 'Сережки',
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
    images: ['combs-card.webp'],
  },
  pins: {
    title: 'Шпильки',
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

catalogList.addEventListener('click', event => {
  const catalogItem = event.target.closest('.item-catalog');
  if (!catalogItem) {
    return;
  }

  const productType = catalogItem.dataset.type;
  const product = productData[productType];

  if (product) {
    modalTitle.textContent = product.title;

    // Очищуємо галерею перед додаванням нових елементів
    modalGallery.innerHTML = '';

    product.images.forEach(image => {
      // Створюємо елементи
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = `${basePath}/img/${productType}/${image}`;
      img.alt = product.title;

      const price = document.createElement('h3');
      price.textContent = 'Price'; // Тут можна вставити реальну ціну, якщо є

      // Додаємо зображення та ціну до елементу <li>
      li.appendChild(img);
      li.appendChild(price);

      // Додаємо <li> до галереї
      modalGallery.appendChild(li);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
