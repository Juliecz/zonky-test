import React from 'react';
import { connect } from 'react-redux';

import Ratings from '../../components/Ratings';
import config from '../../config';

const AverageLoan = ({ ratings, selectedRating }) => {
  const onClick = (id) => { console.log('rating id', id); };
  return (
    <div className="averageloan">
      Průměrná výše půjček
      <Ratings
        ratings={ratings}
        onClick={onClick}
        selectedRating={selectedRating}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    ratings: config.ratings,
    selectedRating: state.selectedRating,
  };
};

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, {})(AverageLoan);
