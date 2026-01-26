 import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { useWishlist } from "../../Context/WishlistContext";

const Cards = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Check if product is already in wishlist
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
      
      <div className='flex justify-between'>
        {/* Wishlist Heart */}
        <button
          onClick={() => {
            if (isWishlisted) {
              removeFromWishlist(product.id);
            } else {
              addToWishlist(product);
            }
          }}
          className={`text-3xl ${isWishlisted ? 'text-red-500' : 'text-white'} hover:text-red-600`}
        >
          <FaHeart />
        </button>

        {/* Add to cart button (later) */}
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
          ${product.price.toFixed(2)}
        </p>
        <Button content="Shop Now" />
      </div>
    </div>
  )
}

export default Cards
       