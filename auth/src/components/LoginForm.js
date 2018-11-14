import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

onButtonPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true});
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() =>{
          this.setState({error:'Everything is terrible and nothing is ok, Authentication Failed'})
        });
    });
}

renderButton() {
  if (this.state.loading) {
    return <Spinner size="small" />
  } 

  return (
    <Button
          onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
  );
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
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    textAlign: 'center'
  }
}

export default LoginForm;