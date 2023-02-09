import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/shared/Input'
import SubmitButton from '../components/shared/SubmitButton'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { mockFetch } from '../utils'

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [seePassword, setSeePassword] = useState(false)
  const [seeRepeatPassword, setSeeRepeatPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const onPress = async () => {
    setLoading(true)
    try {
      // request go here
      await mockFetch(1000)
      navigation.navigate('Signin')
    } catch {
    } finally {
      setLoading(false)
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
