'use client';

import {useParams, useRouter} from "next/navigation";
import MovieDetailsUI from "@/app/movies/[id]/MovieDetailsUI";
import {Movie} from "@/lib/types";
import Button from "@mui/material/Button";

const movie :Movie =  {
    "_id": "69650920f311abe1f015b15b",
    "title": "21 days later",
    "director": {
        "name": "Christopher Nolan",
        "phoneNo": "09993",
        "_id": "69650920f311abe1f015b15c"
    },
    "year": 2025,
};
export default function MovieDetailsPage()
{
    const params = useParams<{
        id:string;
    }>();
    const router = useRouter();
    const onBackHandler = () => {
        router.push("/movies");
    }
    return (<div>
        <Button variant="contained" onClick={onBackHandler} >Back</Button>
        <MovieDetailsUI movie={movie}/>
    </div>);
}