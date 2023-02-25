import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

export default function ScreenThird () {
    const navigation = useNavigation()
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image
                            // source={require('../../assets/gringotts.jpeg')}
                            source={require('../assets/imgFirst.png')}
                            style={styles.imgStyle}
                        />
                <View style = {styles.headerContent}>
                    <Text style={styles.txtTitle}>
                        {`Fija Metas\nde Ahorro`}
                    </Text>
                    <Text style={styles.textSubtitle}>
                        {`Optimiza tus Gastos y Mejora tu \neconomia`}
                    </Text>
                </View>
                <View style={styles.Headerfoot}>
                    <View style={styles.circleSecond}>
                        
                    </View>
                    <View style={styles.circleFirst}>

                    </View>
                </View>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                 onPress={() => navigation.navigate('ScreenSecond')}
                >
                    <Icon
                    name='arrow-circle-left'
                    size={50}
                    color='#198E6B'
                    >

                    </Icon>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signin')}
                >
                    <Text>
                        Omitir
                    </Text>
                </TouchableOpacity>
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
    header:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContent:{
      alignItems: 'center',
      justifyContent: 'center', 
      marginBottom: 10
    },
    Headerfoot:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgStyle:{
        width: 200,
        height: 200
    },
    txtTitle:{
        font: 'Poppins',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
    },
    textSubtitle:{
        font: 'Poppins',
        fontSize: 15,
        textAlign: 'center'
    },  
    circleFirst:{
        width: 12,
        height:12,
        borderRadius: 50,
        backgroundColor: '#198E6B',
    },
    circleSecond:{
        width: 10,
        height:10,
        borderRadius: 50,
        backgroundColor: '#A3F3C4',
        marginRight: 10
    },
    footer:{
       width: 300,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
    }
  });