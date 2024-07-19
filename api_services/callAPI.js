// inorder to use await method should be declare as async

import axios from "axios";
//import config from "../config/config";

const BASE_URL ='https://api.themoviedb.org/3/'
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQ1ZTRjMzAxZGE2YTVjODJkMDVlNzA5Y2JjNjBiOSIsIm5iZiI6MTcyMTExMjEzMi43NjE1MjQsInN1YiI6IjY2OTYxNGI2OTg5NDQ1YjVmZjgwNzdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cu5PzFuzEwpdNZ5LIm37LfKbCNQR3xDghRjCOZizcl8'
export const IMAGE_w500 = 'https://image.tmdb.org/t/p/w500'
// axios is libary used to call api
export const getPopularMovies = async() => {
  const response = await axios.get(BASE_URL+'movie/popular?language=en-US&page=1',
    {
      accept: 'application/json',
      headers: { Authorization: TOKEN }
    });

  return response.data.results

}


export const getTrendingMovies = async() => {
  const response = await axios.get(BASE_URL+'trending/movie/day?language=en-US',
    {
      accept: 'application/json',
      headers: { Authorization: TOKEN }
    });

  return response.data.results

}

export const getTopRatedMovies = async () => {
  const response = await axios.get(BASE_URL+'movie/top_rated?language=en-US&page=1',
    {
      accept: 'application/json',
      headers: { Authorization: TOKEN }
    });

  return response.data.results

}

export const getMovieDetail = async (movieId) => {
  
  const response = await axios.get(BASE_URL + `movie/${movieId}?language=en-US`,
    {
      accept: 'application/json',
      headers: { Authorization: TOKEN }
    });
  
  return response.data
}