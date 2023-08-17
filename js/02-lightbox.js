import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const galleryList = (arr, container) => {
    const galleryMarkup = arr.
    map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" title="${description}" src="${preview}" alt="${description}" />
    </a>
    </li>`
    ) 
    .join("");
    container.insertAdjacentHTML("beforeend", galleryMarkup);
 };

galleryList(galleryItems, listEl);

new SimpleLightbox(".gallery a", {captionDelay: 250, captionPosition:"button"});
