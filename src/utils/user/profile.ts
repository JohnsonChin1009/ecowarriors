"use server";

import { cookies } from "next/headers"
import { createClient } from '@/utils/supabase/server';

export async function getHeaderDetails() {
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

export async function getProfileDetails() {
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
                level: data[0].level,
            }
        ]
        return formattedDetails;
    }
}