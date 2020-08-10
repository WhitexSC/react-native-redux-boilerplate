import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyWeb from '../screens/MyWeb';
import AuthScreen from '../screens/AuthScreen';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;



  // const Stack = createStackNavigator();
  // return <Stack.Navigator initialRouteName="AuthScreen">

  // </Stack.Navigator>


  return (<NavigationContainer>
    <Drawer.Navigator
      openByDefault
      initialRouteName="AuthScreen"
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '100%' }}
      overlayColor="transparent"
    >
      <Drawer.Screen name="AuthScreen" component={AuthScreen} />
      <Drawer.Screen name="MyWeb" component={MyWeb} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
