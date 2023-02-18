import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

import colors from '../../constants/colors'
import TransparentButton from '../shared/TransparentButton'

const mockData = [
  {
    title: 'Example Title 1',
    description: 'Example Description 1',
    createdAt: new Date('2023-02-14T18:28:41.494Z'),
    amount: 100,
    userId: ['user1'],
    category: ['category1'],
  },
  {
    title: 'Example Title 2',
    description: 'Example Description 2',
    createdAt: new Date('2023-01-12T18:28:41.494Z'),
    amount: 200,
    userId: ['user2'],
    category: ['category2'],
  },
  {
    title: 'Example Title 3',
    description: 'Example Description 3',
    createdAt: new Date('2023-01-14T18:28:41.494Z'),
    amount: 300,
    userId: ['user3'],
    category: ['category3'],
  },
]

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
      <Text>{item.category.join(', ')}</Text>
    </View>
    <View style={{ justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.description}</Text>

     {/* <Text>{item.createAt.toLocaleDateString()}</Text> */}
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
  //console.log(data)
  const RetrieveData = async () => {
    try {
      const response = await fetch(
        'https://gringotts-henna.vercel.app/api/discharge'
      )
      const dataJson = await response.json()
      //setData(data)
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
      {/* <TransparentButton title='Agregar' /> */}
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
        return <RenderItem item={item} key={item.id} />
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
