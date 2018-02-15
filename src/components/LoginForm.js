import React, { Component } from 'react';
import { Text } from 'react-native';
import Firebase from 'firebase';
import { Button , Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  //to deal with user reaction
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress(){
    const { email, password } = this.state;

    this.setState({ error: '', loading: true});

    Firebase.auth().signInWithEmailAndPassword(email, password)
      //to clear the spinner
      .then(this.onLoginSuccess.bind(this))
      .catch( () => {
        //if user fail to sign in , this will ask him to create account
        Firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail(){
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  onLoginSuccess(){
    //clearout the form and any error messages
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }
  renderButton(){
      if(this.state.loading){
        return <Spinner size="small" />;
      }
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            placeholder = "user@gmail.com"
            label= "Email"
            value= {this.state.email}
            onChangeText = { email => this.setState( { email })}
          />
        </CardSection>

        <CardSection>
            <Input
                secureTextEntry
                placeholder="password"
                value = {this.state.password}
                onChangeText= {password => this.setState ({password})}
                label = "Password"
            />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
            {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

}
const styles ={
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#f00',

  }
};
export default LoginForm;
