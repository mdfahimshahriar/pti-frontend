import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import footerImage from '../assets/footer.png'

const Footer = () => {
  return (
    <div className='bg-amber-500 flex justify-around items-center w-auto h-[500px]'>
        <div className='relative'>
            <input className='w-[800px] h-[75px] pl-5 pr-20 py-5 rounded-[15px] text-black' type='text' placeholder='Enter Your Email'/>
            <button className='absolute w-[200px] right-0 top-0 mt-[5px] mr-[5px] bg-orange-700 p-5 rounded-3xl text-white flex items-center'>
              <span className='mr-[70px]'>Subscribe</span>                     
              <FaArrowRightLong />
            </button>
            <div className='flex justify-between items-center'>
                <div>
                    <div>
                        <span className='font-bold text-[75px]'>pti</span>
                        <span className='text-orange-700 text-[75px]'>.</span>
                    </div>
                    <div>
                        <span className='font-bold'>Copyright Tripp.All Right Reserved</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 text-3xl text-orange-700'>
                    <FaGoogle />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
        <div>
            <img src={footerImage} alt="Footer" />
        </div>
    </div>
  )
}

export default Footer