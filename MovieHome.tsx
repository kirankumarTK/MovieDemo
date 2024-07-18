import React from 'react';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure.

const Stack = createNativeStackNavigator();
const MovieHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home Page" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MovieHome;