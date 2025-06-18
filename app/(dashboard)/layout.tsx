"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser, Footer } from "@/components/index";
import type { Metadata } from "next";
import localData from "@/localData";
import { ButtonDemo, InputDemo } from "@/components/index.js";

const { sunIcon, gridIcon } = localData.images;
const { calendarImage } = localData.svgs;

// export const metadata: Metadata = {
//   title: "Admin Panel",
//   description: "CRM Admin Panel — oversee and manage all your CRM operations.",
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className={``}>
      <AppSidebar />
      <SidebarInset className="bg-neutral-100 dark:bg-background">
        <header className="flex h-16 shrink-0 items-center gap-2 mb-[13px] transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className={`flex items-center  gap-2 px-4 w-full`}>
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2 text-[16px] lg:text-[24px] font-bold text-gradient whitespace-nowrap">
              <img className="max-w-[40px] hidden lg:block" src={sunIcon} alt="" /> Good Morning, Rev
            </div>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="ml-auto flex items-center gap-3">
              <InputDemo
                placeholder="Search Period"
                className="max-w-[350px] mb-0 hidden sm:block"
                inputClassName="!text-[12px]"
                name="search"
                type="text"
                defaultValue=""
                callback={(e) => console.log(e.target.value)}
                endIcon={
                  <ButtonDemo
                    startIcon={calendarImage}
                    variant="ghost"
                    color="gray"
                    shape="circle"
                    className="!w-[30px] !h-[30px]"
                  />
                }
              />
              <ButtonDemo icon={<img src={gridIcon} />} variant="ghost" color="gray" shape="circle" />
              <NavUser />
            </div>
          </div>
        </header>
        {children}
        {/* <Footer /> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
