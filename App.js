import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card';

export default class App extends React.Component {
  stackCard(child) {
    return (
      <Card>
        {child}
      </Card>
    )
  }

  getLane(cards) {
    var cardJSX = (<Card/>);
    cards.forEach(() => {
      cardJSX = this.stackCard(cardJSX);
    })
    return cardJSX;
  }

  render() {
    return (
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        { this.getLane([0,0,0]) }
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
    //alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
});
