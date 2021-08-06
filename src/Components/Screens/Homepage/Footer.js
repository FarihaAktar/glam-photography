import React from 'react'

const Footer = () => {
    return (
        <div className='flex lg:flex-row sm:flex-col flex-col justify-around mt-24 p-20 bg-gray-700'>
            <div>
                <h1 className='text-2xl text-white font-black mb-4'>About Studio</h1>
                <p className='text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod enim rerum ex?</p>
            </div>
            <div className='lg:mt-0 sm:mt-6 mt-6'>
                <h1 className='text-2xl text-white font-black mb-4'>Contact</h1>
                <h1 className='text-gray-300'>7429348922</h1>
                <h1 className='text-gray-300'>4096 N Highland St.,
                    Arlington VA 32101, USA</h1>
                <h1 className='text-gray-300'>email@example.com</h1>
            </div>
        </div>
    )
}

export default Footer
