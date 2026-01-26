import React from 'react'
import ProductList from '../ProductList/ProductList'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'
import { useWishlist } from "../../Context/WishlistContext";


const CategoryPage = ({title,bgImage,categories=[]}) => {
    let filteredItems=categories.includes('All')
    ? ProductList
    : ProductList.filter(item=>categories.includes(item.category))
    const renderproduct = filteredItems.map(product => {
  return (
    <Cards key={product.id} product={product} />
  )
})

  return (
    <div><Banner title={title} bgImage={bgImage} />
    <div className='grid grid-cols-1 md: grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10'> 
        {renderproduct}</div></div>
  )
}

export default CategoryPage