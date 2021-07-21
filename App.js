
import React from 'react';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, CreateStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "home" screenOptions = {{
        headerShown:false
      }}>
        <Stack.Screen name = 'home' component = {HomeScreen}></Stack.Screen>
        <Stack.Screen name = 'ISSLocation' component = {IssLocationScreen}></Stack.Screen>
        <Stack.Screen name = 'Meteor' component = {MeteorScreen}></Stack.Screen>
      </Stack.Navigator></NavigationContainer>
  
      
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
