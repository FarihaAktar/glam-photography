import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <header>
            <div className='navbar flex lg:flex-row sm:flex-col  lg:justify-evenly sm:justify-center  pt-7'>
                <div className='text-3xl text-white font-black'>Glam</div>
                <nav className=''>
                    <ul className='flex text-lg'>
                        <li className='pr-12 text-white font-black'>
                            <Link>Home</Link>
                        </li>
                        <li className='pr-12 text-white font-black'>
                            <Link>Contact</Link>
                        </li>
                        <li className='pr-12 text-white font-black'>
                            <Link>About</Link>
                        </li>
                        <li className='text-white font-black'>
                            <Link to='/adminPage'>Admin</Link>
                        </li>
                    </ul>
                </nav>
                <div className='lg:block sm:hidden'>
                    <ul className='flex'>
                        <li className='pr-8 text-white font-black'>
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                        </li>
                        <li className='pr-8 text-white font-black'>
                            <a href="https://twitter.com/login"><FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li className='text-white font-black'>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='background flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='lg:text-5xl md:text-3xl text-2xl text-gray-50'>Creative Photography Studio</h1>
                    <p className='text-xl text-yellow-100 mt-5' style={{ fontFamily: `'Lobster', cursive` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure temporibus provident laudantium.</p>
                </div>

            </div>
        </header>
    )
}

export default Header;

