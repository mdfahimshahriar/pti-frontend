import React from 'react'

const Card = ({item}) => {
  return (
    <div className='mt-9'>
        <img className='w-[300px] h-[450px] rounded-2xl' src={item.ImageUrl} alt={item.name}/>
    </div>
  )
}

export default Card