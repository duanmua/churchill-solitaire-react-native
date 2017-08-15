import update from 'immutability-helper';

import {
  CARD_MOVED, DECK_TAPPED
} from '../actions/types';

import {
  SPADES,
  HEARTS,
  DIAMONDS,
  CLUBS,
  BLACK,
  RED
} from '../CardTypes';

import { CARD_VALUES, INITIAL_GOAL, shuffle, populate, dealLaneOfDepth, dealLanes } from '../DeckCreator';

import { SCREEN_WIDTH } from '../LayoutConstants';


const INITIAL_STATE = (() => {
  var board = {};
  board.deck = [];
  populate(board);
  shuffle(board.deck);
  board.lanes = dealLanes(board);
  board.goal = INITIAL_GOAL;
  return board;
})();

const MAX_LENGTH = 99999;

const canMove = (cards, target) => {
  if (target.indexOf(cards[0]) > -1) {
    return false;
  }
  let top = cards[cards.length-1];
  if (target.length === 0) {
    return top.value.value === 'K';
  }
  let bottom = target[0];

  if (top.color === bottom.color) {
    return false;
  }
  if (top.value.value === bottom.value.previous) {
    return true;
  }
};

const goalUpdate = (state, cards) => {
  if (cards.length > 1) {
    return {
      valid: false
    };
  }
  let card = cards[0];
  //state.goal[card.suit].forEach((slot) => {
  //});
  var updates = {
    valid: false
  };
  [0, 1].forEach((val) => {
    if (state.goal[card.suit][val].next === card.value.value) {
      updates = {
        valid: true,
        update: {
          [card.suit]: {
            [val]: {
              $merge: {
                next: card.value.next,
                topCard: card
              }
            }
          }
        }
      };
    }
  });

  return updates;
}

const cardMoved = (state, payload) => {
  const { lane, index, endX, endY } = payload;

  var cards = state.lanes[lane].slice(0, index+1);
  var spliceConfig = [0, index+2];
  const newTop = state.lanes[lane][index+1];

  if (newTop !== undefined) {
    newTop.shown = true;
    newTop.draggable = true;
    spliceConfig.push(newTop);
  }
  const target = Math.floor(endX / (SCREEN_WIDTH / 10));

  if (endY < 60) {
    var goalChange = goalUpdate(state, cards);
    if (goalChange.valid) {
      return update(state, {
                      lanes: {
                        [lane]: {
                          $splice: [spliceConfig],
                        }
                      },
                      goal: goalChange.update
                    });
    }
  }

  if (canMove(cards, state.lanes[target])) {
    return update(state, {lanes: {
                            [lane]: {
                              $splice: [spliceConfig],
                            },
                            [target]: {$unshift: cards}
                          }});
  }
  return state;
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_MOVED:
      return cardMoved(state, action.payload);

    case DECK_TAPPED:
      var cards = state.deck.slice(0, 10);
      return update(state, {
        lanes: {$apply: function(val) {
          return val.map((lane) => {
            var card = cards.shift();
            if (card === undefined) {
              return lane;
            }
            card.shown = true;
            card.draggable = true;
            return [card, ...lane];
          });
        }},
        deck: {$splice: [[0,10]]}
      });
    default:
      return state;
  }
};
