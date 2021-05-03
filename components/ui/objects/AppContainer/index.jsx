import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';

const AppContainer = ({ children }) => {
  return <div className={styles.appContainer}>{children}</div>;
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppContainer;
