import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList } from "react-native";

import { FontAwesome } from '@expo/vector-icons';

import colors from './app/config/colors';
import { enableScreens } from "react-native-screens";
enableScreens();
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Map from "./app/components/Map";
import Home from "./app/screens/Home";
import Profile from "./app/screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'map'
                : 'map-o';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user-circle' : 'user-circle-o';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
