import React from 'react'
import footer from '../assets/footer.svg'

function Footer() {
    return (
        <div className='bg-black flex flex-col items-center'>

            <img src={footer} alt="" className='w-60 m-5' />
        </div>
    )
}

export default Footer