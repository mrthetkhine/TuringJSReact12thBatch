"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";
import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
//import useAuth from "@/app/hooks/useAuth";

export  const Nav = () => {
  //  const auth = useAuth();
  const pathname = usePathname();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    let navLinkStyle = {
        textDecoration: "none",
        color: "white",
        opacity: "1",
        padding:10,
    };
    return (

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SPA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SPA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Link
                            className={`${styles.link} ${
                                pathname === "/" ? styles.active : ""
                            }`}
                            style={navLinkStyle}
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className={`${styles.link} ${
                                pathname === "/todos" ? styles.active : ""
                            }`}
                            style={navLinkStyle}
                            href="/todos"
                        >
                            Todos
                        </Link>
                        <Link
                            className={`${styles.link} ${
                                pathname === "/movies" ? styles.active : ""
                            }`}
                            style={navLinkStyle}
                            href="/movies"
                        >
                            Movies
                        </Link>
                        <Link
                            className={`${styles.link} ${
                                pathname === "/login" ? styles.active : ""
                            }`}
                            style={navLinkStyle}
                            href="/login"
                        >
                            Login
                        </Link>
                        <Link
                            className={`${styles.link} ${
                                pathname === "/logout" ? styles.active : ""
                            }`}
                            style={navLinkStyle}
                            href="/logout"
                        >
                            Logout
                        </Link>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
  );
};
