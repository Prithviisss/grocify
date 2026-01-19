import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList.js'
import Cards from '../Cards/Cards'

const Products = () => {
    const categories=['All','Fruits','Vegetables','Dairy','SeaFood']
    const [activeTab,setActiveTab]=useState('All');
    const renderCards = ProductList.map(product=>{
        return(
            <Cards />
        )
    })
  return (
    <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading="Products" />
        <div className='flex gap-3 justify-center mt-10 '>
            {categories.map(category=>{
                return(
                    <button key={category} className={`bg-zinc-100 px-5 py-2 text-lg rounded-lg cursor-pointer
                        ${activeTab===category?'bg-gradient-to-b from-orange-400 to-orange-500 text-white':'bg-zinc-100'}`}
                        onClick={()=>setActiveTab(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
        <div> {renderCards}</div>
    </div>
    </section>
  )
}

export default Products
