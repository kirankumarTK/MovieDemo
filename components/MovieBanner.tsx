import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { IMAGE_w500 } from '../api_services/callAPI';
import PropTypes from 'prop-types';
import { styles } from '../styles/appStyle';

class MovieBanner extends React.PureComponent {
    render() {
        const { movieImage } = this.props;
        return (
            <Image
                style={styles.banner_img}
                source={{ uri: IMAGE_w500 + movieImage }}
                resizeMode='cover'
            />
        );
    }
}

MovieBanner.propTypes = {
    movieImage: PropTypes.string
};
export default MovieBanner;