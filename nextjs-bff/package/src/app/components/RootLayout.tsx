"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import './../global.css'
import { AuthContext } from "../util/AuthContext";

interface RootLayoutProps {
    children: React.ReactNode;
    auth:boolean;
}
export default function RootLayout({
                                       children,
                                        auth
                                   }: RootLayoutProps) {
    return (
        <AuthContext.Provider value={{
            authenticated:auth
        }}>
            <ThemeProvider theme={baselightTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AuthContext.Provider>

    );
}
