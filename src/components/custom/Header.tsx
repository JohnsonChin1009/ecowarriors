'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signout } from '@/app/login/actions';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getHeaderDetails } from '@/utils/user/profile';

export default function Header() {
  const [userDetails, setUserDetails] = useState<{ username: string; profilePicture: string } | null>(null);

  useEffect(() => {
    async function fetchUserDetails() {
      const data = await getHeaderDetails();
      if (data!.length > 0) {
        setUserDetails(data![0]);
      }
    }

    fetchUserDetails();
  }, []);

  const handleSignOut = async () => {
    await signout();
  };

  return (
    <>
      <header className="px-6 py-4 flex items-center justify-between shadow-md">
        <a href="/" className="font-bold text-xl lg:text-2xl">
          EcoWarriors
        </a>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src={userDetails?.profilePicture} alt={userDetails?.username} />
                <AvatarFallback>{userDetails ? userDetails.username.charAt(0) : 'JC'}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{userDetails?.username}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/profile" className="hover:font-bold">Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={handleSignOut}
                  className="hover:text-red-500 hover:font-bold"
                >
                  Sign Out
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
