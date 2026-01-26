import React from 'react'
import products from '../ProductList/ProductList'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  // Filter products based on categories
  const filteredItems = categories.includes('All')
    ? products
    : products.filter((item) => categories.includes(item.category))

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'>
        {filteredItems.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CategoryPage

