import React, { useEffect } from 'react';
import ItemList from '@components/items/ItemList';
import Container from '@components/ui/objects/Container';
import PropTypes from 'prop-types';
import { getItemsByQuery } from '@services/itemsRepository';
import useAppContext from '@services/context';
import ContainerWithBreadcrumb from '@components/ui/objects/ContainerWithBreadcrumb';

export default function Items({ itemsData: { items, categories } }) {
  const { setStore } = useAppContext();

  useEffect(() => {
    setStore({ categories });
  }, [categories]);

  return (
    <ContainerWithBreadcrumb categories={categories}>
      <Container>
        <ItemList items={items} />
      </Container>
    </ContainerWithBreadcrumb>
  );
}

Items.propTypes = {
  itemsData: PropTypes.object.isRequired,
};

export const getServerSideProps = async ({ query }) => {
  const itemsData = await getItemsByQuery(query.search);
  return {
    props: { itemsData },
  };
};
