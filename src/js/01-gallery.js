import { galleryItems } from './gallery-items.js';


console.log(galleryItems);



const galleyGrid = document.querySelector(".gallery");
const galleryMarkup = createImageGrid(galleryItems)

galleyGrid.addEventListener("click", imageClickOpen);

function imageClickOpen(evt){
    evt.preventDefault()
    if (evt.target === evt.currentTarget) {
        return
    }

    const originalImg = evt.target.dataset.source;
    const openedImage = basicLightbox.create(`
      <img src="${originalImg}">
  `)
 openedImage.show();

 document.addEventListener("keydown", imageClickClose);
 
 function imageClickClose(evt){
    evt.preventDefault()
    if (evt.key === "Escape") {
        openedImage.close()
    }
 }

}

function createImageGrid(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}" onclick="return false">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`

    }).join("")

}
galleyGrid.insertAdjacentHTML("beforeend", galleryMarkup)