"use client";

import BackButton from "@/components/custom/BackButton";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function LorePage() {
    const title = [
        {
            text: "EcoWarriors:"
        },
        {
            text: "THE"
        },
        {
            text: "LORE",
            className: "text-red-500"
        }
    ]
    return (
        <>
            <BackButton />
            <div className="py-2 px-4 lg:px-20">
                <h1 className="font-semibold">
                    <TypewriterEffect words={title} /> 
                </h1>
                <hr className="py-1 lg:py-4"/>
                <p className="text-[12px] lg:text-[20px] lg:pb-10">In a world ravaged by environmental neglect and pollution, the EcoWarriors rise as a beacon of hope. United by a mission to restore balance to nature, they harness both ancient wisdom and cutting-edge technology to heal the earth. As they traverse devastated landscapes, their efforts to purify waters, reforest lands, and revitalize wildlife inspire others to join their cause. The EcoWarriors’ journey is a testament to the power of unity and sustainable action, forging a future where humanity and nature thrive together.
                </p>
            <img 
                src="https://ouch-cdn2.icons8.com/m3tQPkPXjnQphMPEv8-xZaAogmjZvrzENv5Vq7J1czY/rs:fit:368:365/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjg3/LzhiYWNkNmYxLTc3/NzktNGZhOC1iYmM3/LWE5YTkzMWFjOGY3/MC5zdmc.png"
                className="w-[200px] h-[200px] mx-auto lg:w-[300px] h-[300px]"
                alt="Man holding a sword in a winter coat"
            />
            </div>
            
        </>
    )
}