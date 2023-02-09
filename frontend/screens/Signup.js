<<<<<<< HEAD
import { View, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather";

import Input from '../components/shared/Input';

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false)
=======
import { View, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather";
import axios from 'axios';

import Input from '../components/shared/Input';
import SubmitButton from '../components/shared/SubmitButton';
import { API } from '../config';
import colors from '../constants/colors';

const Signup = ({ navigation }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('')

	const [loading, setLoading] = useState(false)

	const registerHandler = async () => {
		try {
			setLoading(true);

			// Validar datos
			if (!name || !email || !password || !confirmPassword) {
				Alert.alert('Error', 'Debes completar todos los campos', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

			if (password !== confirmPassword) {
				Alert.alert('Error', 'Las contraseñas no coinciden', [
					{text: 'Aceptar'},
				]);
				setLoading(false)
				return
			}

			const { data } = await axios.post(`${API}/auth/register`, {
				"firstname": name,
				email,
				password,
				"lastname": "Last",
				"phone": "3524586987",
				"birthday": "2010-01-01",
				"status": "true"
			})

			// BORRAR LUEGO
			console.log(data);

			setLoading(false)
			Alert.alert('Registrado!', 'Registro Correcto!', [
				{text: 'Aceptar'},
			]);
			navigation.navigate("Signin");

		} catch (error) {
			Alert.alert('Error', 'Hubo un error al registrarse', [
				{text: 'Aceptar'},
			]);
			setLoading(false);
		}
	};
>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a

	return <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.container}>
			<ScrollView>

				<KeyboardAvoidingView
					style={styles.keyboardAvoidingView}
					behavior={Platform.OS === "ios" ? "height" : undefined}
					keyboardVerticalOffset={100}>

					<View style={styles.headerTitle}>
<<<<<<< HEAD
                        <Text style={styles.title}>Crear Cuenta</Text>
                    </View>
=======
						<Text style={styles.title}>Crear Cuenta</Text>
					</View>
>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a

					<Input
						id="firstName"
						label="Nombre y Apellido"
<<<<<<< HEAD
						//icon="user-o"
						/* onInputChanged={inputChangedHandler} */
=======
						value={name}
						setValue={setName}
>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a
						autoCapitalize="none" />

					<Input
						id="email"
						label="Email"
<<<<<<< HEAD
						//icon="mail"
						//iconPack={Feather}
						/* onInputChanged={inputChangedHandler} */
						keyboardType="email-address"
						autoCapitalize="none"
						/>
=======
						value={email}
						setValue={setEmail}
						keyboardType="email-address"
						autoCapitalize="none"
					/>
>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a

					<Input
						id="password"
						label="Contraseña"
						icon="lock"
						autoCapitalize="none"
						secureTextEntry
						iconPack={Feather}
<<<<<<< HEAD
						/* onInputChanged={inputChangedHandler} */
						/>
=======
						value={password}
						setValue={setPassword}
					/>
>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a

					<Input
						id="password"
						label="Confirmar Contraseña"
						icon="lock"
						autoCapitalize="none"
						secureTextEntry
						iconPack={Feather}
<<<<<<< HEAD
						/* onInputChanged={inputChangedHandler} */
						/>

					{
						isLoading ?
							<ActivityIndicator size={'small'} color="green" style={{ marginTop: 10 }} /> :
							//<SubmitButton
							//	title="Sign up"
							//	onPress={authHandler}
							//	style={{ marginTop: 20 }}
							//	disabled={!formState.formIsValid} />
							<Text>Aceptar</Text>
					}

=======
						value={confirmPassword}
						setValue={setConfirmPassword}
					/>

					{
						loading ?
							<ActivityIndicator size={'small'} color="green" style={{ marginTop: 10 }} /> :
							<SubmitButton
								title="Aceptar"
								onPress={registerHandler}
							/>

					}

					<View 
						style={{ ...styles.headerTitle, marginTop: 16 }}
					>
						<Text style={styles.goSignIn}>
							Ya Tienes Cuenta?{" "}
							<Text 
								style={{ fontWeight: 'bold', color: colors.primary }}
								onPress={() => navigation.navigate("Signin")} 
							>
								Iniciar
							</Text>
						</Text>
					</View>

>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a
				</KeyboardAvoidingView>

			</ScrollView>
		</View>
	</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
<<<<<<< HEAD
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'white'
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center'
    },
	headerTitle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
		marginVertical: 14,
		fontWeight: 'bold'
    },
=======
		paddingHorizontal: 20,
		flex: 1,
		backgroundColor: 'white'
	},
	keyboardAvoidingView: {
		flex: 1,
		justifyContent: 'center'
	},
	headerTitle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 14,
		fontWeight: 'bold'
	},
	goSignIn: {
		fontSize: 15,
		letterSpacing: 0.3
	}
>>>>>>> c09bd32a6069006ccfa5a65725b38f8a8f42040a
})

export default Signup