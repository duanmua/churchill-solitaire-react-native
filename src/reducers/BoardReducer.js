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

import { shuffle, populate, dealLaneOfDepth, dealLanes } from '../DeckCreator';

import { SCREEN_WIDTH } from '../LayoutConstants';


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
      var cards = state.lanes[lane].slice(0, index+1);
      var spliceConfig = [0, index+2];
      const newTop = state.lanes[lane][index+1];
      if (newTop !== undefined) {
        newTop.shown = true;
        newTop.draggable = true;
        spliceConfig.push(newTop);
      }
      const target = Math.floor(endX / (SCREEN_WIDTH / 10));
      if (lane === target) {
        return state;
      }
      return update(state, {lanes: {
                              [lane]: {
                                $splice: [spliceConfig],
                              },
                              [target]: {$unshift: cards}
                            }});
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
