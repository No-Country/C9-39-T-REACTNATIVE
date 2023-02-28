import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, StyleSheet, TextInput, FlatList, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign, FontAwesome, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

import colors from '../../constants/colors';
import SubmitButton from '../shared/SubmitButton';
import axios from 'axios';
import { API } from '../../config';
import Entrada from './expenseIncome/Entrada';
import { AuthContext } from '../../global/globalVar';

const items = ["Ingreso", "Gasto"];
const bottons = ["Diario", "Semanal", "Mensual"];

const VectorsComponents = {
	"AntDesign": AntDesign,
	"FontAwesome": FontAwesome,
	"Ionicons": Ionicons,
	"MaterialIcons": MaterialIcons,
	"Entypo": Entypo
}

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

	const [categoriasGastos, setCategoriasGastos] = useState([])
	const [categoriasIngresos, setCategoriasIngresos] = useState([])

	const [auth, setAuth] = useContext(AuthContext);

	const selectCategory = (item) => {
		setShowCategories(false)
		setCategory(item)
	}

	useEffect(() => {
		getIncome()
		getDischarge()
	}, [])

	const getIncome = async () => {
		const { data } = await axios.get(`${API}/category/income`)
		setCategoriasIngresos(data.data)
	}

	const getDischarge = async () => {
		const { data } = await axios.get(`${API}/category/discharge`)
		setCategoriasGastos(data.data)
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

			const { data } = await axios.post(`${API}/${isExpense ? 'discharge' : 'income'}`, {
				type: isExpense ? 'discharge' : 'income',
				title: category.name,
				description,
				amount: monto,
				userId: auth.user._id,
				category: category._id,

				logo: category.vector,
				vector: category.logo
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
		<SafeAreaView style={{ flex: 1 }}>
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
							key={index}
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
							<Text>{category ? category.name : 'Seleccionar'}</Text>
							<MaterialIcons name="keyboard-arrow-down" size={24} color={isExpense === 1 ? colors.redLight : colors.primary} />
						</View>
					</TouchableOpacity>

					{
						showCategories && (
							<View style={styles.categoryContainer}>
								<FlatList
									keyExtractor={item => item.id}
									data={isExpense ? categoriasGastos : categoriasIngresos}
									renderItem={(itemData) => {
										const Vector = VectorsComponents[itemData.item.vector]
										return (
											<TouchableOpacity key={itemData.item._id} onPress={() => selectCategory(itemData.item)}>
												<View style={styles.cardCategory}>
													<Vector
														name={itemData.item.logo}
														size={28}
														color={isExpense ? colors.redLight : colors.primary}
														style={{ marginLeft: 10 }}
													/>
													<Text style={{ marginLeft: 20, fontSize: 18, fontWeight: '500' }}>
														{itemData.item.name}
													</Text>
												</View>
											</TouchableOpacity>
										)
									}}
								/>
							</View> 
						)
					}

					<Entrada
						bottons={bottons}
						buttonSelected={buttonSelected}
						isExpense={isExpense}
						setButtonSelected={setButtonSelected}
						checkRepeatDay={checkRepeatDay}
						setCheckRepeatDay={setCheckRepeatDay}
						daySelected={daySelected}
						setDaySelected={setDaySelected}
					/>

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
		flex: 1,
		borderColor: colors.textLightGrey,
		borderWidth: 3,
		//maxHeight: 180,
		borderRadius: 12,
		marginTop: -8,
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