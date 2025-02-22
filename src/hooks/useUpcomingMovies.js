import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { url_options } from '../utils/constants';
import { addUpcomingMovies } from '../utils/movieslice';

const useUpcomingMovies = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
     const results=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',url_options)
     const json=await results.json();
     dispatch(addUpcomingMovies(json.results))
  }
}
export default useUpcomingMovies;
