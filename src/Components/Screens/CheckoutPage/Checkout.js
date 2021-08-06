import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App'

const Checkout = () => {
    const { key } = useParams();
    const { register, handleSubmit } = useForm();
    const [bookings, setBookings] = useState({});
    const [bookingList, setBookingList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // service detail
    useEffect(() => {
        fetch('http://localhost:4000/singleService/' + key)
            .then(res => res.json())
            .then(data => setBookings(data[0]))
    }, []);

    // bookings
    const onSubmit = data => {
        const status = 'Pending';
        const productBooking = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            booking: bookings,
            status: status
        }

        const url = 'http://localhost:4000/addBooking';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productBooking)
        })
            .then(res => {
                console.log('server site response', res);
                alert("Product is booked successfully")
            })


    };

    // ordered items
    useEffect(() => {
        fetch('http://localhost:4000/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
            })
    }, [])


    return (
        <div className='add-blog-section h-screen'>
            <div className='flex justify-center items-center pt-20'>
                <div className='rounded-full border-gray-700 border-4 mr-8'></div>
                <h1 className='text-center text-3xl text-custom' >Checkout Page</h1>
                <div className='rounded-full border-gray-700 border-4 ml-8'></div>
            </div>
            <h1 className='text-center text-gray-500 text-xl' >Fill Out This Form To Place Your Order</h1>
            <h1 className='text-center text-red-500 text-xl mt-4'>You Ordered {bookingList.length !== 0 ? bookingList.length : 0} Service. <span className='text-gray-700'>Your service is {bookingList.length !== 0 ? bookingList[0]?.status : ""} !</span></h1>
            <form className='lg:w-5/12 md:w-7/12 sm:w-8/12 w-8/12 p-6 m-auto mt-14' onSubmit={handleSubmit(onSubmit)}>
                <input className='bg-transparent border-b-2 border-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent' placeholder="Enter Name" required {...register("name")} />
                <br />
                <br />
                <input className='bg-transparent border-b-2 border-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent' placeholder="Enter Email Address" required {...register("email")} />
                <br />
                <br />
                <input className='bg-transparent border-b-2 border-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-transparent' placeholder="Enter Phone Number" required {...register("phone")} />
                <br />
                <br />
                <input className='cursor-pointer border border-yellow-600 px-6 py-2 bg-yellow-600 text-gray-100 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-70' type="Submit" />
            </form>

        </div>
    )
}

export default Checkout
