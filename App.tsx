/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';


const App = () => {
  console.log("Test 123");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style = {{color : 'red',textAlign : 'center' , fontStyle : 'italic',}}  >Hello World 🎉</Text>
    </View>
  );
}; 

export default App;
