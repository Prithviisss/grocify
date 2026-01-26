import React from 'react'
import { useWishlist } from '../context/WishlistContext'
import Cards from '../components/Cards/Cards'

const Wishlist = () => {
  const { wishlist } = useWishlist()

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className='mt-40 text-center'>
        <h2 className='text-3xl font-semibold'>
          Your wishlist is empty ❤️
        </h2>
        <p className='text-zinc-500 mt-3'>
          Start adding products you love
        </p>
      </div>
    )
  }

  return (
    <div className='mt-40 max-w-[1400px] mx-auto px-10'>
      <h2 className='text-3xl font-bold mb-10'>
        My Wishlist ({wishlist.length})
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        {wishlist.map((product, index) => (
          <Cards
            key={product?.id ?? index} // fallback key
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Wishlist
