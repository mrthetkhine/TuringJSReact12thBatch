import RootLayout from "@/app/components/RootLayout";
import {cookies} from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    console.log('Root layout');
    let auth = false;
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if(token){
        auth = true;
    }
  return (
    <html lang="en">
      <body>
        <RootLayout auth={auth}>
            {children}
        </RootLayout>
      </body>
    </html>
  );
}
