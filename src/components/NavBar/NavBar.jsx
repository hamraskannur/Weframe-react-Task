import React from 'react'
import { NavBarMenus } from "../../data"

export default function NavBar() {
   

  return (
    <div className='hidden xl:flex justify-between items-center px-[36px] py-[21px] border-b-[1px] border-[#E9EBF0]"'>
       <div className='flex gap-[32px]'>
          <div className='bg-white flex justify-between border-[1px] border-[#EBEEF2] rounded-md p-[12px] min-w-[200px] drop-shadow-sm'>
             <div className='flex items-center gap-3 bg-white'>
                <img src="https://dashboard-ui-x.vercel.app/images/search.svg"  style={{color:"transparent"}} width='20' height='20' loading="lazy" alt="serch" />
                <input className='text-[#98A2B2] font-semibold text-[12px] bg-white outline-none' placeholder='Search Tasks'/>
             </div>
             <img src="https://dashboard-ui-x.vercel.app/images/input.svg "  width='20' height="20" alt="out" style={{color:"transparent"}} />
          </div>
          <img src="https://dashboard-ui-x.vercel.app/images/keyboard_voice.svg" width="20" height="20" alt="voice" style={{color:"transparent"}} />
       </div>
       <div className='flex gap-[32px]'>
          {NavBarMenus.map((item,index)=>(<p key={item} className={`${index===0?"text-black":"text-[#7A8699]"} font-semibold text-[11px] cursor-pointer`}>{item}</p>))}
       </div>
       <div className='flex items-center gap-3'>
           <img src="https://dashboard-ui-x.vercel.app/images/folder_open.svg" height='20' width="20" loading="lazy" className="cursor-pointer" alt="logo" />
           <img src="https://dashboard-ui-x.vercel.app/images/notifications_none.svg" alt="logo" />
           <div className='relative'>
            <img className='rounded-full p-[2px] ring-2 ring-[#3B82F6] cursor-pointer' loading="lazy" style={{color:"transparent"}} src="https://dashboard-ui-x.vercel.app/_next/image?url=%2Fimages%2Favatar.jpeg&w=32&q=75" alt="logo" />
            <span className='-top-1 left-4 absolute text-[10px] bg-red-500 px-[6px] py-[2px] rounded-full text-white font-bold'>
                 4 
            </span>
           </div>
       </div>
    </div>
  )
}
