import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/HeroSection/HeroSection.jsx';

export const Layout = () => {
  return (
    <>
<header>
<Header/>
</header>
<main>
<Outlet/>
</main>
<footer>
  <Footer/>
</footer>
    </>
  )
}
