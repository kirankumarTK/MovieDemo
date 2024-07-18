import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { getPopularMovies, getTopRatedMovies } from './api_services/callAPI';

const App = () => {

  // in this movieTitle -> variable 
  // setMovieTitle -> like method which use to set movieTitle
  const [movieTitle,setMovieTitle] = useState('Movie Name : ');

  //this to handle error during api call default value set to be false
  const [error, setError] = useState(false);


  // useEffect will call after page render whenever there is async method need to useEffect 
  useEffect(() => {
    // then -> is promise method it will return response once getPopularMovies() return data
    getTopRatedMovies().then(movie_respone => {
      setMovieTitle('Movie Name : ' + movie_respone[0].title)
    }).catch(err => {
      setError(err);
    })
  },
    //this define condition when this method need to call
    //here it defined as empty so this call will happen only once
    [])
 

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* need to enable this text view when no error happen */}
      {!error &&
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontStyle: 'italic',
            fontSize: 25
          }}>
          {movieTitle}
        </Text>

      }

      {/* need to enable this text view when some error happen */}
      
      {error && <Text
        style={{
          color: 'red',
         fontSize : 25,
       }}> Server error Something went worng </Text>}

    
    </View>
  );
}; 

export default App;
