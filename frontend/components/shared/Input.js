import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../constants/colors'

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <View style={styles.inputContainer}>
        {props.leftIcon && (
          <props.iconPack
            name={props.leftIcon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          style={styles.input}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={(text) => props.setValue(text)}
        />
        {props.rightIcon && (
          <props.iconPack
            name={props.rightIcon}
            size={props.iconSize || 15}
            style={styles.icon}
            onPress={props.rightIconOnPress}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginVertical: 8,
    letterSpacing: 0.3,
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.textGrey,
    marginBottom: 10,
  },
  icon: {
    color: colors.textGrey,
    marginRight: 10,
  },
  input: {
    flex: 1,
    letterSpacing: 0.3,
    paddingTop: 0,
    color: 'black',
    fontSize: 15,
  },
})

export default Input
