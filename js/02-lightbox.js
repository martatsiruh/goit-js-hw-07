import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListContainer = document.querySelector('.gallery');
//console.log(galleryListContainer);

const galleryItemsMarkup = createElementGallery(galleryItems);
//console.log(galleryItemsMarkup);

//add string createGalleryItems in div.gallery
galleryListContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// Create image cards
function createElementGallery() {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    }).join("");
}

let gallery = new SimpleLightbox('.gallery__item', {
    captionsData : "alt",
    captionDelay : 250,
});

galleryListContainer.addEventListener('click', clickOnGalleryImage);

function clickOnGalleryImage(event) {
    //скасування діі браузера
    event.preventDefault();

    if(!event.target.classList.contains("gallery__image")){
        return;
    }
    gallery.on('show.simplelightbox');
}
