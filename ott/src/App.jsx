import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, json } from 'react-router-dom'
import Movies from './components/Movies'
import WatchList from './components/WatchList'
import Banner from './components/Banner'

// 3544e3a52571f57b3f7fe8983254ec64 -api key

const App = () => {

  const [watchlist, setwatchlist] = useState([])

  let handlewatchlist = (movieobj) => {
    setwatchlist([...watchlist, movieobj])
    localStorage.setItem("moviesdata", JSON.stringify([...watchlist, movieobj]))
    console.log(watchlist);

  }

  let handleremovewatchlist = (movieobj) => {
    let filterwatchlist = watchlist.filter((movie) => movie.id != movieobj.id)
    localStorage.setItem("moviesdata", JSON.stringify(filterwatchlist))
    setwatchlist(filterwatchlist)
  }

  useEffect(() => {
    let localstoragemovies = localStorage.getItem("moviesdata")
    if (!localstoragemovies) {
      return
    }
    setwatchlist(JSON.parse(localstoragemovies))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<> <Banner /> <Movies handlewatchlist={handlewatchlist} handleremovewatchlist={handleremovewatchlist} watchlist={watchlist} />  </>} />
          <Route path='Watchlist' element={<WatchList watchlist={watchlist} setwatchlist={setwatchlist} handleremovewatchlist={handleremovewatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App