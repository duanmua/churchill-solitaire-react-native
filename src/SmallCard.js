import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class SmallCard extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gesture) => {
        //console.log(gesture);
        return true;
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
        //console.log(gesture);
      },
      onPanResponderRelease: () => {
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
        <View style={styles.ball}></View>
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 30,
    width: 30,
    //borderRadius: 30,
    borderWidth: 15,
    borderColor: 'white'
  }
}

export default SmallCard;
