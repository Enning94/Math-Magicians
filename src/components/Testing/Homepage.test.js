import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../Homepage';

it('Homepage component rendered correctly', () => {
  const tree = renderer
    .create(<HomePage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
