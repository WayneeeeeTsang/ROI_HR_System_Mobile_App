// EditContact.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../alert';

const EditContact = ({ route, navigation }) => {
  const { contact } = route.params;
  const [editedContact, setEditedContact] = useState({ ...contact });

  const handleSavePress = () => {
      return alert(
        'Confirmation',
        'Do you want to apply the changes?',
        [
          {
            text: 'No',
            style: 'cancel',
            opPress:  () =>{
              navigation.goBack();
            },
          },
          {
            text: 'Yes',
            onPress: async () => {
              const updatedContactList = await updateContactList(editedContact);
              // Save the updated contact list to AsyncStorage
              await saveContactList(updatedContactList);
              // Navigate back to ContactDetails after saving
              navigation.navigate('ContactDetails',{contact: editedContact});
              alert('Profile update successfully!');
          },
        },
      ],
      {cancelable: false } 
    );
  };

 const updateContactList = async (updatedContact) => {
    try {
      // Retrieve the current contact list from AsyncStorage
      const storedContacts = await AsyncStorage.getItem('contacts');
      let contactList = [];

      if (storedContacts) {
        // Parse the stored contacts JSON
        contactList = JSON.parse(storedContacts);

        // Find the index of the contact to be updated
        const index = contactList.findIndex((contact) => contact.id === updatedContact.id);

        // Update the contact at the found index
        if (index !== -1) {
          contactList[index] = updatedContact;
        }
      }  

       return contactList;
    } catch (error) {
      console.error('Error updating contact list:', error);
      return [];
    }
  };

const saveContactList = async (contactList) => {
    try {
      // Stringify the contact list and save it to AsyncStorage
      await AsyncStorage.setItem('contacts', JSON.stringify(contactList));
    } catch (error) {
      console.error('Error saving contact list:', error);
    }
  };  

  return (
    <View style={styles.editContactContainer}>
      <Text style={styles.pageTitle}>Edit Contact</Text>
      <Text style={styles.editContactTitle}>Name:</Text>
      <TextInput
        style={styles.inputTextBox}
        value={editedContact.name}
        onChangeText={(text) => setEditedContact({ ...editedContact, name: text })}
      />
      <Text style={styles.editContactTitle}>Phone:</Text>
      <TextInput
        style={styles.inputTextBox}
        value={editedContact.phone}
        onChangeText={(text) => setEditedContact({ ...editedContact, phone: text })}
      />
      <Text style={styles.editContactTitle}>Department ID:</Text>
      <TextInput
        style={styles.inputTextBox}
        value={editedContact.department}
        onChangeText={(text) => setEditedContact({ ...editedContact, department: text })}
      />
      <Text style={styles.editContactTitle}>Address:</Text>
      <TextInput
        style={styles.inputTextBox}
        value={editedContact.address}
        onChangeText={(text) => setEditedContact({ ...editedContact, address: text })}
      />
      <TouchableOpacity
          style={styles.contactDetailButton}
          onPress={() => handleSavePress()}>
          <Text style={styles.contactDetailButtonText}> SAVE </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = require('../CommonStyles');


export default EditContact;
