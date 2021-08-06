import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App';
import AddServices from './AddServices';
import AdminBar from './AdminBar';


const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/admin?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data)
            })
    },[])


    return (
        <div>
            {
                isAdmin?.length !== 0 ?
                    <div>
                        <AddServices/>        
                    </div>
                    :
                    <div className='flex justify-center items-center pt-20'>
                        <div className='rounded-full border-gray-700 border-4 mr-8'></div>
                        <h1 className='text-center text-3xl text-custom'>Only Admin Can Access This Page</h1>
                        <div className='rounded-full border-gray-700 border-4 ml-8'></div>
                    </div>

            }
        </div>
    )
}

export default AdminPage
