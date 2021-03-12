import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5de9c-default-rtdb.firebaseio.com/'
})

export default instance;