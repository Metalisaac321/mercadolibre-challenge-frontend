import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
