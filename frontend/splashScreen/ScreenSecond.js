import React from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export default function ScreenSecond() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          // source={require('../../assets/gringotts.jpeg')}
          source={require('../assets/imgDinero.png')}
          style={styles.imgStyle}
        />
        <View style={styles.headerContent}>
          <Text style={styles.txtTitle}>{`Controla\ntus Gastos`}</Text>
          <Text style={styles.textSubtitle}>
            {`obten resultados favorables para tu\neconomia`}
          </Text>
        </View>
        <View style={styles.Headerfoot}>
          <View style={styles.circleFirst}></View>
          <View style={styles.circleSecond}></View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text>Omitir</Text>
        </TouchableOpacity>
        {/* <Button
                title = 'next'
            
                > */}
        <TouchableOpacity onPress={() => navigation.navigate('ScreenThird')}>
          <Icon name='arrow-circle-right' size={50} color='#198E6B'></Icon>
        </TouchableOpacity>

        {/* </Button> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  Headerfoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 200,
    height: 200,
  },
  txtTitle: {
    font: 'Poppins',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
  },
  textSubtitle: {
    font: 'Poppins',
    fontSize: 15,
    textAlign: 'center',
  },
  circleFirst: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#198E6B',
    marginRight: 10,
  },
  circleSecond: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#A3F3C4',
  },
  footer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
