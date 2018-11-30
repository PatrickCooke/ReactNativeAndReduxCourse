import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import FireBaseAPI from '../FirebaseInfo';
import LoginForm from './components/LoginForm';


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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
