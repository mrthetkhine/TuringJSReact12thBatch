'use client';
import styles from './MovieUI.module.css';
import {Movie} from "@/lib/types";
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from 'next/navigation';

interface MovieUIProps{
    movie: Movie;
}
export default function MovieUI({movie}: MovieUIProps)
{
    const router = useRouter();
    const onDetailHandler = ()=>{
        console.log('Go to details');
        router.push(`/movies/${movie._id}`);
    };
    return (
        <div className={styles['movie-ui-container']}>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image="/movies/poster.jpg"
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

                    <Box sx={{alignItems:'flex-end'}} >
                        <Button variant="contained" onClick={onDetailHandler} >Movie Details</Button>
                    </Box>
                </Box>

            </Card>
        </div>
        )
}