import React, { useEffect, useState } from 'react';
import Service from './Service';
import AdminBar from '../AdminPage/AdminBar';

const ManageService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/manageService")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    return (
        <>
        <AdminBar/>
        <div className='add-blog-section h-screen'>
            <div className='flex justify-center items-center pt-10'>
                <div className='rounded-full border-gray-700 border-4 mr-8'></div>
                <h1 className='text-center text-3xl text-custom' >Manage Your Services</h1>
                <div className='rounded-full border-gray-700 border-4 ml-8'></div>
            </div>
            <table className='table-auto lg:w-10/12 md:w-11/12 sm:w-full w-full m-auto mt-14'>
                <thead className=''>
                    <tr className='border-b-2 border-gray-400'>
                        <th className='w-1/2 text-custom text-2xl'>Title</th>
                        <th className='w-1/4 text-custom text-2xl'>Price</th>
                        <th className='w-1/4 text-custom text-2xl'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services?.map(service => <Service key={service._id} service={service}></Service>)
                    }

                </tbody>
            </table>
        </div>
        </>
    )
}

export default ManageService
