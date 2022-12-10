import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../calculatorPage';

it('CalculatorPage component rendered correctly', () => {
  const tree = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
