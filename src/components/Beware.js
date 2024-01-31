import React from 'react'
import beware from '../assets/beware.svg'
import nowhere from '../assets/nowhere.svg'

function Beware() {
    return (
        <div className='flex flex-col items-center bg-black py-10'>
            <img src={beware} alt="" />
            <img src={nowhere} alt="" />
        </div>
    )
}

export default Beware