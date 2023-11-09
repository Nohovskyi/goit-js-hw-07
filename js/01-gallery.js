import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const cardMarkup = createImageCard(galleryItems);

function createImageCard(galleryItems) {
  return galleryItems
    .map((item) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
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

  console.log(event.target.dataset.source);
  // openModal(event);

    
    // if (basicLightbox.onshown) {
    //     document.addEventListener("keydown", event => {
    //         if (event.code === "Escape") {
    //          return basicLightbox.close();
    //         }
    //     });
    // };
}

// function openModal(event) {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="${event.target.dataset.source}">
// 	`
//     )
//     .show();
// }

document.querySelector(".gallery").onclick = (event) => {
  const img = `
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`;

  const instance = basicLightbox.create(img, {
    onShow: (instance) => console.log("onShow", instance),
    onClose: (instance) => console.log("onClose", instance),
  });

  instance.show((instance) => console.log("finished show()", instance));

  setTimeout(() => {
    instance.close((instance) => console.log("finished close()", instance));
  }, 3000);
};