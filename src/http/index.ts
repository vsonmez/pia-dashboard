import axios from "axios";

const API_AUTH_URL = "https://dummyjson.com/";

const http = axios.create({
    baseURL: API_AUTH_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

http.interceptors.request.use((config) => {
    console.log('config', config);
    return config;
}, (error) => {
    console.error('error', error);
});

http.interceptors.response.use((response) => {
    console.log('response', response);
    return response;
}, (error) => {
    if (error.response.status === 400) {
        console.log('Yanlış/eksik HTTP isteği oluşturuldu - 400');
    }
    console.error('error response', error);
    
});

export default http;