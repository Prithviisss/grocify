import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Heading from '../Heading/Heading'
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"

import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'

const Testimonials = () => {
  return (
    <section>
      <div className='max-w-[1400px] px-10 mx-auto'>
        <Heading highlight="Customers  " heading="Saying" />
      </div>

      <div className='flex justify-end py-5 gap-x-3'>
        <button className=' custom-prev text-2xl text-zinc-800 rounded-lg flex items-center justify-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
          <FaAngleLeft />
        </button>

        <button className=' custom-next text-2xl text-zinc-800 rounded-lg flex items-center justify-center w-11 h-11 bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer'>
          <FaAngleRight />
        </button>
      </div>

      <Swiper navigation={{
        nextEl:".custom-next",
        prevEl:".custom-prev"

      }} 
      loop={true} modules={[Navigation]} className="mySwiper">
        {
          review.map(item => {
            return (
              <SwiperSlide key={item.id} className='bg-zinc-100 rounded-xl p-8'>
                <div className='flex gap-5 items-center'>
                  <div className='w-16 h-16 rounded-full bg-red-500 outline outline-2 outline-offset-4'></div>

                  <div>
                    <h5 className='text-xl font-bold'>{item.name}</h5>
                    <p className='text-zinc-600'>{item.profession}</p>
                    <span>{item.star}</span>
                  </div>
                </div>

                <div className='mt-10'>
                  <p>
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: 'Emily Johnson',
    profession: 'Food Blogger',
    rating: 3,
    para: 'FreshBasket is my go-to store for all grocery needs.',
    image: Customer1,
  },
  {
    id: 2,
    name: 'David Smith',
    profession: 'Chef',
    rating: 3,
    para: 'As a chef, quality ingredients are everything.',
    image: Customer2,
  },
  {
    id: 3,
    name: 'Alya Zahra',
    profession: 'Model',
    rating: 3,
    para: 'Shopping online with FreshBasket has saved me time.',
    image: Customer3,
  },
  {
    id: 4,
    name: 'Carlos Mendes',
    profession: 'Fitness Coach',
    rating: 3,
    para: 'Great selection of healthy foods.',
    image: Customer4,
  },
  {
    id: 5,
    name: 'Natcha Phongchai',
    profession: 'Nutritionist',
    rating: 3,
    para: 'High-quality groceries at reasonable prices.',
    image: Customer5,
  },
]
