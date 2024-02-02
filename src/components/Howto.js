import React from 'react'
import howto from '../assets/howto.gif'
import setup from '../assets/setup.gif'
import select from '../assets/select.gif'
import confirm from '../assets/confirm.gif'
import mintblackbtn from '../assets/mintblackbtn.svg'

import setupmob from '../assets/setupmob.svg'
import selectmob from '../assets/selectmob.svg'
import confirmmob from '../assets/confirmmob.svg'

function Howto() {
    return (
        <div className='relative bg-black flex flex-col items-center z-[7]'>
            <img src={howto} alt="" className='z-[7] w-full mb-[-50px] lg:mbd-[-300px]' />
            <img src={setup} alt="" className='z-[7] m-3 my-5 lg:flex hidden' />
            <img src={select} alt="" className='z-[7] m-3 my-5 lg:flex hidden' />
            <img src={confirm} alt="" className='z-[7] m-3 my-5 lg:flex hidden' />
            <img src={setupmob} alt="" className='z-[7] m-3 my-5 flex lg:hidden' />
            <img src={selectmob} alt="" className='z-[7] m-3 my-5 flex lg:hidden' />
            <img src={confirmmob} alt="" className='z-[7] m-3 my-5 flex lg:hidden' />
            <img src={mintblackbtn} alt="" className='glow3 z-[7]  my-10' />
        </div>
    )
}

export default Howto