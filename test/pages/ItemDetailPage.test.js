/* eslint-disable react/display-name */
import React from 'react';
import { screen } from '@testing-library/react';
import { generateItem } from '../factories/item';
import { getItemDetail } from '@services/itemsRepository';
import { getPage } from 'next-page-tester';
import { generateCategoryRandomList } from '../../test/factories/category';
import { AppContextProvider } from '@services/context';
jest.mock('@services/itemsRepository');

describe('ItemsDetailPage', () => {
  it('Should display itemDetail', async () => {
    const categories = generateCategoryRandomList(1, 4);
    const itemData = {
      item: generateItem(),
    };
    getItemDetail.mockResolvedValueOnce(itemData);

    const { render } = await getPage({
      route: '/items/:itemId',
      wrapper: {
        Page: (Page) => (pageProps) => (
          <AppContextProvider initialData={{ categories }}>
            <Page {...pageProps} />
          </AppContextProvider>
        ),
      },
    });
    render();

    const { item } = itemData;
    expect(screen.getByAltText(item.picture)).toHaveAttribute(
      'src',
      item.picture,
    );
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText('$ ' + item.price.amount)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();

    categories.forEach((category) => {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument();
    });
  });
});
