import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import React, { useState } from 'react'

import Signup from '../screens/Signup'
import Signin from '../screens/Signin'
import HomeScreen from '../screens/HomeScreen'
import Income from '../screens/Income'
import ForgotPassword from '../screens/ForgotPassword'
import VerifyEmailCode from '../screens/VerifyEmailCode'
import ResetPassword from '../screens/ResetPassword'
import colors from '../constants/colors'

// IMPORT WITHOUT {}
//import AsyncStorage from "@react-native-async-storage/async-storage";
//imports components splash screen
import ScreenFirst from '../splashScreen/ScreenFirst'
import ScreenSecond from '../splashScreen/ScreenSecond'
import ScreenThird from '../splashScreen/ScreenThird'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function AppRoutes() {
  //const [auth, setAuth] = useContext(AuthContext);
  //const authenticated = auth?.token !== "" && auth?.user !== null;
  //const authenticated = [isValidated,setIsValidated] = React.useState(false)
  const authenticated = false

  /* const logout = async () => {
    setAuth({ user: null, token: "" });
    await AsyncStorage.removeItem("@auth");
  }; */

  /* const Home = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          //headerShown: false,
          headerTitle: "",
          headerStatusBarHeight: 0,
        }}
      >
        <Tab.Screen
          name='Inicio'
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#433362" : color }}>Gastos
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <Entypo
                name={'home'}
                size={size}
                color={focused ? colors.primary : color}
              /> 
            ),
          }}
        />

        <Tab.Screen
          name='Ingresos'
          component={Income}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={'user'}
                size={size}
                color={focused ? colors.primary : color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }  */

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ScreenFirst'
        screenOptions={{
          headerShown: false,
        }}
      >
        {authenticated ? (
          <>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name='ScreenFirst' component={ScreenFirst} />
            <Stack.Screen name='ScreenSecond' component={ScreenSecond} />
            <Stack.Screen name='ScreenThird' component={ScreenThird} />
            <Stack.Screen
              name='Signin'
              component={Signin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Signup'
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ForgotPassword'
              component={ForgotPassword}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ResetPassword'
              component={ResetPassword}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='VerifyEmailCode'
              component={VerifyEmailCode}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
