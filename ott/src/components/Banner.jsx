import React from 'react'
import background from '../assets/background.jpeg'
const Banner = () => {
    return (
        <div className='  h-[70vh]  md:h-[65vh] bg-cover bg-center bg-no-repeat flex items-center' style={{ backgroundImage: `url(${background})` }}>
            <div className='text-center text-2xl w-full text-gray-900  translate-y-56 bg-violet-300 '>Infinity War</div>
        </div>
    )
}

export default Banner