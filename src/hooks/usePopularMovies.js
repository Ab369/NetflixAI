import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { url_options } from '../utils/constants';
import { addPopularMovies } from '../utils/movieslice';

const usePopularMovies = () => {
  const dispatch=useDispatch();
  
  //for memoization
  const popularMovies=useSelector((store)=>store.movies.popularMovies)

  useEffect(()=>{
    !popularMovies&&getData()
  },[])

  const getData=async()=>{
     const results=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',url_options)
     const json=await results.json();
     dispatch(addPopularMovies(json.results))
  }
}
export default usePopularMovies;
