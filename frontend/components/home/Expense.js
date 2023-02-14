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
  <View style={{ padding: 16 }}>
    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
    <Text>{item.description}</Text>
    <Text>{item.createdAt.toLocaleDateString()}</Text>
    <Text> - ${item.amount}</Text>
    <Text>Categoría: {item.category.join(', ')}</Text>
  </View>
)

const Expense = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://gringotts-henna.vercel.app/api/discharge'
        )
        const json = await response.json()
        //setData(json.data)
        setData(mockData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      {data.length ? <Expenses data={data} /> : <Empty />}
      <TransparentButton title='Agregar' />
    </View>
  )
}

const TotalGastos = ({ data }) => {
  const totalAmount = data.reduce((total, item) => total + item.amount, 0)
  return (
    <Text style={{ fontSize: 18, float: 'right', color: colors.primary }}>
      {totalAmount}
    </Text>
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
    <>
      <Text style={{ float: 'right' }}>Total:</Text>
      <View>
        <TotalGastos data={data} />
      </View>
      {data.map((item) => {
        return <RenderItem item={item} key={item.createdAt.toISOString()} />
      })}
    </>
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
