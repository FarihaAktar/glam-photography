import React, { useEffect, useState } from 'react';
import Service from './Service'

const Main = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://lit-temple-74019.herokuapp.com/allServices")
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);

    return (
        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 gap-6 mt-24'>
           {
               services.map(data => <Service data={data} key={data.id}/>)
           }
        </div>
    )
}

export default Main
