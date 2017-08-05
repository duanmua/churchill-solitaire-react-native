import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Card extends Component {
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
        <View style={{ top: -35 }}>
          {this.props.children}
        </View>

      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 40,
    //borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black'
  }
}

export default Card;
