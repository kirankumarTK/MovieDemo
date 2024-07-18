import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles/appStyle';
import { getPopularMovies, getTopRatedMovies, getTrendingMovies } from '../api_services/callAPI';
import MovieAdapter from './MovieAdapter';

const HomePage = () => {

  const [popularMovies, setMovieList] = useState();
  const [topRatedMovies, setTopMovieList] = useState();
  const [trendingMovies, setTrending] = useState(); 
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(true);

  const getData = () => {
    return Promise.all([getPopularMovies(),getTopRatedMovies(),getTrendingMovies()]);
  };

  useEffect(() => {

    getData().then(([popularMoviesData, topRatedMoviesData, trendingMoviesData]) => {
      setMovieList(popularMoviesData);
      setTopMovieList(topRatedMoviesData);
      setTrending(trendingMoviesData);
    }).catch(err => {
      console.log(err);
      setError(err);
    }).finally(() => {
      setProgress(false);
    }
    );
  }, []);
  
  return (
    <React.Fragment>
      <SafeAreaView style={styles.movieliststyle}>
        {!progress &&
          (<ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}  >
            
            {trendingMovies &&  <MovieAdapter  title= "TrendingMovies" content={trendingMovies} /> }
            
            {topRatedMovies && <MovieAdapter title="TopRatedMovies" content={topRatedMovies} />}
            
             {popularMovies &&  <MovieAdapter  title= "PopularMovies" content={popularMovies} /> }

          </ScrollView>) 
        }
       
      </SafeAreaView> 
       {progress &&
          (<View style={{ flex : 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size={'large'} />
        </View>)}
    </React.Fragment>
    );
}

export default HomePage;
