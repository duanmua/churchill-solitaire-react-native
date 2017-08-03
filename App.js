import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';
import SmallCard from './src/SmallCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card>
          <SmallCard />
        </Card>
        <Card />
        <Card />
        <Card />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
});
