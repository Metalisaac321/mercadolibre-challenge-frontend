import RightArrowIcon from '@components/ui/atoms/RightArrowIcon';
import React, { Fragment } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CategoriesBreadcrumb = ({ categories }) => {
  return (
    <div className={styles.categoriesBreadcrumb}>
      {categories.map((category, index) => {
        if (index === categories.length) return;
        return (
          <Fragment key={`cb${index}`}>
            <Link href={`/items?search=${category}`}>{category}</Link>
            {index !== categories.length - 1 ? (
              <RightArrowIcon className={styles.categoriesBreadcrumbIcon} />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
};

CategoriesBreadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default CategoriesBreadcrumb;
