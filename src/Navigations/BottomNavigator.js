import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

//importing screens
import HomeScreen from '../Screens/HomeScreen';
import RoomScreen from '../Screens/RoomScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ContactScreen from '../Screens/ContactScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = (()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon type="MaterialCommunityIcons" name="home" color="red" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RoomScreen"
        component={RoomScreen}
        options={{
          tabBarLabel: 'Book Room',
          tabBarIcon: ({ color, size }) => (
            <Icon type="MaterialIcons" name="hotel" color="red" size={size} />
          ),
          //tabBarBadge: 13,
        }}
      />
     {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon type="MaterialIcons" name="person" color="red" size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color, size }) => (
            <Icon type="MaterialIcons" name="quick-contacts-dialer" color="red" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
})

export default BottomNavigator;