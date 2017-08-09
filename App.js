import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Board from './src/components/Board';
import Deck from './src/components/Deck';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
          <Deck/>
          <Board/>
        </View>
      </Provider>
    );
  }
}
