import React from 'react';
import './SidebarContent.css';
import PillsCollection from '../../PillsCollection/PillsCollection';

const SidebarContent = (props) => {
  return (
    <div className={'sidebar-content'}>
      <h3>Description</h3>
      <p className={'sidebar-content__description'}>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>

      <h3>Weaknesses</h3>
      <PillsCollection
        collection={[
          'fire',
          'flying',
          'ice',
          'psychic',
        ]}
      />

      <h3>Strengths</h3>
      <PillsCollection
        collection={[
          'water',
          'fairy',
        ]}
      />
    </div>
  );
}

export default SidebarContent;