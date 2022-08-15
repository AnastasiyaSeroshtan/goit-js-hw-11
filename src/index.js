import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import addMarkup from './js/addMarkup';
import ApiData from './js/fetchGallery';
// import NewApiData from './js/newApiData';

const formEl = document.querySelector('.search-form');
const inputSearch = document.querySelector('input[name="searchQuery"]');
const divGalleryEl = document.querySelector('.gallery');
const btnSubmit = document.querySelector('.submit');
const btnLoadMore = document.querySelector('.load-more');
const apiData = new ApiData();

formEl.addEventListener('submit', onSearchSubmit);
btnLoadMore.addEventListener('click', onLoadMoreImg);
btnLoadMore.classList.add('is-hidden');

function onSearchSubmit(e) {
    e.preventDefault();
    btnLoadMore.classList.add('is-hidden');
    divGalleryEl.innerHTML = "";
    apiData.resetPage();
    apiData.searchQuery = inputSearch.value;

    apiData.fetchGallery().then(data => {
      if (data.hits.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return;
      }
        Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
        addMarkup(data.hits);
        const lightbox = new SimpleLightbox('.gallery a');
        apiData.incrementCurrentPage();
        btnLoadMore.classList.remove('is-hidden');
    })
    .catch(error => (console.log(error)));
};

function onLoadMoreImg(e){
    e.preventDefault();
    apiData.fetchGallery().then(data => {
      addMarkup(data.hits);
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
      apiData.incrementCurrentPage();

      if (apiData.currentPage > Math.ceil(data.totalHits/apiData.perPage) ) {
          btnLoadMore.classList.add('is-hidden');
          Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
        }
    })
    .catch(error => (console.log(error)));
};


