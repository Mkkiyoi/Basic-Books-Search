import axios from 'axios';

export default {
  search: (query) => {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
  },
  // Get all books
  getBooks: () => {
    return axios.get('/api/books');
  },
  // Get book by id
  getBook: (id) => {
    return axios.get('/api/books/' + id);
  },
  deleteBook: (id) => {
    return axios.delete('/api/books/' + id);
  },
  saveBook: (bookData) => {
    return axios.post('/api/books', bookData);
  }
};