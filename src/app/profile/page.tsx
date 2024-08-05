"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/custom/BackButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { getProfileDetails } from "@/utils/user/profile";
import { MdOutlineEdit } from "react-icons/md";

export default function ProfilePage() {
    const [userDetails, setUserDetails] = useState<{ username: string; profilePicture: string; level: string; } | null>(null);

  useEffect(() => {
    async function fetchProfileDetails() {
      const data = await getProfileDetails();
      if (data!.length > 0) {
        setUserDetails(data![0]);
      }
    }

    fetchProfileDetails();
  }, []);
    
    return (
        <>
            <Header />
            <BackButton />
            <div className="px-4 flex justify-center items-center pt-4 pb-10">
                <div className="flex flex-col justify-center items-center space-y-1">
                <Avatar className="w-[100px] h-[100px]">
                    <AvatarImage
                    src={userDetails?.profilePicture}>
                    </AvatarImage>
                    <AvatarFallback>JC</AvatarFallback>
                </Avatar>
                <h2 className="text-lg font-semibold flex items-center space-x-2">
                    <span>{userDetails?.username}</span>
                    <span><button><MdOutlineEdit className="text-black text-[18px]" /></button></span>
                </h2>
                <p className="text-sm font-semibold">LEVEL {userDetails?.level}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}