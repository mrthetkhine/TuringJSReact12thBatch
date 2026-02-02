'use client';
import {useForm} from "react-hook-form";
import useCustomForm from "@/app/components/hooks/useCustomForm";

export default function SimpleLoginFormWithUseForm(props)
{
    const {
        register,
        handleSubmit
    } = useCustomForm();
    const onSubmit = (data) => {
        console.log('onSubmit form data ', data);
    }


    return(<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input defaultValue="test" {...register("name")} />
            </div>
            <div>
                <label>Password</label>
            <input  type={"password"} {...register("password")} />


            </div>
            <input type="submit" />
        </form>
    </div>)
}