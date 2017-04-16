import React, {Component} from 'react';
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from '../components';
import { Alert } from 'react-native';

class LoginScreen extends Component {
  state = { email: '',
            password : '',
            error : '',
            loading: false};

  render(){
    return (
      <Card>
        <CardSection>
          <Input
              autoCapitalize = 'none'
              autoCorrect = {false}
              placeholder = 'user@gmail.com'
              label = 'Email'
              value = {this.state.email}
              keyboardType = "email-address"
              onChangeText={ (email) => this.setState({ email : email })}
          />
        </CardSection >
        <CardSection>
          <Input
              autoCorrect = {false}
              placeholder = "Password"
              secureTextEntry = {true}
              label = 'Password'
              value = {this.state.password}
              onChangeText={ password  => this.setState({ password })}
          />
        </CardSection >
        <CardSection >
          <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
        </CardSection>
      </Card>
    );
  }

  onButtonPress() {

    const { email, password } = this.state;

    this.setState({ error: '' ,loading : true });

    firebase.auth().signInWithEmailAndPassword(email ,password )
      .then(this.onLoginSuccess.bind(this))
      .catch( ()=>{
          firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this));
      });

  }


  onLoginFailed() {
    this.setState({error : 'Authentication error occured.', loading: false });
    Alert.alert(
       'Error',
       'Authentication error occured.',
       [
         {text: 'OK', onPress: () => console.log('OK Pressed!')},
       ]);
  }

  onLoginSuccess() {

    this.state({ email: '',
                 password : '',
                 error : '',
                 loading: false })

  }

}

export { LoginScreen } ;
