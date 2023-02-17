import { View, Text } from 'react-native'
import React from 'react'
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
  TextInput,
} from 'react-native'
import axios from "axios"
import API from "../config"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')


  const submitLogin = async () => {
    try {
      console.log(email,password);
      const {data} = await axios.post(`https://gringotts-henna.vercel.app/api/auth/login`, {
        email,
        password,
      })
      console.log(data);
      await AsyncStorage.setItem("@token", data.token);
      await AsyncStorage.setItem("@firstname", data.firstname);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.welcome}>Bienvenido</Text>
        <Text>Email</Text>
        <TextInput
          style={styles.email}
          onChangeText={(email) => onChangeEmail(email)}
          value={email}
          placeholder='📧 Escribe Tu Correo Electrónico'
          keyboardType='email-address'
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.password}
          secureTextEntry={true}
          onChangeText={(password) => onChangePassword(password)}
          value={password}
          placeholder='🔒 Escribe Tu Contraseña'
          keyboardType='default'
        />
        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Olvidaste tu contraseña
        </Text>
        <View style={styles.viewSignin}>
          <Button
            title='Iniciar Sesión'
            color='#198E6B'
            onPress={submitLogin}
          />
        </View>
        <Text style={styles.viewText}>Conectar con</Text>
        <View style={styles.viewNetworks}>
          <View style={styles.viewGoogle}>
            <Button
              title='Google'
              onPress={() => Alert.alert('Te logueaste con Google')}
            />
          </View>
          <View style={styles.viewFacebook}>
            <Button
              title='Facebook'
              onPress={() => Alert.alert('Te logueaste con Facebook')}
            />
          </View>
        </View>
        <View style={styles.viewText}>
          <Text>No tienes una cuenta?</Text>
          <Text onPress={() => navigation.navigate('Signup')}>Crear</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  welcome: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    margin: 70,
  },
  email: {
    height: 50,
    margin: 12,
    padding: 10,
    borderWidth: 0,
    backgroundColor: '#6FDDA7',
    borderRadius: 20,
  },
  password: {
    height: 50,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  viewSignin: {
    height: 50,
    margin: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  viewFacebook: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  viewGoogle: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  viewNetworks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
    marginHorizontal: 20,
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
  },
  forgotPassword: {
    textAlign: 'right',
  },
})

export default Signin
