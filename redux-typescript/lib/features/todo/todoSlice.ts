import {Todo} from "@/app/components/hook/ListTodo";
import {counterSlice, CounterSliceState, incrementByAmount, selectCount} from "@/lib/features/counter/counterSlice";
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import type {AppThunk} from "@/lib/store";
import {get} from "immer/src/utils/common";

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
        clear: create.reducer((state) => {
            state.todos = [];
        }),
        loadAllTodo: create.asyncThunk(
            async () => {
                const response = await  fetch('https://jsonplaceholder.typicode.com/todos');
                const todos = await response.json();

                return todos;
            },
            {
                pending: (state) => {
                    console.log('loading ');
                },
                fulfilled: (state, action) => {
                    console.log('fulfilled ',action);
                    state.todos = action.payload;
                },
                rejected: (state) => {
                    console.log('failed');
                },
            },
        ),
    }),
    selectors: {
        selectTodo: (todoState) => todoState.todos,

    },
});
export const clearAndLoad =
    (): AppThunk =>
        (dispatch, getState) => {
            console.log('getState ',getState());
            dispatch(clear());
            dispatch(loadAllTodo());
        };

export const { addTodo,deleteTodo,updateTodo,loadAllTodo,clear } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;