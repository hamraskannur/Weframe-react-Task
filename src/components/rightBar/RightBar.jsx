import React from 'react'
import { RightBarMenus } from "../../data"
export default function RightBar() {
    
  return (
    <div className='min-h-full hidden lg:block' style={{transform: "none"}}>
        <div className='flex flex-col min-h-full'>
          <div className='p-[33px] border-b-[1px] border-l-[1px] border-[#E9EBF0]'>
            <img src="https://dashboard-ui-x.vercel.app/images/close.svg" height="21" width="21" className="cursor-pointer" loading="lazy" style={{color:"transparent" }} alt="" />
          </div>
          <div className='flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]'>
            {RightBarMenus.map((item,index)=>(
                <div key={index} className='relative'>
                <img src={item.img} height="35" width="35" className={`${item.active?"ring-2 ring-[#3B82F6]":""} rounded-full cursor-pointer false`} loading="lazy" style={{color:"transparent"}} alt="img" />
                {item.count>0 &&  <span className='-top-2 left-6 absolute text-[10px] bg-red-500 px-[6px] py-[2px] rounded-full text-white font-bold'>{item.count}</span>}
                <span className={`${item.active?"bg-green-500":"bg-red-500"} bottom-0 left-6 absolute w-3.5 h-3.5  border-2 border-white rounded-full`}></span>
            </div>
            ))}
          </div>
          <div className='p-[33px] border-b-[1px] border-t-[1px] border-l-[1px] border-[#E9EBF0]'>
            <img src="https://dashboard-ui-x.vercel.app/images/arrow_forward.svg" width="21" height="21" className="cursor-pointer" alt="icon" />
          </div>
        </div>
      </div>
  )
}
