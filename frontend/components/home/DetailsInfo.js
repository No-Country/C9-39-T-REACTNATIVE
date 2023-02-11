import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors';
import Expense from './Expense';
import PendingPayments from './PendingPayments';

const items = ["Gastos", "Pagos Pendientes"];

const DetailsInfo = () => {
	const [active, setActive] = useState(0);

	return (
		<>
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
						<TouchableOpacity onPress={() => setActive(index)}>
							<Text
								style={{
									color: active === index ? 'white' : colors.textGrey,
									backgroundColor: active === index ? colors.primary : 'transparent',
									fontSize: 16,
									textAlign: 'center',
									paddingVertical: 5,
									paddingHorizontal: 15,
									borderRadius: 10,
									marginRight: 13,
								}}
							>
								{item}
							</Text>

						</TouchableOpacity>
					</View>
				))}
			</View>
			<View
				style={{
					marginVertical: 20,
				}}
			>
				{items[active] == "Gastos" && (
					<Expense />
				)}
				{items[active] == "Pagos Pendientes" && (
					<PendingPayments />
				)}
			</View>
		</>
	)
}

export default DetailsInfo