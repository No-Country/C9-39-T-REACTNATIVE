import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { VictoryPie } from 'victory-native'
import { Svg } from 'react-native-svg'

import colors from '../../constants/colors'
import { AuthContext } from '../../global/globalVar'
import axios from 'axios'
import { API } from '../../config'

const Percent = () => {
  let colorScales = [
    colors.primaryLight,
    '#F36257',
    '#53E6E7',
    '#DEDEE7',
    '#0F838E',
  ]

  const [dataPercent, setDataPercent] = useState([])
  const [loading, setLoading] = useState(false)

  const [auth] = useContext(AuthContext)

  //   const { _id } = auth.user

  useEffect(() => {
    getPercent()
  }, [])

  const getPercent = async () => {
    setLoading(true)
    let formatData = []
    const { data } = await axios.get(`${API}/statics/${auth.user?._id}`)

    formatData.push({
      x: 1,
      y: (data.totalAmount / data.incomesTotalAmount) * 100,
      label: 'Disponible',
    })

    Object.keys(data.categories).map((d, i) => {
      const divTotal = Math.round(data.categories[d]) / data.incomesTotalAmount
      const obj = {
        x: i + 2,
        y: divTotal * 100,
        label: d,
      }
      formatData.push(obj)
    })

    setDataPercent(formatData)

    setLoading(false)
  }

  return !loading ? (
    dataPercent.length > 0 && dataPercent[0].y ? (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Svg width={250} height={200}>
            <VictoryPie
              standalone={false} // Android workaround
              data={dataPercent ? dataPercent : []}
              radius={100} // circulo exterior
              innerRadius={75} // diametro del circulo interior
              labelRadius={80} // labels mover
              style={{
                labels: { fill: 'transparent' },
              }}
              width={250}
              height={200}
              colorScale={colorScales}
            />
          </Svg>
          <View style={{ position: 'absolute', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, textAlign: 'center', color: '#000' }}>
              {dataPercent.length > 0 && Math.trunc(dataPercent[0].y)}
            </Text>
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.porcent}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            0%
          </Text>
        </View>
      </View>
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
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  porcent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    backgroundColor: colors.primaryExtraLight,
    borderRadius: 100,
  },
})

export default Percent
