import {Todo} from "@/app/components/hook/ListTodo";
import {counterSlice, CounterSliceState} from "@/lib/features/counter/counterSlice";
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";

interface TodoState {
    todos: Todo[]
}
const initialState: TodoState = {
    todos:[
        {
            id:1,
            title: 'Task 1',
        },
        {
            id:2,
                title: 'Task 2',
        }
    ]
};
export const todoSlice = createAppSlice({
    name: "todo",
    initialState,
    reducers: (create) => ({
        addTodo: create.reducer((state,action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        }),
        deleteTodo: create.reducer((state,action: PayloadAction<Todo>) => {
            state.todos = state.todos.filter(td=>td.id !== action.payload.id);
        }),
        updateTodo: create.reducer((state,action: PayloadAction<Todo>) => {
            state.todos = state.todos.map(td=>td.id == action.payload.id?action.payload:td);
        }),
    }),
    selectors: {
        selectTodo: (todoState) => todoState.todos,

    },
});
export const { addTodo,deleteTodo,updateTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;