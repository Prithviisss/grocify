import React from "react";
import { FaHeart, FaRegHeart, FaPlus } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Cards = ({ product }) => {
  if (!product) return null;

  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();

  const isWishlisted = wishlist.some(item => item.id === product.id);

  // ❤️ Toggle Wishlist
  const toggleWishlist = () => {
    if (isWishlisted) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // 🛒 Add to Cart
  const addToCart = () => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="bg-zinc-100 p-5 rounded-xl relative">

      {/* ❤️ Wishlist Icon */}
      <button
        onClick={toggleWishlist}
        className="absolute top-4 left-4 text-2xl cursor-pointer"
      >
        {isWishlisted ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-zinc-400 hover:text-red-400" />
        )}
      </button>

      {/* ➕ Add to Cart */}
      <button
        onClick={addToCart}
        className="absolute top-4 right-4 bg-gradient-to-b from-orange-400 to-orange-500 text-white p-3 rounded-lg cursor-pointer"
      >
        <FaPlus />
      </button>

      {/* Product Image */}
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cards;



