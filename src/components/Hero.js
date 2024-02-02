import React from 'react'
import LINES from '../assets/LINES.svg'
import mintbutton1 from '../assets/mintbutton1.gif'
import mintbutton2 from '../assets/mintbutton2.gif'
import downhero from '../assets/downhero.svg'
import tophero from '../assets/tophero.svg'
import fronthead from '../assets/fronthead.png'
import greenheadside from '../assets/greenheadside.svg'
import maingif from '../assets/beware.gif'
// import maingif from '../assets/maingif.GIF'

function Hero() {
    return (
        <div className='heroback h-screen lg:h-auto relative flex flex-col   items-center'>
            {/* <img src={tophero} alt="" className='mt-32 lg:mt-24 w-[1019px] z-[3]' /> */}
            {/* <img src={maingif} alt="" className='absolute mt-[-s130px]- w-[430px] lg:w-[630px] z-[3] top-52 lg:bottom-10' /> */}
            <img src={maingif} alt="" className='absolute. mt-20 w-[430px] lg:w-[730px] z-[3] top-52 lg:bottom-10' />

            {/* <img src={downhero} alt="" className=' mt-20 lg:mt-[-130px] w-[1000px] z-[4]' /> */}
            <img src={mintbutton1} alt="" className='hidden lg:flex mt-10 w-[1019pxe] z-[4]' />
            <img src={mintbutton2} alt="" className='lg:hidden flex mt-10 w-44 z-[4]' />
        </div>
    )
}

export default Hero