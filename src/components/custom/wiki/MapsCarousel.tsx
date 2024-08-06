"use client";

import Image from "next/image";
import React, {useState, useEffect} from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { getAllMaps, Map } from "@/utils/maps/maps";

export default function MapsCarousel() {
    const [mapDetails, setMapDetails] = useState<Map[]>([]);

    useEffect(() => {
        async function fetchMapDetails() {
            try {
                const data = await getAllMaps();
                if (data && data.length > 0) {
                    setMapDetails(data);
                } else {
                    console.log("No map details found.");
                }
            } catch (error) {
                console.error("Error fetching map details:", error);
            }
        }

        fetchMapDetails();
    }, []);

    return (
        <>
            <div>   
                This is Maps Carouse
            </div>
        </>
    )
}