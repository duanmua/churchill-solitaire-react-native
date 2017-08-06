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

const INITIAL_STATE = {
  lanes: [
    [{
      id: 1,
      value: '4',
      suit: SPADES,
      color: BLACK,
      shown: true,
      draggable: true
    }],
    [{
      id: 2,
      value: '5',
      suit: SPADES,
      color: BLACK,
      shown: true,
      draggable: true
    }],
    [{
      id: 3,
      value: '5',
      suit: SPADES,
      color: BLACK,
      shown: true,
      draggable: true
    }],
    [
      {
        id: 4,
        value: 'Q',
        suit: DIAMONDS,
        color: RED,
        shown: false,
        draggable: true
      },
      {
        id: 5,
        value: '5',
        suit: SPADES,
        color: BLACK,
        shown: true,
        draggable: false
      }
    ],
    [{
      id: 6,
      value: '5',
      suit: SPADES,
      color: BLACK,
      shown: true,
      draggable: true
    }],
    [{
      id: 7,
      value: 'A',
      suit: HEARTS,
      color: RED,
      shown: true,
      draggable: true
    }]
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_MOVED:
      return update(state, {lanes: {
                              3: {$unset: [0]},
                              2: {$unshift: [{
                                id: 4,
                                value: 'Q',
                                suit: DIAMONDS,
                                color: RED,
                                shown: false,
                                draggable: true
                              }]}
                            }});
    default:
      return state;
  }
};
