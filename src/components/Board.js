import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { cardMoved } from '../actions';
import Card from './Card';

class Board extends React.Component {
  getLane(cards) {
    var cardJSX = null;
    cards.forEach(() => {
      cardJSX = (
        <Card>
          { cardJSX }
        </Card>
      );
    })
    return cardJSX;
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.lanes.map(this.getLane)
        }
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

// ownProps IS this.props
// if now key is passed, variable name is used as key
const mapStateToProps = (state, ownProps) => {
  const { lanes } = state.board;
  return { lanes };
};

export default connect(mapStateToProps, { cardMoved })(Board);
