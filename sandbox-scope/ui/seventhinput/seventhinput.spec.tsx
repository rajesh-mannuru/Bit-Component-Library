import React from 'react';
import { render } from '@testing-library/react';
import { BasicSeventhinput } from './seventhinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSeventhinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
