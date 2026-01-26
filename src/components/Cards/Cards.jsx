 import React from 'react'
import { FaPlus, FaHeart, FaRegHeart } from 'react-icons/fa'
import Button from '../Button/Button'
import { useWishlist } from '../../context/WishlistContext'

const Cards = ({ product }) => {
  if (!product) return null

  const { name, price, image } = product
  const { wishlist, toggleWishlist } = useWishlist()

  // check if product already in wishlist
  const isWishlisted = wishlist.some(item => item.id === product.id)

  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
      <div className='flex justify-between'>
        
        {/* ❤️ Wishlist Toggle */}
        <button onClick={() => toggleWishlist(product)}>
          {isWishlisted ? (
            <FaHeart className='text-3xl text-red-500' />
          ) : (
            <FaRegHeart className='text-3xl text-zinc-400' />
          )}
        </button>

        {/* ➕ Add button */}
        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg'>
          <FaPlus />
        </button>
      </div>

      <div className='w-full h-50'>
        <img
          src={image}
          alt={name}
          className='w-full h-full mx-auto object-contain'
        />
      </div>

      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>
          ${price.toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  )
}

export default Cards




