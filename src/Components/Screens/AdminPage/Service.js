import React from 'react'

const Service = ({ service }) => {
    const { price, title, _id, description } = service;

    const deleteBlog = (id) => {
        fetch("http://localhost:4000/delete/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully", result);
                alert("Product is deleted successfully!")
            })
    }
    return (
        <>
            <tr className='border-b-2 border-gray-400'>
                <td className='p-2'>{title}</td>
                <td>{price}</td>
                <td className='cursor-pointer hover:text-red-900' onClick={() => deleteBlog(_id)}>Delete</td>
            </tr>
        </>
    )
}

export default Service
