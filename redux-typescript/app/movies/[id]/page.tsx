'use client';
import {useParams} from "next/navigation";

export default function MovieDetailPage() {
    const params = useParams<{
        id:string;
    }>();

    console.log(params);
    return (<div>
        Movie details page {params.id}
    </div>)
}