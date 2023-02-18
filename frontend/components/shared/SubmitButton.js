import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../../constants/colors';

const SubmitButton = props => {

    /* const enabledBgColor = props.color || colors.primary;
    const disabledBgColor = colors.lightGrey;
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor; */
    const bgColor = props.bgColor ? props.bgColor : colors.primary;

    return <TouchableOpacity 
			style={{ ...styles.button, backgroundColor: bgColor }}
			onPress={props.onPress}
		>
        <Text style={{ color: 'white', fontSize: 16 }}>
            { props.title }
        </Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
		//backgroundColor: bgColor,
		marginTop: 40,
    }
});

export default SubmitButton;