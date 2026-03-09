import {getMovieById} from "@/app/lib/api/movieApi";
import MovieDetails from "@/app/(DashboardLayout)/movies/[id]/components/MovieDetails";
import { Movie } from "@/app/lib/types";
import ReviewList from "./components/ReviewList";
import NavButton from "@/app/(DashboardLayout)/components/shared/NavButton";
import ReviewEntry from "@/app/(DashboardLayout)/movies/[id]/components/ReviewEntry";

export default async function MovieDetailsPage({ params }: { params:Promise< { id: string }> })
{
    const {id} = await params;
    console.log('Movie id ',id, );
    const movie:Movie = await getMovieById(id);
    return (<div>
       <NavButton label={"Back"} href='/movies'/>
       <MovieDetails movie={movie} />
       <ReviewEntry movieId={id}/>
       <ReviewList movie={id} />
    </div>);
}