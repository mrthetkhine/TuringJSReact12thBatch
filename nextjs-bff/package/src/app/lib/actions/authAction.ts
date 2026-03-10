'use server';
import { cookies } from 'next/headers'
import { login } from "../api/authApi";
import {AuthSchema, AuthSchemaForm} from "../schema/authSchema";
import { redirect } from 'next/navigation';

export async function loginAction(authFormData:AuthSchemaForm)
{
    const validation = AuthSchema.safeParse(authFormData);
    console.log('validation', validation);
    if(validation.success)
    {
        let data:any = validation.data;
        const cookieStore = await cookies();
        let redirectUrl = '/';
        try {
            let authResponse = await login(data.username,data.password);
            if(authResponse.token)
            {
                console.log('Login success', authResponse);
                cookieStore.set('token', authResponse.token,{
                    //secure:true,//set in production with https
                    httpOnly:true,
                });
                cookieStore.set('login', 'true');
                let url =  cookieStore.get("redirectUrl");
                if(url)
                {
                    redirectUrl = url.value;
                }

            }
            return authResponse;
        }
        catch(err){
            console.log('Login error', err);
            throw err;
        }
        finally {
            redirect(redirectUrl);
        }
    }
    else
    {
        return validation.error;
    }
}
export async function logoutAction()
{
    try {
        const cookieStore = await cookies();
        cookieStore.delete('token');
        return "success";
    }
    catch(err){
        return err
    }
    finally {
        redirect('/authentication/login');
    }
}