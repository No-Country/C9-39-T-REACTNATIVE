import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import Bus from '../../assets/iconsGasto/conFondo/bus.svg'
import Carro from '../../assets/iconsGasto/conFondo/carro.svg'
import Combustible from '../../assets/iconsGasto/conFondo/combustible.svg'
import Comidas from '../../assets/iconsGasto/conFondo/comidas.svg'
import Deuda from '../../assets/iconsGasto/conFondo/deuda.svg'
import Factura from '../../assets/iconsGasto/conFondo/factura.svg'
import Renta from '../../assets/iconsGasto/conFondo/renta.svg'
import Servicio from '../../assets/iconsGasto/conFondo/servicio.svg'

import colors from '../../constants/colors'

const ImgGasto = ({ title }) => {
  switch (title) {
    case 'Bus':
      return <Bus width={100} height={100} />
    case 'Carro':
      return <Carro width={100} height={100} />
    case 'Combustible':
      return <Combustible width={100} height={100} />
    case 'Comidas':
      return <Comidas width={100} height={100} />
    case 'Deuda':
      return <Deuda width={100} height={100} />
    case 'Factura':
      return <Factura width={100} height={100} />
    case 'Renta':
      return <Renta width={100} height={100} />
    case 'Servicio':
      return <Servicio width={100} height={100} />
    default:
      return <Text>{title} NOT FOUND</Text>
  }
}

const RenderItem = ({ item }) => (
  <View
    style={{
      padding: 16,
      borderColor: 'lightgray',
      borderRadius: 10,
      borderWidth: 2,
      padding: 10,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }}
  >
    <View style={{ justifyContent: 'center' }}>
      <ImgGasto title={item.title} />
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={{ color: 'gray' }}>{item.createAt}</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 22,
          display: 'flex',
          justifyContent: 'flex-end',
          color: colors.primary,
        }}
      >
        - $ {item.amount}
      </Text>
    </View>
  </View>
)

const Expense = () => {
  const [data, setData] = useState({})
  const RetrieveData = async () => {
    try {
      const response = await fetch(
        'https://gringotts-henna.vercel.app/api/discharge'
      )
      const dataJson = await response.json()

      setData(dataJson.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    RetrieveData()
  }, [])

  return (
    <View style={styles.container}>
      {data.length ? <Expenses data={data} /> : <Empty />}
    </View>
  )
}

const TotalGastos = ({ data }) => {
  const totalAmount = data.reduce((total, item) => total + item.amount, 0)
  return (
    <View
      elevation={5}
      style={{
        fontSize: 18,
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1,
        textAlign: 'left',
        marginBottom: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1,
        },
      }}
    >
      <View>
        <Text style={{ justifyContent: 'flex-end', textAlign: 'right' }}>
          Total:
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: colors.primary,
            textAlign: 'right',
            fontSize: 22,
          }}
        >
          $ {totalAmount}
        </Text>
      </View>
    </View>
  )
}

const Empty = () => {
  return (
    <>
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
        Aun no agregaste ningun gasto
      </Text>
    </>
  )
}

const Expenses = ({ data }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={{ flex: 1 }}>Por fecha</Text>
        <TotalGastos
          style={{ fontSize: 18, alignContent: 'left' }}
          data={data}
        />
      </View>
      {data.map((item) => {
        return <RenderItem item={item} key={item._id} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
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

export default Expense
