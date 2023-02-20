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
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
			{/* <View style={styles.containerButtonAdd}>
				<TransparentButton title="Agregar" onPress={() => setAddExpensesIncome(true)} />
			</View>  */}
		</SafeAreaView >
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
		marginBottom: 20,
	},
	/* containerButtonAdd: {
		position: "absolute",
        bottom: 10,
        right: 10,
	}, */
})

export default HomeScreen