import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/appStyle';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';

const propTypes = {
  homePage: PropTypes.bool,
};
const defaultprops = {
  homePage: false,
};
class NavBar extends React.PureComponent {
  render() {
    const {navigation, homePage} = this.props;
    return (
      <View style={styles.margin_style}>
        {!homePage && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-ios-new" size={25} color={'dark-gray'} />
          </TouchableOpacity>
        )}
        {homePage && (
          <SafeAreaView>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Icon
                name="search"
                size={30}
                color={'gray'}
                style={styles.app_search}
              />
            </TouchableOpacity>
          </SafeAreaView>
        )}
      </View>
    );
  }
}
NavBar.prototype = propTypes;
NavBar.defaultprops = defaultprops;

export default NavBar;
