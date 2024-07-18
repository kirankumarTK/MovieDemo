import React from 'react';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailScreen from './components/movie_details/MovieDetailScreen';

//NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure.

const Stack = createNativeStackNavigator();
const MovieHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Movie Home"
                    component={HomePage}
                    options={ {headerShown : false} } />
                
                <Stack.Screen name="Movie Detail"
                    component={MovieDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MovieHome;