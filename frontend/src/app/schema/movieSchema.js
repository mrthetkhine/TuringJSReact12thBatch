import { z } from "zod";
export const movieSchema = z.object({
    title: z.string().min(1, "Title is required"),
    year: z.coerce.number().int().min(1, "Year is required"),
    director: z.string().min(1, "Director is required"),
});