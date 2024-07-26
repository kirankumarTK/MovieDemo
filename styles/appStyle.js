import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  app_color_primary: {
    backgroundColor: '#66FF66',
  },
  app_color_secondary: {
    backgroundColor: '#FFFFF',
  },
  app_text_color: {
    color: 'black',
  },
  app_button_color: {
    color: '#FFFFFF',
  },
  movieliststyle: {
    padding: 5,
    flex: 1,
  },
  movieNameText: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingTop: 2,
    width: 130,
    textAlign: 'center',
  },
  movieTitle: {
    alignContent: 'center',
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
  },
  tochView: {
    paddingLeft: 10,
    flex: 1,
    position: 'relative',
  },
  imageView: {
    padding: 5,
    width: 130,
    height: 210,
    borderRadius: 15,
    flex: 1,
  },
  listView: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  center_align: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  banner_img: {
    height: screenHeight / 2,
    width: screenWidth,
  },
  movie_detail: {
    alignContent: 'center',
    justifyContent: 'center',
    width: screenWidth,
    alignItems: 'center',
    flex: 1,
  },
  title_center: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Cochin',
    padding: 10,
    fontWeight: 'bold',
  },
  text_center: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Cochin',
    padding: 5,
  },
  genders_view: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  margin_style: {
    margin: 5,
  },
  play_button: {
    position: 'absolute',
    right: 5,
    top: screenHeight / 2 - 25,
  },
  round_circle: {
    backgroundColor: '#66FF66',
    borderRadius: 50,
    padding: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor : 'balck',
  },
});
