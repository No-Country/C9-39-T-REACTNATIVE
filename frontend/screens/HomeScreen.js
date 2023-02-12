import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import CardTotal from '../components/home/CardTotal'
import MainHome from '../components/home/MainHome'
import DetailsInfo from '../components/home/DetailsInfo'

const HomeScreen = () => {
  return (
	<SafeAreaView style={{ flex: 1 }}>
		<View style={styles.container}>
			<ScrollView>
				<CardTotal />

				<Text 
					style={{ marginTop: 20, fontWeight: 'bold', fontSize: 16 }}
				>
					Datos Estadisticas
				</Text>
				
				<MainHome />

				<DetailsInfo />

			</ScrollView>
		</View>
	</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		flex: 1,
		backgroundColor: 'white'
	},
})

export default HomeScreen