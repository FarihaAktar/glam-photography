import React, { useEffect, useState } from 'react';
import AdminBar from './AdminBar';
import Bookings from '../AdminPage/Bookings'

const BookingList = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch("https://lit-temple-74019.herokuapp.com/manageBookings")
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])


    return (
        <>
        <AdminBar/>
        <div className='add-blog-section h-screen'>
            <div className='flex justify-center items-center pt-10'>
                <div className='rounded-full border-gray-700 border-4 mr-8'></div>
                <h1 className='text-center text-3xl text-custom' >Booking List</h1>
                <div className='rounded-full border-gray-700 border-4 ml-8'></div>
            </div>
            <table className='table-auto lg:w-10/12 md:w-11/12 sm:w-full w-full m-auto mt-14'>
                <thead className=''>
                    <tr className='border-b-2 border-gray-400'>
                        <th className='w-1/4 text-custom text-2xl'>Name</th>
                        <th className='w-1/4 text-custom text-2xl'>Email ID</th>
                        <th className='w-1/4 text-custom text-2xl'>Phone</th>
                        <th className='w-1/4 text-custom text-2xl'>Service</th>
                        <th className='w-1/4 text-custom text-2xl'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map(booking => <Bookings key={booking._id} booking={booking}></Bookings>)
                    }

                </tbody>
            </table>
        </div>
            
        </>
    )
}

export default BookingList
