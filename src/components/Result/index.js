import React from 'react';
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import { formatCurrency } from '../../helpers/averageAmount';
import './style.less';

const Result = ({ loansState, amount, error }) => {
  if (loansState === 'loading') {
    return (
      <div className="result loader">
        <BeatLoader color={'#37b4be'} />
      </div>
    );
  }
  
  if (loansState === 'error') {
    return (
      <div className="result error">
        {error}
      </div>
    );
  }

  return (
    <div className="result">
      {amount && <h2>{ formatCurrency(amount) }</h2>}
    </div>
  );
};

Result.propTypes = {
  loansState: PropTypes.string.isRequired,
  amount: PropTypes.number,
  error: PropTypes.string,
};

export default Result;
