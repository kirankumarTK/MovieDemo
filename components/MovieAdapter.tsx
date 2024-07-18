import React from 'react';
import { Text, View, FlatList } from 'react-native';
import MovieListItem from './MovieListItem';
import { styles } from '../styles/appStyle';
import Proptypes from 'prop-types'

const proptypes = {
    title: Proptypes.object,
    content: Proptypes.object,
};
class MovieAdapter extends React.PureComponent {
    render() {
        const { title, content } = this.props;
        return (
            <View>
                <Text style = {styles.movieTitle}>{title}</Text>
                <View>
                    <FlatList 
                        style ={styles.listView}
                        horizontal={true}
                        data={content}
                        renderItem={({ item }) => <MovieListItem movieList={item}
                        initialNumToRender={7}/>} />
                </View>
            </View>
        );
    }
}

MovieAdapter.proptype = proptypes;

export default MovieAdapter;