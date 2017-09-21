import BoardReducer from '../BoardReducer';
import { initialState } from '../../../config/jest/mockData';
import { cardMoved, deckTapped } from '../../actions';

it('returns the same state on an unhandled action', () => {
  expect(BoardReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
});

it('handles DECK_TAPPED action', () => {
  expect(BoardReducer(initialState, deckTapped())).toMatchSnapshot();
});

// Card moved to goal
// Card moved to another lane
// Stacked cards moved to another lane
// Move King to empty slot
// Invalid lane
/*
it('handles CARD_MOVED action', () => {
  //const error = new Error('Look ma! I am an error');
  expect(BoardReducer(initialState, cardMoved({
    endX: gesture.moveX,
    endY: gesture.moveY,
    cardId: cardId,
    lane: lane,
    index: index
  }))).toMatchSnapshot();
});
*/
