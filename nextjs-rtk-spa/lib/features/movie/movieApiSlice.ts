import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Movie} from '@/lib/types';
console.log('base URL ', process.env.NEXT_PUBLIC_BASE_URL);
export const movieApiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
    reducerPath: "moviesApi",
    // Tag types are used for caching and invalidation.
    tagTypes: ["Movies"],
    endpoints: (build) => ({

        getAllMovies: build.query<Movie[], undefined>({
            query: () => `/movies`,
            providesTags:['Movies'],
            // `providesTags` determines which 'tag' is attached to the
            // cached data returned by the query.
        }),
    }),
});
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetAllMoviesQuery } = movieApiSlice;
