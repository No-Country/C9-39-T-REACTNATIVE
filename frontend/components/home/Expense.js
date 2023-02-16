import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

import colors from '../../constants/colors';
import TransparentButton from '../shared/TransparentButton';

const Expense = () => {
	return (
		<View style={styles.container}>
			<View style={styles.circle}>
				<FontAwesome5 name="hand-holding-usd" size={30} color={colors.primary} />
			</View>
			<Text 
				style={{ 
					marginTop: 14, 
					color: colors.textGrey, 
					letterSpacing: 0.3 
				}}
			>
				Aun no agregaste ningun gasto
			</Text>
			{/* <TransparentButton title="Agregar" /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 15
	},
	circle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: 60,
		backgroundColor: colors.primaryExtraLight,
		borderRadius: 100,
	}
})

export default Expense