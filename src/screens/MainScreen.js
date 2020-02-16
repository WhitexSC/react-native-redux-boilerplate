import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MainScreen = ({ global }) => {
  console.log(global)
  return <View>
    <Text>hihi startPage</Text>
  </View>
}



const mapStateToProps = state => {
  return {
    global: state
  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

MainScreen.propTypes = {
  global: PropTypes.object.isRequired
};
