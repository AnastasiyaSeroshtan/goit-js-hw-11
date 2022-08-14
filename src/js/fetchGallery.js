// function fetchCountries(name) {
//     return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name, name.official,capital,population,flags,languages`)
//     .then(  (response) => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       })
// };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29230862-8ed88c62e82238b6e063c75d0'


// let currentPage = 1;

function fetchGallery () {
    this.currentPage = 1;
    this.searchQuery = '';
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.currentPage}`)
    .then(  (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
    
    
};

export default {fetchGallery};