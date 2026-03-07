'use client';
import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Button from "@mui/material/Button";
import withAuth from "@/app/components/withAuth";
function IndexPage() {
  return (<div>
    Home
    {/*<Button variant="contained"  >Movie Details</Button>*/}
  </div>);
}

const HomeWithAuth = withAuth(IndexPage);
export default HomeWithAuth;