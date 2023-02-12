import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'

const data = [
	{
		ingresos: [
			{
				tipo: 'Salario',
				monto: '$ 200.00'
			}
		],
		gastos: [
			{
				tipo: 'Transporte publico',
				monto: '- $ 50.00'
			},
			{
				tipo: 'Comida',
				monto: '- $ 50.00'
			}
		],
		total: '$ 100.00'
	},
	{
		ingresos: [
			{
				tipo: 'Salario',
				monto: '$ 200.00'
			},
			{
				tipo: 'Transferencia',
				monto: '$ 200.00'
			}
		],
		gastos: [
			{
				tipo: 'Transporte publico',
				monto: '- $ 50.00'
			}
		],
		total: '$ 350.00'
	}
]

const Report = () => {
	return (
		<View>
			{
				data.map((info, index) => (
					<View style={styles.container}>
						<Text style={{ marginTop: 5, padding: 5, fontSize: 16, fontWeight: 'bold', letterSpacing: 0.3 }}>Ingresos</Text>
						{
							info.ingresos.map((ingreso, index) => (
								<View style={styles.row}>
									<Text style={{ fontSize: 16 }}>{ingreso.tipo}</Text>
									<Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary }}>{ingreso.monto}</Text>
								</View>
							))
						}

						<Text style={{ marginTop: 10, padding: 5, fontSize: 16, fontWeight: 'bold', letterSpacing: 0.3 }}>Gastos</Text>
						{
							info.gastos.map((gasto, index) => (
								<View style={styles.row}>
									<Text style={{ fontSize: 16 }}>{gasto.tipo}</Text>
									<Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.secondary }}>{gasto.monto}</Text>
								</View>
							))
						}
						<View style={{ ...styles.row, alignItems: 'center', marginTop: 10 }}>
							<Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.3 }}>Total</Text>
							<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{info.total}</Text>
						</View>
					</View>
				))
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
		paddingHorizontal: 10,
		paddingVertical: 5
	}
})

export default Report