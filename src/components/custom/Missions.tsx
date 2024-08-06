"use client";

import { useEffect, useState } from "react";
import { getMissionsForMap } from "@/utils/maps/missions";
import AnswerArea from "@/components/custom/AnswerArea";
import { updateUserScore } from "@/utils/user/profile";
import { useRouter } from "next/navigation";

export default function Missions() {
    const router = useRouter();
    const [missions, setMissions] = useState<any[]>([]);
    const [totalScore, setTotalScore] = useState<number>(0);
    const [submittedMissions, setSubmittedMissions] = useState<Set<number>>(new Set());

    useEffect(() => {
        async function fetchMissions() {
            try {
                const data = await getMissionsForMap();
                if (data) {
                    setMissions(data);
                } else {
                    console.error("No missions data returned");
                }
            } catch (error) {
                console.error("Error fetching missions:", error);
            }
        }

        fetchMissions();
    }, []);

    // Effect to handle redirection after checking if all missions are submitted
    useEffect(() => {
        if (missions.length > 0) { // Ensure missions are loaded
            const allMissionsSubmitted = missions.every(mission => submittedMissions.has(mission.id));

            if (allMissionsSubmitted) {
                updateUserScore(totalScore).then(() => {
                    router.push("/");
                }).catch(error => {
                    console.error("Error updating user score:", error);
                });
            }
        }
    }, [submittedMissions, missions, totalScore, router]);

    const handleScoreChange = (score: number) => {
        setTotalScore(prevScore => prevScore + score);
    };

    const handleMissionSubmitted = (missionId: number) => {
        setSubmittedMissions(prev => new Set(prev).add(missionId)); // Mark mission as submitted
    };

    return (
        <div>
            <div className="mb-4">
                <h2 className="font-semibold">Total Score: {totalScore}</h2>
            </div>
            <ul className="space-y-5">
                {missions.length > 0 ? (
                    missions.map((mission) => (
                        <li key={mission.id}>
                            <div className="flex justify-between">
                                <h2 className="font-semibold">{mission.name}</h2>
                                <p className="font-regular">Score: {mission.score}</p>    
                            </div>
                            <p>{mission.description}</p>
                            <AnswerArea 
                                correctAnswer={mission.answer} 
                                score={mission.score} 
                                onScoreChange={handleScoreChange}
                                onMissionSubmitted={() => handleMissionSubmitted(mission.id)} // Pass the callback
                            />
                        </li>
                    ))
                ) : (
                    <p>No missions available</p>
                )}
            </ul>
        </div>
    );
}