"use server";

import { createClient } from '@/utils/supabase/server';

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
}