import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseapp from './firebaseinfo'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: firebaseapp().apiKey,
      authDomain: firebaseapp().authDomain,
      databaseURL: firebaseapp().databaseURL,
      projectId: firebaseapp().projectId,
      storageBucket: firebaseapp().storageBucket,
      messagingSenderId: firebaseapp().messagingSenderId
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
