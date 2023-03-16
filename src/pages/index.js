import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Section from '../components/section/Section'
import SideBar from '../components/leftBar/LeftBar'
import TaskBoards from '../components/TaskBoar/TaskBoards'
import RightBar from '../components/rightBar/RightBar'
import { BacklogTasks,Done,Inprogress,ToDoTasks } from "../data";

export default function Home() {
  const [sideBar,setSideBar]=useState(false)
  return (
    <>
  
    <div className='flex flex-col lg:flex-row bg-[#F7F8FA] min-h-screen"'>
      <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
      <div className='flex-1 false lg:block ' style={{transform: "translateX(0vw) translateZ(0px)"}}>
         <NavBar/>
         <TaskBoards/>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[16px] md:px-[36px] pb-[28px] gap-[24px]'>
            <Section task={BacklogTasks} taskName={"Backlog Tasks"}/>
            <Section task={ToDoTasks} taskName={"To Do Tasks"}/>
            <Section task={Inprogress} taskName={"In Progress"}/>
            <Section task={Done} taskName={"Done"}/>
          </div>
      </div> 
     <RightBar/>
    </div>
    </>
  )
}
