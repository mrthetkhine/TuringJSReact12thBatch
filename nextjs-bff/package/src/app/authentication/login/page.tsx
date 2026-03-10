import LoginPage from "@/app/authentication/login/LoginPage";
import {cookies} from "next/headers";
import { redirect } from "next/navigation";


const Login2 = async () => {
    console.log('Auth Page');
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if(!token) {
        return(<LoginPage/>)
    }
    else
    {
        redirect('/');
    }
};
export default Login2;
