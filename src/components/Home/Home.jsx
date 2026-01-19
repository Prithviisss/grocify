import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'

export const Home = () => {
  return (
    <div><Navbar />
    <Hero />
    <Category />
    <Values />
    <Products />
    </div>

  )
}
export default Home