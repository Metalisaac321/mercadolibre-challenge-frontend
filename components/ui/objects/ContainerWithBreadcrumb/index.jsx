import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import CategoriesBreadcrumb from '@components/ui/molecules/CategoriesBreadcrumb';

const ContainerWithBreadcrumb = ({ children, categories }) => (
  <div className={styles.container}>
    <CategoriesBreadcrumb categories={categories} />
    {children}
  </div>
);

ContainerWithBreadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default ContainerWithBreadcrumb;
