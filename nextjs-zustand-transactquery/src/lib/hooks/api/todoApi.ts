import {Todo} from "@/lib/types";

export async function apiLoadAllTodos():Promise<Todo[]>
{
    console.log("apiLoadAllTodos");
    let response =await  fetch('https://jsonplaceholder.typicode.com/todos');
    let json = await response.json();
    return json as Todo[];
}