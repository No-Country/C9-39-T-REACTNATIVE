import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../../constants/colors'
import { CheckBox } from 'react-native-elements'


const Entrada = ({ bottons, buttonSelected, isExpense, setButtonSelected, checkRepeatDay, setCheckRepeatDay, daySelected, setDaySelected }) => {
	return (
		<>
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
		</>
	)
}

export default Entrada

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 5
	},
})