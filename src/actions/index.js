import {
  CARD_MOVED
} from '../actions/types';

export const cardMoved = ({
  endX,
  endY,
  cardId
}) => {
  console.log("cardMoved called");
  return {
    type: CARD_MOVED,
    payload: {
      endX,
      endY,
      cardId
    }
  };
};
