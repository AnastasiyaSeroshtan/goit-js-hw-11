const formEl = document.querySelector('.search-form');
const inputSearch = document.querySelector('input[name="searchQuery"]');
const divGalleryEl = document.querySelector('.gallery');
const btnSubmit = document.querySelector('.submit');
const btnLoadMore = document.querySelector('.load-more');



const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29230862-8ed88c62e82238b6e063c75d0'

let searchQuery = '';
let currentPage = 1;

// btnLoadMore.setAttribute("disabled", "disabled");



function fetchGallery (searchQuery) {
    
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`).then(response => response.json());
};

formEl.addEventListener('submit', onSearchSubmit);
btnLoadMore.addEventListener('click', onLoadMoreImg);

function onSearchSubmit(e) {
    e.preventDefault();
    divGalleryEl.innerHTML = "";

    searchQuery = inputSearch.value;


    currentPage = 1;
    fetchGallery(searchQuery).then(data => {
        
        console.log(data);
        addMarkup(data.hits);
        currentPage +=1;
        // btnLoadMore.classList.remove('.is-hidden');
    })
    .catch(error => (console.log(error)));


};

function onLoadMoreImg(e){
    e.preventDefault();
    fetchGallery(searchQuery).then(data => {
        
        console.log(data);
        addMarkup(data.hits);
        currentPage +=1;
      
    })
    .catch(error => (console.log(error)));
};




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


function addMarkup (array) {
    const result = createGallery(array);
    divGalleryEl.insertAdjacentHTML('beforeend', result);

};

