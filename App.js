import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




import HomeScreen from './Screens/Home'
import SettingsScreen from './Screens/Settings'
import ToDo from './Screens/ToDo'
import Contact from './Screens/Contact'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" useLegacyImplementation screenOptions={styles.navigatorHeading}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="ToDo" component={ToDo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = require('./Styles');
