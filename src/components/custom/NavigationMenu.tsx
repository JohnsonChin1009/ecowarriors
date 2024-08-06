"use client";

import { useRouter } from 'next/navigation';

interface NavigationItem {
    title: string;
    url: string;
}

interface NavigationCardProps {
    title: string;
    url: string;
}

function NavigationCard({ title, url }: NavigationCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(url);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer rounded-lg border-2 p-4 lg:p-6 z-[1] text-center hover:bg-gray-100 transition-colors duration-200 w-[300px] lg:w-[425px] text-[16px] lg:text-[20px] shadow-md active:scale-95 active:shadow-sm"
        >
            <span className="font-bold">{title}</span>
        </div>
    );
}

interface MenuProps {
    items: NavigationItem[];
}

export default function Menu({ items }: MenuProps) {
    return (
        <div className="py-[100px] flex flex-col space-y-5 items-center">
            {items.map((item, index) => (
                <NavigationCard key={index} title={item.title} url={item.url} />
            ))}
        </div>
    );
}