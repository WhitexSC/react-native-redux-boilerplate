import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import Buttons from '../components/Buttons';
import PinInput from '../components/PinInput';
import { newPin, generatePin } from '../reducers/actions';
import MyWeb from './MyWeb';

const AuthScreen = ({ global, newPin, generatePin, navigation }) => {
  const [pin, setPin] = React.useState();
  const [validationMessage, setValidationMessage] = React.useState(null);
  React.useEffect(() => {
    setValidationMessage(null)
  }, [global])

  const validatePin = () => {
    global.pin === pin
      ? setValidationMessage('Gotcha!')
      : setValidationMessage('Wrong PIN!');
  }
  const createPin = () => {
    newPin({ pin })
    setPin();
  };
  const signin = () => {
    validatePin();
    setPin();
  };
  const deleteExistedPin = () => {
    generatePin();
    setPin();
  };
  const openWebView = () => navigation.navigate('MyWeb');

  return <View style={styles.container}>
    <Text>{validationMessage}</Text>
    <PinInput
      pin={pin}
      setPin={value => setPin(value)}
    />
    <Buttons
      pin={global.pin}
      signin={signin}
      generatePin={deleteExistedPin}
      createPin={createPin}
      openWebView={openWebView}
    />
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
    generatePin: () => dispatch(generatePin())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

AuthScreen.propTypes = {
  global: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
})