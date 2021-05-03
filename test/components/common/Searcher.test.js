import React from 'react';
import Searcher from '@components/common/Searcher';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Searcher', () => {
  it('Calls onSearch when user type Enter', () => {
    const searcherProps = {
      onChange: jest.fn(),
      onSearch: jest.fn(),
      value: '',
    };
    render(<Searcher {...searcherProps} />);

    const input = screen.getByPlaceholderText('Nunca dejes de buscar');
    userEvent.type(input, 'iphone{enter}');
    expect(searcherProps.onSearch).toBeCalled();
  });
});
