import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/shared/Input'
import SubmitButton from '../components/shared/SubmitButton'
import { AntDesign } from '@expo/vector-icons'
import { mockFetch } from '../utils'

const VerifyEmailCode = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onPress = async () => {
    setLoading(true)
    try {
      // request go here
      await mockFetch(1000)
      navigation.navigate('ResetPassword')
    } catch {
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>
          Imagen
        </Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholder='email@correo.com'
        iconPack={AntDesign}
        icon='mail'
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
})

export default VerifyEmailCode
