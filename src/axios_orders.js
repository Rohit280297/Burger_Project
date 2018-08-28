import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-project-9e18b.firebaseio.com/'
});


export default instance;