import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const ContactList = ({ navigation }) => {
  const contacts = [
    { id: '1', name: 'John Smith', department: '1', phone: '02 9988 2211', address: '1 Code Lane, Javaville, NSW, 0100, Australia.' },
    { id: '2', name: 'Sue White', department: '2', phone: '03 8899 2255', address: '16 Bit Way, Byte Cove, QLD, 1101, Australia.' },
    { id: '3', name: "Bob O'Bits", department: '3', phone: '05 7788 2255', address: '8 Silicone Road, Cloud Hills, VIC, 1001, Australia.' },
    { id: '4', name: 'Mary Blue', department: '2', phone: '06 4455 9988', address: '4 Processor Boulevard, Appletson, NT, 1010, Australia.' },
    { id: '5', name: 'Mick Green', department: '3', phone: '02 9988 1122', address: '700 Bandwidth St, Bufferland, NSW, 0110, Australia.' },
  ];

  const navigateToContactDetails = (contact) => {
    navigation.navigate('ContactDetails', { contact });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToContactDetails(item)}>
            <View style={styles.contactListItem}>
              <Text style={styles.contactListName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = require('../CommonStyles');

export default ContactList;


