import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://desafio-sharenergy--api.up.railway.app/',
});