import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
export default function ScreenFirst ({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ScreenSecond') 
        }, 5000);
    }, [])
    
    return (
        <View style={styles.container} >
            {/* <TouchableWithoutFeedback> */}
                <Text style={styles.txtStyle}>
                    welcome
                </Text>
                {/* <View> */}
                    <Image
                        // source={require('../../assets/gringotts.jpeg')}
                        source={require('../assets/gringotts-sf.png')}
                        style={styles.imgStyle}
                    />
                {/* </View> */}
            {/* </TouchableWithoutFeedback> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#198E6B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgStyle:{
        width: 200,
        height: 200
    },
    txtStyle:{
        font: 'Poppins',
        color: '#fff',
        fontSize: 20,
    }

  });