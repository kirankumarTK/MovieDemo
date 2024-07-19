import React from 'react';
import {Text, View, FlatList} from 'react-native';
import MovieListItem from './MovieListItem';
import {styles} from '../styles/appStyle';
import PropTypes from 'prop-types';
class MovieAdapter extends React.PureComponent {
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View>
        <Text style={styles.movieTitle}>{title}</Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.listView}
            horizontal={true}
            data={content}
            renderItem={({item}) => (
              <MovieListItem
                navigation={navigation}
                movieList={item}
                initialNumToRender={5}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

MovieAdapter.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.array,
};
export default MovieAdapter;
