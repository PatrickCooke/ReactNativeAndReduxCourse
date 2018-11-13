import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

onButtonPress() {
  const { email, password } = this.state;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() =>{
          this.setState({error:'Everything is terrible and nothing is ok, Authentication Failed'})
        });
    });
}

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
          label="Email"
          placeholder="username@mail.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          // secureTextEntry={false} <<< don't need to include. When a prop is undefined, it is considered false
         />
        </CardSection>

        <CardSection>
          <Input 
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}  
          secureTextEntry={true}
          />
        </CardSection>

        <Text
          style={styles.errorTextStyle} >
          {this.state.error}
        </Text>

        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;