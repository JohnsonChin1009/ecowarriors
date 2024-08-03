"use client";

import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button
            onClick={handleBack}
            className="flex items-center space-x-2 p-2 lg:p-6 rounded transition-colors active:scale-95"
        >
            <IoArrowBack className="text-xl lg:text-2xl" />
            <span className="lg:text-2xl">Back</span>
        </button>
    );
}