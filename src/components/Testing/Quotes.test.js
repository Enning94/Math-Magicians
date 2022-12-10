import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quotes';

it('Quote component rendered correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
