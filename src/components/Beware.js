import React from 'react'
import beware from '../assets/beware.gif'
import nowhere from '../assets/nowhere.svg'

function Beware() {
    return (
        <div className='flex flex-col items-center bg-black py-10'>
            <img src={beware} alt="" className='mb-10' />
            <img src={nowhere} alt="" className='hidden lg:flex  mt-[-500px] mb-[-400px] z-30 w-full' />
        </div>
    )
}

export default Beware