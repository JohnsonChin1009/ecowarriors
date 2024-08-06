"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/custom/BackButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { getProfileDetails, updateProfile } from "@/utils/user/profile";
import { MdOutlineEdit } from "react-icons/md";
import EditProfileForm from "@/components/custom/EditProfileForm";

export default function ProfilePage() {
    const [userDetails, setUserDetails] = useState<{ username: string; profilePicture: string; score: string; } | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function fetchProfileDetails() {
            const data = await getProfileDetails();
            if (data!.length > 0) {
                setUserDetails(data![0]);
            }
        }

        fetchProfileDetails();
    }, []);

    const handleSave = async (details: { username: string; profilePicture: string }) => {
        try {
            await updateProfile(details);
            setUserDetails((prev) => prev ? { ...prev, ...details } : prev);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <>
            <Header />
            <BackButton />
            <div className="px-4 flex justify-center items-center pt-4 pb-10">
                <div className="flex flex-col justify-center items-center space-y-1">
                    <Avatar className="w-[100px] h-[100px]">
                        <AvatarImage src={userDetails?.profilePicture} />
                        <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    {isEditing ? (
                        <EditProfileForm
                            username={userDetails?.username || ""}
                            profilePicture={userDetails?.profilePicture || ""}
                            onSave={handleSave}
                        />
                    ) : (
                        <>
                            <h2 className="text-lg font-semibold flex items-center space-x-2">
                                <span>{userDetails?.username}</span>
                                <span>
                                    <button onClick={() => setIsEditing(true)}>
                                        <MdOutlineEdit className="text-black text-[18px]" />
                                    </button>
                                </span>
                            </h2>
                            <p className="text-sm font-semibold">Score {userDetails?.score}</p>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}