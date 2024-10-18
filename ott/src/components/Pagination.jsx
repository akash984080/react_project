import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Pagination = ({prev , next ,page}) => {
    return (
        <div className='bg-gray-600 flex justify-center items-center gap-5 text-white'>
            <div onClick={prev} className='hover:cursor-pointer'><FaArrowLeft  /></div>
            <div>{page}</div>
            <div onClick={next} className='hover:cursor-pointer'><FaArrowRight /></div>

        </div>
    )
}

export default Pagination