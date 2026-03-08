import { getAllMovies } from "@/app/lib/api/movieApi";
import {Box, Chip, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import MovieRow from "@/app/(DashboardLayout)/movies/components/MovieRow";
import NavButton from "../../components/shared/NavButton";
import NewMovieEntry from "./NewMovieEntry";

export default async function MovieList()
{
    console.log('Movies list Page');
    const movies = await getAllMovies();
    //console.log('Movies list Page ',movies);
    return(<Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        {/*<NavButton href={'/movies/new'} label="New Movie" />*/}
        <NewMovieEntry/>
        <Table
            aria-label="simple table"
            sx={{
                whiteSpace: "nowrap",
                mt: 2
            }}
        >
            <TableHead>
                <TableRow>

                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Title
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Year
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2" fontWeight={600}>
                            Director
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography variant="subtitle2" fontWeight={600}>
                            Actions
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    movies.map(movie => <MovieRow movie={movie} key={movie._id}/>)
                }
            </TableBody>
        </Table>
    </Box>);
}