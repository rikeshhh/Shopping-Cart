import React, { useState } from 'react'
import {  ProductCard } from './ProductCard'

export const Dashboard = () => {
  const [isOpen,setIsOpen] = useState(false)
  
  return (
    <div>
  
        <ProductCard/>
       
    </div>
  )
}
