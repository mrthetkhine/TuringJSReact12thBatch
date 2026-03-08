import {Movie} from "@/app/lib/types";
import {Button, TableCell, TableRow, Typography} from "@mui/material";
import NavButton from "../../components/shared/NavButton";
import DeleteMovieButton from "@/app/(DashboardLayout)/movies/components/DeleteMovieButton";

interface MovieRowProps {
    movie: Movie
}
export default function MovieRow({movie}:MovieRowProps)
{
    return (<TableRow key={movie._id}>
            <TableCell>
                <Typography
                    sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                    }}
                >
                    {movie.title}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography
                    sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                    }}
                >
                    {movie.year}
                </Typography>
            </TableCell>
            <TableCell>
                <Typography
                    sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                    }}
                >
                    {movie.director.name}
                </Typography>
            </TableCell>
            <TableCell>
               {/* <Link  href={`/movies/${movie._id}`}>Details</Link>*/}
                <NavButton label={"Details"} href={`/movies/${movie._id}`}/>
                &nbsp;
                <DeleteMovieButton movieId={movie._id}/>
            </TableCell>
        </TableRow>
    )
}