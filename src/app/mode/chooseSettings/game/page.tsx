"use client";

import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import BackButton from "@/components/custom/BackButton";
import Missions from "@/components/custom/Missions";
import { Separator } from "@/components/ui/separator";

export default function GamePage() {
    return (
        <>  
            <Header />
            <BackButton />
            <div className="py-5 px-4">
                <div className="pb-5">
                    <h1 className="text-lg font-semibold ">Missions</h1>
                    <p className="text-sm py-2">Solve all the missions to gain points!</p>
                    <Separator />
                </div>
                <Missions />
            </div>
            <Footer />
        </>
    )
}