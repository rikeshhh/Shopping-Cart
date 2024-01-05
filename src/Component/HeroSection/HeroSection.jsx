import React from 'react'
import HeroSlider from './HeroSlider'
import {slidesData} from "./SliderData"
import './Hero.css'
import HeroBody from './HeroBody'

const HeroSection = () => {
  return (
    <div style={{display:'flex'}}>
      <HeroBody/>
      {/* <HeroSlider slides={slidesData}/>  */}
    </div>
  )
}

export default HeroSection