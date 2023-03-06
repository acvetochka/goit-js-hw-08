import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`;
    })
    .join('');
}

//add items of img to HTML
const gallery = document.querySelector('.gallery');
const items = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML('beforeend', items);

const lightbox = new SimpleLightbox('.gallery a', {
  // captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
