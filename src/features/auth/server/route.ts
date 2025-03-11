import { setCookie } from 'hono/cookie';
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator"
import { z } from "zod";
import { createAdminClient } from "@/lib/app-write";
import { ID } from "node-appwrite";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1).max(20)
})

const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8).max(256),
})

const app = new Hono().post("/login", zValidator("json", loginSchema), async(c) => {
    const { email, password } = c.req.valid("json")
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    setCookie(c, "jira-clone-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    })

    return c.json({ success : true })
}).post("/register", zValidator("json", registerSchema), async(c) => {
    const { name, email, password } = c.req.valid("json")
    const { account } = await createAdminClient();
    const user = await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);
    setCookie(c, "jira-clone-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    })
    return c.json({ success : true })
})

export default app;