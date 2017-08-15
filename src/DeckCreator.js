import {
  SPADES,
  HEARTS,
  DIAMONDS,
  CLUBS,
  BLACK,
  RED,
  CARD_SUITS,
  CARD_VALUES
} from './CardTypes';

export const INITIAL_GOAL = (() => {
  var goal = {};
  CARD_SUITS.forEach((suit) => {
    goal[suit] = [
      {
        id: suit + '1',
        next: 'A',
        topCard: null
      },
      {
        id: suit + '2',
        next: 'A',
        topCard: null
      }
    ];
  });
  return goal;
})();

export const shuffle = (array) => {
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

export const populate = (board) => {
  var i = 0;
  Array(2).fill().forEach(() => {
    [SPADES, HEARTS, DIAMONDS, CLUBS].forEach((suit) => {
      CARD_VALUES.forEach((value) => {
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
  });
};

export const dealLaneOfDepth = (num, deck) => {
  return Array(num).fill().map((_, i) => {
    var card = deck.shift();
    if (i===0) {
      card.shown = true;
      card.draggable = true;
    }
    return card;
  });
};

export const dealLanes = (board) => {
  var lanes = [];
  for (i = 1; i<=5; i++) {
    lanes.push(dealLaneOfDepth(i, board.deck));
  }
  for (j = 5; j>0; j--) {
    lanes.push(dealLaneOfDepth(j, board.deck));
  }
  return lanes;
};
