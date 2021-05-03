import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
  const router = useRouter();

  return (
    <div
      className={styles.item}
      onClick={() => router.push(`items/${item.id}`)}
    >
      <div className={styles.itemThumbnailSection}>
        <img alt={item.picture} src={item.picture} />
      </div>
      <div className={styles.itemInfoSection}>
        <div className={styles.itemInfoSectionPrice}>
          <h3>$ {item.price.amount}</h3>
          {item.free_shipping ? (
            <Image
              src="/ic_shipping.png"
              alt="Search icon"
              layout="fixed"
              width={20}
              height={20}
            />
          ) : null}
        </div>
        <p className={styles.itemInfoSectionTitle}>{item.title}</p>
      </div>
      <p className={styles.itemStateName}>{item.state}</p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
