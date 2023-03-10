import React from 'react';
import { render } from '@testing-library/react';
import { BasicInput9 } from './input9.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicInput9 />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
