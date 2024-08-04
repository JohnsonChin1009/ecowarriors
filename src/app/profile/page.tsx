"use client";

import BackButton from "@/components/custom/BackButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
    return (
        <>
            <BackButton />
            <div className="px-4 flex justify-center items-center py-4">
                <Avatar className="w-[80px] h-[80px] shadow-md">
                    <AvatarImage
                    src="/junshen.png">
                    </AvatarImage>
                    <AvatarFallback>JC</AvatarFallback>
                </Avatar>
            </div>
        </>
    )
}