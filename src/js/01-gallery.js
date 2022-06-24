import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const gallaryItems = galleryItems.map(
  ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
    />
  </a>`
);
galleryEl.insertAdjacentHTML('afterbegin', gallaryItems.join(''));
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
