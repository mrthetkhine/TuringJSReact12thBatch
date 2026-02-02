'use client';
import {useForm} from "react-hook-form";

export default function SimpleLoginForm()
{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log('onSubmit form data ', data);
    }
    console.log(watch("password"));
    return(<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input defaultValue="test" {...register("name")} />
            </div>
            <div>
                <label>Password</label>
            <input  type={"password"} {...register("password", { required: true })} />

            {errors.password && <span>password is required</span>}
            </div>
            <input type="submit" />
        </form>
    </div>)
}