import { useEffect } from "react"
import  {url_options} from '../utils/constants'
import { useDispatch, useSelector } from "react-redux"
import {addNowPlayingMovies} from '../utils/movieslice'

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    
    //for memoization
    const nowPlaying=useSelector((store)=>store.movies.nowPlayingMovies)

    useEffect(()=>{
       !nowPlaying&&getData();
    },[])

    function getData(){
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',url_options).then(res => res.json())
      .then(json => dispatch(addNowPlayingMovies(json.results)))
      .catch(err => console.error(err));
    }
}

export default useNowPlayingMovies