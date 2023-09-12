import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexW1G from './FlexW1G';

describe('<FlexW1G />', () => {
  test('it should mount', () => {
    render(<FlexW1G />);
    
    const flexW1G = screen.getByTestId('FlexW1G');

    expect(flexW1G).toBeInTheDocument();
  });
});