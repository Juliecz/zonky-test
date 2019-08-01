import React from 'react';
import './style.less';

const Rating = ({ id, selectedId, name, onClick }) => (
  <button
    className={`btn-rating ${id === selectedId && 'btn-rating__selected'}`}
    type="button"
    onClick={() => onClick(id)}
  >
    {console.log('selected id', selectedId)}
    {name}
  </button>
);

export default Rating;
