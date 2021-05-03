import React from 'react';
import ItemDetail from '@components/items/ItemDetail';
import Container from '@components/ui/objects/Container';
import PropTypes from 'prop-types';
import { getItemDetail } from '@services/itemsRepository';
import useAppContext from '@services/context';
import ContainerWithBreadcrumb from '@components/ui/objects/ContainerWithBreadcrumb';

export default function ItemDetailPage({ itemData }) {
  const { store } = useAppContext();
  return (
    <ContainerWithBreadcrumb categories={store.categories}>
      <Container>
        <ItemDetail item={itemData.item} />
      </Container>
    </ContainerWithBreadcrumb>
  );
}

ItemDetailPage.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export const getServerSideProps = async ({ params }) => {
  const itemData = await getItemDetail(params.itemId);
  return {
    props: { itemData },
  };
};
