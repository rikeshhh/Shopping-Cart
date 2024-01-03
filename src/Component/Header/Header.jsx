import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <nav className='main__container'>
        <h1>SHopping Cart</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="cartDetail/mens's clothing">Mens Clothing</Link>
            <Link to="/category/jewelery">Watches</Link>
            <Link to="/category/electronics">Electronics</Link>
            <Link to="/category/womens's clothing">Womens Clothing</Link>
        </ul>
        <Link to="cartDetail">Cart</Link>
    </nav>
  )
}