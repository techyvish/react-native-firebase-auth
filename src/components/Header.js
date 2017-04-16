
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle} > {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingTop: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    backgroundColor: '#F8F8F8'
  },

  textStyle: {
    fontSize: 20,

  }
};

//export default Header;
export { Header };
