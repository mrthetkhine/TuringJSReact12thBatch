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