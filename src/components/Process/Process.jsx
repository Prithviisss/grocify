import React from 'react'
import Heading from '../Heading/Heading'
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill,Bs4CircleFill } from "react-icons/bs";
import { PiFactory, PiPlantFill } from "react-icons/pi";
import { HiMiniPercentBadge } from "react-icons/hi2";
import { CiDeliveryTruck } from "react-icons/ci";
const Process = () => {
    const renderSteps=steps.map(item=>{
        return(
            <div>
                <span>{item.number}</span>
                <div>
                    <div><span>{item.icons}</span></div>
                    <div>
                        <h4> {item.title}</h4>
                        <p> {item.para}</p>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20' >
                <div className='w-fit mr-auto '> <Heading highlight="Our  " heading="Process" /></div>
                <div>
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