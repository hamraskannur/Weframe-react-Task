import React, { useState } from "react";
import Dashboards from "./Dashboards";
import { leftBarMenus ,leftBarProjects } from "../../data"

export default function LeftBar() {
  const [sideBar,setSideBar]=useState(false)
  return (
    <>
      <div className="overflow-y-scroll  border-r-[1px] border-[#E9EBF0] ">
        <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]">
          <h1 className="font-semibold text-xl">Dashboard</h1>
          <img
            src="https://dashboard-ui-x.vercel.app/images/menu_open.svg"
            onClick={()=>setSideBar(!sideBar)}
            className="cursor-pointer"
            width="20"
            decoding="async"
            height="20"
            alt="logo"
          />
        </div>
        <div className="px-[32px] hidden lg:block">
          <div className="flex items-center justify-between py-[30px] border-b-[1px] border-[#E9EBF0]">
            <div className="flex gap-4 items-center">
              <img
                src="https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=48&q=75"
                className="rounded-full p-[2px] ring-2 ring-[#3B82F6]"
                height="40"
                width="40"
                alt="logo"
              />
            <div className="flex flex-col gap-[2px]">
              <p className='text-[#1F2633] font-semibold text-[12px]"'>
                Nancy Martino
              </p>
              <p className="text-[#B8BFCC] font-semibold text-[11px]">
                Designer
              </p>
            </div>
            <img
              src="https://dashboard-ui-x.vercel.app/images/unfold_more.svg"
              style={{ color: "transparent" }}
              height="20"
              loading="lazy"
              className="cursor-pointer"
              width="20"
              alt="logo"
            />
            </div>
          </div>
        </div>
        <div className={!sideBar?`absolute lg:static w-full flex flex-col z-10 
    opacity-0 delay-0 duration-500  
    lg:w-full lg:visible lg:opacity-100 transition-all pb-[30px] px-[32px] bg-[#F7F8FA]`:`absolute lg:static w-full flex flex-col z-10 
    flex-1 opacity-100 
    lg:w-full lg:visible lg:opacity-100 transition-all pb-[30px] px-[32px] bg-[#F7F8FA]`}>
   <Dashboards menus={leftBarMenus} name={"DASHBOARDS"}/>
  <Dashboards menus={leftBarProjects} name={"Projects"}/>

    </div>
      </div>
    </>
  );
}
