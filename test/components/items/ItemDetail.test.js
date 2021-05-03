import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemDetail from '@components/items/ItemDetail';
import { generateItem } from '../../factories/item';

describe('ItemDetail', () => {
  it('when item condition is new, show "Nuevo"', () => {
    const item = generateItem({
      condition: 'new',
    });

    render(<ItemDetail item={item} />);

    const itemConditionText = screen.getByText(/Nuevo/i);
    expect(itemConditionText).toBeInTheDocument();
  });

  it('when item condition is not new, show "Usado"', () => {
    const item = generateItem({
      condition: 'used',
    });

    render(<ItemDetail item={item} />);

    const itemConditionText = screen.getByText(/Usado/i);
    expect(itemConditionText).toBeInTheDocument();
  });
});
