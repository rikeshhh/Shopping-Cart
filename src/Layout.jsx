import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
export const Layout = () => {
  return (
    <>
<header>
<Header/>
</header>
<main>
<Outlet/>
</main>
<footer className='main__container'>
  <Footer/>
</footer>
    </>
  )
}
