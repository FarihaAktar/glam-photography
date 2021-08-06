import React from 'react';
import { Link } from 'react-router-dom';

const AdminBar = () => {
    return (
        <nav className='flex justify-center items-center bg-gray-700 shadow-2xl'>
            <Link className='p-6 font-black hover:text-yellow-600 text-white' to='/addService'>ADD SERVICE</Link>
            <Link to='/' className='px-8 text-2xl text-yellow-400 text-custom hover:text-yellow-600'>Home</Link>
            <Link className='p-6 font-black hover:text-yellow-600 text-white' to='/manageService'>MANAGE SERVICES</Link>
            <Link className='p-6 font-black hover:text-yellow-600 text-white' to='/bookingList'>BOOKINGS</Link>
        </nav>
    )
}

export default AdminBar;
