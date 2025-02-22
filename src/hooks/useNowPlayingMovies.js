import { useEffect } from "react"
import  {url_options} from '../utils/constants'
import { useDispatch } from "react-redux"
import {addNowPlayingMovies} from '../utils/movieslice'

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',url_options).then(res => res.json())
      .then(json => dispatch(addNowPlayingMovies(json.results)))
      .catch(err => console.error(err));
    },[])
}

export default useNowPlayingMovies