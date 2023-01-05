import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(SimpleLightbox);

const galleyGrid = document.querySelector('.gallery');
const galleryMarkup = createImageGrid(galleryItems);

function createImageGrid(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
          <img 
          class="gallery__image"   
          src="${preview}"
          alt="${description}"
              </a>`
    }).join('');
}

galleyGrid.insertAdjacentHTML('beforeend', galleryMarkup);

var galleryImg = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});