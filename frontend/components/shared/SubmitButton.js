import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../../constants/colors';

const SubmitButton = props => {

    /* const enabledBgColor = props.color || colors.primary;
    const disabledBgColor = colors.lightGrey;
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor; */

    return <TouchableOpacity 
			style={styles.button}
			onPress={props.onPress}
		>
        <Text style={{ color: 'white' }}>
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
		backgroundColor: colors.primary,
		marginTop: 40,
    }
});

export default SubmitButton;