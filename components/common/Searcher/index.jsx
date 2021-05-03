import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const Searcher = ({ onChange, value, onSearch }) => {
  const router = useRouter()
  const handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  return (
    <header className={styles.header}>
        <Image
          src="/logo_ml.png"
          alt="Mercado libre logo"
          layout="fixed"
          width={60}
          height={40}
          onClick={() => router.push('/')}
        />
      <div className={styles.headerSearchContainer}>
        <input
          className={styles.headerSearchContainerInput}
          placeholder="Nunca dejes de buscar"
          onChange={onChange}
          value={value}
          onKeyPress={handleOnKeyPress}
        />
        <div
          className={styles.headerSearchContainerImageContainer}
          onClick={onSearch}
        >
          <Image
            src="/ic_search.png"
            alt="Search icon"
            layout="fixed"
            width={20}
            height={20}
          />
        </div>
      </div>
    </header>
  );
};

Searcher.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Searcher;
