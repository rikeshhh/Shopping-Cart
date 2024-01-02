import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { Sidebar } from './Sidebar'

export const Dashboard = () => {
  const [isOpen,setIsOpen] = useState(false)
    function showCart (){
setIsOpen(true)
    }
  return (
    <div>
  
        <Navigation/>
        <Sidebar/>
       
    </div>
  )
}
