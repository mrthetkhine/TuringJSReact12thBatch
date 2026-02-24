'use client';
import styles from './ReviewUI.module.css';
import {Review} from "@/lib/types";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

interface ReviewUI {
    review: Review;
}
export default function ReviewUI({review}: ReviewUI)
{
    return(<div className={styles['review-ui-container']}>


        <Card sx={{ display: 'flex' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent >

                <Typography component="div">
                    {review.review}
                </Typography>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </CardContent>


        </Box>

    </Card>
        </div>);
}