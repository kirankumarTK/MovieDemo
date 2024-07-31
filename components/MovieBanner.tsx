import React, {useEffect, useState} from 'react';
import {Image, View, Dimensions} from 'react-native';
import {IMAGE_w500} from '../api_services/callAPI';
import PropTypes from 'prop-types';
import {styles} from '../styles/appStyle';
import PlayButton from './PlayButton';

class MovieBanner extends React.PureComponent<MyComponentProps> {
  render() {
    const {movieImage, handleClick} = this.props;
    return (
      <View style={styles.banner_img}>
        <Image
          style={styles.banner_img}
          source={{uri: IMAGE_w500 + movieImage}}
          resizeMode="cover"
        />

        <PlayButton handleClick={handleClick} />
      </View>
    );
  }
}

export default MovieBanner;

//prop type in tsx 
interface MyComponentProps {
  movieImage: string;
  handleClick: () => void;
}
