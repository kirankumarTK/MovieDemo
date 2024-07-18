import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/appStyle';
const MovieDetailScreen = ({ route, navigation }) => {
    const movieDetails = route.params.movieList;
    return (
        <SafeAreaView><Text style={styles.movieTitle}>{ movieDetails.original_title}</Text></SafeAreaView>
    );
}

export default MovieDetailScreen;