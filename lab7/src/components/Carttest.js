import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Cart Component', () => {
  test('renders an empty cart message when no items are present', () => {
    render(<Cart cart={[]} />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Total: $0')).toBeInTheDocument();
  });

  test('displays cart items correctly', () => {
    const mockCart = [
      { name: 'Margherita', price: 8 },
      { name: 'Pepperoni', price: 10 },
    ];

    render(<Cart cart={mockCart} />);

    // Check if items are displayed
    expect(screen.getByText('Margherita - $8')).toBeInTheDocument();
    expect(screen.getByText('Pepperoni - $10')).toBeInTheDocument();

    // Check if total is calculated correctly
    expect(screen.getByText('Total: $18')).toBeInTheDocument();
  });

  test('handles a single item in the cart', () => {
    const mockCart = [{ name: 'Club Sandwich', price: 7 }];

    render(<Cart cart={mockCart} />);

    // Check if single item is displayed
    expect(screen.getByText('Club Sandwich - $7')).toBeInTheDocument();

    // Check total for single item
    expect(screen.getByText('Total: $7')).toBeInTheDocument();
  });
});
