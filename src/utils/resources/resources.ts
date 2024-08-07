"use server"

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export async function getAllAddedResources() {
    const supabase = createClient();
    const { data, error } = await supabase.from('resources').select();

    if (error) {
        console.error('Error fetching resources:', error);
        throw new Error('Error fetching resources');
    }

    return data;
}

export async function fetchResourceById(id: string) {
    const supabase = createClient();
    const { data, error } = await supabase.from('resources').select().eq('id', id).single();

    if (error) {
        console.error('Error fetching resource:', error);
        return null;
    }
    return data;
}