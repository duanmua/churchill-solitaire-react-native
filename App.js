import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Board from './src/components/Board';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Board/>
      </Provider>
    );
  }
}
