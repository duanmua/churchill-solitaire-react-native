import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { cardMoved } from '../actions';
import Card from './Card';
import { CARD_SUITS } from '../CardTypes';

class Goal extends React.Component {
  getGoalSlot(slot, lane) {
    console.log(slot);
    if (slot.topCard === null) {
      return (
        <View key={slot.id} style={{ flex: 1 }} />
      );
    }
    return (
      <View key={slot.id} style={{ flex: 1 }}>
        <Card
          key={ slot.topCard.id }
          cardMoved={ this.props.cardMoved }
          cardId={ slot.topCard.id }
          value={ slot.topCard.value }
          suit={ slot.topCard.suit }
          color={ slot.topCard.color }
          shown={ true }
          draggable={ false }
          flex={ true }
        />
      </View>
    );
  }

  render() {
    let slots = CARD_SUITS.map((suit) => {
      return this.props.goal[suit];
    });
    return (
      <View style={ styles.container }>
        {
          [].concat(...slots).map(this.getGoalSlot, this)
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: 'blue',
    top: 20,
    height: 50,
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

// ownProps IS this.props
// if now key is passed, variable name is used as key
const mapStateToProps = (state, ownProps) => {
  const { goal } = state.board;
  return { goal };
};

export default connect(mapStateToProps, { cardMoved })(Goal);
