import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import PieChart from 'react-native-pie-chart'

const Percent = () => {
	const widthAndHeight = 250
    const series = [123, 321, 123, 789]
    const sliceColor = ['red','green','blue', 'grey', 'black']

	return (
		<View style={styles.container}>
			{/* <View style={styles.porcent}>
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
			</View> */}

			<Text style={styles.title}>Basic</Text>
			<PieChart
				widthAndHeight={widthAndHeight}
				series={series}
				sliceColor={sliceColor}
			/>
			<Text style={styles.title}>Doughnut</Text>
			<PieChart
				widthAndHeight={widthAndHeight}
				series={series}
				sliceColor={sliceColor}
				doughnut={true}
				coverRadius={0.45}
				coverFill={'#FFF'}
			/>
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
	title: {
		fontSize: 24,
		margin: 10
	}
})

export default Percent