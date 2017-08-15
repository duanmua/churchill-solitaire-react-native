import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Board from './src/components/Board';
import Deck from './src/components/Deck';
import Goal from './src/components/Goal';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, backgroundColor: 'skyblue', top: 20 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Deck style={{ flex: 1 }}/>
            <View  style={{ flex: 8, height: 20 }}/>
            <Goal style={{ flex: 8 }} />
          </View>
          <Board/>
        </View>
      </Provider>
    );
  }
}
