import React from 'react'
import bannerImage from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='mt-[100px] w-[1460px] flex justify-around items-center bg-gradient-to-r from-amber-500 to-amber-600 p-[100px] rounded-[45px]'>
        <div>
            <h1 className='font-bold text-[60px] text-white'>Deliver Food To Your</h1>
            <h1 className='font-bold text-[60px] text-white'>Door Step|</h1>
            <p className='text-[30px] text-zinc-200'>Authentic Food|,Quick Service,Fast Delivery</p>
        </div>
        <div>
            <img src={bannerImage} alt="Banner" />
        </div>
    </div>
  )
}

export default Banner