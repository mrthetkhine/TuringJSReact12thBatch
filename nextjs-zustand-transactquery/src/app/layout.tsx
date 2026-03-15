'use client';
import type { ReactNode } from "react";

import {Nav} from '@/app/components/Nav';

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {queryClient} from "@/lib/hooks/queryClient";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (

        <html lang="en">

        <body>
        <AppRouterCacheProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                  <section className={styles.container}>
                    <Nav />

                    <main className={styles.main}>{children}</main>

                    <footer className={styles.footer}>
                      SPA Project by Turing
                    </footer>
                  </section>

            </QueryClientProvider>
        </AppRouterCacheProvider>
        </body>

        </html>

  );
}
