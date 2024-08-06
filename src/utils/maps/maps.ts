"use server";

import { createClient } from '@/utils/supabase/server';
import { cookies } from "next/headers"

export interface Map {
    id: bigint;
    name: string | null;
    description: string | null;
    mapImage: string | null;
    difficulty: string | null;
  }

export async function getAllMaps() {
    const supabase = createClient();
    
    const { data, error } = await supabase.from('maps').select();

    if (error) {
        console.log("Error getting maps", error);
    } else {
        return data;
    }
};

export async function getMapsforSelection() {
    const supabase = createClient();

    const { data, error } = await supabase.from('maps').select();

    if (error) {
        console.log("Error getting maps", error);
    } else {
        const formattedData = data.map((map) => ({
            id: map.id,
            name: map.name,
        }));
        console.log(formattedData);
        return formattedData;
    }
}

export async function setActiveMap(id: number) {
    cookies().set('activeMap', JSON.stringify(id));
    return "success";
}

export async function unsetActiveMap() {
    cookies().delete('activeMap');
    return "success";
}