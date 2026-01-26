import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDairy from '../../assets/Dairy-banner.jpg'

const Dairy = ({title}) => {
  return (
    <div><CategoryPage title=" Dairy & Eggs"bgImage={BgDairy} categories={['Dairy']} /></div>
  )
}

export default Dairy