// import { combineReducers } from 'redux';

import { TEST } from './actions';

const defaultState = {
  selectedRating: null,
};

const app = (state = defaultState, action) => {
  switch (action.type) {
    case TEST: {
      return { ...state, value: action.value };
    }
    default:
      return state;
  }
};

export default app;

// export default combineReducers({
//   app
// })
