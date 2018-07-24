import React from 'react';

import './Pill.css';

const Pill = (props) => {
  const { type } = props;

  return (
    <span className={`pill pill--${type}`}>{type}</span>
  );
}

export default Pill;