import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { 
    imageContainerStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    thumbnailStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }} 
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
        </CardSection>

        <CardSection>
          <Image 
          style={imageContainerStyle}
          source={{ uri: image }}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
          Buy Now
          </Button>
        </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainerStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
