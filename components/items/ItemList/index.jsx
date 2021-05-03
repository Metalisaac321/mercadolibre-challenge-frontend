import Divider from '@components/ui/atoms/Divider';
import React, { Fragment } from 'react';
import Item from '../../ui/molecules/Item';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList} role="article">
      {items.map((item, index) => (
        <Fragment key={`i${index}`}>
          <Item item={item} />
          {index !== items.length - 1 ? <Divider /> : null}
        </Fragment>
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
