"use client";

import BackButton from "@/components/custom/BackButton";
import MapsCarousel from "@/components/custom/wiki/MapsCarousel";
import PowerUpCarousel from "@/components/custom/wiki/PowerUpCarousel";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

export default function WikiPage() {
    

    return (
        <>
            <Header />
            <BackButton />
            <div className="py-5">
                <div className="px-3">
                    <h1 className="text-lg font-semibold ">Wiki Page</h1>
                    <p className="text-sm pt-2">The wiki page contains information about certain elements in the game</p>
                </div>
                <Separator className="my-2 w-[95%] mx-auto"/>
                <div className="space-y-5">   
                    <h2 className="font-semibold px-3">
                        Maps
                    </h2>
                    <MapsCarousel />
                </div>
            </div>
            <Footer />
        </>
    )
}

