import React from 'react'
import watchout from '../assets/watchout.svg'
import purplebtn from '../assets/purplebtn.svg'

function Watch() {
    return (
        <div className='bg-black flex flex-col justify-center items-center '>

            <img src={watchout} alt="" className='w-96 lg:w-[700px] mb-10 lg:mb-20 mt-10' />
            <img src={purplebtn} alt="" className='glow2 mb-10' />

        </div>
    )
}

export default Watch