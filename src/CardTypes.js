export const SPADES = '♠';
export const HEARTS = '♥';
export const DIAMONDS = '♦';
export const CLUBS = '♣';

export const BLACK = 'black';
export const RED = 'red';

export const CARD_SUITS = [SPADES, HEARTS, DIAMONDS, CLUBS];
export const RAW_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const CARD_VALUES = (() => {
  return RAW_VALUES.map((value, index) => {
    return {
      value: value,
      next: RAW_VALUES[index + 1],
      previous: RAW_VALUES[index - 1]
    }
  });
})();
