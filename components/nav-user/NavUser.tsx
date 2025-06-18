"use client";
import React from "react";

import { BadgeCheck, Bell, ChevronDown, CreditCard, LogOut, Sparkles } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { useApiContext } from "@/contexts/ApiContext";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import localData from "@/localData";

const { avatarPlaceholderImage, sunIcon } = localData.images;

const NavUser = () => {
  const {} = useApiContext();

  const user = {
    name: "",
    email: "",
    photoURL: "",
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex gap-2 items-center outline-none cursor-pointer dark:hover:bg-secondary hover:bg-[rgba(0,0,0,0.03)] px-2 py-1 rounded-sm">
        <div className="h-8 w-8 rounded-full border">
          <img src={user.photoURL || avatarPlaceholderImage} alt={user.name} />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{user.name}</span>
          <span className="truncate text-xs">{user.email}</span>
        </div>
        <ChevronDown className="ml-auto size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <div className="h-8 w-8 rounded-full">
              <img src={user.photoURL || avatarPlaceholderImage} alt={user.name} />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link className="" href="/admin/profile">
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link className="" href="/admin/account">
            Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => {}}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavUser;
