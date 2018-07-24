import React from 'react';

import './PillsCollection.css';
import Pill from '../Pill/Pill';

const PillsCollection = (props) => {
  const { collection: list } = props;

  return (
    <div className={`pills-collection`}>
      {list && list.length && list.map((pill, index) => {
        return (<Pill key={index} type={pill} />);
      })}
    </div>
  );
}

export default PillsCollection;