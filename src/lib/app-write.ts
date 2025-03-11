import "server-only"
import { Client, Databases, Account, Storage, Users } from "node-appwrite";

export async function createAdminClient(){
    const client = new Client();
    client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!);
    client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);
    client.setKey(process.env.NEXT_APPWRITE_KEY!);

    return {
        get account(){
            return new Account(client);
        }
    }
}