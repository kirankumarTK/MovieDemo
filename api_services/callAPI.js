// inorder to use await method should be declare as async

import axios from 'axios';
//import config from "../config/config";

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQ1ZTRjMzAxZGE2YTVjODJkMDVlNzA5Y2JjNjBiOSIsIm5iZiI6MTcyMTExMjEzMi43NjE1MjQsInN1YiI6IjY2OTYxNGI2OTg5NDQ1YjVmZjgwNzdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cu5PzFuzEwpdNZ5LIm37LfKbCNQR3xDghRjCOZizcl8';
export const IMAGE_w500 = 'https://image.tmdb.org/t/p/w500';
// axios is libary used to call api
export const getPopularMovies = async () => {
  const response = await axios
    .get(BASE_URL + 'movie/popular?language=en-US&page=1', {
      accept: 'application/json',
      headers: {Authorization: TOKEN},
      timeout: 1000,
    })
    .catch(err => {
      printLog(err);
    });
  if (response.data != 'undefined') return response.data.results;
  else return 'Server error';
};

export const getTrendingMovies = async () => {
  const response = await axios
    .get(BASE_URL + 'trending/movie/day?language=en-US', {
      accept: 'application/json',
      timeout: 1000,
      headers: {Authorization: TOKEN},
    })
    .catch(err => {
      printLog(err);
    });
  if (response.data != 'undefined') return response.data.results;
  else return 'Server error';
};

export const getTopRatedMovies = async () => {
  const response = await axios
    .get(BASE_URL + 'movie/top_rated?language=en-US&page=1', {
      accept: 'application/json',
      headers: {Authorization: TOKEN},
      timeout: 1000,
    })
    .catch(err => {
      printLog(err);
    });
  if (response.data != 'undefined') return response.data.results;
  else return 'Server error';
};

export const getMovieDetail = async movieId => {
  const response = await axios
    .get(BASE_URL + `movie/${movieId}?language=en-US`, {
      accept: 'application/json',
      headers: {Authorization: TOKEN},
    })
    .catch(err => {
      printLog(err);
    });

  return response;
};

export const searchMovieTV = async (query, type) => {
  console.log(BASE_URL + `search/${type}?query=${query}&language=en-US`);
  const response = await axios
    .get(BASE_URL + `search/${type}?query=${query}&language=en-US`, {
      accept: 'application/json',
      headers: {Authorization: TOKEN},
    })
    .catch(err => {
      console.log(err);
      printLog(err);
    });
  return response.data.results;
};

const printLog = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('1');
    console.log(error.response);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('2');
    console.log(error.request);
    console.log(error.message);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('3');
    console.log('Error', error.message);
  }
};
