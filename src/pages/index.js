import React, { useState,  Suspense  } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SideBar from '../components/leftBar/LeftBar'
import TaskBoards from '../components/TaskBoar/TaskBoards'
import RightBar from '../components/rightBar/RightBar'
import { BacklogTasks,Done,Inprogress,ToDoTasks } from "../data";
const Section = React.lazy(() => import('../components/section/Section'));

export default function Home() {
  const [sideBar,setSideBar]=useState(false)
  return (
    <>
  
    <div className='flex flex-col lg:flex-row bg-[#F7F8FA] min-h-screen"'>
      <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
      <div className='flex-1 false lg:block ' >
         <NavBar/>
         <TaskBoards/>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-[16px] md:px-[36px] pb-[28px] gap-[24px]'>
          <Suspense fallback={<div>Loading...</div>}>
            <Section task={BacklogTasks} taskName={"Backlog Tasks"}/>
            <Section task={ToDoTasks} taskName={"To Do Tasks"}/>
            <Section task={Inprogress} taskName={"In Progress"}/>
            <Section task={Done} taskName={"Done"}/>
          </Suspense>
          </div>
      </div> 
     <RightBar/>
    </div>
    </>
  )
}
