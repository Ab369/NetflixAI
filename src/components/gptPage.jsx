import React, { useRef } from 'react'
import langData from '../utils/gptsearch'
import { useDispatch, useSelector } from 'react-redux'
import model from '../utils/gemini'
import { url_options } from '../utils/constants'
import { addSearchMovies } from '../utils/gptslice'
import MovieCard from '../components/MovieCard'

const GptPage = () => {
  //get movies data
  const moviesData=useSelector((store)=>store.gpt.tmdbMoviesArray)
  // console.log(moviesData)

  return (
    <div className='bg-black h-full w-[100vw] flex justify-center flex-col p-4'>
       <SearchBar/>
       {moviesData && 
       <div className='flex flex-col'>
       {moviesData.map(movies =><MovieList movies={movies}/>)}
       </div>
       }
    </div>
  )
}

const MovieList=({movies})=>{
  return(
    <div className="text-white py-5 z-50">
    <h1 className="text-lg">{movies[0].title}</h1>
    {<div className="flex overflow-x-scroll">
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

const SearchBar=()=>{
    const langValue=useSelector((store)=>store.config.language)
    const searchText=useRef()
    const dispatch=useDispatch();
     
    function getMovieDetails(moviename){
      return fetch(`https://api.themoviedb.org/3/search/movie?query=${moviename}&include_adult=false&language=en-US&page=1`
, url_options)
      .then(res => res.json())
      .then(json => json.results)
      .catch(err => alert(err));
    }

    async function handleGeminiSearch(){
      const prompt = `Suggest 5 movies names comma seperated using the following prompt-${searchText.current.value}`;
      const result = await model.generateContent(prompt);
      // console.log(result.response.text());
      const geminiSearchResult=result.response.text();
      const movieNames=geminiSearchResult.trim().split(',');
      // console.log(movieNames)

      const promiseArray=movieNames.map((moviename)=>getMovieDetails(moviename))
      const tmdbMoviesData=await Promise.all(promiseArray)
      // console.log(tmdbMoviesData)

      //add data to redux store
      dispatch(addSearchMovies({searchNames:movieNames,tmdbData:tmdbMoviesData}))
    }

    return(
        <div className='bg-black text-3xl flex gap-2 mt-32'>
            <input ref={searchText} type='text' placeholder={langData[langValue].placeholder} className='text-center'></input>
            <button className='bg-red-600 text-white p-2' onClick={handleGeminiSearch}>{langData[langValue].searchText}</button>
        </div>
    )
}

export default GptPage