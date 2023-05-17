// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href= "${original}">
   <img class="gallery__image" src ="${preview}" alt ="${description}" />
</a>
</li>`).join('');


galleryEl.insertAdjacentHTML('beforeend', markupGallery);

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
