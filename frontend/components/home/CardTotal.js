import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import colors from '../../constants/colors'

const CardTotal = () => {
	const [showDetails, setShowDetails] = useState(false)

	return (
		<View style={styles.containerCardTotal}>
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
					<TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
						<AntDesign name="down" size={18} color="white" />
					</TouchableOpacity>
					
				</View>
			</View>
			{
				showDetails && (
					<>
						<View
							style={{
								alignItems: 'center',
								width: '90%',
								height: 1,
								backgroundColor: colors.textLightGrey,
								borderRadius: 5
							}}
						/>

						<>
							<View style={styles.cardList}>
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
											borderColor: 'white',
											backgroundColor: 'white',
											borderRadius: 50,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center'
										}}
									>
										<FontAwesome
											name="money"
											size={28}
											color={colors.primary}
										/>
									</View>

									<View style={{ marginLeft: 15 }}>
										<Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>Salario</Text>
										<Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>Mensual</Text>
										<Text style={{ color: colors.primaryExtraLight, fontSize: 16 }}>07/02/2023</Text>
									</View>
								</View>
								<Text style={{ marginRight: 10, fontSize: 20, color: 'white', fontWeight: 'bold' }}>USD 200.00</Text>
							</View>



							<View style={styles.cardList}>
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
											borderColor: 'white',
											backgroundColor: 'white',
											borderRadius: 50,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center'
										}}
									>
										<FontAwesome
											name="money"
											size={28}
											color={colors.primary}
										/>
									</View>

									<View style={{ marginLeft: 15 }}>
										<Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>Salario</Text>
										<Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>Mensual</Text>
										<Text style={{ color: colors.primaryExtraLight, fontSize: 16 }}>07/02/2023</Text>
									</View>
								</View>
								<Text style={{ marginRight: 10, fontSize: 20, color: 'white', fontWeight: 'bold' }}>USD 200.00</Text>
							</View>
						</>
					</>
				)
			}



		</View>


	)
}

const styles = StyleSheet.create({
	containerCardTotal: {
		width: '100%',
		backgroundColor: colors.primary,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardTotal: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 120,
	},
	cardList: {
		width: '90%',
		paddingVertical: 10,
		borderWidth: 2,
		borderColor: 'white',
		marginVertical: 15,
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
})

export default CardTotal