import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../Card.js';

it('renders a Card using Snapshots', () => {
  const card = {
    id: "A4",
    value: "Q",
    suit: "♥",
    color: "red",
    shown: true,
    draggable: true
  };
  expect(renderer.create(
    <Card
      key={ "key" }
      cardMoved={ jest.fn() }
      cardId={ card.id }
      value={ card.value }
      suit={ card.suit }
      color={ card.color }
      shown={ card.shown }
      draggable={ card.draggable }
      lane={ 1 }
      index={ 1 }
    />
  )).toMatchSnapshot();
});
