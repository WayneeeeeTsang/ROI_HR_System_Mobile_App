// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ContactList" headerMode="none">
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
      <Stack.Screen name="EditContact" component={EditContact} />
    </Stack.Navigator>
  );
};

export default StackNavigator;