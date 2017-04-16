import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {

  render() {
    const { buttonStyle, textStyle } = styles;
    return (
      <TouchableOpacity style={buttonStyle} onPress={this.props.onPress} >
        <Text style={textStyle} > {this.props.children} </Text>
      </TouchableOpacity>
    );
  }

}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 2,
  }
};

//export default Button;
// As we're exporting via index.js we can't use export default
// export object with same keyname
export { Button };
