import React from 'react'
import { img_cdn_url } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 hover:scale-105'>
       <img alt="movie" src={img_cdn_url+ movie.poster_path}></img>
    </div>
  )
}

export default MovieCard