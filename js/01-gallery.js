import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join();

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const isImage = e.target.classList.contains("gallery__image");
  if (!isImage) return;
  const imageUrl = e.target.dataset.source;
  const istance = basicLightbox.create(
    `<img src="${imageUrl}" width="800" height="600">`
  );
  istance.show();
});

console.log(galleryItems);
