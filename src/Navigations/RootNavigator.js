import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import screens
import Welcome from '../Screens/Welcome';
import RoomScreen from '../Screens/RoomScreen';
import BottomNavigator from './BottomNavigator';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

const RootNavigator = (() =>{
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="HomeScreen" component={BottomNavigator} />
      <Stack.Screen name="RoomScreen" component={RoomScreen} />
    </Stack.Navigator>
  )
})

export default RootNavigator;