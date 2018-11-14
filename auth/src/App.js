import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import FireBaseAPI from './FireBaseAPI'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: FireBaseAPI.apiKey,
      authDomain: FireBaseAPI.authDomain,
      databaseURL: FireBaseAPI.databaseURL,
      projectId: FireBaseAPI.projectId,
      storageBucket: FireBaseAPI.storageBucket,
      messagingSenderId: FireBaseAPI.messagingSenderId
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
