import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import FireBaseInfo from './FireBaseInfo'

class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
      apiKey: FireBaseInfo.apiKey,
      authDomain: FireBaseInfo.authDomain,
      databaseURL: FireBaseInfo.databaseURL,
      projectId: FireBaseInfo.projectId,
      storageBucket: FireBaseInfo.storageBucket,
      messagingSenderId: FireBaseInfo.messagingSenderId
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
