import React from 'react'

const Moviecard = ({ path, title, handlewatchlist, handleremovewatchlist, movieobj, watchlist }) => {
    // https://th.bing.com/th/id/OIP.r2zR1kgdSBUAyxKwHPdd0QHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7

    function doescontain(movieobj) {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id == movieobj.id) {
                return true
            }
        }
        return false

    }


    return (
        <div>
            <div className='h-[40vh] w-[200px] hover:cursor-pointer hover:scale-95 duration-200 rounded-xl relative ' style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/w220_and_h330_face/${path})` }}>

                {
                   doescontain(movieobj) ? (<div className='absolute right-2 top-2 bg-gray-300 rounded ' onClick={() => (handleremovewatchlist(movieobj))} > &#10060;</div>)
                        : (<div onClick={() => (handlewatchlist(movieobj))} className='absolute right-2 top-2 bg-gray-300 rounded '> &#128525;</div>)

                }


                <div className='text-white text-center text-xl w-full bg-gray-900 rounded-md absolute bottom-0 '>
                    {title}
                </div>

            </div>
        </div>
    )
}



export default Moviecard