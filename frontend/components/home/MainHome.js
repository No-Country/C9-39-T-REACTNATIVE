import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import colors from '../../constants/colors';
import Percent from './Percent';
import Report from './Report';

const items = ["Porcentaje", "Informe"];

const MainHome = () => {
	const [active, setActive] = useState(0);
	const { width } = Dimensions.get("window");
	const optionWidth = width / 2 - 20;

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
									color: active === index ? colors.primaryLight : colors.textGrey,
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
									backgroundColor: active === index ? colors.primaryLight : colors.textLightGrey,
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
				
				{items[active] == "Porcentaje" && (
					<Percent />
				)}
				{items[active] == "Informe" && (
					<Report />
				)}
			</View>
		</>
	)
}

export default MainHome