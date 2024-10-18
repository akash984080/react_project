import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/cinema.png'
const Navbar = () => {
    return (
        <div className='border'>
            <nav className='container flex items-center m-2' >
                <img src={logo} className=' h-10 w-10 rounded-full' alt="" />
                <ul className='flex items-center space-x-4 text-blue-400 font-extrabold text-2xl p-2'>

                    <li><Link to={'/'}>Movies</Link> </li>
                    <li><Link to={'/watchlist'}>Watchlist</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar