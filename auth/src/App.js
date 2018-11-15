import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import FireBaseAPI from './FireBaseAPI'

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: FireBaseAPI.apiKey,
      authDomain: FireBaseAPI.authDomain,
      databaseURL: FireBaseAPI.databaseURL,
      projectId: FireBaseAPI.projectId,
      storageBucket: FireBaseAPI.storageBucket,
      messagingSenderId: FireBaseAPI.messagingSenderId
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
          Log out
          </Button>
      </CardSection> 
      );      
      case false:
      return <LoginForm />;
      default:
      return (
        <CardSection>
          <Spinner size="large" />
          </CardSection>
        );
    }
  }

  render() { 
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  };
}

export default App;
