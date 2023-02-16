import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/shared/Input'
import SubmitButton from '../components/shared/SubmitButton'
import { AntDesign } from '@expo/vector-icons'
import { mockFetch } from '../utils'
import axios from 'axios'
import { API } from '../config'

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onPress = async () => {
    
    try {
      setLoading(true)

      if (!email) {
				Alert.alert('Error', 'Debes completar el email', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

      const { data } = await axios.post(`${API}/auth/sendresetpassword`, {
				email
			})

			// BORRAR LUEGO
			console.log(data);

      if (!data.id) {
				Alert.alert('Error', 'Hubo un error al recuperar contraseña', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

      setLoading(false)

      await mockFetch(1000)
      navigation.navigate('VerifyEmailCode', {
        id: data.id
      })
    } catch (error) {
      console.log(error);
			Alert.alert('Error', 'Hubo un error al recuperar contraseña', [
				{text: 'Aceptar'},
			]);
			setLoading(false);
		}
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>
          Olvidaste tu contraseña
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>
          Para reestablecer tu contraseña por favor ingresa el correo vinculado
          a tu cuenta
        </Text>
      </View>
      <Input
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholder='email@correo.com'
        iconPack={AntDesign}
        leftIcon='mail'
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

export default ForgotPassword
