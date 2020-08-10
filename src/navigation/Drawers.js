import React from 'react'
// import { createAppContainer } from 'react-navigation'
import AuthScreen from '../screens/AuthScreen'
import MyWeb from '../screens/MyWeb'
import { createStackNavigator } from '@react-navigation/stack';


export default function Drawers() {
  const Stack = createStackNavigator();
  return <Stack.Navigator initialRouteName="AuthScreen">
    <Stack.Screen name="AuthScreen" component={AuthScreen} />
    <Stack.Screen name="MyWeb" component={MyWeb} />
  </Stack.Navigator>
}

// const HomeStack = createStackNavigator({
//   AuthScreen: {
//     screen: AuthScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'AuthScreen',
//       headerTintColor: 'blue'
//     })
//   },
//   WebView: {
//     screen: MyWeb,
//     navigationOptions: ({ navigation }) => ({
//       title: 'WebView',
//       headerTintColor: 'blue'
//     }),
//   },
// })

// const AppContainer = createAppContainer(HomeStack)


