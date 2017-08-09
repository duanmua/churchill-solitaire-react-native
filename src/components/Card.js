import React, { Component } from 'react';
import { View, Animated, PanResponder, Text } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const { cardMoved, cardId, draggable, lane, index } = this.props;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gesture) => {
        //console.log(gesture);
        return draggable;
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        //console.log(gesture);
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

  getCardText() {
    if (this.props.shown === false) {
      return null;
    }

    return (
      <Text
        style={ {color: this.props.color, ...styles.text} }
      >
        {this.props.value} {this.props.suit}
      </Text>
    );
  }

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={this.position.getLayout()}
      >
        <View style={styles.card}>
          {this.getCardText()}
        </View>
        <View style={{ top: -45 }}>
          {this.props.children}
        </View>

      </Animated.View>
    );
  }
}

const styles = {
  card: {
    height: 60,
    //borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white'
  },
  text: {
    //color: this.props.color,
    fontSize: 10
  }
}

export default Card;
