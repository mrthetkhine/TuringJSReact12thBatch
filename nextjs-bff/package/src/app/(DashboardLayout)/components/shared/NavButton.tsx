'use client';
import Link from 'next/link';
import { Button } from "@mui/material";

interface NavButtonProps {
    label: string;
    href: string;
}
export default function NavButton({label,href}: NavButtonProps)
{
    return(<Button type={"button"} variant="contained" component={Link} href={href}>
        {label}
    </Button>)
}