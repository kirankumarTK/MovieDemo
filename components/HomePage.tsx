import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/appStyle';
import { getPopularMovies, getTopRatedMovies } from '../api_services/callAPI';
import MovieAdapter from './MovieAdapter';

const HomePage = () => {

  const [popularMovies, setMovieList] = useState([]);
  const [topRatedMovies, setTopMovieList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies().then(movieList => {
      setMovieList(movieList);
    }).catch(error => {
      setError(error);
    })

     getTopRatedMovies().then(movieList => {
      setTopMovieList(movieList);
    }).catch(error => {
      setError(error);
    })

  },[]);
  return (
    <React.Fragment >
      <SafeAreaView style={styles.movieliststyle}>
        {!error &&
          <ScrollView>
            <MovieAdapter title={1} content={popularMovies} /> 
            
            <MovieAdapter title="TopRatedMovies" content={topRatedMovies} /> 
          </ScrollView> 
      }
      </SafeAreaView> 
    </React.Fragment>
    );
}

export default HomePage;
