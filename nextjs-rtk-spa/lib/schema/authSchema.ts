import z from "zod";

export const AuthSchema = z.object({

    username: z.string({
        error: (iss) => iss.input === undefined || iss.input==='' ? "Field is required." : "Invalid input."
    }).min(2, "Username is required."),
    password: z.string({
        error: (iss) => iss.input === undefined || iss.input==='' ? "Field is required." : "Invalid input."
    }).min(1, "Password is required."),
});

export type AuthSchemaForm = z.infer<typeof AuthSchema>;
