import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieBanner from '../MovieBanner';
import {styles} from '../../styles/appStyle';
import {getMovieDetail} from '../../api_services/callAPI';
import MovieDetail from './MovieDetail';
const MovieDetailScreen = ({route, navigation}) => {
  const movieList = route.params.movieList;

  const [movieDetails, setDetails] = useState();
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    getMovieDetail(movieList.id)
      .then(movie => {
        setDetails(movie);
      })
      .finally(() => {
        setProgress(false);
      });
  }, [movieList.id]);
  return (
    <React.Fragment>
      {!progress && (
        <SafeAreaView style={[styles.movie_detail,styles.app_color_secondary]}>
          <ScrollView>
            <MovieBanner movieImage={movieList.poster_path} />
            <MovieDetail movieDetails={movieDetails} />
          </ScrollView>
        </SafeAreaView>
      )}
      {progress && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </React.Fragment>
  );
};

export default MovieDetailScreen;
