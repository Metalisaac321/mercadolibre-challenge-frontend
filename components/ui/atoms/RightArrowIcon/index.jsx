import React from 'react';
import PropTypes from 'prop-types';

const RightArrowIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

RightArrowIcon.propTypes = {
  className: PropTypes.string,
};
export default RightArrowIcon;
