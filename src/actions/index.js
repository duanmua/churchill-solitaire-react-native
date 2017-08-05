import {
  CARD_MOVED
} from '../actions/types';

export const cardMoved = ({
  endX,
  endY,
  cardId
}) => {
  return {
    type: CARD_MOVED,
    payload: {
      endX,
      endY,
      cardId
    }
  };
};
