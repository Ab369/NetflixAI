import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"

const SecondaryContainer=()=>{
    return(
      <div className="bg-black relative -mt-24 px-4">
      <MovieList title='Now Playing' reduxKey='nowPlayingMovies'/>
      <MovieList title='Popular' reduxKey='popularMovies'/>
      <MovieList title='Top Rated' reduxKey='topRatedMovies'/>
      <MovieList title='Upcoming' reduxKey='upcomingMovies'/>
      </div>
    )
  }
  
  const MovieList=({title,reduxKey})=>{
    const movies=useSelector((store)=>store.movies[reduxKey])
    return(
      <div className="text-white py-5">
      <h1 className="text-lg">{title}</h1>
      {movies&&<div className="flex overflow-x-scroll">
       <div className="flex gap-4">
        {
          movies.map((movie)=>{
            return <MovieCard movie={movie}/>
          })
        }
        </div>
      </div>}
      </div>
    )
  }
  
  
  export default SecondaryContainer;