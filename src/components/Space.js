import React from 'react'
import greenslide from '../assets/greenslide.gif'
import yellowslide from '../assets/yellowslide.gif'
import toiletjump from '../assets/toiletjump.GIF'


function Space() {
    return (
        <div className='h-40d  w-full  bg-black'>
            <div className='relative flex flex-col items-center '>
                <img src={greenslide} alt="" className='max-w-none w-[3000px] mb-40 -rotate-6 z-20' />
                <img src={yellowslide} alt="" className='max-w-none w-[3000px]  rotate-6 z-20' />
                <img src={toiletjump} alt="" className='absolute right-0' />
            </div>
        </div>
    )
}

export default Space