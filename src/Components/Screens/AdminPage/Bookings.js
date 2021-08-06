import React from 'react';
import { useForm } from "react-hook-form";

const Bookings = ({ booking }) => {
    const { register, handleSubmit } = useForm();
    const { name, email, phone, status, _id } = booking;



    const onSubmit = (data) => {
        
        const newStatus = {
            status: data.status,
          
        }
        fetch(`http://localhost:4000/update/${_id}`,{
            method: 'PATCH',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStatus)
        })
        .then(res => res.json())
        .then(data => {
            console.log('updated', data);
            alert("Product is updated successfully!")
        })

    }

    return (
        <>
            <tr className='border-b-2 border-gray-400'>
                <td className='p-2'>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{booking?.booking?.title}</td>
                <td>
                <form className='lg:w-5/12 md:w-7/12 sm:w-8/12 w-8/12 p-6 m-auto mt-14' onSubmit={handleSubmit(onSubmit)}>
                    <input className='border border-current focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ' placeholder={status} required {...register("status")} />
                    <input className='cursor-pointer bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50' type="submit" />
                </form>
                </td>


            </tr>
        </>
    )
}

export default Bookings
