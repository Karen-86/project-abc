"use client";

import React from "react";
import { PanelLeft } from "lucide-react";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import localData from "@/localData";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const { houseImage, userImage, userGearImage, penImage, gridImage, globImage, calendarImage } =
  localData.svgs;

const { brandLogo } = localData.images;

const data = {
  apps: [
    {
      title: "Home",
      url: "/home",
      icon: houseImage,
      isDisabled: false,
    },
    {
      title: "Clients",
      url: "/clients",
      icon: gridImage,
      isDisabled: false,
    },
    {
      title: "Investments",
      url: "/investments",
      icon: userImage,
      isDisabled: false,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: calendarImage,
    },
    {
      title: "Statements",
      url: "/statements",
      icon: calendarImage,
    },
    {
      title: "Documents",
      url: "/documents",
      icon: calendarImage,
    },
    {
      title: "Tools",
      url: "/tools",
      icon: calendarImage,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props} className="sidebar">
      <SidebarHeader className="py-[18px] ">
        <img className="max-w-[50px]" src={brandLogo} alt="" />
      </SidebarHeader>

      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase text-gray-400 font-normal">App</SidebarGroupLabel>
          <SidebarMenu>
            {data.apps.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  asChild
                  className={`${
                    // pathname == item.url
                    item.url !== "/" && pathname.startsWith(item.url)
                      ? "sidebar-link-gradient  !text-custom-blue"
                      : ""
                  } rounded-full px-5 py-[25px] text-gray-500 hover:text-gray-500`}
                >
                  <Link href={item.url}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-5"></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
