import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-e746b.firebaseio.com/'
});

export default instance;