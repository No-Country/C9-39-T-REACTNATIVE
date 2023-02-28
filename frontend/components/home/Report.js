import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign, FontAwesome, Ionicons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons'

import colors from '../../constants/colors'
import axios from 'axios'
import { API } from '../../config'
import { AuthContext } from '../../global/globalVar'

const VectorsComponents = {
	"AntDesign": AntDesign,
	"FontAwesome": FontAwesome,
	"Ionicons": Ionicons,
	"MaterialIcons": MaterialIcons,
	"Entypo": Entypo
}

const Report = () => {
	const [formatData, setFormatData] = useState({})

	const [loading, setLoading] = useState(false)

	const [auth, setAuth] = useContext(AuthContext);

	useEffect(async () => {
		setLoading(true)

		await getIncome()
		await getDischarge()

		setLoading(false)
	}, [])

	const orderByDate = {}

	const getIncome = async () => {
		const { data } = await axios.get(`${API}/income`)
		const filterData = data.data.reverse().filter(d => d.userId[0]._id == `${auth.user._id}`)
		
		for (let i = 0; i < filterData.length; i++) {
			var fecha = new Date(filterData[i].createAt);
			var mes = `${fecha.getFullYear()}-${fecha.getMonth() + 1}`;

			orderByDate[mes] ?
				orderByDate[mes].ingresos ?
					orderByDate[mes].ingresos.push(filterData[i]) :
					orderByDate[mes] = { ...orderByDate[mes], "ingresos": [filterData[i]] } :
				orderByDate[mes] = { ...orderByDate[mes], "ingresos": [filterData[i]] }
		}

		setFormatData(orderByDate)
	}

	const getDischarge = async () => {
		const { data } = await axios.get(`${API}/discharge`)
		const filterData = data.data.reverse().filter(d => d.userId[0]._id == `${auth.user._id}`)
		
		for (let i = 0; i < filterData.length; i++) {
			var fecha = new Date(filterData[i].createAt);
			var mes = `${fecha.getFullYear()}-${fecha.getMonth() + 1}`;

			orderByDate[mes] ?
				orderByDate[mes].gastos ?
					orderByDate[mes].gastos.push(filterData[i]) :
					orderByDate[mes] = { ...orderByDate[mes], "gastos": [filterData[i]] } :
				orderByDate[mes] = { ...orderByDate[mes], "gastos": [filterData[i]] }
		}

		setFormatData(orderByDate)
	}

	return (
		<View>
			{
				!loading ?
					Object.keys(formatData).length > 0 ?
						Object.keys(formatData).map((key, index) => {
							
							let total = 0
							return (
								<View style={styles.container} key={`rep-${index}`}>
									{/* <Text>{key}</Text> */}
									<Text style={{ marginTop: 5, padding: 5, fontSize: 16, fontWeight: 'bold', letterSpacing: 0.3 }}>Ingresos</Text>
									{
										formatData[key]?.ingresos?.map((ingreso, index) => {
											
											const Vector = VectorsComponents[ingreso.vector] ? VectorsComponents[ingreso.vector] : VectorsComponents['FontAwesome']
											total = total + ingreso.amount
											return (
												<View style={styles.row} key={`i-${index}`}>
													<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
																name={ingreso.logo ? ingreso.logo : "bank"}
																size={28}
																color={colors.primary}
															/>
														</View>
														<Text style={{ fontSize: 16 }}>{ingreso.category[0].name}</Text>
													</View>
													<Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary }}>{ingreso.amount}</Text>
												</View>
											)
										})
									}

									<Text style={{ marginTop: 10, padding: 5, fontSize: 16, fontWeight: 'bold', letterSpacing: 0.3 }}>Gastos</Text>
									{
										formatData[key]?.gastos?.map((gasto, index) => {
											
											const Vector = VectorsComponents[gasto.vector]
											total = total - gasto.amount
											return (
												<View style={styles.row} key={`g-${index}`}>
													<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
																name={gasto.logo}
																size={28}
																color={colors.redLight}
															/>
														</View>
														<Text style={{ fontSize: 16 }}>{gasto.category[0].name}</Text>
													</View>
													<Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.secondary }}>- {gasto.amount}</Text>
												</View>
											)
										})
									}
									<View style={{ ...styles.row, alignItems: 'center', marginTop: 10 }}>
										<Text style={{ fontSize: 20, fontWeight: 'bold', letterSpacing: 0.3 }}>Total</Text>
										<Text style={{ fontSize: 18, fontWeight: 'bold' }}>{total}</Text>
									</View>
								</View>
							)
						}) : (
							<View style={styles.containerEmpty}>
								<View style={styles.circle}>
									<FontAwesome5
										name='hand-holding-usd'
										size={30}
										color={colors.primary}
									/>
								</View>

								<Text
									style={{
										marginTop: 14,
										color: colors.textGrey,
										letterSpacing: 0.3,
									}}
								>
									No hay informe para mostrar
								</Text>
							</View>
						) : (
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: 150 }}>
							<ActivityIndicator size={'large'} color={colors.primary} />
						</View>
					)
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		borderWidth: 2,
		borderColor: colors.textLightGrey,
		marginVertical: 5,
		borderRadius: 5
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 5
	},
	containerEmpty: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20
	},
	circle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 60,
		width: 60,
		backgroundColor: colors.primaryExtraLight,
		borderRadius: 100,
	},
})

export default Report