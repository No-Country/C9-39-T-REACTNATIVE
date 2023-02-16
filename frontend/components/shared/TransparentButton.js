import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import colors from '../../constants/colors';

const TransparentButton = (props) => {
  return (
	<TouchableOpacity
			style={styles.button}
			onPress={props.onPress}
		>
        <Text style={{ color: colors.primary, fontSize: 16 }}>
            { props.title }
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.primary
    }
});

export default TransparentButton