import React from 'react'
import Heading from '../Heading/Heading'

const Products = () => {
    const categories=['ALl','Fruits','Vegetables','Dairy','SeaFood']
  return (
    <section>
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
        <Heading highlight="Our" heading="Products" />
        <div>
            {categories.map(category=>{
                return(
                    <button key={category}>
                        {category}
                    </button>
                )

            })}
        </div>
    </div>
    </section>
  )
}

export default Products