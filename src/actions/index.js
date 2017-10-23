import {
  CARD_MOVED, DECK_TAPPED, CARD_DRAG_START
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

export const cardDragStart = ({lane, index}) => {
  return {
    type: CARD_DRAG_START,
    payload: {lane, index}
  };
};
