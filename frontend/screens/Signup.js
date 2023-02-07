import { View, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from "react-native-vector-icons/Feather";

import Input from '../components/shared/Input';

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false)

	return <SafeAreaView style={{ flex: 1 }}>
		<View style={styles.container}>
			<ScrollView>

				<KeyboardAvoidingView
					style={styles.keyboardAvoidingView}
					behavior={Platform.OS === "ios" ? "height" : undefined}
					keyboardVerticalOffset={100}>

					<View style={styles.headerTitle}>
                        <Text style={styles.title}>Crear Cuenta</Text>
                    </View>

					<Input
						id="firstName"
						label="Nombre y Apellido"
						//icon="user-o"
						/* onInputChanged={inputChangedHandler} */
						autoCapitalize="none" />

					<Input
						id="email"
						label="Email"
						//icon="mail"
						//iconPack={Feather}
						/* onInputChanged={inputChangedHandler} */
						keyboardType="email-address"
						autoCapitalize="none"
						/>

					<Input
						id="password"
						label="Contraseña"
						icon="lock"
						autoCapitalize="none"
						secureTextEntry
						iconPack={Feather}
						/* onInputChanged={inputChangedHandler} */
						/>

					<Input
						id="password"
						label="Confirmar Contraseña"
						icon="lock"
						autoCapitalize="none"
						secureTextEntry
						iconPack={Feather}
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

				</KeyboardAvoidingView>

			</ScrollView>
		</View>
	</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
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
})

export default Signup