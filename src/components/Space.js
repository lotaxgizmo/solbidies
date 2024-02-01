import React from 'react'
import greenslide from '../assets/greenslide.gif'
import yellowslide from '../assets/yellowslide.gif'

function Space() {
    return (
        <div className='h-40d  w-full  bg-black'>
            <div className='relative flex flex-col justify-between '>
                <img src={greenslide} alt="" className='w-[3000px] mb-20 -rotate-3 z-20' />
                <img src={yellowslide} alt="" className='w-[3000px] self-end place-self-end justify-self-end rotate-3 z-20' />
            </div>
        </div>
    )
}

export default Space