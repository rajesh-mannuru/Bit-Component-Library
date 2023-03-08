import React from 'react';
import { render } from '@testing-library/react';
import { BasicFourthinput } from './fourthinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFourthinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
