import React, { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import axios from 'axios';
import Pagination from './Pagination';

const Movies = ({handlewatchlist , handleremovewatchlist  ,watchlist}) => {
  const [movies, setMovies] = useState([]);
  const [pageno, setPageno] = useState(1);


  const handlenext = () => {
    setPageno((next) => next + 1);
  };

  const handleprev = () => {
    if (pageno > 1) {
      setPageno((prev) => prev - 1);
    }

  }



  useEffect(() => {
    const api = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3544e3a52571f57b3f7fe8983254ec64&include_adult=false&include_video=false&language=en-US&page=${pageno}&sort_by=popularity.desc`);
        setMovies(response.data.results);
        // console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    api();
  }, [pageno]);



  return (
    <div className='m-3'>
      <h4 className='text-center text-2xl font-bold'>Trending Movies</h4>
      <div className='flex flex-wrap justify-around gap-3'>
        {
          movies.map((item) => (
            <Moviecard key={item.id} path={item.poster_path} title={item.original_title} handlewatchlist={handlewatchlist} handleremovewatchlist={handleremovewatchlist} movieobj={item} watchlist={watchlist} />
          ))
        }
      </div>
      <div className='mt-3 text-center'>
        <Pagination page={pageno} prev={handleprev} next={handlenext}  />
      </div>
    </div>
  );
};


export default Movies;
