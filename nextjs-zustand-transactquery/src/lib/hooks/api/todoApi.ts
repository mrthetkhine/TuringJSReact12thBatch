import {ApiResponse, Todo} from "@/lib/types";
import axios, {AxiosResponse} from "axios";
import axiosInstance from "@/app/axiosInstance";

export async function apiLoadAllTodos():Promise<Todo[]>
{
    console.log("apiLoadAllTodos");
    let response = await axiosInstance.get(`/todos`);
    let json = await response.data;
    return json as Todo[];
}
export async function apiSaveTodo(todo:Partial<Todo>):Promise<Todo>
{
    let response = await axiosInstance.post<ApiResponse<Todo>>(`/todos`,todo);
    let json = await response.data;
    return json.data;
}
export async function apiDeleteTodoById(id:string):Promise<Todo>
{
    let response = await axiosInstance.delete<ApiResponse<Todo>>(`/todos/${id}`);
    let json = await response.data;
    return json.data;
}