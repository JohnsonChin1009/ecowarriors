"use server";

import { cookies } from "next/headers"
import { createClient } from '@/utils/supabase/server';

export async function getUserDetails() {
    const supabase = createClient();
    const cookieObject = cookies().get('userID');
    const userID = cookieObject?.value;
    const { data, error } = await supabase.from('profiles').select().eq('id', userID);

    if (error) {
        console.log(error);
    } else {
        const formattedDetails = [
            {
                username: data[0].username,
                profilePicture: data[0].profilePicture,
            }
        ]
        return formattedDetails;
    }
}