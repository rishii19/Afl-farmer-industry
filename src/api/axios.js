import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers:{
        Authorization :localStorage.getItem('access_token')?
        `Token ${localStorage.getItem('access_token')}`:undefined,
        'Content-Type':'application/json',
        'accept': 'application/json'
    }
});