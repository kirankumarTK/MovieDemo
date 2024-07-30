import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieBanner from '../MovieBanner';
import {styles} from '../../styles/appStyle';
import {getMovieDetail} from '../../api_services/callAPI';
import MovieDetail from './MovieDetail';
import VideoPlayerComp from '../VideoPlayerComp';

const MovieDetailScreen = ({route, navigation}) => {
  const movieList = route.params.movieList;

  const [movieDetails, setDetails] = useState();
  const [progress, setProgress] = useState(true);
  const [videoPopup, setVideo] = useState(false);

  //this method is to handle video popup open & close
  const showVideoPopup = () => {
    setVideo(!videoPopup);
  };
  useEffect(() => {
    getMovieDetail(movieList.id)
      .then(movie => {
        if (movie.status == 200) {
          setDetails(movie.data);
        } else {
          console.log('Status Code : ' + movie.status + movie.statusText);
        }``
      })
      .finally(() => {
        setProgress(false);
      });
  }, [movieList.id]);

  return (
    <React.Fragment>
      {!progress && (
        <ScrollView>
          <View
            style={[styles.movie_detail, styles.app_color_secondary]}>
            <MovieBanner movieImage={movieList.poster_path} handleClick={showVideoPopup} />
            
            <MovieDetail movieDetails={movieDetails} />
          </View>
        </ScrollView>
      )}

      {!progress && (
        <VideoPlayerComp videoPopup={videoPopup} handleClick={showVideoPopup} />
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
