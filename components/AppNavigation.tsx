import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetailScreen from '../components/movie_details/MovieDetailScreen';
import {styles} from '../styles/appStyle';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import Search from './search/Search';

class AppNavigation extends React.PureComponent {
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Movie Home"
          component={HomePage}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <NavBar navigation={navigation} homePage={true} />
            ),
          }}
        />

        <Stack.Screen
          name="Movie Detail"
          component={MovieDetailScreen}
          options={{
            headerTransparent: true,
            header: ({navigation}) => (
              <NavBar navigation={navigation} homePage={false} />
            ),
            headerStyle: styles.app_color_primary,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent : true,
            header: ({navigation}) => (
              <NavBar navigation={navigation} homePage={false} />
            ),
            headerStyle: styles.app_color_primary,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default AppNavigation;
