import React from 'react';
import { render } from '@testing-library/react';
import { BasicInput8 } from './input8.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicInput8 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
