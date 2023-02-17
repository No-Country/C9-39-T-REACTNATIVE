import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import CardTotal from '../components/home/CardTotal'
import MainHome from '../components/home/MainHome'
import DetailsInfo from '../components/home/DetailsInfo'
import TransparentButton from '../components/shared/TransparentButton'
import AddExpensesIncome from '../components/home/AddExpensesIncome'

const HomeScreen = () => {
	const [addExpensesIncome, setAddExpensesIncome] = useState(false)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<View style={styles.container}>
					{
						addExpensesIncome ? (
							<AddExpensesIncome
								addExpensesIncome={addExpensesIncome}
								setAddExpensesIncome={setAddExpensesIncome}
							/>
						) : (
							<>
								<CardTotal />

								<Text
									style={{ marginTop: 20, fontWeight: 'bold', fontSize: 16 }}
								>
									Datos Estadisticas
								</Text>

								<MainHome />

								<DetailsInfo />

								<View style={styles.containerButtonAdd}>
									<TransparentButton title="Agregar" onPress={() => setAddExpensesIncome(true)} />
								</View>
							</>
						)
					}
				</View>
			</ScrollView>
<<<<<<< HEAD
		</SafeAreaView>
=======
		</SafeAreaView >
>>>>>>> 10ea9e823c0e487e8d14b73f06612efef746469a
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 20
	},
	containerButtonAdd: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerButtonAdd: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20
	},
})

export default HomeScreen