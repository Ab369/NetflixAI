import {useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const PrimaryContainer=()=>{
  const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)
  if(!nowPlayingMovies)return(<></>)
  const currentMovie=nowPlayingMovies[0]
  return(
    <div>
        <Text movie={currentMovie}/>
        <VideoBackground id={currentMovie.id}/>
    </div>
  )
}

const Text=({movie})=>{
    // console.log(movie)
    return(
        <div className="absolute w-screen aspect-video py-64 pl-8 flex flex-col gap-6 bg-gradient-to-r from-black text-white">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="w-1/3">{movie.overview}</p>
          <div className="flex gap-6 text-white text-lg">
            <button className="bg-white text-black hover:bg-gray-300 px-8 py-2 rounded-lg">Play</button>
            <button className="bg-gray-500/50 hover:bg-gray-400/50 px-8 py-2 rounded-lg">More Info</button>
          </div>
        </div>
    )
}
const VideoBackground=({id})=>{ 
    useMovieTrailer(id);
    const trailer=useSelector((store)=>store?.movies?.currentTrailer)
    if(!trailer)return(<>Loading...</>)
    return (
        <div>
           <iframe
            className="w-screen aspect-video"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0`}
            allow="autoplay"
            allowFullScreen
            ></iframe>
        </div>
    )
}

export default PrimaryContainer;