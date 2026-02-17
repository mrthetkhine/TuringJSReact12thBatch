import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {quotesApiSlice} from "@/lib/features/quotes/quotesApiSlice";

export const todosApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
    refetchOnFocus: true,
    reducerPath: "todosApi",
    // Tag types are used for caching and invalidation.
    tagTypes: ["Todos"],
    endpoints: (build) => ({

        getAllTodos: build.query<TodoModel[],undefined>({
            query: () => `todos`,
            providesTags:["Todos"],
        }),
        /*
        saveTodo: build.mutation<TodoModel,Partial<TodoModel>>({
            query:(todo: Partial<TodoModel>)=>({
                url: `/todos`,
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['Todos'],
        }),
         */
        //Pessimistic update
        saveTodo: build.mutation<TodoModel,Partial<TodoModel>>({
            query:(todo: Partial<TodoModel>)=>({
                url: `/todos`,
                method: 'POST',
                body: todo,
            }),
            async onQueryStarted(todo:TodoModel, { dispatch, queryFulfilled }) {

                try {
                    const { data: savedTodo } = await queryFulfilled
                    const patchResult = dispatch(
                        todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                            draft.push(savedTodo);
                        }),
                    )
                } catch {

                }
            },
        }),
        //Optimistic update
        updateTodo: build.mutation<TodoModel,Partial<TodoModel>>({
            query:(todo: Partial<TodoModel>)=>({
                url: `/todos/${todo._id}`,
                method: 'PUT',
                body: todo,
            }),
            async onQueryStarted(todo:TodoModel, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                       draft = draft.map((td:TodoModel)=>td._id==todo._id?todo:td);
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            },
        }),
        deleteTodo: build.mutation<TodoModel,Partial<TodoModel>>({
            query:(todo: Partial<TodoModel>)=>({
                url: `/todos/${todo._id}`,
                method: 'DELETE',
                body: todo,
            }),
            async onQueryStarted(todo:TodoModel, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    todosApiSlice.util.updateQueryData('getAllTodos', undefined, (draft) => {
                        draft = draft.filter((td:TodoModel)=>td._id!=todo._id);
                        return draft;
                    }),
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            },
        }),

    }),
});

export const {
    useGetAllTodosQuery,useSaveTodoMutation,
    useUpdateTodoMutation, useDeleteTodoMutation } = todosApiSlice;