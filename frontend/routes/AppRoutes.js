
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

import Signup from "../screens/Signup";
import Signin from "../screens/Signin";
import Costs from "../screens/Costs";
import Income from "../screens/Income";
// IMPORT WITHOUT {}
//import AsyncStorage from "@react-native-async-storage/async-storage";
//imports components splash screen
import ScreenFirst from '../splashScreen/ScreenFirst'
import ScreenSecond from '../splashScreen/ScreenSecond'
import ScreenThird from '../splashScreen/ScreenThird'



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  //const [auth, setAuth] = useContext(AuthContext);
  //const authenticated = auth?.token !== "" && auth?.user !== null;
  const authenticated = false

  /* const logout = async () => {
    setAuth({ user: null, token: "" });
    await AsyncStorage.removeItem("@auth");
  }; */

  const Home = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 },
          headerRight: () => (
            <Feather
              name="log-out"
              //onPress={logout}
              size={16}
              style={{ marginHorizontal: 10 }}
            />
          ),
        }}
      >
        <Tab.Screen
          name="Gastos"
          component={Costs}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#433362" : color }}>Gastos
              </Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={focused ? "database" : "minimize"}
                size={size}
                color={focused ? "#433362" : color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Ingresos"
          component={Income}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#433362" : color }}>Ingresos</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name={focused ? "plus-circle" : "minimize"}
                size={size}
                color={focused ? "#433362" : color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScreenFirst"
       screenOptions={{
        headerShown: false,
    }}
      >
        {authenticated ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            
          </>
        ) : (
          <>
            <Stack.Screen name="ScreenFirst" component={ScreenFirst} />
            <Stack.Screen name="ScreenSecond" component={ScreenSecond} />
            <Stack.Screen name="ScreenThird" component={ScreenThird} />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Signin">
    //     {authenticated ? (
    //       <>
    //         <Stack.Screen
    //           name="Home"
    //           component={Home}
    //           options={{
    //             headerShown: false,
    //           }}
    //         />
            
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen
    //           name="Signup"
    //           component={Signup}
    //           options={{
    //             headerShown: false,
    //           }}
    //         />
    //         <Stack.Screen
    //           name="Signin"
    //           component={Signin}
    //           options={{
    //             headerShown: false,
    //           }}
    //         />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
