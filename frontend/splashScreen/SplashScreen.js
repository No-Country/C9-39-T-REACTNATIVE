import React from 'react';
// import { createStackNavigator } from 'react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigatorContainer } from 'react-navigation/native';
import {View, Text, StyleSheet} from 'react-native'
// import { ScreenOne, ScreenTwo, ScreenThree } from './screens';
import ScreenFirst from './ScreenFirst';
import ScreenSecond from './ScreenSecond';
import ScreenThird from './ScreenThird';

const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="ScreenOne" component={ScreenOne} />
//     <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
//     <Stack.Screen name="ScreenThree" component={ScreenThree} />
//   </Stack.Navigator>
// );
const SplashScreen = () => (
  <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="ScreenFirst" 
    >
        <Stack.Screen name="ScreenFirst" component={ScreenFirst} />
        <Stack.Screen name="ScreenSecond" component={ScreenSecond} />
        <Stack.Screen name="ScreenThird" component={ScreenThird} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default SplashScreen;