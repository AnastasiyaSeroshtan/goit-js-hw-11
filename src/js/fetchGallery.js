// import axios from "axios";



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
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.currentPage}`);
        
        if (!response.ok) {
          throw new Error(response.status)
        }
        const data = await response.json();
        return data;
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
