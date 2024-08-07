// src/app/api/resources/[id]/route.ts

import { NextResponse } from 'next/server';
import { fetchResourceById } from '@/utils/resources/resources';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
        return NextResponse.json({ error: 'Resource ID is missing' }, { status: 400 });
    }

    try {
        const data = await fetchResourceById(id);
        if (!data) {
            return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
        }
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching resource:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}