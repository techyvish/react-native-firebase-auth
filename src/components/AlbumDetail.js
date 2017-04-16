import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {


  buttonPressed() {
      //console.log('clicked');
  }

  render() {
    const { artist, thumbnail_image, title, image } = this.props.album;
    const { headerContentStyle,
            thumbnailStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle } = styles;

    return (<Card>
      <CardSection>
        <View style={thumbnailContainerStyle} />
          <Image
style={[thumbnailStyle]}
            source={{ uri: thumbnail_image }}
          />
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
          <Button >
            Buy Now
          </Button>
      </CardSection>

    </Card>);
  }


}

const styles = {

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  headerTextStyle: {
    fontSize: 18
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

};

export default AlbumDetail;
