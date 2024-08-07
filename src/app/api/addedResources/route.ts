import { NextResponse } from 'next/server';
import { getAllAddedResources } from '@/utils/resources/resources';

export async function GET() {
    try {
        // Fetch all records from the resources table
        const resources = await getAllAddedResources();

        if (!resources || resources.length === 0) {
            return NextResponse.redirect('https://ecowarriors-web/');
        }

        // Count the number of records
        const totalRecords = resources.length;

        // Randomize a number between 1 and the total number of records
        const randomIndex = Math.floor(Math.random() * totalRecords) + 1;

        // Create a response and set a cookie
        const response = NextResponse.redirect('https://ecowarriors-web/');
        response.cookies.set('selectedResource', JSON.stringify(randomIndex));
        return response;
    } catch (error) {
        console.error('Error in GET /api/addedResources:', error);
        return NextResponse.redirect('https://ecowarriors-web/');
    }
}