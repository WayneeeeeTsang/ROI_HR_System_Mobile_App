import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import alert from '../alert';

export default function CreateNewContact() 
{
  const [newID, setNewID] = useState('');
  const [newName, setNewName] = useState('');
  const [newDepartment, setNewDepartment] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    loadTasks();
  }, []);

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const handleAddTask = () => 
  { 
    if (newID.trim() !== '') 
    {
      const newTask = {newID: newID, newName: newName, newDepartment: newDepartment, newPhone: newPhone, newAddress: newAddress};
      const newTasks = tasks.concat(newTask);
      setTasks(newTasks);
      saveTasks(newTasks);
      setNewID('');
      setNewName('');
      setNewDepartment('');
      setNewPhone('');
      setNewAddress('');
    }
  };

  const deleteTask = (index) => {
    return alert(
      'Are you sure?',
      'Are you sure you want to remove this task?',
      [
        // The "No" button
        {
          text: 'No',
        },
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            let taskList = tasks.concat();
            taskList.splice(index, 1);
            setTasks(taskList);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Enter New Employee Profile</Text>
      <TextInput
        style={styles.inputTextBox}
        placeholder="Employee ID"
        value={newID}
        onChangeText={(text) => setNewID(text)}
      />
      <TextInput
        style={styles.inputTextBox}
        placeholder="Employee Name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      <TextInput
        style={styles.inputTextBox}
        placeholder="Department ID"
        value={newDepartment}
        onChangeText={(text) => setNewDepartment(text)}
      />
      <TextInput
        style={styles.inputTextBox}
        placeholder="Phone"
        value={newPhone}
        onChangeText={(text) => setNewPhone (text)}
      />
      <TextInput
        style={styles.inputTextBox}
        placeholder="Address"
        value={newAddress}
        onChangeText={(text) => setNewAddress (text)}
      />
      <TouchableOpacity
        style={styles.contactDetailButton}
        onPress={() => handleAddTask()}>
        <Text style={styles.contactDetailButtonText}> ADD </Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.name}>{item.newID}</Text>
            <Text style={styles.description}>{item.newName}</Text>
            <Text style={styles.description}>{item.newDepartment}</Text>
            <Text style={styles.description}>{item.newPhone}</Text>
            <Text style={styles.description}>{item.newAddress}</Text>
            <TouchableOpacity
              key={index}
              style={styles.deleteButton}
              onPress={() => deleteTask(index)}>
              <Text style={styles.deleteText}>-</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = require('../CommonStyles');




