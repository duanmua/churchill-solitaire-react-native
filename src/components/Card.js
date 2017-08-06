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
        cardMoved({
          endX: event.moveX,
          endY: event.moveY,
          cardId: cardId,
          lane: lane,
          index: index
        });
        //this.resetPosition();
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

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={this.position.getLayout()}
      >
        <View style={styles.card}>
          <Text style={{ color: this.props.color }}>{this.props.value} {this.props.suit}</Text>
        </View>
        <View style={{ top: -35 }}>
          {this.props.children}
        </View>

      </Animated.View>
    );
  }
}

const styles = {
  card: {
    height: 60,
    width: 40,
    //borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'green'
  }
}

export default Card;
