import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Screens/StackNavigator';

import HomeScreen from './Screens/loginPage'
import ContactList from './Screens/ContactList'
import CreateNewContact from './Screens/NewContact'

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
          initialRouteName="LOGIN" useLegacyImplementation 
          screenOptions = {styles.navigatorHeading}>
        <Drawer.Screen name="LOGIN" component={HomeScreen}/>
        <Drawer.Screen name="CONTACT LIST" component={StackNavigator} />
        <Drawer.Screen name="CREATE NEW CONTACT" component={CreateNewContact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = require('./CommonStyles');
