import React from 'react';
import Rating from '../Rating';

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

export default Ratings;
