import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { deckTapped } from '../actions';


class Deck extends React.Component {

  render() {
    return (
      <Button style={styles.container} onPress={this.props.deckTapped} title='Deak'/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 20,
    backgroundColor: 'red',
    color: 'green',
    top: 20,
  }
});

// ownProps IS this.props
// if now key is passed, variable name is used as key
//const mapStateToProps = (state, ownProps) => {
//  const { deck } = state.board;
//  return { deck };
//};

export default connect(null, { deckTapped })(Deck);
