import React from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body>
            <h1>Dashboard Layout</h1>
            <main>{children}</main>
        </body>
        </html>
    )
}