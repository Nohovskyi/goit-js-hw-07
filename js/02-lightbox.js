import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardMarkup = createImageCard(galleryItems);

function createImageCard(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", cardMarkup);
gallery.addEventListener("click", onLinkContainerClick);

function onLinkContainerClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightbox;
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionType: "attr",
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});
