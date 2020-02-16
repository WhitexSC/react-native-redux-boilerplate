import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { newPin, generatePin } from '../reducers/actions';

const buttons = {
  newUser: ['Create'],
  existedUser: ['Enter', 'Generate']
}

const AuthScreen = ({ global, newPin, generatePin }) => {
  const [pin, setPin] = React.useState(null);
  const [validationMessage, setValidationMessage] = React.useState(null);
  React.useEffect(() => {
    setValidationMessage(null)
  }, [global])
  // console.log(pin)

  const validatePin = () => {
    global.pin === pin
      ? setValidationMessage('Gotcha!')
      : setValidationMessage('Wrong PIN!');
  }
  const errorMessage = () => {
    validatePin()
      ? alert()
      : <Text>Wrong PIN!</Text>
  }

  const buttonPressHandler = (buttonName) => {
    switch (buttonName) {
      case "Enter":
        return errorMessage();
      case "Generate":
        return generatePin();
      case "Create":
        return newPin({ pin });
      default: return;
    }
  };
  const renderButtons = () => {
    if (global.pin != null) {
      return <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        {buttons.existedUser.map((el, index) => (
          <Button
            style={{ width: '40%' }}
            key={index}
            title={el}
            type="outline"
            onPress={() => buttonPressHandler(el)}
          />
        ))}
      </View>
    } else {
      return <View>
        {buttons.newUser.map((el, index) => (
          <Button
            key={index}
            title={el}
            type="outline"
            onPress={() => buttonPressHandler(el)}
          />
        ))}
      </View>
    }
  };
  return <View style={styles.container}>
    <Text>{validationMessage}</Text>
    <Input
      label={global.pin || ''}
      inputStyle={[styles.components, { width: '50%' }]}
      underlineColorAndroid='transparent'
      onChangeText={value => { setPin(value) }}
      value={pin}
      maxLength={4}
    />
    {renderButtons()}
  </View>
};

const mapStateToProps = state => {
  return {
    global: state
  }
};
const mapDispatchToProps = dispatch => {
  return {
    newPin: payload => dispatch(newPin(payload)),
    generatePin: () => dispatch(generatePin()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

AuthScreen.propTypes = {
  global: PropTypes.object.isRequired,
  newPin: PropTypes.func.isRequired,
  generatePin: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  components: {
    textAlign: 'center'
  }
})