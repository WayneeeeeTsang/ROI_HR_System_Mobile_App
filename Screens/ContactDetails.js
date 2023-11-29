// ContactDetails.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ContactDetails = ({ route, navigation }) => {
  const { contact } = route.params;

  const handleEditPress = () => {
    navigation.navigate('EditContact', { contact });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style = {styles.contactDetailContainer}>
      <Text style={styles.contactDetailHeader}>{contact.name}</Text>
      <Text style={styles.contactDetailBox}>Employee ID:  {contact.id} </Text>
      <Text style={styles.contactDetailBox}>Phone:  {contact.phone}</Text>
      <Text style={styles.contactDetailBox}>Department:   {contact.department}</Text>
      <Text style={styles.contactDetailBox}>Address: </Text>
      <Text style={styles.contactDetailBox}>{contact.address}</Text>
      <TouchableOpacity
          style={styles.contactDetailButton}
          onPress={() => handleEditPress()}>
          <Text style={styles.contactDetailButtonText}> Edit </Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.contactDetailButton}
          onPress={() => handleGoBack()}>
          <Text style={styles.contactDetailButtonText}> Back </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = require('../CommonStyles');

export default ContactDetails;