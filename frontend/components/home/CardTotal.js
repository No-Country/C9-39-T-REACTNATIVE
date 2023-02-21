import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'
import moment from "moment";

import colors from '../../constants/colors'
import axios from 'axios'
import { API } from '../../config'

const VectorsComponents = {
	"AntDesign": AntDesign,
	"FontAwesome": FontAwesome,
	"Ionicons": Ionicons,
	"MaterialIcons": MaterialIcons,
	"Entypo": Entypo
}

const CardTotal = () => {
	const [showDetails, setShowDetails] = useState(false)
	const [incomes, setIncomes] = useState([])

	useEffect(() => {
		getIncome()
	}, [])

	const getIncome = async () => {
		const { data } = await axios.get(`${API}/income`)
		// TODO: remplazar 63f3ed6d7e48ac052e3881ca por el id del usuario logueado
		const filterData = data.data.reverse().filter(d => d.userId[0]._id == "63f3ed6d7e48ac052e3881ca")
		
		setIncomes(filterData)
	}

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
							{
								incomes.length > 0 ? incomes.map((item, index) =>
								{
									const Vector = VectorsComponents[item.logo]

									return (
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
												<Vector
													name={item.vector}
													size={28}
													color={colors.primary}
												/>
											</View>

											<View style={{ marginLeft: 15 }}>
												<Text style={{ color: 'white', fontSize: 18, marginBottom: 5 }}>
													{item.category[0].name}
												</Text>
												<Text style={{ color: 'white', fontSize: 16, marginBottom: 5 }}>
													{item.description}
												</Text>
												<Text style={{ color: colors.primaryExtraLight, fontSize: 16 }}>
													{moment(item.createAt).format("DD-MM-YYYY")}
												</Text>
											</View>
										</View>
										<Text style={{ marginRight: 10, fontSize: 20, color: 'white', fontWeight: 'bold' }}>
											 {`$ ${item.amount}`}
										</Text>
									</View>
								)}
								) : (
									<Text style={{ padding: 15, color: 'white', fontSize: 18 }}>No hay datos</Text>
								)
							}
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