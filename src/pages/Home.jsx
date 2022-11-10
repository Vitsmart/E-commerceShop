import React from 'react'
import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'
import Navbar from './Navbar'


export const Home = () => {
  return (
    <div>
        <Navbar />
      <Announcement/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        <div>
            
        </div>
    </div>
  )
}
