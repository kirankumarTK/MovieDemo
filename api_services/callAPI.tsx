// inorder to use await method should be declare as async

import axios from "axios";
//import config from "../config";

const BASE_URL ='https://api.themoviedb.org/3/'
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQ1ZTRjMzAxZGE2YTVjODJkMDVlNzA5Y2JjNjBiOSIsIm5iZiI6MTcyMTExMjEzMi43NjE1MjQsInN1YiI6IjY2OTYxNGI2OTg5NDQ1YjVmZjgwNzdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cu5PzFuzEwpdNZ5LIm37LfKbCNQR3xDghRjCOZizcl8'

// axios is libary used to call api
export const getPopularMovies = async() => {
  const response = await axios.get(BASE_URL+'movie/popular?language=en-US&page=1',
    {headers : { Authorization : TOKEN}});

  return response.data.results

}


export const getUpcomingMovies = async() => {
  const response = await axios.get(BASE_URL+'movie/upcoming?language=en-US&page=1',
    {headers : { Authorization : TOKEN}});

  return response.data.results

}

export const getTopRatedMovies = async() => {
  const response = await axios.get(BASE_URL+'movie/top_rated?language=en-US&page=1',
    {headers : { Authorization : TOKEN}});

  return response.data.results

}