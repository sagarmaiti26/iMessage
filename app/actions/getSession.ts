import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/AuthOptions";
export default async function getSession(){
    return await getServerSession(authOptions);
}