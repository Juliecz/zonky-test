import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import AverageLoan from '../AverageLoan';

import * as actions from '../../model/actions';

import './style.less';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AverageLoan />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(App);
