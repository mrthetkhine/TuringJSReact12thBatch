'use client';
import {useForm} from "react-hook-form";
import {MovieSchema, MovieSchemaForm} from "@/lib/schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthSchema, AuthSchemaForm} from "@/lib/schema/authSchema";
import {Movie} from "@/lib/types";
import {TextField} from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";

import {useRouter, useSearchParams} from "next/navigation";
import {useBoundStore} from "@/stores/useBoundStore";

export default function LoginUI() {
    const router = useRouter();

    const {token,login} = useBoundStore();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirectTo');
    console.log('Redirect to ',redirectTo);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, touchedFields },
    } = useForm<AuthSchemaForm>({
        resolver: zodResolver(AuthSchema),
        // defaultValues: specify default values for form inputs
        defaultValues: {
            username: '',
            password: '',
        },
    });
    const onSubmit = (data: AuthSchemaForm) => {
        console.log('Login ',data);
        login(data)
            .then(response=>{
                console.log('Login success ',response);
                if(redirectTo)
                {
                    router.push(redirectTo);
                }
                else
                {
                    router.push('/');
                }

            },err=>{
                console.log('Login failed1 ',err);
            })
            .catch(error=>{
                console.log('Login Error ',error);
            })
    };
    return (<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Username"
                fullWidth
                margin="normal"
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <Button type="submit" variant="contained">
                Login
            </Button>
        </form>
    </div>);
}