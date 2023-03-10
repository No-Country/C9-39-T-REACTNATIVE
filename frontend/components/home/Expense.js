import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Bus from '../../assets/iconsGasto/conFondo/bus.svg'
import Carro from '../../assets/iconsGasto/conFondo/carro.svg'
import Combustible from '../../assets/iconsGasto/conFondo/combustible.svg'
import Comidas from '../../assets/iconsGasto/conFondo/comidas.svg'
import Deuda from '../../assets/iconsGasto/conFondo/deuda.svg'
import Factura from '../../assets/iconsGasto/conFondo/factura.svg'
import Renta from '../../assets/iconsGasto/conFondo/renta.svg'
import Servicio from '../../assets/iconsGasto/conFondo/servicio.svg'

import colors from '../../constants/colors'
import { AuthContext } from '../../global/globalVar'
import axios from 'axios'
import { API } from '../../config'
import moment from 'moment'
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from '@expo/vector-icons'

const VectorsComponents = {
  AntDesign: AntDesign,
  FontAwesome: FontAwesome,
  Ionicons: Ionicons,
  MaterialIcons: MaterialIcons,
  Entypo: Entypo,
}

const ImgGasto = ({ title }) => {
  switch (title) {
    case 'Impuestos o Servicios':
      return <Impuestos width={50} height={50} />
    case 'Comidas':
      return <Comidas width={50} height={50} />
    case 'Diversion':
      return <Diversion width={50} height={50} />
    case 'Electrodomesticos':
      return <Electrodomesticos width={50} height={50} />
    case 'Otros':
      return <Otros width={50} height={50} />
    default:
      return <Text>{title} NOT FOUND</Text>
  }
}

const Time = ({ preTime }) => {
  const date = new Date(preTime)

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  const formattedDate = `${day}-${month}-${year}`
  return <Text>{formattedDate}</Text>
}

const RenderItem = ({ item }) => {
  const Vector = VectorsComponents[item.category[0].vector]
  return (
    <View
      style={{
        padding: 16,
        borderColor: 'lightgray',
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ justifyContent: 'center', marginRight: 10 }}>
          {/* <ImgGasto title={item.title} /> */}
          <Vector
            name={item.category[0].logo}
            size={38}
            color={colors.redLight}
          />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
          <Text>
            {item.description.length > 20
              ? item.description.substring(0, 20) + '...'
              : item.description}
          </Text>
          {/* <Text style={{ color: 'gray' }}>{moment(item.createAt).format("DD-MM-YYYY")}</Text> */}
          <Time preTime={item.createAt} />
        </View>
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
          -${item.amount}
        </Text>
      </View>
    </View>
  )
}

const Expense = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const [auth] = useContext(AuthContext)

  const RetrieveData = async () => {
    try {
      setLoading(true)

      const { data } = await axios.get(`${API}/discharge`)
      const filterData = data.data
        .reverse()
        .filter((d) => d.userId[0]._id == `${auth.user._id}`)

      setData(filterData)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    RetrieveData()
  }, [])

  return (
    <View style={styles.container}>
      {!loading ? (
        data.length ? (
          <Expenses data={data} />
        ) : (
          <Empty />
        )
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 150,
          }}
        >
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
      )}
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
