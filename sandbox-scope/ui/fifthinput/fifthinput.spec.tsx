import React from 'react';
import { render } from '@testing-library/react';
import { BasicFifthinput } from './fifthinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFifthinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
