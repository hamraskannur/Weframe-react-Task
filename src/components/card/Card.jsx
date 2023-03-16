import React from 'react'
import Images from '../AllImages/Images'

export default function Card({task}) {
    
  return (
    <div className='flex flex-col gap-4' style={{opacity: 1}}>
       <div className='flex flex-col gap-3 bg-white p-[20px] rounded-lg drop-shadow-sm' style={{ransform: "translateY(0vw) translateZ(0px)"}}>
          <div className='flex justify-between items-start gap-2'>
             <p className='text-[12px] font-medium text-[#1F2633]'>{task.title}</p>
             <div className='flex items-center gap-2 w-12 justify-end'>
               {task.fileCount>0 && <><img src="https://dashboard-ui-x.vercel.app/images/task-1.svg" width="20" height="20" className="cursor-pointer" loading="lazy" style={{color:"transparent"}} alt="icon" />
               <p className='text-[#33BFFF] text-[10px] font-bold'>{task.fileCount}</p></>}
             </div>
          </div>
          <div className='flex gap-1 items-center'>
               <p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full border-[1px] border-[#EBEEF2]'>{task.id}</p>
               {task.type && <p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full text-[#2563EB] bg-[#2563EB] bg-opacity-10'>{task.type}</p>}
               {task.status==="Backlog" &&<p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full bg-opacity-10 text-[#CA8A04] bg-[#CA8A04]'>Backlog</p>}
              {task.status==="In Progress" && <p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full bg-opacity-10 text-[#9333EA] bg-[#9333EA]'>In Progress</p>}
              { task.status==="Done" && <p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full bg-opacity-10 text-[#16A34A] bg-[#16A34A]'>Done</p>}
              {task.status==="To Do" && <p className='text-[8px] font-bold px-[8px] py-[5px] rounded-full bg-opacity-10 text-[#DB2777] bg-[#DB2777]'>To Do</p>}
          </div>
          <div className='flex justify-between items-center'>
            <Images imageCount={2} images={task.image}/>
            <div className='flex items-center gap-1.5'>

             {task.shareCount>0 && <><img src="https://dashboard-ui-x.vercel.app/images/file_present.svg" width="20" height="20" className="cursor-pointer" loading="lazy" style={{color:"transparent"}} alt="icon" />
             <p className='text-[#33BFFF] text-[10px] font-bold'>{task.shareCount}</p></>}
             {task.messageCount>0  && <><img src="https://dashboard-ui-x.vercel.app/images/message.svg" width="20" height="20" className="cursor-pointer" loading="lazy" style={{color:"transparent"}} alt="icon" />
             <p className='text-[#33BFFF] text-[10px] font-bold'>{task.messageCount}</p></>}
            </div>
          </div>
       </div>
    </div>
    
    
  )
}
