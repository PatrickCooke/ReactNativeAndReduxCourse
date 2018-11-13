import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

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
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;