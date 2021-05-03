import { screen } from '@testing-library/react';
import { generateItemList } from '../factories/item';
import { getItemsByQuery } from '@services/itemsRepository';
import { getPage } from 'next-page-tester';
import { generateCategoryRandomList } from '../../test/factories/category';
jest.mock('@services/itemsRepository');

describe('ItemsPage', () => {
  it('Should display 4 items content', async () => {
    const itemsData = {
      categories: [],
      items: generateItemList(4),
    };
    getItemsByQuery.mockResolvedValueOnce(itemsData);

    const { render } = await getPage({
      route: '/items?q=query',
    });
    render();

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(itemsData.items).toHaveLength(4);
    itemsData.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText('$ ' + item.price.amount)).toBeInTheDocument();
      expect(screen.getByText(item.state)).toBeInTheDocument();
      expect(screen.getByAltText(item.picture)).toHaveAttribute(
        'src',
        item.picture,
      );
    });
  });

  it('Should display breadcrumb', async () => {
    const categories = generateCategoryRandomList(1, 4);
    const itemsData = {
      categories: categories,
      items: generateItemList(4),
    };
    getItemsByQuery.mockResolvedValueOnce(itemsData);

    const { render } = await getPage({
      route: '/items?q=query',
    });
    render();

    categories.forEach((category) => {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument();
    });
  });
});
