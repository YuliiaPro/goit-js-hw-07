import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const listEl = document.querySelector(".gallery");

const galleryList = (arr, container) => {
    const galleryMarkup = arr.
    map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`
    )
    .join("");
    container.insertAdjacentHTML("beforeend", galleryMarkup);
 };

const handleImgClick = (event) => {
    event.preventDefault();
    if (event.currentTarget === event.target) {
    return;
    }
    const modalInstance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.getAttribute("data-source")}" width="1280">
    </div>
`);
    modalInstance.show();
    
    const onTargetEscapeKeydown = (event) => {
        if (event.key === 'Escape') {
            modalInstance.close();
            document.removeEventListener('keydown', onTargetEscapeKeydown);
        };
    };
      document.addEventListener('keydown', onTargetEscapeKeydown);
    
};    

galleryList(galleryItems, listEl);

listEl.addEventListener("click", handleImgClick);
