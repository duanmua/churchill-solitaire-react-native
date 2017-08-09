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

import { SCREEN_WIDTH } from '../LayoutConstants';

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
};

const populate = (board) => {
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
};

const dealLaneOfDepth = (num, deck) => {
  return Array(num).fill().map((_, i) => {
    var card = deck.shift();
    if (i===0) {
      card.shown = true;
      card.draggable = true;
    }
    return card;
  });
};

const dealLanes = (board) => {
  var lanes = [];
  for (i = 1; i<=5; i++) {
    lanes.push(dealLaneOfDepth(i, board.deck));
  }
  for (j = 5; j>0; j--) {
    lanes.push(dealLaneOfDepth(j, board.deck));
  }
  return lanes;
};

const INITIAL_STATE = (() => {
  var board = {};
  board.deck = [];
  populate(board);
  shuffle(board.deck);
  board.lanes = dealLanes(board);
  return board;
})();

const MAX_LENGTH = 99999;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_MOVED:
      const { lane, index, endX } = action.payload;
      const cards = state.lanes[lane].slice(0, index+1);
      const target = Math.floor(endX / (SCREEN_WIDTH / 10));
      if (lane === target) {
        return state;
      }
      return update(state, {lanes: {
                              [lane]: {$splice: [[0, index+1]]},
                              [target]: {$unshift: cards}
                            }});
    default:
      return state;
  }
};
