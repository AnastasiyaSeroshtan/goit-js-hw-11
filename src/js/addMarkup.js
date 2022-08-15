const divGalleryEl = document.querySelector('.gallery');

function createGalleryItem (item) {
    return `<div class="photo-card">
    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        <span>${item.likes}</span>
      </p>
      <p class="info-item">
        <b>Views</b>
        <span>${item.views}</span>
      </p>
      <p class="info-item">
        <b>Comments</b>
        <span>${item.comments}</span>
      </p>
      <p class="info-item">
        <b>Downloads</b>
        <span>${item.downloads}</span>
      </p>
    </div>
  </div>`
};

function createGallery (array) {
    return array.reduce((acc, item) => acc + createGalleryItem(item), "")
};


export default function addMarkup (array) {
    const result = createGallery(array);
    divGalleryEl.insertAdjacentHTML('beforeend', result);

};