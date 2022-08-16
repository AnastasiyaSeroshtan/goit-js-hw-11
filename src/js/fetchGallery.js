const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29230862-8ed88c62e82238b6e063c75d0'

export default class ApiData {
    constructor() {
        this.currentPage = 1;
        this.searchQuery = '';
        this.perPage = 40;
      }

    async fetchGallery () {
      try {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.currentPage}`);
        console.log(response);
        return response;
      }
      catch(error) {
        console.log(error);
      } 
    };

    incrementCurrentPage() {
        this.currentPage += 1;
    };

    resetPage() {
        this.currentPage = 1;
    };
}
