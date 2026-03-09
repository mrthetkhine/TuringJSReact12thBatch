import { Movie } from "@/app/lib/types";
import styles from './MovieDetails.module.css';
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import EditMovie from "../../components/EditMovie";
interface MovieDetailsProps {
    movie: Movie;
}
export default function MovieDetails({movie}:MovieDetailsProps)
{
    return(<div className={styles['movie-ui-container']}>
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image="/images/movies/poster.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent >
                    <Typography component="div" variant="h4">
                        {movie.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {movie.year}
                    </Typography>
                    <Typography component="div" variant="h6">
                        {movie.director.name}
                    </Typography>
                </CardContent>
                <EditMovie movie={movie}/>

            </Box>

        </Card>
    </div>);
}