import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createWtore, createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import FireBaseAPI from '../FirebaseInfo';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
