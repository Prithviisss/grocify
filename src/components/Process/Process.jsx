import React from 'react'
import Heading from '../Heading/Heading'
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill,Bs4CircleFill } from "react-icons/bs";
import { PiFactory, PiPlantFill } from "react-icons/pi";
import { HiMiniPercentBadge } from "react-icons/hi2";
import { CiDeliveryTruck } from "react-icons/ci";
const Process = () => {
    const renderSteps=steps.map(item=>{
        return(
            <div className={`flex-1 ${item.id %2===0? '-mt-50':" "}`}>
                <span className=' flex justify-center items-center w-18 h-18 rounded-full text-8xl bg-zinc-800  outline-[4px] outline-offset-7 text-white outline-zinc-800 outline-dotted' >{item.number}</span>
                <div className='flex items-center gap-x-5 mt-10'>
                    <span className='flex justify-center text-3xl items-center bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full '>{item.icons}</span>
                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'> {item.title}</h4>
                        <p className='text-zinc-600 mt-2'> {item.para}</p>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20' >
                <div className='w-fit mr-auto '> <Heading highlight="Our  " heading="Process" /></div>
                <div className='flex items-center justify-center  mt-20 pt-50 '>
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
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icons:<CiDeliveryTruck />
    },
]