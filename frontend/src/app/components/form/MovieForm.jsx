'use client';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {movieSchema} from "@/app/schema/movieSchema";

/*try {
    console.log('parse ',movieSchema.parse({
        title: '',
        director: '',
        year: '2010',
    }));
}
catch (error) {
    console.error(error);
}*/
export default function MovieForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "Some title",
            year: "2010",
            director: "",
        },
        resolver: zodResolver(movieSchema),
    })

    const onSubmit = (data) => console.log(data)
    return(<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    Title
                </label>
                <input {...register("title")} />
                <p>{errors.title?.message}</p>
            </div>

            <div>
                <label>
                    Year
                </label>
                <input {...register("year")} type="number" />
                <p>{errors.year?.message}</p>
            </div>

            <div>
                <label>
                    Director
                </label>
                <input {...register("director")} />
                <p>{errors.director?.message}</p>
            </div>

            <input type="submit" />
        </form>
    </div>);
}