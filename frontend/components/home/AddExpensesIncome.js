import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import colors from '../../constants/colors';

const items = ["Ingreso", "Gasto"];

const categorias = [
	{
		"tipo": "uno"
	},
	{
		"tipo": "dos"
	}
]

const AddExpensesIncome = ({ addExpensesIncome, setAddExpensesIncome }) => {
	const [isExpense, setIsExpense] = useState(0);
	const { width } = Dimensions.get("window");
	const optionWidth = width / 2 - 20;

	const [monto, setMonto] = useState(0)

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={{ marginVertical: 5 }}>
					<TouchableOpacity
						onPress={() => setAddExpensesIncome(false)}
						style={{
							width: 24,
							height: 24
						}}
					>
						<AntDesign
							name="leftcircleo"
							size={24}
							color={colors.primary}
						/>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: "row",
						marginTop: 16,
					}}
				>
					{items.map((item, index) => (
						<View
							key={item}
						>
							<TouchableOpacity onPress={() => setIsExpense(index)}>
								<Text
									style={{
										color: isExpense === index ? isExpense === 1 ? colors.redLight : colors.primary : colors.textGrey,
										fontSize: 16,
										width: optionWidth,
										textAlign: 'center',
										fontWeight: 'bold'
									}}
								>
									{item}
								</Text>
								<View
									style={{
										marginTop: 4,
										height: 4,
										backgroundColor: isExpense === index ? isExpense === 1 ? colors.redLight : colors.primary : colors.textLightGrey,
										borderRadius: 5
									}}
								/>

							</TouchableOpacity>
						</View>
					))}
				</View>
				<View
					style={{
						marginVertical: 20,
					}}
				>

					<View style={{ ...styles.row, alignItems: 'center', marginTop: 10 }}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.3 }}>
							Cantidad
						</Text>
					</View>
					<View style={{ ...styles.inputContainer, borderColor: isExpense === 1 ? colors.redLight : colors.primary }}>
						<FontAwesome style={{ marginLeft: 10 }} name="dollar" size={24} color={isExpense === 1 ? colors.redLight : colors.primary} />
						<TextInput
							onChangeText={setMonto}
							value={monto}
							keyboardType='numeric'
							placeholder='0.00'
							style={{ width: '100%', marginLeft: 200, fontSize: 16, fontWeight: 'bold' }}
						/>
					</View>

					<View style={{ ...styles.row, alignItems: 'center', marginTop: 10 }}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.3 }}>
							Categoria
						</Text>
					</View>
					<View style={{ ...styles.inputContainer, justifyContent: 'space-between', borderColor: isExpense === 1 ? colors.redLight : colors.primary }}>
						<Text>Seleccionar</Text>
						<MaterialIcons name="keyboard-arrow-down" size={24} color={isExpense === 1 ? colors.redLight : colors.primary} />
					</View>
					<View>
						<FlatList
							data={categorias}
							renderItem={(itemData) => {
								console.log(itemData);
								return (
									<Text>
										{itemData.item.tipo}
									</Text>
								)
							}}
						/>
					</View>

					{/* {items[active] == "Informe" && (
						<Report />
					)} */}
				</View>
			</ScrollView>

		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	inputContainer: {
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 12,
		borderRadius: 12,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		marginBottom: 10,
	}
})

export default AddExpensesIncome