import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieBanner from '../MovieBanner';
import { styles } from '../../styles/appStyle';
import { getMovieDetail } from '../../api_services/callAPI';
const MovieDetailScreen = ({ route, navigation }) => {
    const movieList = route.params.movieList;

    const [movieDetails, setDetails] = useState();

        useEffect(() => {

            getMovieDetail(movieList.id).then(movieDetails => {
                setDetails(movieDetails)
            });
            
        },[]);
    return (
        <SafeAreaView style={styles.movie_detail}>
            <ScrollView>
                <MovieBanner movieImage={movieList.poster_path} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default MovieDetailScreen;