import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import colors from '../../constants/colors'

const CardTotal = () => {
	return (
		<View style={styles.cardTotal}>
			<Text
				style={{ color: 'white', fontSize: 18 }}
			>
				Ingreso Total
			</Text>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ marginRight: 14, color: 'white', fontSize: 26, fontWeight: 'bold' }}>
					$ 1000.00
				</Text>
				<AntDesign name="down" size={18} color="white" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardTotal: {
		width: '100%',
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		height: 120,
		borderRadius: 10,
	}
})

export default CardTotal