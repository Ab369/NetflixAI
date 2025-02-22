import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { url_options } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieslice';

const useTopRated = () => {
  const dispatch=useDispatch();
  const topRated=useSelector((store)=>store.movies.topRatedMovies)

  useEffect(()=>{
    !topRated&&getData()
  },[])

  const getData=async()=>{
     const results=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',url_options)
     const json=await results.json();
     dispatch(addTopRatedMovies(json.results))
  }
}
export default useTopRated;
