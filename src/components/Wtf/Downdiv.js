import React from 'react'
import greeenmintbutton from "../../assets/greeenmintbutton.svg"
import teethtoilet from '../../assets/teethtoilet.svg'
import popgif from '../../assets/popgif.GIF'

function Downdiv() {
    return (
        <div className="seclayer h-auto  z-10 bg-[#B8FF00] flex flex-col px-4 pb-20 pt-20 back1">
            {/* <img src={gootoilet} alt="" className='absoluted z-[20] right-20 lg:hidden  flex' /> */}
            <div className="relative text flex flex-col self-ends justify-end items-end">
                <h2 className='lg:w-[600px] text-black leadisng-[200px] lg:text-right text-[45px] lg:text-[65px] monument z-10 self-end'>
                    WE WANTED TO TAKE THE META-
                </h2>
                <h2 className='lg:w-[900px] text-black leadisng-[200px] lg:text-right text-3xl lg:text-[32px] monument z-10'>
                    of Solana Shitters and realize it in a way that resonates with Shitcoin degenerates from all walks of life.
                </h2>
                <img src={popgif} alt="" className='w-96 absolute z-30 left-0 bottom-[-150px]  hidden  lg:flex' />
            </div>
            {/* <img src={gootoilet} alt="" className='absoluted z-[20] right-20 lg:hidden  flex' /> */}

            <div className="text flex flex-col self-start justify-start items-start">
                <h2 className='lg:w-[600px] text-black leadisng-[200px] lg:text-left text-[45px] lg:text-[135px] monument z-10 mt-20 lg:mt-0'>
                    FLUSH-
                </h2>
                <h2 className=' lg:w-[1100px] text-black leadisng-[200px] text-left text-3xl lg:text-5xl monument z-10'>
                    your Solana down the toilet, bid the Solbidies
                </h2>
                <img src={greeenmintbutton} alt="" className='my-10 self-center lg:self-auto' />
            </div>

        </div>
    )
}

export default Downdiv