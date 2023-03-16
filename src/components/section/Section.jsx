import React from 'react'
import Card from '../card/Card'

export default function Section({task,taskName}) {
  return (
    <div className='flex flex-col gap-4'>
       <div className='flex justify-between items-center pb-[28px]'>
           <div className='flex justify-between items-center gap-3'>
            <p className='font-medium text-[14px]'>{taskName}</p>
            <p className={`${taskName==="Backlog Tasks"?"bg-[#CA8A04] text-[#CA8A04]":taskName==="To Do Tasks"?"bg-[#DB2777] text-[#DB2777]":taskName==="In Progress"?"bg-[#9333EA] text-[#9333EA]":taskName==="Done"?"bg-[#16A34A] text-[#16A34A]":""} bg-opacity-10 px-[8px] py-[4px] rounded-full text-[10px] font-bold`}>{task.length}</p>
           </div>
           <div>
            <img src="https://dashboard-ui-x.vercel.app/images/more_horiz.svg" alt="icon" />
           </div>
       </div>
       {task.map((item)=>(<Card key={item.id} task={item}/>))}
       
       <div className='bg-white flex justify-center py-1 rounded-lg drop-shadow-sm' style={{transform: "translateY(0vw) translateZ(0px)"}}>
          <img src="https://dashboard-ui-x.vercel.app/images/new_task_button.svg" width="20" height="20"  className="cursor-pointer" loading="lazy" style={{color:"transparent"}} alt="icon" />
       </div>
    </div>
  )
}
