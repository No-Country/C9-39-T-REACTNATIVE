import { View, Text } from 'react-native';
import React from 'react';
import {
	StyleSheet,
	Button,
	SafeAreaView,
	Alert,
	TextInput,
  } from 'react-native';

const Signin = () => {
	const [email, onChangeEmail] = React.useState('');
	const [password, onChangePassword] = React.useState('');
  return (
	<SafeAreaView style={styles.container}>
	<View>
	  <Text>Bienvenido</Text>
	  <Text>Email</Text>
	  <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="📧 Escribe Tu Correo Electrónico"
        keyboardType="email-address"
      />
	  <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="🔒 Escribe Tu Contraseña"
        keyboardType="default"
      />
	  <Text>Olvidaste tu contraseña</Text>
	  <Button
	  	title="Iniciar Sesión"
		color= "#198E6B"
		onPress={() => Alert.alert('Iniciaste Sesión')}
	  />
	  <Text>Conectar con</Text>
	  <Button
	  	title= "Google"
		onPress={() => Alert.alert('Te logueaste con Google')}
	  />
	  <Button
	  	title="Facebook"
		onPress={() => Alert.alert('Te logueaste con Facebook')}
	  />
	  <Text>No tienes una cuenta?</Text>
	  <Text>Crear</Text>
	</View>
	</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	Button:{
		color: '#6FDDA7'
	},
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  marginHorizontal: 16,
	},
	title: {
	  textAlign: 'center',
	  marginVertical: 8,
	  color: '#6FDDA7',
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
	input: {
		height: 40,
		margin: 12,
		borderWidth: 0,
		padding: 10,
		backgroundColor: '#6FDDA7',
	  },
  });

export default Signin