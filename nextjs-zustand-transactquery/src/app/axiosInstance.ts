'use client';
import axios from 'axios';
import {useBoundStore} from "@/stores/useBoundStore";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    /*timeout: 10000,*/
});

axiosInstance.interceptors.request.use(
    async (config) => {
        //console.log('Axios interceptor enter');
        const {token} = useBoundStore.getState();
        //console.log('Axios interceptor',auth);


        if(token)
        {
            config.headers['Authorization'] = 'Bearer '+token;
        }
        config.headers['Content-Type'] = 'application/json';
        //console.log('Headers ',config.headers);
        return config;
    },
    (error) => {
        console.log('Axios interceptor error', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;