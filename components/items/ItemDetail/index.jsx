import Button from '@components/ui/atoms/Button';
import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) => {
  return (
    <div className={styles.itemDetail}>
      <div className={styles.itemDetailPictureSection}>
        <img alt={item.picture} src={item.picture} />
      </div>
      <div className={styles.itemDetailPriceSection}>
        <p>
          {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity}{' '}
          vendidos
        </p>
        <h3>{item.title}</h3>
        <h1>$ {item.price.amount}</h1>
        <Button>Comprar</Button>
      </div>
      <div className={styles.itemDetailDescriptionSection}>
        <h2>Descripción del producto</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
ItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemDetail;
