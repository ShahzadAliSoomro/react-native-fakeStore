import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FakeApi from './screens/fakeapi';
import Signup from './screens/signup';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './navigation/AppNavigation';
// const Stack = createNativeStackNavigator();
const App = () => {
  return (
     <AppNavigation/>
  );
};

export default App;


// import React, {useState} from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Button,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';

// // import logo from '#'
// import Home from "./home";
// function App(){
//   return <>
//      <Home />
//   </>;
// }
// export default App;