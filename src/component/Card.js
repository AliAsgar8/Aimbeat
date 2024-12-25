import React from 'react'
import star from '../assets/images/png/star.png'

const Card = ({ id, image, name, price }) => {
  return (
    <div>
       <div  className='text-gray-700 cursor-pointer w-[200px]  transform transition-transform duration-300 ease-in-out  '>
            <div className='w-[200px]'>
                <img src={image} alt="" className=' w-full' />
            </div>
            
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <div className='h-[20px] w-[20px] flex items-center pb-2'>
                    <img src={star} alt="title" className='h-full w-full' />
                    <img src={star} alt="title" className='h-full w-full' />
                    <img src={star} alt="title" className='h-full w-full' />
                    <img src={star} alt="title" className='h-full w-full' />
                    <img src={star} alt="title" className='h-full w-full' />
                </div>
                <p className='text-sm  font-medium'>${price}</p>
          
        </div>
    </div>
  )
}

export default Card
