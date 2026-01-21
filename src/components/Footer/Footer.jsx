import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
  <footer className='bg-zinc-100 py-20'>
<div className=' flex flex-wrap  max-w-[1400px] mx-auto px-10'>
    <div className='flex-1 basis-[300px]'>
     <a href="#" className='text-3xl font-bold'>
                    Gr<span className='text-orange-500 uppercase'>o</span>cify
                </a>
                <p className='text-zinc-600 mt-6 max-w-[350px]'>  Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                <p className='text-zinc-800 mt-6'>
                  2026 &copy; All Rights Reserved  
                </p>
                </div>
                <ul className='flex-1'> 
                    <li> <h5 className='text-zinc-800 text-2xl'>Company</h5></li>
                    <li className='mt-6'>
                        <a className=' text-zinc-800 hover:text-orange-500' href="#">About Us</a>
                    </li>
                    <li className='mt-6'>
                        <a className='  text-zinc-800 hover:text-orange-500' href="#">FAQ'S</a>
                    </li>
                   
                </ul>
                <ul className='flex-1'> 
                    <li> <h5 className='text-zinc-800 text-2xl'>Support</h5></li>
                    <li className='mt-6'>
                        <a className=' text-zinc-800 hover:text-orange-500' href="#">Support Center</a>
                    </li>
                    <li className='mt-6'>
                        <a className='  text-zinc-800 hover:text-orange-500' href="#">Feadback</a>
                    </li>
                    <li className='mt-6'>
                        <a className='  text-zinc-800 hover:text-orange-500' href="#">Contact Us</a>
                    </li>
                   
                   
                </ul>
                <ul> 
                    <li> <h5 className='text-zinc-800 text-2xl'> Stay Connected</h5></li>
                    <p className='mt-6 text-zinc-600'> 
                        Questions or Feedback?<br />
                        we'd love to hear from you
                    </p>
                    <div className=' flex bg-white  p-1 rounded-lg mt-6 '>
                       <input type="email" name="email" id="email" autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none' /> 
                       <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'><FaArrowRight /></button>
                    </div>
                   
                </ul>
</div>
  </footer>
  )
}

export default Footer