import {
  CARD_MOVED
} from '../actions/types';

export const cardMoved = ({
  endX,
  endY,
  startingLane,
  cards
}) => {
  return {
    type: CARD_MOVED,
    payload: {
      endX,
      endY,
      startingLane,
      cards
    }
  };
};
