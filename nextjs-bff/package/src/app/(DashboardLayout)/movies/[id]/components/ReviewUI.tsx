import {Review} from '@/app/lib/types';
import styles from './ReviewUI.module.css';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import EditDeleteReview from "@/app/(DashboardLayout)/movies/[id]/components/EditDeleteReview";
interface ReviewUIProps
{
    review:Review;
}
export default function ReviewUI({review}:ReviewUIProps)
{
    return(<div className={styles['review-ui-container']}>


        <Card sx={{ display: 'flex' }}>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent >

                    <Typography component="div">
                        {review.review}
                    </Typography>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" value={review.rating}  readOnly />
                    </Stack>
                    <Box>
                        <EditDeleteReview review={review} />
                        {/*<Button variant="contained" onClick={handleClickOpen}>Edit</Button>
                        &nbsp;
                        <Button variant="contained" onClick={onDeleteHandler}>Delete</Button>*/}
                    </Box>
                </CardContent>


            </Box>

        </Card>
    </div>)
}