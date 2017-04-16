import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class Input extends Component {

  render(){
    const { label , value, onChangeText, autoCorrect, placeholder, autoCapitalize, secureTextEntry, keyboardType} = this.props;
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
      <View style={containerStyle} >
        <Text style={labelStyle}> {label} </Text>
        <TextInput
            autoCapitalize = {autoCapitalize}
            placeholder = {placeholder}
            secureTextEntry = {secureTextEntry}
            autoCorrect = {autoCorrect}
            value= {value}
            keyboardType = {keyboardType}
            onChangeText = {onChangeText}
            style={inputStyle} >
        </TextInput>
      </View>

    );
  }

}

const styles = {

    labelStyle:{
      flex:1,
      fontSize:18,
      paddingLeft:20
    },

    containerStyle: {
      flexDirection : 'row',
      alignItems: 'center',
      height: 40,
      flex: 1
    },

    inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft : 5,
      fontSize: 18,
      lineHeight: 23,
      flex:2
    }

};

export { Input };
