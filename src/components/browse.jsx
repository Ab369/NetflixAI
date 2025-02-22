import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRated from "../hooks/useTopRated";
import PrimaryContainer from "./primaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptPage from "./gptPage";

const Browse=()=>{
    useNowPlayingMovies();  //custom hook to fetch movie data and update store
    usePopularMovies();  //custom hook to fetch movie data and update store
    useTopRated();  //custom hook to fetch movie data and update store
    useUpcomingMovies();  //custom hook to fetch movie data and update store

    const showGPTpage=useSelector((store)=>store.gpt.showGptPage);

    if(showGPTpage)return(<GptPage/>)
    return(
        <>
         <PrimaryContainer/>
         <SecondaryContainer/>
        </>
    )
}

export default Browse