import React, {Component} from 'react';
import { View } from 'react-native';
import { Header } from './components';
import { LoginScreen } from './screens';
import firebase from 'firebase';
import { appConfig } from './config/Config';

class App extends Component {

  componentWillMount(){
    firebase.initializeApp(appConfig.firebaseConfiguration());
  }

  render(){
    return (
      <View style={{flex:1}}>
          <Header headerText='Login'/>
          <LoginScreen />
      </View>
    );
  }
}

export default App;
