export function setupModal(productData) {
  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalGallery = document.getElementById('modal-gallery');
  const modalClose = document.getElementById('modal-close');

  document.querySelector('.list-catalog').addEventListener('click', event => {
    const item = event.target.closest('.item-catalog');
    if (!item) return;

    const type = item.dataset.type;
    const product = productData[type];

    if (!product) return;

    modalTitle.textContent = product.title;
    modalGallery.innerHTML = product.images
      .map(
        img =>
          `<li class="modal-item"><img src="${img}" alt="${product.title}" class="modal-img"/><p class="modal-price">${product.price}</p></li>`
      )
      .join('');

    modal.classList.add('open');
  });

  modalClose.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });
}
