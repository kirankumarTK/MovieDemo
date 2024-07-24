import React from 'react';
import {Modal, Pressable, View, Text} from 'react-native';
import {styles} from '../styles/appStyle';

class VideoPlayerComp extends React.PureComponent {
  render() {
    const {videoPopup, handleClick} = this.props;

    return (
      <Modal transparent={false} visible={videoPopup}>
        <View style={styles.movie_detail}>
          <Pressable onPress={() => handleClick()}>
            <Text> Close the Video </Text>
          </Pressable>
          {/* <VideoPlayer
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
          /> */}
        </View>
      </Modal>
    );
  }
}

export default VideoPlayerComp;
