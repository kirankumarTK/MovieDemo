import React from 'react';
import {Modal, Pressable, View, Text} from 'react-native';
import {styles} from '../styles/appStyle';
import Video from 'react-native-video';
class VideoPlayerComp extends React.PureComponent {
  render() {
    const {videoPopup, handleClick} = this.props;

    return (
      <Modal transparent={false} visible={videoPopup}>
        <View style={styles.movie_detail}>
          <Video
            style={styles.backgroundVideo}
            controls={true}
            fullscreenOrientation={'landscape'}
            fullscreen={true}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
          />

          <Pressable onPress={() => handleClick()}>
            <Text style={styles.app_text_color}> Close the Video </Text>
          </Pressable>
        </View>
      </Modal>
    );
  }
}

export default VideoPlayerComp;
