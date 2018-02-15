import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state= {loggedIn: null};

  componentWillMount(){
    Firebase.initializeApp({
      apiKey: 'AIzaSyDFqu1sTx-LkHNwT68_M70muaeS4KH9kII',
      authDomain: 'auth-46bba.firebaseapp.com',
      databaseURL: 'https://auth-46bba.firebaseio.com',
      projectId: 'auth-46bba',
      storageBucket: 'auth-46bba.appspot.com',
      messagingSenderId: '261741988063'
    });

    Firebase.auth().onAuthStateChanged( (user) => {
        if( user ){
          this.setState({ loggedIn: true });
        }else{
          this.setState({ loggedIn: false});
        }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
          return(
            <Button onPress={ () => Firebase.auth().signOut()}>
              Log Out
            </Button>
          );

      case false:
          return <LoginForm />;

      default:
          return <Spinner size="large" />;
    }
  }

  render(){
    return(
      <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;