import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight, Image} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Bonjour</Text>
      </View>
    );
  }
}
