import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexH3G from './FlexH3G';

describe('<FlexH3G />', () => {
  test('it should mount', () => {
    render(<FlexH3G />);
    
    const flexH3G = screen.getByTestId('FlexH3G');

    expect(flexH3G).toBeInTheDocument();
  });
});