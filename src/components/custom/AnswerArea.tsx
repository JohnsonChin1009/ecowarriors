"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AnswerAreaProps {
    correctAnswer: string;
    score: number;
    onScoreChange: (score: number) => void; // Callback to update score
    onMissionSubmitted: () => void; // Callback to notify mission submission
}

export default function AnswerArea({ correctAnswer, score, onScoreChange, onMissionSubmitted }: AnswerAreaProps) {
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserAnswer(event.target.value);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            setIsCorrect(true);
            onScoreChange(score); // Update score if answer is correct
        } else {
            setIsCorrect(false);
        }
        onMissionSubmitted(); // Notify that the mission has been submitted
    };

    return (
        <div className="py-4 space-y-4">
            <div>
                <Label htmlFor="answer">Your Answer</Label>
                <Textarea
                    id="answer"
                    name="answer"
                    placeholder="Type your code here..."
                    value={userAnswer}
                    onChange={handleChange}
                    disabled={isSubmitted}
                    className={`w-full p-2 border ${isSubmitted ? (isCorrect ? 'border-green-500' : 'border-red-500') : 'border-gray-300'}`}
                    rows={4}
                />
            </div>
            <Button onClick={handleSubmit} disabled={isSubmitted}>
                SUBMIT
            </Button>
            {isSubmitted && (
                <p className={`mt-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? "Correct answer!" : "Incorrect answer. Please try again."}
                </p>
            )}
        </div>
    );
}