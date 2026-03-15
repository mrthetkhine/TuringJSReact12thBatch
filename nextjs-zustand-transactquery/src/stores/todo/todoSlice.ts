import {Todo} from '@/lib/types';
import {StateCreator} from "zustand/index";
import {MyState} from "@/stores/useBoundStore";
import {CounterSlice, CounterState} from "@/stores/counter/counter-slice";

export interface TodoState
{
    todos:Todo[];
}
export interface TodoAction
{
    loadAllTodos:(todos:Todo[])=>void;
    addTodo:(todo:Todo)=>void;
    updateTodo:(todo:Todo)=>void;
    deleteTodo:(todo:Todo)=>void;
    fetchTodos:()=>Promise<void>;
}
export type TodoSlice = TodoState & TodoAction;
const initialState: TodoState = {
    todos:[]
}
export const createTodoSlice:StateCreator<
    MyState,
    [['zustand/devtools', never]],
    [],
    TodoSlice
> = (set)=>({
        ...initialState,
        fetchTodos: async ()=>{
            console.log('Fetch todos');
            let response = await  fetch('https://jsonplaceholder.typicode.com/todos');
            let json = await response.json();
            console.log('todos ',json);
            set( (state: TodoState) =>{
                state.todos= (json as Todo[])
                return state;
            });
        },
        loadAllTodos:(todos:Todo[])=>set( (state: TodoState) => {
            state.todos = todos;
            return state;
        },undefined,'todos/loadAllTodos'),
        addTodo: (todo:Todo) => set((state:TodoState) => {
            //console.log('Add Todos ',todo);
            state.todos.push(todo);
            return state;
        },undefined,'todos/addTodo'),
        updateTodo: (todo:Todo) => set((state:TodoState) => {
            state.todos = state.todos.map(td=>td.id === todo.id?todo:td);
            return state;
        },undefined,'todos/updateTodo'),
        deleteTodo: (todo:Todo) => set((state:TodoState) => {
            state.todos = state.todos.filter(td=>td.id !== todo.id);
            return state;
        },undefined,'todos/deleteTodo'),

    }
);