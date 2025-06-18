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
import { Separator } from "@/components/ui/separator";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const {
  houseIcon,
  groupIcon,
  businessCenterIcon,
  orderAproveIcon,
  receiptLongIcon,
  bookIcon,
  settingsIcon,
  messageIcon,
} = localData.svgs;

const { brandLogo } = localData.images;

const data = {
  apps: [
    {
      title: "Home",
      url: "/home",
      icon: houseIcon,
      isDisabled: false,
    },
    {
      title: "Clients",
      url: "/clients",
      icon: groupIcon,
      isDisabled: false,
    },
    {
      title: "Investments",
      url: "/investments",
      icon: businessCenterIcon,
      isDisabled: false,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: orderAproveIcon,
    },
    {
      title: "Statements",
      url: "/statements",
      icon: receiptLongIcon,
    },
    {
      title: "Documents",
      url: "/documents",
      icon: bookIcon,
    },
    {
      title: "Tools",
      url: "/tools",
      icon: settingsIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props} className="sidebar ">
      <SidebarHeader className="pb-4 bg-neutral-100">
        <img className="max-w-[47px]" src={brandLogo} alt="" />
      </SidebarHeader>

      <SidebarContent className="bg-neutral-100">
        <SidebarGroup>
          {/* <SidebarGroupLabel className="uppercase text-gray-400 font-normal">App</SidebarGroupLabel> */}
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
                  } rounded-full 4xl:text-[18px] font-semibold px-5 py-[21px] 4xl:py-[26px] text-gray-500 hover:text-gray-500 hover:bg-[rgba(0,0,0,0.018)]`}
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

      <SidebarFooter className="px-5 bg-neutral-100">
        <div className="bg-white p-4 py-6 rounded-lg">
          <div className="flex gap-2 items-center mb-4">
            <div className="svg-size-sm">{messageIcon}</div>
            <h4 className=" text-[14px]  font-medium">Chat with your RM</h4>
          </div>
          <div className=" h-3  rounded-lg  space-x-1 flex items-center justify-between">
            <p className="text-secondary text-xs ">Karun Aggarwal</p>
            <Separator orientation="vertical" className=""/>
            <div className=" text-custom-blue text-xs  font-medium">+91 9010756329</div>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
