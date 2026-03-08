import {getAllReviewByMovieId} from "@/app/lib/api/reviewApi";
import { Review } from "@/app/lib/types";
import ReviewUI from "./ReviewUI";
import NavButton from "@/app/(DashboardLayout)/components/shared/NavButton";

interface ReviewListProps{
    movie:string
}
export default async function ReviewList({movie}: ReviewListProps)
{
    const reviews:Review[] = await getAllReviewByMovieId(movie);
    console.log('ReviewList', reviews);
    return(<div>

        {
            reviews.map((review:Review) => <ReviewUI review={review} key={review._id}/>)
        }
    </div>);
}