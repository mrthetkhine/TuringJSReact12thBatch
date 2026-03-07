//'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import MovieList from "@/app/(DashboardLayout)/movies/components/MovieList";


const MoviesPage = () => {
    return (
        <PageContainer title="Movies Page" description="this is Sample page">
            <DashboardCard title="Movies Page">
               <MovieList/>
            </DashboardCard>
        </PageContainer>
    );
};

export default MoviesPage;

