import React from 'react'
import HeroSlider from './HeroSlider'
import {slidesData} from "./SliderData"
import './Hero.css'

const HeroSection = () => {
  return (
   <HeroSlider slides={slidesData}/> 
  )
}

export default HeroSection