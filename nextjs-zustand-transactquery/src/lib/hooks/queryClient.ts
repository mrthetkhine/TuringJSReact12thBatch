import {QueryClient} from "@tanstack/react-query";
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            //staleTime: 1*1000,
            refetchOnWindowFocus:true,
        },
    },
});