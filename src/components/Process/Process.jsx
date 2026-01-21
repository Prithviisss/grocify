import React from 'react'
import Heading from '../Heading/Heading'
import {
  Bs1CircleFill,
  Bs2CircleFill,
  Bs3CircleFill,
  Bs4CircleFill
} from "react-icons/bs"
import { PiFactory, PiPlantFill } from "react-icons/pi"
import { HiMiniPercentBadge } from "react-icons/hi2"
import { CiDeliveryTruck } from "react-icons/ci"

const Process = () => {

  const renderSteps = steps.map(item => {
    return (
      <div className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-40' : 'md:mt-40'}`}>


        {/* Step Number */}
        <span className="
          flex justify-center items-center 
          w-14 h-14 md:w-18 md:h-18 
          text-5xl md:text-8xl 
          mx-auto rounded-full 
          bg-zinc-800 text-white 
          outline outline-4 outline-offset-4 
          outline-dotted outline-zinc-800
        ">
          {item.number}
        </span>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-x-5 mt-8 md:mt-10">
          <span className="
            flex justify-center items-center 
            text-2xl md:text-3xl 
            bg-gradient-to-b from-orange-400 to-orange-500 
            text-white w-12 h-12 md:w-15 md:h-15 rounded-full
          ">
            {item.icons}
          </span>

          <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
            <h4 className="text-zinc-800 text-xl md:text-2xl font-bold">
              {item.title}
            </h4>
            <p className="text-zinc-600 mt-2">
              {item.para}
            </p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">

        <div className="w-fit mr-auto">
          <Heading highlight="Our " heading="Process" />
        </div>

        <div className="
          flex flex-col md:flex-row md:flex-wrap 
          gap-y-12 md:gap-y-24 
          items-center justify-center 
          mt-10 md:mt-20
        ">
          {renderSteps}
        </div>

      </div>
    </section>
  )
}

export default Process

const steps = [
  {
    id: 1,
    number: <Bs1CircleFill />,
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icons: <PiPlantFill />
  },
  {
    id: 2,
    number: <Bs2CircleFill />,
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icons: <PiFactory />
  },
  {
    id: 3,
    number: <Bs3CircleFill />,
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icons: <HiMiniPercentBadge />
  },
  {
    id: 4,
    number: <Bs4CircleFill />,
    title: 'Delivery',
    para: 'It is a long established fact that a reader',
    icons: <CiDeliveryTruck />
  }
]
