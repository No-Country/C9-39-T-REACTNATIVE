import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/shared/Input'
import SubmitButton from '../components/shared/SubmitButton'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { mockFetch } from '../utils'
import axios from 'axios'
import { API } from '../config'

const ResetPassword = ({ route, navigation }) => {
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [seePassword, setSeePassword] = useState(false)
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const { id } = route.params;

  const onPress = async () => {
    try {
      setLoading(true)

      if (!password || !repeatPassword) {
				Alert.alert('Error', 'Debes completar todos los campos', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

      if (password !== repeatPassword) {
				Alert.alert('Error', 'Las contraseñas no coinciden', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

      const { data } = await axios.post(`${API}/auth/resetpassword`, {
				id, 
        password
			})

			// BORRAR LUEGO
			console.log(data);

      await mockFetch(1000)
      navigation.navigate('Signin')
    } catch (error) {
      console.log(error);
			Alert.alert('Error', 'Hubo un error al verificar codigo', [
				{text: 'Aceptar'},
			]);
			setLoading(false);
		}
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>
          Restablecer contraseña
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>
          Para restrablecer escribe una nueva contraseña que contenga números y
          letras
        </Text>
      </View>
      <Input
        id='password'
        label='Nueva Contraseña'
        value={password}
        setValue={setPassword}
        secureTextEntry={!seePassword}
        autoCapitalize='none'
        iconPack={seePassword ? AntDesign : Entypo}
        rightIcon={seePassword ? 'eye' : 'eye-with-line'}
        rightIconOnPress={() => setSeePassword(!seePassword)}
      />
      <Input
        id='repeatPassword'
        label='Confirmar Contraseña'
        value={repeatPassword}
        setValue={setRepeatPassword}
        secureTextEntry={!seeRepeatPassword}
        autoCapitalize='none'
        iconPack={seeRepeatPassword ? AntDesign : Entypo}
        rightIcon={seeRepeatPassword ? 'eye' : 'eye-with-line'}
        rightIconOnPress={() => setSeeRepeatPassword(!seeRepeatPassword)}
      />
      {loading ? (
        <ActivityIndicator
          size={'small'}
          color='green'
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton title='Aceptar' onPress={onPress} />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export default ResetPassword
