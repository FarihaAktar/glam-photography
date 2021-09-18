import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addServices, loadServices } from '../../../redux/services/serviceSlice';
import Service from './Service'

const Main = () => {
    const services = useSelector(loadServices)

    // console.log(services)

    const dispatch = useDispatch()


    useEffect(() => {
        const sendGetRequest = async () => {
            await axios.get("https://lit-temple-74019.herokuapp.com/allServices")
                // .then(res => res.json())
                .then(res => {
                    // console.log(res.data)
                    dispatch(addServices(res?.data))
                })
                .catch(err => {
                    // Handle Error Here
                    console.error(err);
                });
        }
        sendGetRequest()

    }, [])




    return (
        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-6 mt-24'>
            {
                services ?  services?.map(data => <Service data={data} key={data.id} />) 
                : null
            }
            {/* {
                
                services?.map(data => <Service data={data} key={data.id} />)
            } */}

        </div>
    )
}

export default Main
