import React from 'react'
import maingif from '../assets/maingif.GIF'
// import beware from '../assets/beware.gif'
import nowhere from '../assets/nowhere.svg'
import downhero from '../assets/downhero.svg'
import tophero from '../assets/tophero.svg'

function Beware() {
    return (
        <div className='relative flex flex-col items-center bg-black py-10 pb-20 px-4'>
            {/* <img src={beware} alt="" className='mb-10' /> */}

            <img src={tophero} alt="" className='mt-32 lg:mt-24 w-[1019px] z-[3]' />
            <img src={maingif} alt="" className='absolute pb-5 mb-9 lg:mb-1 mt-[-s130px]- w-[430px] lg:w-[630px] z-[3] top-52 lg:bottom-10' />
            {/* <img src={maingif} alt="" className='absolute. mt-20 w-[430px] lg:w-[730px] z-[3] top-52 lg:bottom-10' /> */}

            <img src={downhero} alt="" className=' mt-20 lg:mt-[-130px] w-[1000px] z-[4]' />

            <img src={nowhere} alt="" className='hidden lg:flex  mt-[-500px] mb-[-400px] z-30 w-full' />
        </div>
    )
}

export default Beware