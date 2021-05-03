import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <article className={`${styles.container} ${className}`}>{children}</article>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
