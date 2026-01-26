import React from 'react'
import { FaPlus, FaHeart } from 'react-icons/fa'
import Button from '../Button/Button'
import { useWishlist } from '../../context/WishlistContext'

const Cards = ({ product }) => {
  const { wishlist, toggleWishlist } = useWishlist()

  if (!product) return null

  // ✅ Safe check for missing id
  const productId = product.id ?? product.name  // fallback to name if id missing
  const isWishlisted = wishlist.some(item => item.id === productId)

  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
      <div className='flex justify-between'>
        {/* Heart icon with toggle */}
        <span
          className={`text-3xl cursor-pointer ${
            isWishlisted ? 'text-red-500' : 'text-zinc-300'
          }`}
          onClick={() => toggleWishlist(product)}
        >
          <FaHeart />
        </span>

        {/* Add button */}
        <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg'>
          <FaPlus />
        </button>
      </div>

      <div className='w-full h-50'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-full mx-auto object-contain'
        />
      </div>

      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>{product.name}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>
          ${product.price?.toFixed(2) ?? '0.00'}
        </p>
        <Button content='Shop Now' />
      </div>
    </div>
  )
}

export default Cards


