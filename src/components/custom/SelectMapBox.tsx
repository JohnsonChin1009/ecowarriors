"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getAllMaps, Map, setActiveMap } from "@/utils/maps/maps";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SelectMapBox() {
    const router = useRouter();
    const [maps, setMaps] = useState<Map[]>([]);
    const [selectedMapId, setSelectedMapId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMaps() {
            try {
                const data = await getAllMaps();
                if (data) {
                    setMaps(data);
                }
            } catch (error) {
                console.error("Error fetching map details:", error);
            }
        }

        fetchMaps();
    }, []);

    const handleSelectChange = (value: string) => {
        setSelectedMapId(value);
    };

    const handleStartClick = () => {
        if (selectedMapId) {
            setActiveMap(parseInt(selectedMapId));
            router.push("/mode/chooseSettings/game");
        } else {
            console.log("Error setting a map value");
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-2">
                <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pick a map" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {maps.map((map) => (
                                <SelectItem key={map.id.toString()} value={map.id.toString()}>
                                    {map.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button onClick={handleStartClick}>START</Button>
            </div>
        </>
    );
}