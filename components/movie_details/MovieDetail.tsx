import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../styles/appStyle';
import PropTypes from 'prop-types';
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import dateformat from 'dateformat';

class MovieDetail extends React.PureComponent {
  render() {
    const {movieDetails} = this.props;
    return (
      <View style={[styles.movie_detail, styles.app_color_secondary]}>
        <Text style={[styles.title_center, styles.app_text_color]}>
          {movieDetails.title}
        </Text>

        {movieDetails.genres && (
          <View style={styles.genders_view}>
            {movieDetails.genres.map(genres => {
              return (
                <Text
                  key={genres.id}
                  style={[styles.text_center, styles.app_text_color]}>
                  {genres.name}
                </Text>
              );
            })}
          </View>
        )}
        <StarRatingDisplay
          rating={
            movieDetails.vote_average != '' ? movieDetails.vote_average / 2 : 0
          }
          maxStars={5}
          starSize={30}
        />

        <Text style={[styles.text_center, styles.margin_style,styles.app_text_color]}>
          {movieDetails.overview}
        </Text>

        <Text style={[styles.text_center, styles.app_text_color]}>
          Release Date : {dateformat(movieDetails.release_date, 'dd mmm yyyy')}
        </Text>
      </View>
    );
  }
}

MovieDetail.propTypes = {
  movieDetails: PropTypes.object,
};
export default MovieDetail;
