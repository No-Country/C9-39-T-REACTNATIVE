import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'

import colors from '../../constants/colors'

const VectorsComponents = {
	"AntDesign": AntDesign,
	"FontAwesome": FontAwesome,
	"Ionicons": Ionicons,
	"MaterialIcons": MaterialIcons,
	"Entypo": Entypo
}

const pagosPendientes = [
	{
		"id": "63e63d1c372fa3673743d73f",
		"name": "Renta",
		"time": "Mensual",
		"fecha": "10/03/2023",
		"monto": "- $ 45000.00",
		"logo": 'home',
		"vector": "Entypo"
	},
	{
		"id": "63e63d1c372fa3673743d73a",
		"name": "Factura",
		"time": "Mensual",
		"fecha": "15/03/2023",
		"monto": "- $ 3500.00",
		"logo": 'text-document',
		"vector": "Entypo"
	},
	{
		"id": "63e63d1c372fa3673743d73z",
		"name": "Deuda",
		"time": "Mensual",
		"fecha": "15/03/2023",
		"monto": "- $ 9000.00",
		"logo": 'attach-money',
		"vector": "MaterialIcons"
	},
]

const PendingPayments = () => {
	return (
		<View style={styles.container}>
			{
				pagosPendientes.map(item => { 
					const Vector = VectorsComponents[item.vector]

					return (<View style={styles.cardList} key={item.id}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginLeft: 10,
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<View
								style={{
									width: 45,
									height: 45,
									borderWidth: 1,
									borderColor: colors.redLight,
									backgroundColor: colors.redLight,
									borderRadius: 50,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Vector
									name={item.logo}
									size={28}
									color="white"
								/>
							</View>

							<View style={{ marginLeft: 15 }}>
								<Text style={{ fontSize: 18, marginBottom: 3 }}>{item.name}</Text>
								<Text style={{ fontSize: 16, marginBottom: 3 }}>{item.time}</Text>
								<Text style={{ color: colors.textLightGrey, fontWeight: 'bold' }}>{item.fecha}</Text>
							</View>
						</View>
						<Text
							style={{
								marginRight: 10,
								fontSize: 20,
								color: colors.redLight,
								fontWeight: '500'
							}}
						>{item.monto}</Text>
					</View>
				)})
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardList: {
		width: '90%',
		paddingVertical: 10,
		borderWidth: 2,
		borderColor: colors.textLightGrey,
		marginVertical: 10,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
})

export default PendingPayments