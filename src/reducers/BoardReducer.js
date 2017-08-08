import update from 'immutability-helper';

import {
  CARD_MOVED
} from '../actions/types';

import {
  SPADES,
  HEARTS,
  DIAMONDS,
  CLUBS,
  BLACK,
  RED
} from '../CardTypes';

import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const shuffle = (array) => {
  var i = 0
    , j = 0
    , temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const INITIAL_STATE = (() => {
  var board = {};
  board.deck = [];
  var i = 0;
  [SPADES, HEARTS, DIAMONDS, CLUBS].forEach((suit) => {
    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].forEach((value) => {
      board.deck.push({
        id: i,
        value: value,
        suit: suit,
        color: suit === SPADES || suit === CLUBS ? BLACK : RED,
        shown: false,
        draggable: false
      })
    });
  });
  shuffle(board.deck);
  board.lanes = Array(6).fill().map((_, i) => {
    var lane = [board.deck.shift(),board.deck.shift(),board.deck.shift()];
    lane.forEach((val) => {
      val.shown = true;
      val.draggable = true;
    });
    return lane;
  });
  return board;
})();

const MAX_LENGTH = 99999;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_MOVED:
      const { lane, index, endX } = action.payload;
      const cards = state.lanes[lane].slice(0, index+1);
      const target = Math.floor(endX / (SCREEN_WIDTH / 6));
      return update(state, {lanes: {
                              [lane]: {$splice: [[0, index+1]]},
                              [target]: {$unshift: cards}
                            }});
    default:
      return state;
  }
};
