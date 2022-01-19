import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
//console.log(galleryContainer);

const galleryImageMarkup = createGalleryItems();
//console.log(galleryImageMarkup);

//add string createGalleryItems in div.gallery
galleryContainer.insertAdjacentHTML('beforeend', galleryImageMarkup);

galleryContainer.addEventListener('click', clickOnGalleryImage);

//Create image cards
function createGalleryItems() {
    return galleryItems.map(({ preview, original, description}) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
    }).join("");
}

let instance;

function clickOnGalleryImage(event) {

    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return
    }

    // add class data-source in modal version
    const modalImageSrc = event.target.dataset.source;  

    instance = basicLightbox.create(`<img src="${modalImageSrc}">`);
    instance.show(() => galleryContainer.addEventListener("keydown", closeClickButtonImage));
}


// Close modal image Escape button
function closeClickButtonImage(event) {
    if(event.code === "Escape" || event.code === "Esc"){
        instance.close(() => {
            removeEventListenerContainer();
        });
    }
}

// Removes the event listener from the item
function removeEventListenerContainer () {
    galleryContainer.removeEventListener("keydown", closeClickButtonImage)
}

