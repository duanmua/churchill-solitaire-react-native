import React, { Component } from 'react';
import { View, Animated, PanResponder, Text } from 'react-native';
import { SCREEN_WIDTH, CARD_HEIGHT, CARD_OFFSET } from '../LayoutConstants';

class Card extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const { cardMoved, cardDragStart, cardId, draggable, lane, index } = this.props;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gesture) => {
        //console.log(gesture);
        return draggable;
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        //console.log(gesture);
      },
      onPanResponderGrant: (event, gesture) => {
        cardDragStart({lane, index});
      },
      onPanResponderRelease: (event, gesture) => {
        this.resetPosition();
        cardMoved({
          endX: gesture.moveX,
          endY: gesture.moveY,
          cardId: cardId,
          lane: lane,
          index: index
        });
      }
    });

    this.panResponder = panResponder;
    this.position = position;
  }

  resetPosition() {
    Animated.spring(this.position, {
      toValue: {x: 0, y: 0}
    }).start();
  }

  getCardView() {
    const { shown, value, suit, color } = this.props;
    let backgroundColor = shown ? 'white':'grey';
    let display = shown ? '':'none';
    return (
      <View style={{backgroundColor,  ...styles.card}}>
        <Text
          style={ {display, color, ...styles.text} }
        >
          {value.value} {suit}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={this.position.getLayout()}
      >
        {this.getCardView()}
        <View style={{ top: CARD_OFFSET }}>
          {this.props.children}
        </View>

      </Animated.View>
    );
  }
}

const styles = {
  card: {
    height: CARD_HEIGHT,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black'
  },
  text: {
    //color: this.props.color,
    fontSize: 10
  }
}

export default Card;
