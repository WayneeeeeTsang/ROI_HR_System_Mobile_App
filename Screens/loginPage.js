import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';


export default function Login ({navigation}) 
{
  const [userName, setUserName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
    return (
      <ImageBackground
            source = {require('../assets/Pic_loginPage/login_bg.png')}
            style = {styles.backgroundImage}
      >
        <View style={styles.container}>
          <Image
            source = {require('../assets/Pic_loginPage/login_logo.png')}
            style = {styles.logo}
          />
          <TextInput
            style = {styles.inputTextBox}
            placeholder = "User Name"
            value = {userName}
            onChangeText = {(text) => setUserName(text)}
          />
          <TextInput
            style = {styles.inputTextBox}
            placeholder = "Email Address"
            value = {emailAddress}
            onChangeText = {(text) => setEmailAddress(text)}
          />
          <TextInput
            style = {styles.inputTextBox}
            placeholder = "Password"
            value = {password}
            onChangeText = {(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    //position: 'absolute',
    width: '99%',
    height: '99%',
  },
  logo: {
    width: 250, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain', // or 'cover', 'stretch', etc.
  },
  inputTextBox: {
    height: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingLeft: 8,
    paddingRight: 8,
    width: '70%',
    color: '#595959',
  },
  button: {
    backgroundColor: '#595959', // Set the background color of the button
    padding: 10,
    borderRadius: 5, // Set the border radius for rounded corners
    width: '70%'
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  }
});