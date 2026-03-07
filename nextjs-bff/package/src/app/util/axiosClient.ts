import axios from 'axios';
import { BASE_URL } from './Config';
console.log('BASE_URL', BASE_URL);
 const axiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    //headers: {'Authorization': 'Bearer YOUR_TOKEN'}
});
export default axiosClient;