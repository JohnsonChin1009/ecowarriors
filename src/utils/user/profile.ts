"use server";

import { cookies } from "next/headers";
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
        ];
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
                score: data[0].score,
            }
        ];
        return formattedDetails;
    }
}

export async function getUserScore() {
    const supabase = createClient();
    const cookieObject = cookies().get('userID');
    const userID = cookieObject?.value;
    const { data, error } = await supabase.from('profiles').select('score').eq('id', userID);

    if (error) {
        console.log(error);
    } else {
        return data[0].score;
    }
}

export async function updateUserScore(newScore: number) {
    const supabase = createClient();
    const cookieObject = cookies().get('userID');
    const userID = cookieObject?.value;

    try {
        const originalScore = await getUserScore();
        const latestScore = originalScore + newScore;
        const { error } = await supabase.from('profiles').update({ score: latestScore }).eq('id', userID);

        if (error) {
            console.log(error);
        } else {
            console.log("Score updated successfully");
        }
    } catch (error) {
        console.log('Error updating user score:', error);
    }
}

export async function updateProfile(details: { username: string; profilePicture: string }) {
    const supabase = createClient();
    const cookieObject = cookies().get('userID');
    const userID = cookieObject?.value;

    try {
        const { error } = await supabase.from('profiles').update(details).eq('id', userID);

        if (error) {
            console.log(error);
        } else {
            console.log("Profile updated successfully");
        }
    } catch (error) {
        console.log('Error updating profile:', error);
    }
}