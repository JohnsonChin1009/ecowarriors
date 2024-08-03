"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoSettingsOutline } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function Header() {
    return (
        <>
            <header className="px-6 py-4 flex items-center justify-between shadow-md">
                <a href="/" className="font-bold text-xl lg:text-2xl"> 
                    EcoWarriors
                </a>
                <div className="flex items-center space-x-4">
                    {/* <a href="/settings">
                        <IoSettingsOutline className="text-xl"/>
                    </a> */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="w-[50px] h-[50px]">
                            <AvatarImage></AvatarImage>
                            <AvatarFallback>JC</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel>Johnson Chin</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <a href="/profile" className="hover:font-bold">Profile</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="/login" className="hover:text-red-500 hover:font-bold">Sign Out</a>
                </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </header>
        </>
    )
}