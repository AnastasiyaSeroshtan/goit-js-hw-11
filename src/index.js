import Notiflix from 'notiflix';
import addMarkup from './js/addMarkup';
import ApiData from './js/fetchGallery';
import ApiData from './js/fetchGallery';



const formEl = document.querySelector('.search-form');
const inputSearch = document.querySelector('input[name="searchQuery"]');
const divGalleryEl = document.querySelector('.gallery');
const btnSubmit = document.querySelector('.submit');
const btnLoadMore = document.querySelector('.load-more');




btnLoadMore.classList.add('is-hidden');

const apiData = new ApiData();



formEl.addEventListener('submit', onSearchSubmit);
btnLoadMore.addEventListener('click', onLoadMoreImg);

function onSearchSubmit(e) {
    e.preventDefault();
    divGalleryEl.innerHTML = "";
    apiData.resetPage();

    apiData.searchQuery = inputSearch.value;
    

    // currentPage = 1;
    // btnLoadMore.classList.remove('is-hidden');

    apiData.fetchGallery().then(data => {
 
      btnLoadMore.classList.remove('is-hidden');
        Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
        addMarkup(data.hits);
        // currentPage +=1;
        apiData.incrementCurrentPage();
        btnLoadMore.classList.remove('is-hidden');
    })
    .catch(error => (console.log(error)));


};

function onLoadMoreImg(e){
    e.preventDefault();
    apiData.fetchGallery().then(data => {
      addMarkup(data.hits);
      apiData.incrementCurrentPage();
      // console.log("data.hits.length", data.hits.length);
      // console.log("currentPage", apiData.currentPage);

      if (apiData.currentPage > Math.ceil(data.totalHits/apiData.perPage) ) {
  
          btnLoadMore.classList.add('is-hidden');
          Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
        }
   
// console.log('Math.ceil(data.totalHits/pageLength)', Math.ceil(data.totalHits/pageLength));
// if (currentPage > Math.floor(data.totalHits/pageLength) ) {
  
//   btnLoadMore.classList.add('is-hidden');
//   Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`);
// }
//         addMarkup(data.hits);
//         // Notiflix.Notify.info(`Hooray! We found ${remainder} images.`);
//         // currentPage +=1;
//         apiData.incrementCurrentPage();
      
    })
    .catch(error => (console.log(error)));
};

// console.log("data.totalHits", data.totalHits);
// console.log("data.hits.length", data.hits.length);
// const delay = data.totalHits/data.hits.length;
// console.log("delay", delay);
// console.log("currentPage", currentPage);
// let remainder = data.totalHits - currentPage*data.hits.length;
// console.log('remainder', remainder);








// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '29230862-8ed88c62e82238b6e063c75d0'


// let currentPage = 1;
// let searchQuery = '';
// const pageLength = 5;

// function fetchGallery (searchQuery) {
  
//     return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${pageLength}&page=${currentPage}`)
//     .then(  (response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       })
    
    
// };

