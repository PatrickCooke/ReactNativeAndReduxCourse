import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    const { id, description } = this.props.library.item;
    if (id === this.props.selectedLibrary) {
      return (
        <CardSection>
          <Text>{ description }</Text>
        </CardSection>
      );
    }
  }
  
  render() {
    console.log('props selectedLibrary? ');
    const { titleStyle } = styles;
    const { id, title/*, description*/ } = this.props.library.item;

    return (
      <TouchableWithoutFeedback 
      onPress={() => {
        //Alert.alert('A little more this topic: ', description);
        this.props.selectLibrary(id);
      }}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibrary: state.selectedLibraryID };
};

export default connect(mapStateToProps, actions)(ListItem);
