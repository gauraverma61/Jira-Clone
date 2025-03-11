import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator"
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1).max(20)
})

const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8).max(256),
})

const app = new Hono().post("/login", zValidator("json", loginSchema), (c) => {
    const { email, password } = c.req.valid("json")
    console.log({ email, password });
    return c.json({ email, password })
}).post("/register", zValidator("json", registerSchema), (c) => {
    const { name, email, password } = c.req.valid("json")
    console.log({ name, email, password });
    return c.json({ name, email, password })
})

export default app;