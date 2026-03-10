
import axiosClient from '@/app/util/axiosClient';
export async function login(username: string, password: string) {
    let response = await axiosClient.post(`/users/login`, {
        username,
        password,
    });
    return response.data;
}