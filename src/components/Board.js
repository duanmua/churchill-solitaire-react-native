import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { cardMoved, cardDragStart } from '../actions';
import Card from './Card';

class Board extends React.Component {
  getLane(cards, lane) {
    var laneJSX = null;
    console.log(`lane ${lane} ${this.props.activeLane}`);
    var zIndex = lane === this.props.activeLane ? 9999 : 0;

    cards.forEach((card, index) => {

      const key = "cardID: " + card.id + " lane: " + lane + " index: " + index;
      laneJSX = (
        <Card
          key={ key }
          cardMoved={ this.props.cardMoved }
          cardDragStart={ this.props.cardDragStart }
          cardId={ card.id }
          value={ card.value }
          suit={ card.suit }
          color={ card.color }
          shown={ card.shown }
          draggable={ card.draggable }
          lane={ lane }
          index={ index }
        >
          { laneJSX }
        </Card>
      );
    })
    return (
      <View style={{ flexDirection: 'row', zIndex, flex: 1 }} key={ lane }>
        <View style={{ flex: 1 }} />
        <View style={ styles.lane }>
          { laneJSX }
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.lanes.map(this.getLane, this)
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'skyblue',
    top: 20,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  lane: {
    flex: 20,
    height: 60,
    borderRadius: 3,
    //borderWidth: 1,
    borderColor: 'black',
  }
});

// ownProps IS this.props
// if now key is passed, variable name is used as key
const mapStateToProps = (state, ownProps) => {
  const { lanes, activeLane } = state.board;
  return { lanes, activeLane };
};

export default connect(mapStateToProps, { cardMoved, cardDragStart })(Board);
