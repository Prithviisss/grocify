import React, { useEffect, useState } from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch, FaHeart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
    const { wishlist } = useWishlist();
    const { cart } = useCart();

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`bg-white fixed top-0 right-0 left-0 z-50 ${
                isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,.1)]" : ""
            }`}
        >
            <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold">
                    Gr<span className="text-orange-500 uppercase">o</span>cify
                </Link>

                {/* Desktop Menu */}
                <ul className="md:flex items-center gap-x-15 hidden">
                    <li className="font-semibold text-orange-500">Home</li>
                    <li className="font-semibold text-zinc-800 hover:text-orange-500">About Us</li>
                    <li className="font-semibold text-zinc-800 hover:text-orange-500">Process</li>
                    <li className="font-semibold text-zinc-800 hover:text-orange-500">Contact Us</li>
                </ul>

                {/* Right Icons */}
                <div className="flex items-center gap-x-5">

                    {/* Search */}
                    <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 h-[5vh] px-3 focus:outline-none"
                        />
                        <button
                            onClick={() => navigate(`/allproducts?search=${searchTerm}`)}
                            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"
                        >
                            <FaSearch />
                        </button>
                    </div>

                    {/* ❤️ Wishlist */}
                    <Link to="/wishlist" className="relative text-zinc-800 text-2xl">
                        <FaHeart />
                        {wishlist.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                                {wishlist.length}
                            </span>
                        )}
                    </Link>

                    {/* 🛒 Cart */}
                    <Link to="/cart" className="relative text-zinc-800 text-2xl">
                        <HiShoppingBag />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu */}
                    <button
                        className="text-zinc-800 text-3xl md:hidden"
                        onClick={toggleMenu}
                    >
                        <IoMenu />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-lg p-10 items-center md:hidden absolute top-30 transition-all duration-500 ${
                        showMenu ? "left-1/2 -translate-x-1/2" : "-left-full"
                    }`}
                >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Process</li>
                    <li>Contact Us</li>

                    <li className="flex p-1 border-2 border-orange-500 rounded-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 h-[5vh] px-3 focus:outline-none"
                        />
                        <button
                            onClick={() => navigate(`/allproducts?search=${searchTerm}`)}
                            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"
                        >
                            <FaSearch />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;

