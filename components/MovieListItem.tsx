import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/appStyle';
import { IMAGE_w500 } from '../api_services/callAPI';
import PropTypes from 'prop-types';


const placeHolderImage = require('../assert/placeholder.jpg')

class MovieListItem extends React.PureComponent {
    render() {
        const { movieList } = this.props;
        return (
            <TouchableOpacity style={styles.tochView} >
                <View style = {styles.center_align}>
                    <Image
                        style={styles.imageView}
                        source={
                            movieList.poster_path ? 
                                { uri: IMAGE_w500 + movieList.poster_path } : placeHolderImage
                        }
                        resizeMode='cover'
                    />
                    <Text style={styles.movieNameText}>{ movieList.original_title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
MovieListItem.propTypes = {
 movieList : PropTypes.object,
};

export default MovieListItem;