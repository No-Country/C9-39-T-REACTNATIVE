import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const Percent = () => {

	return (
		<View style={styles.container}>
			<View style={styles.porcent}>
				<Text 
					style={{ 
						justifyContent: 'center', 
						alignItems: 'center',
						fontSize: 24,
						fontWeight: 'bold'
					}}
				>
					0%
				</Text>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	porcent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 200,
		width: 200,
		backgroundColor: colors.primaryExtraLight,
		borderRadius: 100,
	},
})

export default Percent