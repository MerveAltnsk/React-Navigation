import React from 'react';
import {NavigationContainer} from '@react-navigation/native';       
import {createStackNavigator} from '@react-navigation/stack';

import First from './Pages/First';
import Second from './Pages/Second';


const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;