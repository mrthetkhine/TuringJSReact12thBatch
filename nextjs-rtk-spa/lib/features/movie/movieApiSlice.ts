import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Movie, Review} from '@/lib/types';
import {RootState} from "@/lib/store";
console.log('base URL ', process.env.NEXT_PUBLIC_BASE_URL);
export const movieApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            // Get the token from your auth slice in the Redux store
            const token = (getState() as RootState).auth.token;
            // If the token exists, set the Authorization header
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    reducerPath: "moviesApi",
    // Tag types are used for caching and invalidation.
    tagTypes: ["Movies"],
    endpoints: (build) => ({

        getAllMovies: build.query<Movie[], undefined>({
            query: () => `/movies`,
            providesTags:['Movies'],

        }),
        //pessimistic update
        saveMovie:build.mutation<Movie,Partial<Movie>>({
            query:(movieToSave: Partial<Movie>)=>({
                url: `/movies`,
                method: 'POST',
                body: movieToSave,
            }),
            async onQueryStarted(movie:Partial<Movie>, { dispatch, queryFulfilled }) {

                try {
                    const { data: savedMovie } = await queryFulfilled
                    const patchResult = dispatch(
                        movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                            draft.push(savedMovie);
                        }),
                    )
                } catch {

                }
            },
        }),
        //optimistic update
        updateMovie:build.mutation<Movie,Movie>({
            query:(movie: Movie)=>({
                url: `/movies/${movie._id}`,
                method: 'PUT',
                body:movie,
            }),
            async onQueryStarted(movie:Movie, { dispatch, queryFulfilled }) {

                const patchResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        console.log('Draft ',draft);
                        draft  = draft.map((m:Movie)=>m._id == movie._id?movie:m);
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
        //optimistic update
        deleteMovie:build.mutation<Movie,Movie>({
            query:(movie: Movie)=>({
                url: `/movies/${movie._id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(movie:Movie, { dispatch, queryFulfilled }) {

                const patchResult = dispatch(
                    movieApiSlice.util.updateQueryData('getAllMovies', undefined, (draft) => {
                        console.log('Draft ',draft);
                        draft  = draft.filter((m:Movie)=>m._id != movie._id);
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
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const {
    useGetAllMoviesQuery,
    useSaveMovieMutation,
    useUpdateMovieMutation,
    useDeleteMovieMutation,
} = movieApiSlice;
