import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import PresentatioanalComponent from './styles/PresentationalComponent'

export default class App extends React.Component{
  state= {
    myState: 'This is my state'
  }

  render(){
    return(
      <View>
        <PresentatioanalComponent myState = {this.state.myState}>

        </PresentatioanalComponent>
      </View>
    );
  }
}