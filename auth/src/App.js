import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: 'AIzaSyBQD80iZT_n7ILuSAdz1eSccsHTSUo3Oz0',
      authDomain: 'auth-328e2.firebaseapp.com',
      databaseURL: 'https://auth-328e2.firebaseio.com',
      projectId: 'auth-328e2',
      storageBucket: 'auth-328e2.appspot.com',
      messagingSenderId: '696798778342'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  };
}

export default App;
