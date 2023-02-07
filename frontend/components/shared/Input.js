import { StyleSheet, Text, TextInput, View } from "react-native"

const Input = props => {

   
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>

        <View style={styles.inputContainer}>
           
            <TextInput
                { ...props }
                style={styles.input}
                //onChangeText={onChangeText}
                //value={value}
				/>

			{
                props.icon && <props.iconPack
                    name={props.icon}
                    size={props.iconSize || 15 }
                    style={styles.icon} />
            }
        </View>

    </View>
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    label: {
        marginVertical: 8,
        letterSpacing: 0.3,
        color: 'black'
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
		borderWidth: 1,
		borderColor: 'grey',
		marginBottom: 10
    },
    icon: {
        color: 'grey',
		marginRight: 10,
    },
    input: {
        flex: 1,
        letterSpacing: 0.3,
        paddingTop: 0,
		color: 'black',
		fontSize: 15
    }
   
})

export default Input;