import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import Signup from '../screens/Signup'
import Signin from '../screens/Signin'
import HomeScreen from '../screens/HomeScreen'
import ForgotPassword from '../screens/ForgotPassword'
import VerifyEmailCode from '../screens/VerifyEmailCode'
import ResetPassword from '../screens/ResetPassword'
import { AuthContext } from '../global/globalVar.js'

// IMPORT WITHOUT {}
//import AsyncStorage from "@react-native-async-storage/async-storage";
//imports components splash screen
import ScreenFirst from '../splashScreen/ScreenFirst'
import ScreenSecond from '../splashScreen/ScreenSecond'
import ScreenThird from '../splashScreen/ScreenThird'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  const [auth, setAuth] = useContext(AuthContext);
  const authenticated = auth?.token !== "" && auth?.user !== null;

  /* const logout = async () => {
    setAuth({ user: null, token: "" });
    await AsyncStorage.removeItem("@auth");
  }; */

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
