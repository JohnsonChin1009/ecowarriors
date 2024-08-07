"use client";

import { useState, useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { updateUserScorefromCard } from '@/utils/user/profile';

async function fetchResource(resourceID: string) {
    try {
        const response = await fetch(`/api/resources/${resourceID}`);
        if (!response.ok) {
            console.error('Failed to fetch resource:', response.statusText);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching resource:', error);
        return null;
    }
}

export default function AddedPoints() {
    const [resource, setResource] = useState<any>(null);
    const [scoreGain, setScoreGain] = useState<number>(0);

    useEffect(() => {
        async function loadResource() {
            // Get the resource ID from cookies
            const cookies = document.cookie.split('; ').find(row => row.startsWith('selectedResource='));
            const resourceID = cookies ? cookies.split('=')[1] : null;

            if (resourceID) {
                const data = await fetchResource(resourceID);
                setResource(data);
                if (data) {
                    setScoreGain(data.score); // Set the score gain based on fetched data
                }
            }
        }
        loadResource();
    }, []);

    const handleConfirm = () => {
        if (scoreGain > 0) {
            updateUserScorefromCard(scoreGain).then(() => {
                // Reload the page after score update
                window.location.reload();
            }).catch((error) => {
                console.error('Failed to update user score:', error);
            });
        }
    }

    return (
        <div className="flex items-center justify-center pb-4">
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Resources</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{resource?.name || 'No Resources Yet'}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {resource?.description || 'Tap an NFC Card to get resources'}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirm}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </div>
    );
}