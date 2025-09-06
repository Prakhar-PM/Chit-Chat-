import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import { useState } from 'react'

const HomePage = () => {
   const [selectedUser,setSelectedUser]=useState(false);
   // we will display the three column layout only when a user is selected if not then we will show ony two columns like x or facebook earlier versions 
   
  return (
    <div className='border w-full h-screen sm:px-[15] sm:py-[5%] '>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl
      overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ?
'md: grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}></Sidebar>
        <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}></ChatContainer>
        <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}></RightSidebar>
      </div>
    </div>
  )
}

export default HomePage
