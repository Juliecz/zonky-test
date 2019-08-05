import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const Rating = ({ id, selectedId, name, onClick }) => {
  const onClickEvent = () => onClick(id);

  return (
    <button
      className={`btn-rating ${id === selectedId ? 'btn-rating__selected' : ''}`}
      type="button"
      onClick={onClickEvent}
    >
      {name}
    </button>
  );
};

Rating.propTypes = {
  id: PropTypes.string.isRequired,
  selectedId: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Rating;
