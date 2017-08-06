import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { cardMoved } from '../actions';
import Card from './Card';

class Board extends React.Component {
  getLane(cards, lane) {
    var laneJSX = null;
    cards.forEach((card, index) => {
      laneJSX = (
        <Card
          key={ card.id }
          cardMoved={ this.props.cardMoved }
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
    return laneJSX;
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
    flex: 1,
    backgroundColor: '#fff',
    top: 20,
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
