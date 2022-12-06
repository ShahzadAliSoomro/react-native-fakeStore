import * as React from "react";
// import { View, Text } from "react-native";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./../screens/login";
import FakeApi from "./../screens/fakeapi";
import Signup from "./../screens/signup";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from "../screens/product";
const Tab = createBottomTabNavigator();
function AppNavigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FakeApi"
            component={FakeApi}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        {/* <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
          <Drawer.Screen name="FakeApi" component={FakeApi} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Signup" component={Signup} />
        </Drawer.Navigator> */}
         {/* <Tab.Navigator>
        <Tab.Screen name="FakeApi" component={FakeApi} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator> */}
      </NavigationContainer>
    </>
  )
}
export default AppNavigation; 