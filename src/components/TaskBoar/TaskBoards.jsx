  import React from 'react'
  import Images from '../AllImages/Images'
  import {images,taskBoardsMenus } from "../../data"

  

  export default function TaskBoards() {
    return (
      <>
      <div className='flex flex-col xl:flex-row justify-between gap-2 items-center px-[16px] md:px-[36px] py-[28px]'>
        <div className='flex items-center gap-[24px]'>
          <p className='text-[#1F2633] font-semibold text-3xl'>Task Boards</p>
          <img src="https://dashboard-ui-x.vercel.app/images/edit.svg" width='20' height="20" alt="pensil" loading="lazy" style={{color:"transparent"}}/>
        </div>
        <div className='flex justify-center gap-[10px] md:gap-[24px] xl:gap-[32px] flex-wrap'>
            <p className='font-semibold text-[11px] cursor-pointer text-[#3B82F6] underline decoration-1 decoration-[#3B82F6] underline-offset-8'>Timeline</p>
          {taskBoardsMenus.map((item)=>( <p key={item} className='font-semibold text-[11px] cursor-pointer text-[#7A8699]'>  {item} </p>))}
        </div>
          <Images images={images} imageCount={4}/>
      </div>
      <div className='flex flex-col xl:flex-row gap-3 justify-between items-center px-[16px] md:px-[36px] pb-[28px]'>
        <div className='flex flex-wrap justify-between items-center gap-2 xl:gap-4 w-full xl:w-auto'>
          <div className='drop-shadow-sm bg-white grid grid-cols-2 gap-2 rounded-lg'>

          <div className='flex items-center gap-2 bg-[#FAFBFC] p-[8px] rounded-l-lg border-r-[1px] border-[#EBEEF2] cursor-pointer'>
            <img src="https://dashboard-ui-x.vercel.app/images/dashboard.svg" width='20' height="20" loading="lazy" style={{color:"transparent"}} alt="logo" />
            <p className='text-[#606C80] text-[12px] font-semibold'>Board View</p>
          </div>
          <div className='flex items-center gap-2 p-[8px] cursor-pointer bg-white rounded-r-lg'>
             <img src="https://dashboard-ui-x.vercel.app/images/hamburger.svg" height="20" width="20"   loading="lazy" style={{color:"transparent"}} alt="icon" />
             <p className='text-[#606C80] text-[12px] font-semibold bg-white'>Board View</p>
          </div>
          </div>
          <div className='hidden xl:block w-[1px] h-8 bg-[#EBEEF2]'></div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <img src="https://dashboard-ui-x.vercel.app/images/lock.svg" height="20" width="20"  loading="lazy"  style={{color:"transparent"}} alt="icon" />
            <p className='text-[#98A2B2] text-[12px] font-semibold'>Limited Access</p>
            <img src="https://dashboard-ui-x.vercel.app/images/keyboard_arrow_down.svg" alt="icon" />
          </div>
          <div className='hidden xl:block w-[1px] h-8 bg-[#EBEEF2]'></div>
          <div className='flex items-center gap-2 justify-between"'>
             <p className='text-[#98A2B2] text-[12px] font-semibold cursor-pointer'>Owners</p>
             <img src="https://dashboard-ui-x.vercel.app/images/twitter.svg" height="30" width="30" loading="lazy" style={{color:"transparent"}} alt="icon" />
             <p className='text-[#606C80] text-[12px] font-semibold cursor-pointer'>Twitter Team</p>
          </div>
          <div className='hidden xl:block w-[1px] h-8 bg-[#EBEEF2]'></div>

        </div>
        <div className='bg-white flex gap-3 self-start items-center border-[1px] border-[#EBEEF2] rounded-md pl-[8px] py-[8px] w-full max-w-[300px] xl:w-auto pr-8'>
            <img src="https://dashboard-ui-x.vercel.app/images/search.svg"  width="20" height="20" loading='lazy' style={{color:"transparent"}} alt="icon" />
            <input className='text-[#98A2B2] font-semibold text-[12px] bg-white outline-none' placeholder='Search Tasks'/>
        </div>
        <div className='flex self-start gap-2'>
           <div className='bg-white drop-shadow-sm p-2 rounded-lg'>
            <img src="https://dashboard-ui-x.vercel.app/images/select_file.svg "  alt="icon" height="20" width="20" loading="lazy" className="cursor-pointer" style={{color:"transparent"}} />
           </div>
           <div className='bg-white drop-shadow-sm p-2 rounded-lg'>
            <img src="https://dashboard-ui-x.vercel.app/images/center_align.svg "  alt="icon" height="20" width="20" loading="lazy" className="cursor-pointer" style={{color:"transparent"}} />
           </div>
           <div className='bg-white drop-shadow-sm p-2 rounded-lg'>
            <img src="https://dashboard-ui-x.vercel.app/images/left_align.svg "  alt="icon" height="20" width="20" loading="lazy" className="cursor-pointer" style={{color:"transparent"}} />
           </div>
           <div className='bg-white drop-shadow-sm p-2 rounded-lg'>
            <img src="https://dashboard-ui-x.vercel.app/images/shape_circles.svg "  alt="icon" height="20" width="20" loading="lazy" className="cursor-pointer" style={{color:"transparent"}} />
           </div>
           <div className='bg-white drop-shadow-sm p-2 rounded-lg'>
            <img src="https://dashboard-ui-x.vercel.app/images/customize_arrangement.svg"  alt="icon" height="20" width="20" loading="lazy" className="cursor-pointer" style={{color:"transparent"}} />
           </div>
        </div>
      </div>
      </>
    )
  }
