import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <nav className='main__container'>
        <h1>Coral</h1>
        <ul>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            <Link to="/category/men's clothing"  style={{ textDecoration: 'none' }}>Mens Clothing</Link>
            <Link  style={{ textDecoration: 'none' }} to="/category/jewelery">Jewelery</Link>
            <Link  style={{ textDecoration: 'none' }} to="/category/electronics">Electronics</Link>
            <Link   style={{ textDecoration: 'none' }}to="/category/womens'sclothing">Womens Clothing</Link>
        </ul>
        <Link  style={{ textDecoration: 'none' }} to="cartDetail"><i class="fa-solid fa-cart-shopping"></i></Link>
    </nav>
  )
}
