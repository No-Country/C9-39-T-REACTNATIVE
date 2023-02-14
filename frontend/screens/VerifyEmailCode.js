import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/shared/Input'
import SubmitButton from '../components/shared/SubmitButton'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { mockFetch } from '../utils'
import colors from '../constants/colors'
import axios from 'axios'
import { API } from '../config'

const VerifyEmailCode = ({ route, navigation }) => {
  const [verificationCode, setverificationCode] = useState('')
  const [loading, setLoading] = useState(false)

  const { id } = route.params;

  const onPress = async () => {
    try {
      setLoading(true)

      if (!verificationCode) {
				Alert.alert('Error', 'Debes completar el codigo', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

      const { data } = await axios.post(`${API}/auth/codeverification`, {
				id, 
        code: verificationCode
			})

			// BORRAR LUEGO
			console.log(data);

      await mockFetch(1000)
      navigation.navigate('ResetPassword', {
        id
      })
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <MaterialCommunityIcons
          name='email-fast-outline'
          size={100}
          style={styles.icon}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>
          Insertar código de confirmación
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>
          Se ha enviado un mensaje de confirmación a tu correo electrónico
          vinculado
        </Text>
      </View>
      <Input
        id='verificationCode'
        label='Código'
        value={verificationCode}
        setValue={setverificationCode}
        autoCapitalize='none'
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
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', color: 'gray' }}>
          Si no te ha llegado ningún correo prueba buscar en spam o solicite
          reenviar el correo en 30 segundos
        </Text>
      </View>
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
  icon: {
    color: 'white',
    marginRight: 10,
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 15,
  },
})

export default VerifyEmailCode
