import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './components/AppNavigation';


//NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure.


const MovieHome = () => {
  return (
    <NavigationContainer>
      <AppNavigation/> 
    </NavigationContainer>
  );
};

export default MovieHome;
