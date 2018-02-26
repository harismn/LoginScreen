/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Regform extends Component{
  render() {
    return (
      <Image 
      <View style={styles.container}>

        <Text style={styles.header}>Registration</Text>
      
        <TextInput style={styles.textinput} placeholder="Your Name"
        underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder="Your Email"
        underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder="Your Password" 
         secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
        alignSelf: 'stretch',
  },
  header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1,
  },
  textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',

  },
});
