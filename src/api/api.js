import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};