import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {addMarkup} from './js/addMarkup';
import ApiData from './js/fetchGallery';


const formEl = document.querySelector('.search-form');
const inputSearch = document.querySelector('input[name="searchQuery"]');
const divGalleryEl = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
const apiData = new ApiData();

formEl.addEventListener('submit', onSearchSubmit);
btnLoadMore.addEventListener('click', onLoadMoreImg);
btnLoadMore.classList.add('is-hidden');
const lightbox = new SimpleLightbox('.gallery a');

function onSearchSubmit(e) {
    e.preventDefault();
    btnLoadMore.classList.add('is-hidden');
    divGalleryEl.innerHTML = "";
    apiData.resetPage();
    apiData.searchQuery = inputSearch.value;

    apiData.fetchGallery().then(data => {
      if (data.data.hits.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return;
      }
      if (data.data.hits.length < apiData.perPage) {
        Notiflix.Notify.info(`Hooray! We found ${data.data.totalHits} images.`);
        addMarkupAndPage(data);
        btnLoadMore.classList.add('is-hidden');
        return
      }
        Notiflix.Notify.info(`Hooray! We found ${data.data.totalHits} images.`);
        addMarkupAndPage(data);
        btnLoadMore.classList.remove('is-hidden');
    })
    .catch(error => (console.log(error)));
};

function onLoadMoreImg(e){
    e.preventDefault();
    apiData.fetchGallery().then(data => {
      const imgRest = data.data.totalHits - apiData.currentPage*apiData.perPage;
      addMarkupAndPage(data);
      const { height: cardHeight } = divGalleryEl.firstElementChild.getBoundingClientRect();
      window.scrollBy({
      top: cardHeight * 2,
      behavior: "smooth",
});
      
      if (imgRest <= 0) {
        btnLoadMore.classList.add('is-hidden');
        return  Notiflix.Notify.failure(`We're sorry, but you've reached the end of search results.`);
      }
      Notiflix.Notify.info(`You can still see ${imgRest} images.`);
    })
    .catch(error => (console.log(error)));
};

function addMarkupAndPage(data) {
    addMarkup(data.data.hits);
    lightbox.refresh();
    apiData.incrementCurrentPage();
};



