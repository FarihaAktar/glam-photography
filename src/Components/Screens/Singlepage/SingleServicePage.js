import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleServicePage = () => {
    const { id } = useParams();

    const [singleService, setSingleService] = useState({});


    useEffect(() => {
        fetch("https://lit-temple-74019.herokuapp.com/singleService/" + id)
            .then(res => res.json())
            .then(data => {
                setSingleService(data[0])
            })
    });

    const { title, description, imageURL, price, _id } = singleService;

    return (
        <div className='lg:w-10/12 md:w-11/12 sm:w-11/12 w-11/12 m-auto'>
            <div className=' mt-14 lg:w-9/12 md:w-10/12 sm:w-full w-full p-5'>
                <h1 className='text-4xl font-black mt-6'>{title}</h1>
                <p className='mt-6 text-2xl text-gray-600 w-10/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, aspernatur.</p>
                <img className='mt-6 w-11/12 h-96 object-cover' src={imageURL} alt="" />
                <p className='mt-8 w-11/12'>{description}</p>
                <h2 className='text-2xl font-black mt-3'>More About The Topic</h2>
                <p className='mt-2 w-11/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quo error inventore voluptates asperiores. Et laborum sed provident. Perspiciatis, itaque?</p>
            </div>
            <div >
                <p className='text-2xl text-gray-500 font-black mb-6'>Price: {price}</p>
                <Link className='text-xl text-yellow-800 hover:text-gray-800 font-black pb-11' to={'/checkout/' + _id}>Buy Now</Link>
            </div>

        </div>
    )
}

export default SingleServicePage
