import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import Wishlist from './pages//Wishlist'
import Cart from "./Pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Process from "./pages/Process";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'fruits',
          element: <Fruits />
        },
        {
          path: 'dairy',
          element: <Dairy />
        },
        {
          path: 'seafood',
          element: <SeaFood />
        },
        {
          path: 'allproducts',
          element: <AllProducts />
        },
        {
          path: 'wishlist',
          element: <Wishlist />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/process",
          element: <Process />
        }



      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
