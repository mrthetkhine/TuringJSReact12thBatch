import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {quotesApiSlice} from "@/lib/features/quotes/quotesApiSlice";

export const todosApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
    reducerPath: "todosApi",
    // Tag types are used for caching and invalidation.
    tagTypes: ["Todos"],
    endpoints: (build) => ({

        getAllTodos: build.query<TodoModel[],undefined>({
            query: () => `todos`,
        }),
    }),
});

export const { useGetAllTodosQuery } = todosApiSlice;