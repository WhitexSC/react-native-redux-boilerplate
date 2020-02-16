import React from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';

const LoadingScreen = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center'
  }
});

export default LoadingScreen;
