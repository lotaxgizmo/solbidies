/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import line from '../assets/line.svg'

function Header() {
    return (
        <>
            <div className="hidden lg:flex stretch text-xl  flex-row justify-center items-center bg-white top-0 h-10 border-b-4 border-black fixed  w-screen z-[50] text-black [#6A0F7B] overflow-clip px-8">
                <img src={line} alt="" />
                <a href="#" target="_blank" rel="noopener noreferrer">Home</a>
                <img src={line} alt="" />
                <a href="#" target="_blank" rel="noopener noreferrer">Mint</a>
                <img src={line} alt="" />
                <a href="#" target="_blank" rel="noopener noreferrer">About</a>
                <img src={line} alt="" />
                <a href="#" target="_blank" rel="noopener noreferrer">Other</a>
                <img src={line} alt="" />
            </div>

            <div className="hidden lg:flex bg-[#00FFA3] h-10 top-10 border-b-4 border-black fixed  w-screen  items-center justify-center z-[5]">
                <p className='stretch text-xl'>
                    Flush your Solana down the toilet, bid the Solbidies
                </p>
            </div>


            <div className="mobile">
                <div className="lg:hidden flex stretch text-lg flex-row justify-center items-center bg-white top-0 h-10 border-b-4 border-black fixed  w-screen z-[50] text-black [#6A0F7B] overflow-clip px-8">

                    <a href="#" target="_blank" rel="noopener noreferrer">Home</a>
                    <img src={line} alt="" />
                    <a href="#" target="_blank" rel="noopener noreferrer">About</a>
                    <img src={line} alt="" />
                    <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>

                </div>
                <div className="lg:hidden flex stretch text-lg flex-row justify-center items-center bg-white bottom-0 h-10 border-b-4 border-black fixed  w-screen z-[50] text-black [#6A0F7B] overflow-clip px-8">

                    <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
                    <img src={line} alt="" />
                    <a href="#" target="_blank" rel="noopener noreferrer">Mint</a>
                    <img src={line} alt="" />
                    <a href="#" target="_blank" rel="noopener noreferrer">Other</a>

                </div>
            </div>
        </>
    )
}

export default Header