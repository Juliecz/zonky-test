import React from 'react';
import { connect } from 'react-redux';

import config from '../../config';
import Ratings from '../../components/Ratings';
import Result from '../../components/Result';
import { selectRating } from '../../model/actions';

import './style.less';

const AverageLoan = ({ ratings, selectedRating, selectRating, loansState, amount }) => {
  const onClickRating = (id) => { selectRating(id) };

  return (
    <div className="averageloan">
      <h1 className="averageloan-header">
        Průměrná výše půjček
      </h1>

      <Ratings
        ratings={ratings}
        onClick={onClickRating}
        selectedRating={selectedRating}
      />
      
      <Result
        amount={amount}
        loansState={loansState}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  ratings: config.ratings,
  selectedRating: state.selectedRating,
  loansState: state.loansState,
  amount: state.averageAmount,
});

export default connect(
  mapStateToProps, { selectRating }
)(AverageLoan);
