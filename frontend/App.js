import React from 'react';
import { StyleSheet } from 'react-native';
import AppRoutes from './routes/AppRoutes';
import SplashScreen from './splashScreen/SplashScreen';

export default function App() {
  return (
    <AppRoutes />
    // <SplashScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
