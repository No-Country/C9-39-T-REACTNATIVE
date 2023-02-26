import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../global/globalVar'
import Input from '../components/shared/Input'
import Feather from "react-native-vector-icons/Feather";
import SubmitButton from '../components/shared/SubmitButton'
import colors from '../constants/colors';
import { API } from '../config';

const Signin = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePassword] = React.useState('')

  const [loading, setLoading] = useState(false)

  const [auth, setAuth] = useContext(AuthContext);

  const submitLogin = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
				Alert.alert('Error', 'Debes completar todos los campos', [
					{ text: 'Aceptar' },
				]);
				setLoading(false)
				return
			}

      const { data } = await axios.post(
        `${API}/auth/login`,
        {
          email,
          password,
        }
      )

      setLoading(false);

      if (!data.success) {
        Alert.alert('Error', 'Email o Contraseña incorrecta.', [
          { text: 'Aceptar' },
        ]);
        return
      }

      setAuth({"token": data.token, "user": data.user});
      await AsyncStorage.setItem("@auth", JSON.stringify({"token": data.token, "user": data.user}));
      navigation.navigate('Home')
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Ocurrio un error al iniciar. Itentelo otra ves.', [
        { text: 'Aceptar' },
      ]);
      return
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Bienvenido</Text>
      
        <Input
          id="email"
          label="Email"
          value={email}
          setValue={onChangeEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Escribe Tu Correo Electrónico"
        />
       
        <Input
          id="password"
          label="Contraseña"
          rightIcon="lock"
          autoCapitalize="none"
          secureTextEntry
          iconPack={Feather}
          value={password}
          setValue={onChangePassword}
          placeholder="********"
        />

        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Olvidaste tu contraseña
        </Text>

        {
          loading ?
            <ActivityIndicator size={'small'} color="green" style={{ marginTop: 10 }} /> :
            <SubmitButton
              title="Iniciar Sesión"
              onPress={submitLogin}
            />

        }

        <View
          style={{ ...styles.headerTitle, marginTop: 16 }}
        >
          <Text style={styles.goSignIn}>
            No Tienes Cuenta?{" "}
            <Text
              style={{ fontWeight: 'bold', color: colors.primary }}
              onPress={() => navigation.navigate("Signup")}
            >
              Regitrate Aqui
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  welcome: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    margin: 70,
  },
  forgotPassword: {
    marginTop: 5,
    textAlign: 'right',
  },
  headerTitle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
  goSignIn: {
		fontSize: 15,
		letterSpacing: 0.3
	}
})

export default Signin
