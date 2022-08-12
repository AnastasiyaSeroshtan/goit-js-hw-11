const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29230862-8ed88c62e82238b6e063c75d0'



function fetchGallery () {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`).then(response => response.json());
};

fetchGallery().then(data => console.log(data));