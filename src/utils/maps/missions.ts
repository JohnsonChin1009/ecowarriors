"use server";

import { createClient } from '@/utils/supabase/server';
import { cookies } from "next/headers";

export async function getMissionsForMap() {
    const supabase = createClient();
    const cookieObject = cookies().get('activeMap');
    const mapID = cookieObject?.value;

    const { data, error } = await supabase.from('missions').select().eq('belongTo', mapID);

    if (error) {
        console.log("Error getting missions for map ID", mapID, error);
    } else {
        return data;
    }
}