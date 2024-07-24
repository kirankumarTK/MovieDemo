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
            video={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            videoWidth={1600}
            videoHeight={900}
            thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
          /> */}
        </View>
      </Modal>
    );
  }
}

export default VideoPlayerComp;
