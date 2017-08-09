import {
  CARD_MOVED, DECK_TAPPED
} from '../actions/types';

export const cardMoved = ({
  endX,
  endY,
  cardId,
  lane,
  index
}) => {
  console.log("cardMoved called");
  return {
    type: CARD_MOVED,
    payload: {
      endX,
      endY,
      cardId,
      lane,
      index
    }
  };
};

export const deckTapped = () => {
  return {
    type: DECK_TAPPED
  };
};
