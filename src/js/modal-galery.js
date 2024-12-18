const catalogList = document.querySelector('.list-catalog');
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalGallery = document.getElementById('modal-gallery');
const modalClose = document.getElementById('modal-close');

const productData = {
  branchlet: {
    title: 'Гілочки',
    images: ['branchlet-card.webp'],
  },
  earrings: {
    title: 'Сережки',
    images: [
      'earrings-card.webp',
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
    ],
  },
  hoops: {
    title: 'Обручі',
    images: ['hoops-card.webp'],
  },
  necklaces: {
    title: 'Намиста',
    images: ['necklaces-card.webp'],
  },
  combs: {
    title: 'Гребінці',
    images: ['combs-card.webp'],
  },
  pins: {
    title: 'Шпильки',
    images: ['pins-card.webp'],
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

    const imagesMarkup = product.images
      .map(
        image =>
          `<li><img src="../img/${productType}/${image}" alt="${product.title}" /></li>`
      )
      .join('');

    modalGallery.innerHTML = imagesMarkup;

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
