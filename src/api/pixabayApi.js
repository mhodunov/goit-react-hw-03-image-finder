import axios from 'axios';

const API_KEY = "19973159-db573a6c5a26f25e5ce8b6bb0";

// Function to fetch images with query. Returns an array of result objects
function fetchImages({ query = '', page = 1, perPage = 12 }) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits);
}

export { fetchImages };