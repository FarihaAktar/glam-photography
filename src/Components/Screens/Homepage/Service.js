import React from 'react';
import {Link} from 'react-router-dom'
import { addSingleService } from '../../../redux/services/serviceSlice';
import { useDispatch } from 'react-redux';

const Service = ({data}) => {
    const {imageURL, title, _id} = data;

    const dispatch = useDispatch();

    return (
        <div className='flex flex-col items-center'>
            <img className='w-64 h-72 object-cover' src={imageURL} alt="" />
            <h1 className='text-xl' style={{fontFamily: `'Lobster', cursive`}}>{title}</h1>
            <div className='flex text-lg text-yellow-600 mt-2'>
                <Link onClick={()=>dispatch(addSingleService(_id))} className='pr-4 hover:text-gray-500' to={'/singleService/' + _id}>Learn More</Link>
                <Link className='hover:text-gray-500' to={'/checkout/' + _id}>Buy Now</Link>
            </div>
        </div>
    )
}

export default Service
