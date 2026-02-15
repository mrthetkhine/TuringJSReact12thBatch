import {createContext} from "react";
import {Todo, TodoAction} from "@/app/components/hook/ListTodo";

type TodoContextState = {
    state: Todo[],
    dispatch:(fn:TodoAction)=>void;
}
const TodoContext = createContext<TodoContextState>({
    state: [],
    dispatch:(fn:TodoAction)=>{}
})
export default TodoContext;