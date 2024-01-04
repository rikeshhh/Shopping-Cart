import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  const [showDropdown , setShowDropdown] = useState(false)
  return (
    <nav className='main__container'>
      <Link to ="/" style={{ textDecoration: 'none' }}>Coral</Link>
    <button onClick={()=>setShowDropdown((prev)=>!prev)}>Category <i class="fa-solid fa-chevron-down"></i></button>
    <div>
    <Link style={{ textDecoration: 'none' }} to="cartDetail"><i class="fa-solid fa-cart-shopping"></i></Link>

      {
      showDropdown && (
        <div className='dropDown'>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/category/men's clothing" style={{ textDecoration: 'none' }}>Mens Clothing</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/category/jewelery">Jewelery</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/category/electronics">Electronics</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }} to="/category/womens'sclothing">Womens Clothing</Link>
          </li>

        </ul>
      </div>
      )
      }
    </div>
    </nav>
  )
}
