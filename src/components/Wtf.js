import React from 'react'
import checkback from '../assets/checkback.svg'
import greenback from '../assets/greenback.svg'
import gootoilet from '../assets/gootoilet.svg'
import greengif from '../assets/greengif1.gif'
import Downdiv from './Wtf/Downdiv'

function Wtf() {
    return (
        <div className='bg-black h-screen. flex flex-col relative overflow-hidden pb-96d '>
            <div className="relative flex flex-col px-4">
                {/* <img src={greengif} alt="" className='absoluted z-[20] right-20 lg:hidden  flex' /> */}
                <div className='flex mt-32'>
                    <h2 className='text-black lg:text-white  mix-blend-normal lg:mix-blend-difference  leading-[100px] text-[90px] monument z-20'>?????</h2>
                </div>
                <div className="together hidden lg:flex lg:flex-row flex-col justify-between ">
                    <h2 className='text-white mix-blend-difference  leading-[200px] text-[100px] lg:text-[200px] monument z-10'>WTF</h2>
                    <h2 className='text-white mix-blend-difference  leading-[200px] text-[100px] lg:text-[200px] monument z-10'>-IS</h2>
                </div>

                <div className="together flex lg:hidden lg:flex-row flex-col justify-between">
                    <h2 className='text-black   leading-[200px]D text-[50px]   monument z-10'>WTF IS</h2>
                    <h2 className='text-black   leading-[200px]D text-[50px]   monument z-10'>SOLBIDIES</h2>
                </div>


                <div className="relative hidden lg:flex flex-col ">
                    <h2 className='text-white mix-blend-difference  leading-[200px] text-[200px] monument z-10 '> SOL </h2>
                    <h2 className='text-white mix-blend-difference  leading-[200px] text-[200px] monument z-10 self-end'> -BIDIES?</h2>
                    <img src={greengif} alt="" className='w-96 absolute z-[9] right-20 hidden lg:flex' />
                </div>
            </div>

            <div className="relative flex lg:w-[550px] px-4 z-20 lg:h-20 mt-10">
                <p className='flex lg:absolute monument text-3xl z-20 top-1 '>
                    Solbidies is an AI NFT collection found in the deepest recesses of the Solana blockchain. A 3333 count collection paying homage to the most viral meme of 2023, the Skibidi toilets.
                </p>
            </div>


            <Downdiv />

            <div className='z-[6]'>
                <img src={greenback} alt="" className='absolute top-0 z-[6]' />
                <img src={checkback} alt="" className='absolute top-80 lg:top-96 right-[-200px]  z-[6]' />
            </div>
        </div>
    )
}

export default Wtf