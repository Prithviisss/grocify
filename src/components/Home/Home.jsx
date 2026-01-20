import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'

export const Home = () => {
  return (
    <div><Navbar />
    <Hero />
    <Category />
    <Values />
    <Products />
    <Discount />
    </div>

  )
}
export default Home