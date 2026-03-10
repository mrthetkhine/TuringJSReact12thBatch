
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import DashboardPageUI from "@/app/(DashboardLayout)/DashboardPageUI";
import {cookies} from "next/headers";

const Dashboard =async () => {
    let auth = false;
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if(token){
        auth = true;
    }

  return (
    <DashboardPageUI auth={auth}/>
  );
}

export default Dashboard;
