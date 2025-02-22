import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { url_options } from "../utils/constants"
import { addCurrentTrailer } from "../utils/movieslice"

const useMovieTrailer=(id)=>{
    const dispatch=useDispatch();
    //getting trailer
    const getVideos=async()=>{
       const results=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,url_options)
       const json=await results.json();
    //    console.log(json);
       const trailers=json.results.filter((video)=>video.type==='Trailer')
    //    console.log(trailers)
    const trailer=trailers[0];
    dispatch(addCurrentTrailer(trailer));
    }

    useEffect(()=>{
        getVideos()
    },[])
}

export default useMovieTrailer;