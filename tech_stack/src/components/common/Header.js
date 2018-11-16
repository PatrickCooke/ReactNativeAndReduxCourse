// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    
    return (
      <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
};

const styles = {
  textStyle: {
      fontSize: 20
  },
  viewStyle: {
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15,
      //Adding a shadow below the header as a boarder instead of a solid line
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // no explaination of this as of yet, but will be updated later
      elevation: 2,
      position: 'relative'
  }
};

// make the component available to other parts of the app
export  { Header };
