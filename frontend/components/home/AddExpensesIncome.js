import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, StyleSheet, TextInput, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import colors from '../../constants/colors';
import SubmitButton from '../shared/SubmitButton';
import axios from 'axios';
import { API } from '../../config';
import { CheckBox } from 'react-native-elements';

const items = ["Ingreso", "Gasto"];
const bottons = ["Diario", "Semanal", "Mensual"];

const categorias = [
	{
		"id": "63e63d1c372fa3673743d73f",
		"title": "Salario",
		"logo": 'money'
	},
	{
		"id": "63e63d1c372fa3673743d73f",
		"title": "Transferencia Bancaria",
		"logo": 'bank'
	},
	{
		"id": "63e63d1c372fa3673743d73f",
		"title": "Otro",
		"logo": 'dollar'
	},
]

const AddExpensesIncome = ({ addExpensesIncome, setAddExpensesIncome }) => {
	const [isExpense, setIsExpense] = useState(0);
	const [buttonSelected, setButtonSelected] = useState(0)
	const { width } = Dimensions.get("window");
	const optionWidth = width / 2 - 20;

	const [showCategories, setShowCategories] = useState(false)

	const [monto, setMonto] = useState(0)
	const [category, setCategory] = useState(null)
	const [description, setDescription] = useState('')
	const [loading, setLoading] = useState(false)

	const [checkRepeatDay, setCheckRepeatDay] = useState(false);
	const [daySelected, setDaySelected] = useState(0)

	const selectCategory = (item) => {
		console.log(item);
		setShowCategories(false)
		setCategory(item)
	}

	const submitExpenseIncome = async () => {

		try {
			setLoading(true);

			// Validar datos
			if (!monto || !category || !description) {
				Alert.alert('Error', 'Debes completar todos los campos', [
					{ text: 'Aceptar' },
				]);
				setLoading(false)
				return
			}

			const { data } = await axios.post(`${API}/discharge`, {
				title: isExpense ? 'Gasto' : 'Ingreso',
				description,
				amount: monto,
				userId: "63ee9bdc4f9465196029dda9",
				category: category.id
			})

			setLoading(false)
			Alert.alert('Listo!', isExpense ? 'Gasto Registrado.' : 'Ingreso Registrado.', [
				{ text: 'Aceptar' },
			]);

			setMonto(0)
			setCategory(null)
			setDescription('')

		} catch (error) {
			console.log(error);
			Alert.alert('Error', `Hubo un error al guardar ${isExpense ? 'Gasto.' : 'Ingreso.'}`, [
				{ text: 'Aceptar' },
			]);
			setLoading(false);
		}
	}

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
					<TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
						<View style={{ ...styles.inputContainer, justifyContent: 'space-between', borderColor: isExpense === 1 ? colors.redLight : colors.primary }}>
							<Text>{category ? category.title : 'Seleccionar'}</Text>
							<MaterialIcons name="keyboard-arrow-down" size={24} color={isExpense === 1 ? colors.redLight : colors.primary} />
						</View>
					</TouchableOpacity>

					{
						showCategories && (
							<View style={styles.categoryContainer}>
								<FlatList
									data={categorias}
									renderItem={(itemData) => {
										return (
											<TouchableOpacity onPress={() => selectCategory(itemData.item)}>
												<View style={styles.cardCategory}>
													<FontAwesome
														name={itemData.item.logo}
														size={28}
														color={colors.primary}
														style={{ marginLeft: 10 }}
													/>
													<Text style={{ marginLeft: 20, fontSize: 18, fontWeight: '500' }}>
														{itemData.item.title}
													</Text>
												</View>
											</TouchableOpacity>
										)
									}}
								/>
							</View>
						)
					}

					<View style={{ ...styles.row, alignItems: 'center', marginTop: 10 }}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.3 }}>
							Entrada
						</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						{bottons.map((item, index) => (
							<View
								key={item}
							>
								<TouchableOpacity
									style={{
										backgroundColor: buttonSelected === index ? isExpense === 1 ? colors.redLight : colors.primary : 'transparent',
										fontSize: 16,
										textAlign: 'center',
										paddingHorizontal: 15,
										paddingVertical: 5,
										borderRadius: 10
									}}
									onPress={() => setButtonSelected(index)}
								>
									<Text
										style={{
											color: buttonSelected === index ? 'white' : colors.textGrey,
											fontSize: 16,
											textAlign: 'center',
											fontWeight: '500'
										}}
									>
										{item}
									</Text>
								</TouchableOpacity>
							</View>
						))}
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
						<CheckBox
							/* title="algo"
							checkedTitle='Verificado' */
							checkedColor={isExpense === 1 ? colors.redLight : colors.primary}
							checked={checkRepeatDay}
							onPress={() => setCheckRepeatDay(!checkRepeatDay)}
							style={{ backgroundColor: 'white' }}
						/>
						<Text style={{ fontSize: 15, fontWeight: '500', color: colors.textGrey }}>Se repetira cada dia</Text>
					</View>

					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10 }}>
						{
							["L", "M", "M", "J", "V", "S", "D"].map((item, index) => (
								<TouchableOpacity disabled={!checkRepeatDay} onPress={() => setDaySelected(index)}>
									<View 
										style={{ 
											height: 25, 
											width: 25, 
											borderRadius: 50, 
											backgroundColor: daySelected === index ? isExpense === 1 ? colors.red : colors.primary : isExpense === 1 ? colors.redLight : colors.primaryLight, 
											alignItems: 'center', 
											justifyContent: 'center' 
										}}
									>
										<Text style={{ fontWeight: 'bold', color: daySelected === index ? 'white' : 'black' }}>{item}</Text>
									</View>
								</TouchableOpacity>
							))
						}
					</View>

					<View style={{ ...styles.row, alignItems: 'center', marginTop: 20 }}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.3 }}>
							Nota
						</Text>
					</View>
					<TextInput
						placeholder={`Nota del ${isExpense ? 'gasto' : 'ingreso'}`}
						multiline
						style={{
							borderWidth: 2,
							borderColor: colors.textLightGrey,
							height: 80,
							borderRadius: 10,
							fontSize: 18,
							paddingHorizontal: 20,
						}}
						onChangeText={setDescription}
						value={description}
					/>

					<SubmitButton 
						title={isExpense ? 'Agregar Gasto' : 'Agregar Ingreso'} 
						onPress={submitExpenseIncome} 
						bgColor={isExpense && colors.redLight}
					/>
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
	},
	categoryContainer: {
		borderColor: colors.textLightGrey,
		borderWidth: 3,
		maxHeight: 180,
		borderRadius: 12,
		marginTop: -8
	},
	cardCategory: {
		display: 'flex',
		flexDirection: 'row',
		padding: 12,
		borderBottomColor: colors.textLightGrey,
		borderBottomWidth: 2,
	}
})

export default AddExpensesIncome