import React from 'react'
import { StyleSheet } from 'react-native'
import AppRoutes from './routes/AppRoutes'
import SplashScreen from './splashScreen/SplashScreen'
import { AuthContext, AuthProvider } from './global/globalVar.js'

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>

    // <SplashScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
