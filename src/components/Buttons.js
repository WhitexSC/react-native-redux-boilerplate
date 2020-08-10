import React from 'react';
import { Button, Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';

const buttons = {
  newUser: ['Create'],
  existedUser: ['Enter', 'Generate']
}

const Buttons = ({ signin, generatePin, createPin, pin, openWebView }) => {
  const { width } = Dimensions.get("screen")
  const justifyContent = pin == null ? 'center' : 'space-between';
  const buttonPressHandler = (buttonName) => {
    switch (buttonName) {
      case "Enter":
        return signin();
      case "Generate":
        return generatePin();
      case "Create":
        return createPin();
      case "Web view":
        return openWebView();
      default: return;
    }
  };
  const renderButtons = () => {
    if (pin != null) {
      return <>
        {buttons.existedUser.map((el, index) => (
          <Button
            key={index}
            title={el}
            onPress={() => buttonPressHandler(el)}
          />
        ))}
        <Button
          title="Web view"
          onPress={() => buttonPressHandler("Web view")}
        />
      </>
    } else {
      return (
        buttons.newUser.map((el, index) => (
          <Button
            key={index}
            title={el}
            onPress={() => buttonPressHandler(el)}
          />))
      )
    }
  }
  return (
    <View style={[styles.container, { justifyContent, width: width * 0.4 }]}>
      {renderButtons()}
    </View>
  )
};

export default Buttons;

Buttons.propTypes = {
  signin: PropTypes.func,
  createPin: PropTypes.func,
  generatePin: PropTypes.func,
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  }
}