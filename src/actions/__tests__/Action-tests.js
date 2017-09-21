import { cardMoved, deckTapped } from '../';

it('creates a cardMoved action', () => {
  expect(cardMoved({
    endX: 20,
    endY: 100,
    cardId: 20,
    lane: 1,
    index: 2
  })).toMatchSnapshot();
});

it('creates a deckTapped action', () => {
  expect(deckTapped()).toMatchSnapshot();
});
