import React from 'react'
import LINES from '../assets/LINES.svg'
import mintbutton1 from '../assets/mintbutton1.svg'
import downhero from '../assets/downhero.svg'
import tophero from '../assets/tophero.svg'
import fronthead from '../assets/fronthead.svg'
import greenheadside from '../assets/greenheadside.svg'

function Hero() {
    return (
        <div className='heroback h-screen relative flex flex-col   items-center'>
            <img src={tophero} alt="" className='mt-24 w-[1019px]' />
        </div>
    )
}

export default Hero