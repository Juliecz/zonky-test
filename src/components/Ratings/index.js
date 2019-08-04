import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../Rating';
import './style.less';

const Ratings = ({ ratings, selectedRating, onClick }) => (
  <div className="ratings">
    {ratings && ratings.map((rating) => (
      <Rating
        key={rating.id}
        {...rating}
        onClick={onClick}
        selectedId={selectedRating}
      />
    ))}
  </div>
);

Ratings.propTypes = {
  ratings: PropTypes.array.isRequired,
  selectedRating: PropTypes.string,
  loansState: PropTypes.string.isRequired,
  amount: PropTypes.number,
};

export default Ratings;
