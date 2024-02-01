import React from 'react'
import joinus from '../assets/joinus.svg'
import joinusmob from '../assets/joinusmob.svg'
import discordbtn from '../assets/discordbtn.svg'
import somethingbtn from '../assets/somethingbtn.svg'
import telegrambtn from '../assets/telegrambtn.svg'
import twitterbtn from '../assets/twitterbtn.svg'
import roach from '../assets/roach.GIF'

function Joinus() {
    return (
        <div className='z-[9] flex flex-col bg-black items-center justify-center pb-20'>
            <img src={joinus} alt="" className='z-[9] hidden lg:flex lg:rotate-[8.86deg] my-10' />
            <img src={joinusmob} alt="" className='z-[9] lg:hidden flex lg:rotate-[8.86deg] my-10' />
            <img src={roach} alt="" className='' />
            <div className="z-[9] links flex flex-col lg:flex-row items-center lg:rotate-[8.86deg]">
                <img src={somethingbtn} alt="" className='z-[9] m-3' />
                <img src={telegrambtn} alt="" className='z-[9] m-3' />
                <img src={twitterbtn} alt="" className='z-[9] m-3' />
                <img src={discordbtn} alt="" className='z-[9] m-3' />
            </div>

        </div>
    )
}

export default Joinus