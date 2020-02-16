import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const PinInput = ({pin, setPin}) => {
  const { width } = Dimensions.get("screen")
  return (
    <View style={{
      width: width * 0.3,
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20
    }}>
      <TextInput
        label={global.pin || ''}
        style={styles.inputText}
        placeholder="type pin"
        onChangeText={value => { setPin(value) }}
        value={pin}
        maxLength={4}
        caretHidden={true}
      />
    </View>
  )
};
export default PinInput;

PinInput.propTypes = {
  setPin: PropTypes.func.isRequired,
  pin: PropTypes.string
}

const styles = StyleSheet.create({
  inputText: {
    textAlign: 'center'
  }
})