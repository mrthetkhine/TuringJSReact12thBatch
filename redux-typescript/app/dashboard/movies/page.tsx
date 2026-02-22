import MovieList from "@/app/dashboard/movies/MovieList";
import ActorList from "@/app/dashboard/movies/ActorList";
import { Suspense } from "react";

function Loading()
{
    return (<div>Loading..</div>);
}
export default function DashboardMoviePage()
{
    return (<div>
        Dashboard movies
        <Suspense fallback={<Loading/>}>
            <MovieList />
        </Suspense>
        <Suspense fallback={<Loading />}>
            <ActorList />
        </Suspense>
    </div>);
}