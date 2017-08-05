import {
  CARD_MOVED
} from '../actions/types';

const INITIAL_STATE = {
  lanes: [
    [{
      card: '4',
      suit: 'spades',
      color: 'black',
      shown: true,
      draggable: true
    }],
    [{
      card: '5',
      suit: 'spades',
      color: 'black',
      shown: true,
      draggable: true
    }],
    [{
      card: '5',
      suit: 'spades',
      color: 'black',
      shown: true,
      draggable: true
    }],
    [
      {
        card: '5',
        suit: 'spades',
        color: 'black',
        shown: false,
        draggable: false
      },
      {
        card: '5',
        suit: 'spades',
        color: 'black',
        shown: true,
        draggable: true
      }
    ],
    [{
      card: '5',
      suit: 'spades',
      color: 'black',
      shown: true,
      draggable: true
    }],
    [{
      card: '5',
      suit: 'spades',
      color: 'black',
      shown: true,
      draggable: true
    }]
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_MOVED:

      return state;
    default:
      return state;
  }
};
