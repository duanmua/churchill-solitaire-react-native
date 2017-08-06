import {
  CARD_MOVED
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
