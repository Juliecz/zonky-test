import React from 'react';
import { BeatLoader } from "react-spinners";
import { formatCurrency } from '../../helpers/averageAmount';
import './style.less';

const Result = ({ loansState, amount }) => {
  if (loansState === 'loading') {
    return (
      <div className="result loader">
        <BeatLoader color={'#37b4be'} />
      </div>
    );
  }
  
  return (
    <div className="result">
      {amount && <h2>{ formatCurrency(amount) }</h2>}
    </div>
  );
};

export default Result;
