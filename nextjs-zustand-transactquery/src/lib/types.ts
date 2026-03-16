export interface Todo
{
    _id?: string;
    id?:number;
    title: string;
    completed?: boolean;
}
export interface ApiResponse<T>
{
    message:string;
    data:T;
}
interface BaseModel
{
    _id: string;
}
export interface Director extends BaseModel
{
    name: string;
    phoneNo: string;
}
export interface Movie extends BaseModel
{
    title:string;
    director:Director;
    year:number;
}
export interface Review extends BaseModel
{
    movie:string;
    rating:number;
    review:string;
}
export interface User extends BaseModel
{
    username:string;
    password:string;
}
export interface LoginRequest
{
    username:string;
    password:string;
}