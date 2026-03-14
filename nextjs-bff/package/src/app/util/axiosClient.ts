import axios from 'axios';
import { BASE_URL } from './Config';
import {cookies} from "next/headers";
console.log('BASE_URL', BASE_URL);
const axiosClient = axios.create({
    baseURL: BASE_URL,
    //timeout: 1000,
    //headers: {'Authorization': 'Bearer YOUR_TOKEN'}
});


axiosClient.interceptors.request.use(async (config) => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if (token){
        //console.log('axios add token', token);
        config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
}, error => Promise.reject(error));
export default axiosClient;