import React from 'react';
import { render } from '@testing-library/react';
import { BasicSixthinput } from './sixthinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSixthinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
