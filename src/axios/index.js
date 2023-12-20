// Set config defaults when creating the instance
import axios from "axios";
import {store} from "../store/index.js";

export const http = axios.create({
    baseURL: 'http://176.100.124.36:8000',
    withCredentials: true,
    headers: {
        "Accept": "application/json"
    }
});

// Set the AUTH token for any request
http.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

http.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        store.isAuth = false
        window.location.href = "/login";
        return Promise.reject(error);
    } else if (error.response.status === 403) {
        //place your reentry code
        return Promise.reject(error);
    }
    return Promise.reject(error);
});