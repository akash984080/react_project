import React, { useEffect, useState } from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import genre_ids from '../data/data';

const WatchList = ({ watchlist, setwatchlist,handleremovewatchlist }) => {
  const [search, setsearch] = useState('')
  const [generelist, setgenerelist] = useState(['All genres'])
  const [currentgenre, setcurrentgenre] = useState("All genres")

  const handleascending = () => {
    const sort = watchlist.sort((movie1, movie2) =>
      movie1.vote_average - movie2.vote_average

    )
    setwatchlist([...sort])
  }

  const handledescending = () => {
    const sort = watchlist.sort((movie1, movie2) =>
      movie2.vote_average - movie1.vote_average

    )
    setwatchlist([...sort])
  }

  const handlefiltergenre = (genre) => {
    setcurrentgenre(genre)
  }

  useEffect(() => {
    let genre = watchlist.map((movie) => genre_ids[movie.genre_ids[0]])
    genre = new Set(genre)
    setgenerelist(['All genres', ...genre])
  }, [watchlist])

  return (
    <>
      <div className='flex justify-center  flex-wrap m-4'>
        {
          generelist.map((moviegenre) =>
            <div onClick={() => handlefiltergenre(moviegenre)} className={currentgenre === moviegenre ? "flex justify-center items-center mr-4 h-[3rem] w-[9rem] bg-blue-400 rounded-xl  text-center cursor-pointer " : 'flex justify-center items-center h-[3rem] w-[9rem] mr-4 bg-gray-400/50 rounded-xl text-white font-bold cursor-pointer'} >
              {moviegenre}
            </div>

          )
        }
      </div>

      <div className='flex justify-center mt-5'>
        <input type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-100 border rounded p-2 text-2xl outline-none' value={search} onChange={(e) => setsearch(e.target.value)} />
      </div>

      <div className='border border-gray-200 rounded mt-8 overflow-hidden' >
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>

              <th className='flex justify-center items-center gap-2'>
                <div><FaLongArrowAltUp onClick={handleascending} className='cursor-pointer' /></div>
                <div>Ratings</div>
                <div><FaLongArrowAltDown onClick={handledescending} className='cursor-pointer' /></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              watchlist
                .filter((moviegenre) => {
                  if (currentgenre === "All genres") {
                    return true
                  }
                  else {
                    return genre_ids[moviegenre.genre_ids[0]] === currentgenre
                  }
                })
                .filter((searchmovie) => searchmovie.title.toLowerCase().includes(search.toLowerCase()))
                .map((val) => <tr className='border-b-2' key={val.id}>


                  <td className='flex items-center px-6 py-4'  >
                    <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${val.poster_path}`} className='h-[6rem] w-[10rem]' alt="" />
                    <div className='mx-4'>{val.title}</div>
                  </td>
                  <td>{val.vote_average}</td>
                  <td>{val.popularity}</td>
                  <td>{genre_ids[val.genre_ids[0]]}</td>
                  <td className='text-red-500 font-bold hover:cursor-pointer ' onClick={()=>handleremovewatchlist(val)}>Delete</td>
                </tr>)
            }


          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList