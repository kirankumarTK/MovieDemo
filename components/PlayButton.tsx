import React from 'react';
import {Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/appStyle';
class PlayButton extends React.PureComponent {
  render() {
    const {handleClick} = this.props;
    return (
      <Pressable style={styles.play_button} onPress={() => handleClick()}>
        <Icon
          name="play-arrow"
          size={30}
          style={[styles.app_button_color, styles.round_circle]}
          color={'white'}></Icon>
      </Pressable>
    );
  }
}

export default PlayButton;
