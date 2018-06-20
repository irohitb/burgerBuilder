import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-8613b.firebaseio.com/'
});

export default instance;
