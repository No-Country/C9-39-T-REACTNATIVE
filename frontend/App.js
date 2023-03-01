import React from 'react'
import { AuthProvider } from './global/globalVar'
import AppRoutes from './routes/AppRoutes'
import { View,StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default function App() {
  return (
    <AuthProvider>
      <View
      style={styles.container}
      >
        <AppRoutes />
      </View>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight

  }
});