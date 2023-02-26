import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { VictoryPie } from 'victory-native'
import { Svg } from 'react-native-svg'

import colors from '../../constants/colors'

const getData = [
	{ x: 1, y: 70, label: "Disponible" },
	{ x: 2, y: 15, label: "Comidas" },
	{ x: 3, y: 15, label: "Otros" }
]

const Percent = () => {
	let colorScales = [colors.primaryLight, "#F36257", "#53E6E7"]

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
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Svg width={250} height={200} >

					<VictoryPie
						standalone={false} // Android workaround
						data={getData}
						radius={100} // circulo exterior
						innerRadius={75} // diametro del circulo interior
						labelRadius={80} // labels mover
						style={{
							labels: { fill: "transparent" },
						}}
						width={250}
						height={200}
						colorScale={colorScales}
					/>
				</Svg>
				<View style={{ position: 'absolute', justifyContent: 'center' }}>
					<Text style={{ fontSize: 25, textAlign: 'center', color: '#000' }}>70%</Text>
				</View>
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