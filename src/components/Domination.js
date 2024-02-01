import React from 'react'
import dominationback from '../assets/dominationback.svg'
import brainwash from '../assets/brainwash.gif'
import brainwashmob from '../assets/brainwashmob.svg'
import extinction from '../assets/extinction.gif'
import extinctionmob from '../assets/extinctionmob.svg'
import takeovermob from '../assets/takeovermob.svg'
import takeover from '../assets/takeover.gif'
import yellow from '../assets/yellow.GIF'
import boom from '../assets/boom.GIF'
import eww from '../assets/eww.GIF'
import ndpurplebtn from '../assets/ndpurplebtn.svg'

function Domination() {
    return (
        <div className='bg-[#6A0F7B] h-screens flex flex-col items-center relative pt-5 z-[7]'>
            <img src={dominationback} alt="" className='absolute z-0   Lw-[1000px] lg:top-5' />

            <h2 className='z-10 stretch text-white text-center text-4xl lg:text-8xl'>World Domination</h2>

            <img src={takeover} alt="" className='z-10 my-3 lg:my-7 hidden lg:flex' />
            <img src={brainwash} alt="" className='z-10 my-3 lg:my-7 hidden lg:flex' />
            <img src={extinction} alt="" className='z-10 my-3 lg:my-7 hidden lg:flex' />

            <img src={takeovermob} alt="" className='z-10 lg:my-7 lg:hidden flex my-5   p-2' />
            <img src={yellow} alt="" className='z-10 lg:my-7 lg:hidden flex my-5   p-2' />
            <img src={brainwashmob} alt="" className='z-10 lg:my-7 lg:hidden flex my-5  p-2' />
            <img src={boom} alt="" className='z-10 lg:my-7 lg:hidden flex my-5   p-2' />
            <img src={extinctionmob} alt="" className='z-10 lg:my-7 lg:hidden flex my-5 p-2' />
            <img src={eww} alt="" className='z-10 lg:my-7 lg:hidden flex my-5   p-2' />

            <img src={ndpurplebtn} alt="" className='z-10 my-3 lg:my-10 ' />

        </div>
    )
}

export default Domination